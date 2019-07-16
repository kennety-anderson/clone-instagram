const express = require('express');
const multer = require('multer');
const uploadsConfig = require('./config/uploads');
const PostImage = require('./controllers/PostImage');
const LikeControlers = require('./controllers/LikeControlers');

const routes = new express.Router();
const upload = multer(uploadsConfig);

//rota index da pagina do feed
routes.get('/posts', PostImage.feedHome);
//rota de post para novas imagens 
routes.post('/posts',upload.single('image'), PostImage.postNewImage);
//rota de like das imagens 
routes.post('/post/:id', LikeControlers.like);


module.exports = routes;