const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Fournisseur processeur
exports.createTypeDur = async (req, res) => {
    const laptop = await prisma.typedur.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.updateTypeDur = async (req, res) => {
    const laptop = await prisma.typedur.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.deleteTypeDur = async (req, res) => {
    const laptop = await prisma.laptop.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.listTypeDur = async (req, res) => {
    const laptop = await prisma.typedur.findMany();
    res.json(laptop);
}
