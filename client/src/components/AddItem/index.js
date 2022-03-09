import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_ITEM } from "../../utils/mutations";
import { QUERY_ITEMS } from "../../utils/queries";

export default function NewItem() {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    image: "",
  });

  const [addItem, { error }] = useMutation(ADD_ITEM, {
    update(cache, { data: { createItem } }) {
      try {
        const { items } = cache.readQuery({ query: QUERY_ITEMS });
        cache.writeQuery({
          query: QUERY_ITEMS,
          data: { items: [createItem, ...items] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  // update state based on form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addItem({
        variables: { ...formData },
      });
      setFormData({
        itemName: "",
        description: "",
        image: "",
      });
    } catch (e) {
      console.error(e);
    }
    
  };

  if (error) return <>Something went wrong!</>;

  return (
    <>
    <div className="add-item-con">
      <h3 className="add-header">Add Collection</h3>
      <form className="add-form-item" onSubmit={handleSubmit}>
        <div className="add-item-div">
          <div className="add-item-form">
            <input
              className="item-block w-full px-4 py-3 mb-3"
              id="grid-item"
              type="text"
              placeholder="Name"
              name="item"
              value={formData.item}
              onChange={handleChange}
            />
          </div>
          <div className="add-item-form">
            <input
              className="category-block w-full px-4 py-3 mb-3"
              id="grid-category"
              type="text"
              placeholder="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          {/* <div className="add-item-form">
            <input
              className="description-block w-full px-4 py-3 mb-3"
              id="grid-description"
              type="text"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div> */}
        </div>
        
        
        {/* <div className="w-full px-3 md:w-1/2">
          <label
            className="block mb-2"
            htmlFor="grid-url"
          >
            Upload Image
            <i className="fas fa-image "></i>
          </label>
          <input
            className="block w-full px-4 py-3 mb-3"
            id="grid-image"
            type="text"
            placeholder=""
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div> */}
       
        <button
          title="Submit"
          className="add-item-btn"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </div>
    </>
  );
};