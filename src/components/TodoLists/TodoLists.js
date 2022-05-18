import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TodoLists = ({ post, handleDeleteItem }) => {
    const {_id, name, desc } = post;
    return (
        <Card className='mb-3 mt-4'>
            <div>
            <Card.Header as="h5">Your Todo-Item</Card.Header>
            </div>
            <Card.Body>
                <Card.Title className='text-start'>{name}</Card.Title>
                <Card.Text className='text-start'>
                    {desc}
                </Card.Text>
                <Button onClick={()=> handleDeleteItem(_id)} variant="primary">Completed</Button>
            </Card.Body>
        </Card>
    );
};

export default TodoLists;