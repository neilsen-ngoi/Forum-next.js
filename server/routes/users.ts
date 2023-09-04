import express from 'express'
import checkJwt, { JwtRequest } from '../auth0'
import { getUsers } from '../db/users.js'

const router = express.Router()
export default router
// A public endpoint that anyone can access
// GET /api/v1/fruits
router.get('/', async (req, res) => {
  const user = await getUsers()
  console.log(user)
  // .then((fruits: Fruit[]) =>

  // .catch((err: Error) => {
  //   console.error(err)
  //   res.status(500).send('Something went wrong')
  // })
})

router.post('/', checkJwt, (req: JwtRequest, res) => {
  const { fruit } = req.body
  const auth0Id = req.auth?.sub

  if (!auth0Id) {
    console.error('No auth0Id')
    return res.status(401).send('Unauthorized')
  }

  // const newFruit: FruitSnakeCase = {
  //   added_by_user: auth0Id,
  //   name: fruit.name,
  //   average_grams_each: fruit.averageGramsEach,
  // }

  addFruit(newFruit)
    .then(() => getFruits())
    .then((fruits: Fruit[]) => res.json({ fruits }))
    .catch((err: Error) => {
      console.error(err)
      res.status(500).send('Something went wrong')
    })
})
