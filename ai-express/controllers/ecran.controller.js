const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Ram
exports.createEcran = async (req, res) => {
    const laptop = await prisma.ecran.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.updateEcran = async (req, res) => {
    const laptop = await prisma.ecran.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.deleteEcran = async (req, res) => {
    const laptop = await prisma.laptop.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.listEcran = async (req, res) => {
    const laptop = await prisma.ecran.findMany();
    res.json(laptop);
}