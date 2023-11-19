import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    const { id } = event.context.params
    
    let selectdCar = await prisma.car.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if(!selectdCar) {
        throw createError({
            statusCode: 404,
            statusMessage: `Car with ID of ${id} doesn't exist`
        })
        }
        
    return selectdCar
})