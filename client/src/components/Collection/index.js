import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { GET_ME } from '../../utils/queries';
import { REMOVE_COLLECTION } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Collection = () => {
    const { loading, data } = useQuery(GET_ME);
    const [removeCollection] = useMutation(REMOVE_COLLECTION);
    const userData = data?.me || {};
    console.log(data);
    // create a function to remove a collection from a user
    const handleDeleteCollection = async (collectionId) => {
        // const token = Auth.loggedIn() ? Auth.getToken() : null;
        // if(!token) {
        //     return false;
        // }
        console.log(collectionId);


        try {
            await removeCollection(collectionId);
            // await removeCollection({
            //     variables: { collectionId }
            // });

        } catch (err) {
            console.log(err);
        }
    };
    
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Container fluid className='text-light bg-dark'>
                <Container>
                <h1>Your Collections</h1>
                </Container>
            </Container>
            <Container>
                <h2>
                {userData?.collectionCount
                    ? `Viewing ${userData.collectionCount} saved ${userData.collectionCount === 1 ? 'collection' : 'collections'}:`
                    : 'You have no collections!'}
                </h2>
                <Card>
                {userData.collections?.map((collection) => {
                    return (
                    <Card key={collection.collectionId} border='dark'>
                        {/* {item.image ? <Card.Img src={item.image} alt={`${item.title}`} variant='top' /> : null} */}
                        <Card.Body>
                        <Card.Title>{collection.collectionName}</Card.Title>
                        <p className='small'>Collection: {collection.collectionName}</p>
                        <Card.Text>Category: {collection.category}</Card.Text>
                        <Button className='btn-block btn-danger' onClick={() => handleDeleteCollection(collection.collectionId)}>
                            Delete this collection!
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



export default Collection;