import React, { Component } from 'react'
import { Card, CardTitle, Button } from 'react-materialize'
import v4 from 'uuid'

// idCategory: "1"
// strCategory: "Beef"
// strCategoryDescription: "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]"
// strCategoryThumb:

class Category extends Component {
  handleRecipeFetch = (event) => {
    console.log(this.props)
    this.props.fetchRecipes(this.props.strCategory)
  }
  render () {
    return (
      <Card
        key={v4()}
        header={<CardTitle key={v4()} image={this.props.strCategoryThumb} />}
        title={this.props.strCategory}
        actions={[<Button key={v4()} onClick={this.handleRecipeFetch} waves='light'>Find Recipes</Button>]}
        >
        {this.props.strCategoryDescription}
        </Card>
      )
    }
}

export default Category
