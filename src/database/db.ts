const { PrismaClient } = require('@prisma/client')

//Create a prisma client instance
const prisma = new PrismaClient();

export default  prisma;