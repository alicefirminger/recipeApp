import { useState, useEffect } from "react";
import React from "react";

function RecipeText({ setShowRecipe }) {
	const [recipe, setRecipe] = useState("");
	const [instructions, setInstructions] = useState("");
	const [image, setImage] = useState(null);
	useEffect(() => {
		async function getRecipe() {
			const response = await fetch(
				"https://www.themealdb.com/api/json/v1/1/random.php"
			);
			const data = await response.json();
			setRecipe(data.meals[0].strMeal);
			setInstructions(data.meals[0].strInstructions);
			setImage(data.meals[0].strMealThumb);
			
			console.log("RecipeText component rendered");

			// console.log(data.meals[0].strMeal)
			// console.log(data.meals[0].strInstructions)
			// console.log(data.meals[0].strMealThumb)
		}

		getRecipe();
	}, []);

	const instructionItems = instructions
		.split("\r\n")
		.map((item, index) => <li key={index}>{item}</li>);

	return (
		<div className="recipe-text">
			<h1>{recipe}</h1>
			<img
				src={image}
				alt="img of meal"/>
			<div className="recipe-container">
				<h2>Recipe Instructions:</h2>
				<ul className="instructions">{instructionItems}</ul>
			</div>
			<button className="close-button" onClick={() => setShowRecipe(false)}>
				Close Recipe
			</button>
		</div>
	);
}

export default RecipeText;
