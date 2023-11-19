import { PrismaClient } from "@prisma/client"
import Joi from "joi"

const prisma = new PrismaClient()

const schema = Joi.object({
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net']}
    }).required(),
    phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    name: Joi.string().required(),
    message: Joi.string().required().min(20)
})


export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const { listingId } = event.context.params

    const { error } =  await schema.validate(body)

    if(error) {
        throw createError({
            statusCode: 412,
            statusMessage: error.message
        })
    }

    const { email, phone, message, name } = body
    
    return prisma.message.create({
        data: {
            message,
            email, 
            phone, 
            name, 
            listingId: parseInt(listingId)
        }
    })
})