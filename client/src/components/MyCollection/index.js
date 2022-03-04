import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_ME } from '../../utils/queries';

import Auth from '../../utils/auth';
import { REMOVE_ITEM } from '../../utils/mutations';

const MyCollection = () => {
    const { loading, data } = useQuery(GET_ME);
    const [deleteItem] = useMutation(REMOVE_ITEM);
    const userData = data?.me || {};

    // create a function to remove items from collections
    const handleDeleteItem = async (itemName) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if(!token) {
            return false;
        }

        try {
            await deleteItem({
                variables: { itemName }
            });

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
                <h1>Your Collection</h1>
                </Container>
            </Container>
                <Container>
                    <h2>
                    {userData.savedItems.length
                        ? `Viewing ${userData.savedItems.length} saved ${userData.savedItems.length === 1 ? 'item' : 'items'}:`
                        : 'You have no items!'}
                    </h2>
                    <Card>
                    {userData.savedItems.map((item) => {
                        return (
                        <Card key={item.itemId} border='dark'>
                            {item.image ? <Card.Img src={item.image} alt={`${item.title}`} variant='top' /> : null}
                            <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <p className='small'>Item: {item.name}</p>
                            <Card.Text>{item.description}</Card.Text>
                            <Button className='btn-block btn-danger' onClick={() => handleDeleteItem(item.itemId)}>
                                Delete this item!
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



export default MyCollection;