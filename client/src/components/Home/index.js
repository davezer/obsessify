import React, { useState, useEffect} from 'react';

import {  Col, Form} from 'react-bootstrap';

import Auth from '../../utils/auth';
import { searchGoogleItems } from '../../utils/API';
import { saveItemIds, getSavedItemIds } from '../../utils/localStorage'

import { useMutation } from '@apollo/client';
import { SAVE_ITEM } from '../../utils/mutations';

const Home = () => {
 
  const [searchedItems, setSearchedItems] = useState([]);
 
  const [searchInput, setSearchInput] = useState('');


  const [savedItemIds, setSavedItemIds] = useState(getSavedItemIds());

  const [saveItem] = useMutation(SAVE_ITEM);

 
  useEffect(() => {
    return () => saveItemIds(savedItemIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchGoogleItems(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const itemData = items.map((item) => ({
        itemId: item.id,
      }));

      setSearchedItems(itemData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };


  const handleSaveItem = async (itemId) => {
    
    const itemToSave = searchedItems.find((item) => item.itemId === itemId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await saveItem({
        variables: {item: itemToSave},
      });

      
      setSavedItemIds([...savedItemIds, itemToSave.itemId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
        <section id="search">
          <h1>Search for your collectable!</h1>
          <form onSubmit={handleFormSubmit}>
            <form className='row'>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for an item'
                />
              </Col>
              <Col xs={12} md={4}>
                <button type='submit' variant='success' size='lg'>
                  Submit Search
                </button>
              </Col>
            </form>
          </form>
        </section>
      

      <container>
        <h2>
          {searchedItems.length
            ? `Viewing ${searchedItems.length} results:`
            : 'Search for an item to begin'}
        </h2>
        <card>
          {searchedItems.map((item) => {
            return (
              <div className='card' key={item.itemId} border='dark'>
                <div className='card-body'>
                  <div className='card-title'>{item.itemName}</div>
                  <p className='small'>Item: {item.itemName}</p>
                  <p className='card-text'>{item.description}</p>
                  {Auth.loggedIn() && (
                    <button
                      disabled={savedItemIds?.some((savedItemId) => savedItemId === item.itemId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveItem(item.itemId)}>
                      {savedItemIds?.some((savedItemId) => savedItemId === item.itemId)
                        ? 'This item has already been saved!'
                        : 'Save this item!'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </card>
      </container>
    </>
  );
};

export default Home;