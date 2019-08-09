import React from 'react';
import Button from 'react-bootstrap/Button';

function RecipeTitle() {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);

    return (
        <div style={recipeStyle}>
            {/* add title */}
            <Button variant="secondary" onClick={handleClose}>Delete</Button>
            <Button variant="primary" onClick={handleClose}>Edit</Button>
        </div>
    )
}

const recipeStyle = {
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderTopRightRadius: '10px',
    borderTopLeftRadius: '10px',
    height: '50px',
    backgroundColor: '#084C61',
    overflow: 'auto'
}

export default RecipeTitle;
