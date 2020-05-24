const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['Development', 'Diseño', 'Educación', 'Lectura', 'Medicina', 'Salud', 'Tecnología'],
    required: true
  },
  title: {
    type: String,
    minlength: 25,
    required: true
  },
  description: {
    type: String,
    minlength: 100,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  author: {
    type: String,
    minlength: 4,
    maxlength: 30,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  estimatedReadTime: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }

})

module.exports = mongoose.model('articles', articleSchema)
