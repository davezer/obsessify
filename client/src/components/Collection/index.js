import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
// mport { useQuery } from '@apollo/react-hooks';
import { useQuery, useMutation } from '@apollo/client';

import { GET_ME } from '../../utils/queries';
import { REMOVE_COLLECTION } from '../../utils/mutations';

import Auth from '../../utils/auth';
import AddCollection from '../AddCollection';

const Collection = () => {
    const { loading, data } = useQuery(GET_ME);
    const [removeCollection] = useMutation(REMOVE_COLLECTION);
    const userData = data?.me || {};
    // create a function to remove a collection from a user
    const handleDeleteCollection = async (collectionId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if(!token) {
            return false;
        }
        console.log(collectionId);
        console.log(userData._id);
        console.log(token);

        try {
            // await removeCollection(collectionId);
            await removeCollection({
                variables: { collectionId }
            });

        } catch (err) {
            console.log(err);
        }
    };
    
    if (loading) {
        return <div>Loading...</div>;
    };

   

    return (
        <>
            <Container fluid className='collections-header'>
                <Container>
                <h1>Your Collections</h1>
                </Container>
            </Container>
            <Container className='collections-container'>
                <h2>
                {userData?.collectionCount
                    ? `Viewing ${userData.collectionCount} saved ${userData.collectionCount === 1 ? 'collection' : 'collections'}:`
                    : 'You have no collections!'}
                </h2>
                <Card>
                {userData.collections?.map((collection) => {
                    return (
                    <Card key={collection._id} border='dark'>
                        {/* {item.image ? <Card.Img src={item.image} alt={`${item.title}`} variant='top' /> : null} */}
                        <Card.Body>
                        <Card.Title>{collection.collectionName}</Card.Title>
                        <p className='small'>Collection: {collection.collectionName}</p>
                        <Card.Text>Category: {collection.category}</Card.Text>
                        <Button 
                            className='btn-block btn-danger' 
                            onClick={() => handleDeleteCollection(collection._id)}
                        >
                            Delete this collection!
                        </Button>
                        </Card.Body>
                    </Card>
                    );
                })}
                </Card>
            </Container>
            <Container>
                <AddCollection />
            </Container>
        </>
    )
}



export default Collection;