const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
    // console.log(req.body);
    const utilisateur = await prisma.utilisateur.create({
        data: req.body,
    });
    res.json(utilisateur);
}

exports.updateUser = async (req, res) => {
    const utilisateur = await prisma.utilisateur.update({
        where: { id: parseInt(req.headers.userid) },
        data: req.body
    });
    res.json(utilisateur);
}

exports.deleteUser = async (req, res) => {
    const utilisateur = await prisma.utilisateur.create({
        data: req.body,
    });
    res.json(utilisateur);
}

exports.listUser = async (req, res) => {
    const utilisateur = await prisma.utilisateur.findMany();
    res.json(utilisateur);
}

exports.findUserById = async (req, res) => {
    // console.log(req.params)
    const utilisateur = await prisma.utilisateur.findMany({
        where:{
            id : parseInt(req.params.id),
        },
    });
    res.json(utilisateur);
}