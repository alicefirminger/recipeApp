import "./App.css";
import RecipeText from "../RecipeText/index";
import React, { useState } from "react";

function App() {
	const [showRecipe, setShowRecipe] = useState(false);

	function handleClick() {
		setShowRecipe(true);
		console.log("Button clicked");
	}

	return (
		<div className="App">
			<button onClick={handleClick}>
				Surprise me with a new recipe
			</button>
			{showRecipe && <RecipeText setShowRecipe={setShowRecipe} />}
		</div>
	);
}

export default App;
