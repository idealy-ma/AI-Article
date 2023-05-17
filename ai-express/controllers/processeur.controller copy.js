const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// disque dur
exports.createDisqueDur = async (req, res) => {
    const laptop = await prisma.disquedur.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.updateDisqueDur = async (req, res) => {
    const laptop = await prisma.disquedur.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.deleteDisqueDur = async (req, res) => {
    const laptop = await prisma.laptop.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.listDisqueDur = async (req, res) => {
    const laptop = await prisma.disquedur.findMany();
    res.json(laptop);
}

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
