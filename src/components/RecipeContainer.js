import React, { Component, Fragment } from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends Component {
  render() {
    return (
      <Fragment>
      <div>{this.props.recipes.map((recipe) => {
              return <Recipe key={recipe.idMeal} {...recipe} addToMyRecipes={this.props.addToMyRecipes}/>
      })}</div>
      <div>{this.props.myRecipes.map((myRecipe) => {
              return <Recipe key={myRecipe.strMeal} {...myRecipe} addToMyRecipes={this.props.addToMyRecipes}/>
      })}</div>
      </Fragment>
    )
  }
}

export default RecipeContainer
