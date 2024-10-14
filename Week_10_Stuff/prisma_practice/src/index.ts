import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface UpdateParams {
    firstName: string,
    lastName: string,
}

async function insertUser(email: string, password: string, firstName: string, lastName: string) {
    const res =  await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
        }
    })
    console.log(res)
}

async function updateUser(email:string, { firstName, lastName}: UpdateParams) {
    const res = await prisma.user.update({
        where: {
            email
        },
        data: {
            firstName,
            lastName
        },
        select: {
            id: true,
            firstName: true,
            lastName: true
        }
    })
    console.log(res)
}

async function getUser(email:string) {
    const res = await prisma.user.findFirst({
        where: {
            email
        },
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true
        }
    })
    console.log(res)
}


// insertUser("sus@gmail.com", "12345", "Sus", "Kothari")
// updateUser("sus@gmail.com", {firstName: "Sussy", lastName: "Kothari"})
getUser("ompatil@gmail.com")