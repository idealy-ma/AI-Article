const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createPointDeVente = async (req, res) => {
    // console.log(req.body);
    const pointvente = await prisma.pointvente.create({
        data: req.body,
    });
    res.json(pointvente);
}

exports.updatePointDeVente = async (req, res) => {
    const pointvente = await prisma.pointvente.create({
        data: req.body,
    });
    res.json(pointvente);
}

exports.deletePointDeVente = async (req, res) => {
    const pointvente = await prisma.pointvente.create({
        data: req.body,
    });
    res.json(pointvente);
}

exports.listPointDeVente = async (req, res) => {
    const pointvente = await prisma.pointvente.findMany();
    res.json(pointvente);
}