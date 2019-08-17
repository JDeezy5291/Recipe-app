import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '452c4fe6';
  const APP_KEY = '37322142bdddfaed1a02fb55ce5f85ae';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
      <div className="App">
        <h1>Search for a Recipe</h1>
        <form onSubmit={getSearch} className="search-form">
          <input type="text" className="search-bar" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories.toFixed(0)}
            fatLabel={recipe.recipe.totalNutrients.FAT !== undefined ? (recipe.recipe.totalNutrients.FAT.label) : (<p>Fat</p>)}
            fat={recipe.recipe.totalNutrients.FAT !== undefined ? (recipe.recipe.totalNutrients.FAT.quantity.toFixed(0)) : (<p>0</p>)}
            proteinLabel={recipe.recipe.totalNutrients.PROCNT !== undefined ? (recipe.recipe.totalNutrients.PROCNT.label) : (<p>Protein</p>)}
            protein={recipe.recipe.totalNutrients.PROCNT !== undefined ? (recipe.recipe.totalNutrients.PROCNT.quantity.toFixed(0)) : (<p>0</p>)}
            carbLabel={recipe.recipe.totalNutrients.CHOCDF !== undefined ? (recipe.recipe.totalNutrients.CHOCDF.label) : (<p>Carb</p>)}
            carb={recipe.recipe.totalNutrients.CHOCDF !== undefined ? (recipe.recipe.totalNutrients.CHOCDF.quantity.toFixed(0)) : (<p>0</p>)}
            servings={recipe.recipe.yield !== undefined ? (recipe.recipe.yield) : (<p>(0)</p>)}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
            url={recipe.recipe.url}
          />
        ))}
      </div>
  );
}

export default App;