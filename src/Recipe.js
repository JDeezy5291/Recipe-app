import React from 'react'

function Recipe({ title, image, calories, fatLabel, fat, proteinLabel, protein, carbLabel, carb, servings, ingredients, url }) {
    return (
        <div>
            <section style={recipeSection}>
                <img style={recipeImage} src={image} alt='' />
                <div id="recipe_Name" style={recipeName}>
                    <h1 style={{ fontSize: '25px' }}>{title}</h1>
                        <div className="recipe_left">
                            <h1 style={{ fontSize: '12px' }}>Calories</h1>
                            <p style={{ fontSize: '12px' }}>{calories}</p>
                            <h1 style={{ fontSize: '12px' }}>Servings</h1>
                            <p style={{ fontSize: '12px' }}>{servings}</p>
                        </div>
                        <div className="recipe_right">
                            <h1 style={{ fontSize: '12px' }}>{fatLabel}</h1>
                            <p style={{ fontSize: '12px' }}>{fat}</p>
                            <h1 style={{ fontSize: '12px' }}>{proteinLabel}</h1>
                            <p style={{ fontSize: '12px' }}>{protein}</p>
                            <h1 style={{ fontSize: '12px' }}>{carbLabel}</h1>
                            <p style={{ fontSize: '12px' }}>{carb}</p>
                        </div>
                        {/* <div className="ingredientsList">
                            <h3 style={{ fontSize: '15px' }}>Ingredients:</h3>
                            <ol>
                                {ingredients.map(ingredient => (
                                    <li style={{ fontSize: '12px' }}>{ingredient.text}</li>
                                ))}
                            </ol>
                        </div> */}
                        <a className="_URL" href={url}>Recipe</a>
                </div>
            </section>
            <hr />
        </div>
    );
}
const recipeSection = {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    padding: '20px 10px'
}
const recipeName = {
    padding: '20px',
    fontSize: '30px',
    textAlign: 'center'
}
const recipeImage = {
    width: '100%',
    height: 'auto',
    textAlign: 'center'
}

export default Recipe;