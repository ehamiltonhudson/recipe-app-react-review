import React, { Component } from 'react'
import { Card, CardTitle } from 'react-materialize'
import v4 from 'uuid'

// idMeal: "52935"
// strMeal: "Steak Diane"
// strMealThumb:

class Recipe extends Component {
  handleAddRecipe = () => {
    this.props.addToMyRecipes(this.props)
  }

  render() {
    console.log(this.props)
    return (
      <Card
        key={v4()}
        header={<CardTitle key={v4()} image={this.props.strMealThumb} />}
        title={this.props.strMeal}
        onClick={this.handleAddRecipe}
      />
    )
  }
}

export default Recipe
