const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const secret = 'idealy';

exports.createArticle = async (req, res) => {
    const article = await prisma.article.create({
        data: req.body,
    });
    res.json(article);
};

exports.findArticle = async (req, res) => {
    const article = await prisma.article.findMany();
    res.json(article);
};