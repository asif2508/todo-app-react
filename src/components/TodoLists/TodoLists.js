import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const TodoLists = ({ post, handleDeleteItem, handleCompleted }) => {
    const { _id, name, desc, completed } = post;
    const data = { completed: true };
    return (
        <Card className='mb-3 mt-4'>
            <Card.Header as="h5">Your Todo-Item</Card.Header>

            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <Card.Title style={{
                        textDecoration: completed ? 'line-through' : 'none'
                    }} className='text-start'>{name}</Card.Title>
                    <button onClick={() => handleDeleteItem(_id)} className='main-btn'>
                        <FontAwesomeIcon  icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>

                <Card.Text style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }} className='text-start'>
                    {desc}
                </Card.Text>
                <Button onClick={() => handleCompleted(_id, data)} className='main-btn'>Completed</Button>
            </Card.Body>
        </Card>
    );
};

export default TodoLists;