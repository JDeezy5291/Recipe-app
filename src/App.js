import React, { Component } from 'react';
import './App.css';
import RecipeCollection from './components/RecipeCollection';
import RecipeTitle from './components/RecipeTitle';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';

class App extends Component {
  render() {
    return (
      <div>
        <div style={ titleStyle }>
          <h1>Recipe App</h1>
        </div>
        <div className="main">
        <RecipeCollection />
        <RecipeTitle />
        <Recipe />
        <AddRecipe />
      </div>
      </div>
    );
  }
}

const titleStyle = {
  textAlign: 'center',
  color: '#FFF'
}

export default App

