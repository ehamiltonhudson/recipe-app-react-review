import React from 'react'
import Category from './Category'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class CategoryContainer extends React.Component {
  render() {
    return (
      <div>{this.props.categories.map((category) => {
              return <Category key={category.idCategory} {...category} fetchRecipes={this.props.fetchRecipes}/>
      })}</div>
    )
  }
}

export default CategoryContainer
