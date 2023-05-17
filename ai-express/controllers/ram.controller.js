const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Ram
exports.createRAM = async (req, res) => {
    const laptop = await prisma.ram.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.updateRAM = async (req, res) => {
    const laptop = await prisma.ram.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.deleteRAM = async (req, res) => {
    const laptop = await prisma.laptop.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.listRAM = async (req, res) => {
    const laptop = await prisma.ram.findMany();
    res.json(laptop);
}