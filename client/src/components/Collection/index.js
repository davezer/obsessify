import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
// mport { useQuery } from '@apollo/react-hooks';
import { useQuery, useMutation } from '@apollo/client';

import { GET_ME } from '../../utils/queries';
import { REMOVE_COLLECTION, ADD_ITEM } from '../../utils/mutations';

import Auth from '../../utils/auth';

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
                <AddItem></AddItem>
            </Container>
            {/* <Container class="dashboard-create shadow">
                <h2>Add New Item</h2>
                <Form class="new-item-form">
                    <div>
                        <label for="item-name">Name</label>
                        <input type="text" id="item-name" name="item-name" />
                    </div>
                    <div>
                        <label for="item-description">Description</label>
                        <textarea id="item-text" name="item-text"></textarea>
                    </div>
                    <div>
                        <label for="item-category">Category</label>
                        <select name="item-category" id="item-category">
                            <option value="1">Sports</option>
                            <option value="2">Comics</option>
                            <option value="3">Coins</option>
                            <option value="4">Stamps</option>
                        </select>
                    </div>
                    <div className="m-3">
                        <label className="mx-3"></label>
                        <input
                            id="input-file"
                            onChange={handleDisplayFileDetails}
                            className="d-none"
                            type="file"
                        />
                        <button
                            onClick={handleUpload}
                            className={`btn btn-outline-${
                            uploadedFileName ? "success" : "primary"
                            }`}
                        >
                            {uploadedFileName ? uploadedFileName : "Upload"}
                        </button>
                    </div>
                    <Button type="submit">Add</Button>
                </Form>
            </Container> */}
        </>
    )
}



export default Collection;