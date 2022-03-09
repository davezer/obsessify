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
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center">Add an Item</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2"
              htmlFor="grid-host"
            >
              Item
            </label>
            <input
              className="block w-full px-4 py-3 mb-3"
              id="grid-item"
              type="text"
              placeholder="Item"
              name="item"
              value={formData.itemName}
              onChange={handleChange}
            />
          </div>
          <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              className="block mb-2 text-xs"
              htmlFor="grid-category"
            >
              Category
            </label>
            <input
              className="block w-full px-4 py-3 mb-3"
              id="grid-category"
              type="text"
              placeholder="category"
              name="category"
              value={formData.collection}
              onChange={handleChange}
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <label
              className="block mb-2"
              htmlFor="grid-description"
            >
              Description
            </label>
            <input
              className="block w-full px-4 py-3 mb-3"
              id="grid-description"
              type="text"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </div>
        
        
          <div className="w-full px-3 md:w-1/2">
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
          </div>
       
        <button
          title="Submit"
          className="w-full p-3 rounded-lg shadow-lg"
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