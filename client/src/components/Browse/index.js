// import React, { useState, useEffect } from 'react';
// import { useQuery } from '@apollo/client';

// import { QUERY_COLLECTIONS } from '../../utils/queries';
// import Auth from '../../utils/auth';


// function CollectionsList() {


//   const { loading, data } = useQuery(QUERY_COLLECTIONS);

  

 

//   return (
  
//         <>
//           <Jumbotron fluid className='text-light bg-dark'>
//             <Container>
//               <h1>Viewing saved books!</h1>
//             </Container>
//           </Jumbotron>
//           <Container>
//             <h2>
//               {userData.savedBooks.length
//                 ? `Viewing ${userData.savedBooks.length} saved ${userData.savedBooks.length === 1 ? 'book' : 'books'}:`
//                 : 'You have no saved books!'}
//             </h2>
//             <CardColumns>
//               {userData.savedBooks.map((book) => {
//                 return (
//                   <Card key={book.bookId} border='dark'>
//                     {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
//                     <Card.Body>
//                       <Card.Title>{book.title}</Card.Title>
//                       <p className='small'>Authors: {book.authors}</p>
//                       <Card.Text>{book.description}</Card.Text>
//                       <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
//                         Delete this Book!
//                       </Button>
//                     </Card.Body>
//                   </Card>
//                 );
//               })}
//             </CardColumns>
//           </Container>
//         </>
//     );
// };
    


// export default CollectionsList;