const route = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

route.post('/post', multer(multerConfig).single('file'), async (req, res) => {
    const { originalname: name, size, key, url = '' } = req.file;
   
    const post = await Post.create({
        name,
        size,
        key,
        url
    });

    return res.json(post);
});

route.get('/post', async (req, res) => {
    const post = await Post.find();

    return res.json(post);
});

route.delete('/post/:id', async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);

    await post.remove();

    return res.send('OK');
});

module.exports = route;