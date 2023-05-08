const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const fs = require('fs');
const path = require('path');

const secret = 'idealy';

exports.createArticle = async (req, res) => {
    const formData = req.body;
    const imageFile = req.file;
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const newPath = path.join(path.dirname(imageFile.path),  formData.titre.split(" ")[0].toLowerCase()+"-"+uniqueSuffix+'.'+imageFile.originalname.split('.').pop());
    fs.rename(imageFile.path, newPath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors du renommage du fichier');
        } else {
            formData.image = "http://localhost:3000/"+newPath;
        }
    });

    const article = await prisma.article.create({
        data:formData
    });

    res.json(article);
};

exports.findArticle = async (req, res) => {
    const article = await prisma.article.findMany();
    res.json(article);
};