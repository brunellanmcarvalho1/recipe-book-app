import Recipes from './../assets/basic-recipes.json'
import RecipeCard from './RecipeCard';

{/* <div className="h-32 grid gap-x-4 gap-y-4 grid-cols-4 content-end striped"> */}

function RecipeList(){
return (
    <div>
        {Recipes.map(recipe => (
            <RecipeCard key={recipe.id} 
                {...recipe}
            />
    ))}
    </div>
)
}
export default RecipeList;