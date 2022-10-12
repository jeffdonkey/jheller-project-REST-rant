const router = require('express').Router()
//line directily below is not in activity 8
//const places = require('../models/places.js')
//line above is not needed because we are switching to a db
const db = require('../models')

//Index route
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

//NEW post route
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// NEW get route
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW route
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render ('places/show', {place})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  }) 
})

//UPDATE
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

//DELETE
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

//EDIT get route
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

//RANT post route
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  if (req.body.rant) {
    req.body.rant = true
  }
  else {
    req.body.rant = false
  }
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      .then (() => {
        res.redirect(`/places/${req.params.id}`)
      })
      .catch(err => {
        res.render('error404')
      })
      .catch(err => {
        res.render('error404')
      })
    })
  })
})

//RANT delete route
router.delete('/:id/rant/:commentId', (res, req) => {
  res.send('GET /places/:id/rand/:rantId stub')
})

module.exports = router