import { PrismaClient } from '@prisma/client'
import faker from "faker"

const prisma = new PrismaClient()

async function main() {
	const tempArray = new Array(25)
  for(let _temp of tempArray) {
		const merchant = faker.company.companyName()
		await prisma.merchant.create({
			data: {
				name: merchant
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