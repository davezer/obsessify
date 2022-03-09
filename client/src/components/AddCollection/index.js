import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COLLECTION } from "../../utils/mutations";
import { QUERY_COLLECTIONS, GET_ME } from "../../utils/queries";

function AddCollection() {
  const [formData, setFormData] = useState({
    collectionName: '',
    category: '',
  });
  

  const [addCollection, { error }] = useMutation(ADD_COLLECTION, {
    update(cache, { data: { addCollection } }) {
      
      
      try {

        const { me } = cache.readQuery({ query: GET_ME });
        cache.writeQuery({
            query: GET_ME,
            data: { me: { ...me, collections: [...me.collections, addCollection] } }
        });
        const { collections } = cache.readQuery({ query: QUERY_COLLECTIONS });
        console.log(collections);
        cache.writeQuery({
          query: QUERY_COLLECTIONS,
          data: { collections: [addCollection, ...collections] },
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
    const { collectionName, category } = formData;
    try {
      await addCollection({
        variables: { collectionName, category }
      });

      setFormData({
        collectionName: '',
        category: ''
      });

    } catch (e) {
      console.error(e);
    }
  };

  if (error) return <>Something went wrong!</>;

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-center add-header">Add a Collection</h1>
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap mb-6 -mx-3 form-div">
            <div className="w-full px-3 md:w-1/2">
              
              <input
                className="collection-block w-full px-4 py-3 mb-3"
                key="grid-collection"
                type="text"
                placeholder="Collection Name"
                name="collectionName"
                value={formData.collectionName}
                onChange={handleChange}
              />
            </div>

            <div className="w-full px-3 md:w-1/2">
             
              <input
                className="category-block w-full px-4 py-3 mb-3"
                key="grid-collection"
                type="text"
                placeholder="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            <button
              title="Submit"
              className="submit add-item-btn"
              type="submit"
              value="Submit"
              >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCollection;