import { useState, useEffect } from "react";
import React from "react";

function RecipeText() {
    const [recipe, setRecipe] = useState("");
    useEffect(() => {
        async function getRecipe() {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const data = await response.json();
        console.log(data.meals[0].strMeal)
             }
      getRecipe();
    }, []);
  
    return (
      <div className="recipe-text">
        <h2>Recipe Instructions:</h2>
        <p>{recipe}</p>
      </div>
    );
  }


export default RecipeText;
   
