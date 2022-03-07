import React, { useState, useEffect} from 'react';

import { Container, Col, Row, Form, Button, Card } from 'react-bootstrap';

// import Auth from '../../utils/auth';
// import { searchGoogleBooks } from '../../utils/API';
// import { saveItemIds, getSavedItemIds } from '../../utils/localStorage'

// import { useMutation } from '@apollo/client';
// import { SAVE_ITEM } from '../../utils/mutations';

const Home = () => {

  

  return(
  <div className='home-div'>
      <h1 className='home-title'><em>This is Obsessed</em></h1>
    
      <Container className='home-container'>
        <Row className='home-rows'>
          <Col>
          <Card className='random-card'>
            <Card.Img variant="top" src="https://i.ebayimg.com/images/g/DDEAAOSwcttcFTS7/s-l300.jpg" />
            <Card.Body>
              <Card.Title className='random-title'>David Wright Rookie</Card.Title>
              <Card.Text className='random-text'>
                Hardcoded to see example
              </Card.Text>
              <Button className='random-button'>View Item</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={6}>
          <Card className='random-card'>
            <Card.Img variant="top" src="https://s2982.pcdn.co/wp-content/uploads/2021/11/spider-man-amazing-fantasy-15-1.jpeg.optimal.jpeg" />
            <Card.Body>
              <Card.Title className='random-title'>Spiderman No. 1</Card.Title>
              <Card.Text className='random-text'>
                Hardcoded to see example
              </Card.Text>
              <Button className='random-button'>View Item</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col> 
            <Card className='random-card'>
              <Card.Img variant="top" src="https://i.ebayimg.com/images/g/bFEAAOSw265hH~rY/s-l400.jpg" />
              <Card.Body>
                <Card.Title className='random-title'>Patrick Ewing Rookie</Card.Title>
                <Card.Text className='random-text'>
                  Hardcoded to see example
                </Card.Text>
                <Button className='random-button'>View Item</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>  
  )
}

// const Home = () => {
 
  // const [searchedItems, setSearchedItems] = useState([]);
 
  // const [searchInput, setSearchInput] = useState('');


  // const [savedItemIds, setSavedItemIds] = useState(getSavedItemIds());

  // const [saveItem] = useMutation(SAVE_ITEM);

 
  // useEffect(() => {
  //   return () => saveItemIds(savedItemIds);
  // });

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!searchInput) {
  //     return false;
  //   }

  //   try {
  //     const response = await searchGoogleItems(searchInput);

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     const { items } = await response.json();

  //     const itemData = items.map((item) => ({
  //       itemId: item.id,
  //     }));

  //     setSearchedItems(itemData);
  //     setSearchInput('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };


  // const handleSaveItem = async (itemId) => {
    
  //   const itemToSave = searchedItems.find((item) => item.itemId === itemId);

  //   // get token
  //   const token = Auth.loggedIn() ? Auth.getToken() : null;

  //   if (!token) {
  //     return false;
  //   }

  //   try {
  //     await saveItem({
  //       variables: {item: itemToSave},
  //     });

      
  //     setSavedItemIds([...savedItemIds, itemToSave.itemId]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

//   return (
//     <>
//         <Container id="search">
//           <h1>Search for your collectable!</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name='searchInput'
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type='text'
//                   size='lg'
//                   placeholder='Search for an item'
//                 />
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type='submit' variant='success' size='lg'>
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
      

//       <Container>
//         <h2>
//           {searchedItems.length
//             ? `Viewing ${searchedItems.length} results:`
//             : 'Search for an item to begin'}
//         </h2>
//         <Card.Quote>
//           {searchedItems.map((item) => {
//             return (
//               <Card key={item.itemId} border='dark'>
//                 <Card.Body>
//                   <Card.Title>{item.itemName}</Card.Title>
//                   <p className='small'>Item: {item.itemName}</p>
//                   <Card.Text>{item.description}</Card.Text>
//                   {Auth.loggedIn() && (
//                     <Button
//                       disabled={savedItemIds?.some((savedItemId) => savedItemId === item.itemId)}
//                       className='btn-block btn-info'
//                       onClick={() => handleSaveItem(item.itemId)}>
//                       {savedItemIds?.some((savedItemId) => savedItemId === item.itemId)
//                         ? 'This item has already been saved!'
//                         : 'Save this item!'}
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </Card.Quote>
//       </Container>
//     </>
//   );
// };

export default Home;