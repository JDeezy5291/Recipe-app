import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddRecipe() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div style={recipeStyle}>
                <Button variant="primary" onClick={handleShow}>Add Recipe</Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Recipe</h4>
                    <input type="text" />
                    <h4>Ingredients</h4>
                    <input type="text" />
                    <h4>Directions</h4>
                    <input type="text" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

const recipeStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderBottomRightRadius: '10px',
    borderBottomLeftRadius: '10px',
    height: '110px',
    backgroundColor: '#084C61',
    overflow: 'auto'
}

export default AddRecipe;
