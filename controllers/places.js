const router = require('express').Router()
const places = require('../models/places.js')

//below "router.post" added in Part 5.5
//directions show that this existed before Part 5 but it was not in the code
//not sure if this is the right place for it, it works though
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    //Default image if one is not provided
    req.body.pic='http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

//the "get for new" was added in Part 5.2
router.get('/new', (req, res) => {
  res.render('places/new')
})



router.get('/', (req, res) => {
  res.render('places/index', { places })
})

//SHOW ROUTE
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN (id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places [id], id} )
  }
})

//not sure if this goes here, this is for DELETE
router.delete('/:id', (req, res)=> {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render ('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = router