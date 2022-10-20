import { useState } from "react"
import styles from './RecipeSearch.module.css'

const RecipeSearch = () => {

  const [formData, setFormData] = useState({
    recipeQuery: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      // await some API call
      // use result of API call to set state for this component
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <h2>Recipe Search</h2>
      <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
      >
        <div className={styles.inputContainer}>

          <input
            placeholder="Search for a recipe"
            type="text"
            autoComplete="off"
            id="recipe-query"
            value={formData.recipeQuery}
            name="recipeQuery"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className={styles.button}>Search</button>
        </div>
      </form>
    </>
  )
}

export default RecipeSearch