import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/recipes`

export async function search(recipeQuery) {
  console.log(recipeQuery)
  const res = await fetch(`${BASE_URL}/search`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipeQuery)
  })
  return res.json()
}
