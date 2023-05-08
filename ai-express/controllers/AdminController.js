const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const secret = 'idealy';

exports.createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: req.body,
  });
  res.json(user);
};


exports.authenticateAdmin = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.userAdmin.findMany({ where: { email } });

    if (!user || user[0].password !== password) {
        res.status(401).send('Invalid email or password');
    } else {
        const token = jwt.sign({ userId: user[0].id }, secret);
        res.json({userId: user[0].id ,token: token});
    }
};
