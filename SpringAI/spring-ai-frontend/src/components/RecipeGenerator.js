import React, { useState } from "react";

function RecipeGenerator(){


        const [intgredients, setIntgredient] = useState('');
        
        const [cuisine, setCuisine] = useState('');
        
        const [dietRestrictions, setDietRestricitions] = useState('');

        
        const [recipe, setRecipe] = useState('');


        const createRecipe = async () => {
            try {                               
                const response = await fetch(`http://localhost:8080/recipe-creator?intgredients=${intgredients}&dietRestrictions=${dietRestrictions}&cuisisne=${cuisine}`)
                const data = await response.text();
                console. log(data);
                setRecipe(data);
            } catch (error) {
                console.error("Error generating recipe :",error)
            }
    };
        

    return(

        
        <div>

            <h2>Ask for the Recipe</h2>
            <div>
            <input 
                type = "text"
                value={intgredients}
                onChange={(e) => setIntgredient(e.target.value)}
                placeholder="Enter intgredients(comma seperated)"/>
            </div>
            <div>

            <input 

                type = "text"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Enter Cuisine type."/>
            </div>


            <div>

            <input 

                type = "text"
                value={dietRestrictions}
                onChange={(e) => dietRestrictions(e.target.value)}
                placeholder="Enter diet restrictions."/>
            </div>

              <button onClick={createRecipe}>Create Recipe</button> 


              <div className="output">
                <pre className="recipe-text">{recipe}</pre>
                </div> 

        </div>
            
        
    );
} 

export default RecipeGenerator;