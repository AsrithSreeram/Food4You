import classes from './Body.module.css'

export default function Body({recipes}) {
    return (
        <div style={{marginTop: '70px', display: "flex", justifyContent: "space-between", marginRight: "2%", marginLeft: "2%"}}>
            {recipes.map(recipe =>
            <RecipeItems 
              name={recipe.recipe.label}
              image = {recipe.recipe.image}
              ingredientLines = {recipe.recipe.ingredientLines}
              />
          )}
        </div>
    )
}

// function Card({title, rating}) {
//     return (
//         <div class={classes.card + " card"}>
//             <h1>{title}</h1>
//         </div>
//     )
// }

function RecipeItems ({name, image, ingredientLines}) {
    return (
        <div>
            <div class="car2">
                    <img src={image} class="img-fluid"/>
                      <div class="card-body">    
                          <h4>{name}</h4>
                      </div>    
                      <ul class="list-group">
                       {ingredientLines.map(ingredient => (
                         <li class="list-group-item">
                             {ingredient}
                        </li>
                        ))}
                      </ul>
                  </div>    
        </div>     
    )
}