const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.createLaptop = async (req, res) => {
    // console.log(req.body);
    const laptop = await prisma.laptop.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.updateLaptop = async (req, res) => {
    const laptop = await prisma.laptop.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.deleteLaptop = async (req, res) => {
    const laptop = await prisma.laptop.create({
        data: req.body,
    });
    res.json(laptop);
}

exports.listLaptop = async (req, res) => {
    const laptop = await prisma.$queryRaw`SELECT * FROM laptop`;
    res.json(laptop);
}

// reference

exports.createReference = async (req, res) => {
    const reference = await prisma.reference.create({
        data: req.body,
    });
    res.json(reference);
}

exports.updateReference = async (req, res) => {
    const reference = await prisma.reference.create({
        data: req.body,
    });
    res.json(reference);
}

exports.deleteReference = async (req, res) => {
    const reference = await prisma.reference.create({
        data: req.body,
    });
    res.json(reference);
}

exports.listReference = async (req, res) => {
    const reference = await prisma.reference.findMany();
    res.json(reference);
}



// Marque
exports.createMarque = async (req, res) => {
    const marque = await prisma.marque.create({
        data: req.body,
    });
    res.json(marque);
}

exports.updateMarque = async (req, res) => {
    const marque = await prisma.marque.create({
        data: req.body,
    });
    res.json(marque);
}

exports.deleteMarque = async (req, res) => {
    const marque = await prisma.marque.create({
        data: req.body,
    });
    res.json(marque);
}

exports.listMarque = async (req, res) => {
    const marque = await prisma.marque.findMany();
    res.json(marque);
}