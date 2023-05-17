const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// processeur
exports.createProcesseur = async (req, res) => {
    const laptop = await prisma.processeur.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.updateProcesseur = async (req, res) => {
    const laptop = await prisma.processeur.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.deleteProcesseur = async (req, res) => {
    const laptop = await prisma.laptop.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.listProcesseur = async (req, res) => {
    const laptop = await prisma.processeur.findMany();
    res.json(laptop);
}

// Fournisseur processeur

exports.createFournisseurProcesseur = async (req, res) => {
    const laptop = await prisma.fournisseurproc.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.updateFournisseurProcesseur = async (req, res) => {
    const laptop = await prisma.fournisseurproc.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.deleteFournisseurProcesseur = async (req, res) => {
    const laptop = await prisma.laptop.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.listFournisseurProcesseur = async (req, res) => {
    const laptop = await prisma.fournisseurproc.findMany();
    res.json(laptop);
}
