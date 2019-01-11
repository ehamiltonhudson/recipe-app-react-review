import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'

// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CATEGORY_HERE}`)
const recipesURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`

class App extends Component {
  state = {
    categories: [],
    recipes: [],
    myRecipes: []
  }

  componentDidMount = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        this.setState({
          categories: data.categories
        })
      })
  }

  fetchRecipes = (name) => {
    console.log(name)
    fetch(recipesURL + name)
      .then(response => response.json())
      .then(data => {
        this.setState({
          recipes: data.meals
        })
      })
  }

  addToMyRecipes = (recipe) => {
    this.setState({
      myRecipes: [...this.state.myRecipes, recipe]
    })
  }

  render() {
    // console.log(this.state.categories)
    // console.log(this.state.myRecipes)
    return (
      <div>
        <Header />

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer categories={this.state.categories} fetchRecipes={this.fetchRecipes}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer recipes={this.state.recipes} myRecipes={this.state.myRecipes} addToMyRecipes={this.addToMyRecipes} />
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            {/* how can we render recipes here? */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
