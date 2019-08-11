import React from 'react';

const Recipe = ({ title, calories, image }) => {
    return (
        <div>
            <section style={recipeSection}>
                <div style={recipeDec}>
                    <h1 style={{fontSize: '25px'}}>{title}</h1>
                    <p style={{fontSize: '15px'}}>{calories}</p>
                </div>
                <img style={recipeImage} src={image} alt='' />
            </section>
        </div>
    );
}
const recipeSection = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    padding: '10px'
}
const recipeDec = {
    // float: 'left'
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border:' 1px solid rgba(0, 0, 0, 0.8)',
  padding: '20px',
  fontSize: '30px',
  textAlign: 'center'

}
// const recipeTitle = {
//     fontSize: '25px'
// }
const recipeImage = {
    maxWidth: '100%',
  height: 'auto',
backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border:' 1px solid rgba(0, 0, 0, 0.8)',
  padding: '20px',
  fontSize: '30px',
  textAlign: 'center'
}

export default Recipe;