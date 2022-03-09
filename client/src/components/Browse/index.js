import React, { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/client';

import { QUERY_COLLECTIONS, QUERY_COLLECTION } from '../../utils/queries';

const Collections = () => {
    // const [setQuery] = useState('')
    const { loading, data } = useQuery(QUERY_COLLECTIONS);
    const {viewCollection} = useQuery(QUERY_COLLECTION);
    const userData = data?.me || {};
    const collection = useState(QUERY_COLLECTION);

    return (
        <>
            <Container fluid className='browse-header'>
                <Container>
                    <h1>Browse Collections</h1>
                </Container>
            </Container>  
            <Container className='collections-container'>
                <Card className='collections-cards'>
                    {userData.collections?.map((collections) => {
                        return (
                        <Card className='collections-card'key={collections._id}>
                            {/* {item.image ? <Card.Img src={item.image} alt={`${item.title}`} variant='top' /> : null} */}
                            <Card.Body>
                                <Card.Title>{collections.collectionName}</Card.Title>
                                    <p className='small'>Collection: {collections.collectionName}</p>
                            <Card.Text>Category: {collections.category}</Card.Text>
                            <Button 
                                className='btn-block' 
                                onClick={() => viewCollection(collection._id)}
                            >
                                View this collection!
                            </Button>
                            </Card.Body>
                        </Card>
                        );
                     })}
                </Card>
            </Container> 
            
        </>
    )
}



export default Collections;

    

