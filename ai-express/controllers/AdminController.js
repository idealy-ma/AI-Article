const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// exports.createUser = async (req, res) => {
//   const user = await prisma.user.create({
//     data: req.body,
//   });
//   res.json(user);
// };

exports.authenticateAdmin = async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.userAdmin.findMany({ where: { email } });

    if (!user || user[0].password !== password) {
        console.log(JSON.stringify(user.password)+" "+password);
        res.status(401).send('Invalid email or password');
    } else {
        req.session.user = user[0];
        console.log(req.session);
        res.json(user[0]);
    }
};
