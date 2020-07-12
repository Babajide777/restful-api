let customerModel = require('../models/customerModel'),
    express = require('express'),
    router = express.Router();

router.post('/', (req, res) => {

    if(!req.body) {
        return res.status(400).send('Request body is missing');
      }

      let model = customerModel(req.body);
      model.save()
        .then(doc => {
          if(!doc || doc.length === 0) {
            return res.status(500).send(doc)
          }
    
          res.status(201).send(doc)
        })
        .catch(err => {
          res.status(500).json(err)
        })
    });

// GET
router.get('/', (req, res) => {
    if(!req.query.email) {
      return res.status(400).send('Missing URL parameter: email')
    }
    console.log('EMAIL!', req.query.email)
    console.log(req.query.email);
  
    customerModel.findOne({
      email: req.query.email
    })
      .then(doc => {
        console.log(doc);
        res.json(doc);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })





  // UPDATE
router.put('/', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }

  customerModel.findOneAndUpdate({
    email: req.query.email
  }, req.body, {
    new: true
  })
    .then(doc => {
      console.log(doc);
      return res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// DELETE
router.delete('/', (req, res) => {
  if(!req.query.email) {
    return res.status(400).send('Missing URL parameter: email')
  }

  customerModel.findOneAndRemove({
    email: req.query.email
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

  module.exports = router;
