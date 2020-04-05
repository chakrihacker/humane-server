import { PrismaClient } from '@prisma/client'
// @ts-ignore-next-line
import faker from "faker"

const prisma = new PrismaClient()

let max = 1000
let min = 100

let merchantMin = 1
let merchantMax = 24

async function main() {
	const tempArray = new Array(25)
  for(let _temp of tempArray) {
		await prisma.transaction.create({
			data: {
				amount: Math.floor(Math.random() * (max - min) + min),
				merchant: {
					connect: {
						id: Math.floor(Math.random() * (merchantMax - merchantMin) + merchantMin)
					}
				},
				user: {
					connect: {
						id: 1
					}
				},
				items: {
					set: [faker.commerce.productName()]
				},
				createdAt: new Date(),
				updatedAt: new Date()
			}
		})
	}
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })