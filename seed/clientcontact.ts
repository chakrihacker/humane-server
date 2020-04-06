import { PrismaClient } from '@prisma/client'
import faker from "faker"

const prisma = new PrismaClient()

async function main() {
	const tempArray = new Array(25)
  for(let _temp of tempArray) {
		await prisma.clientContacts.create({
			data: {
				name: faker.name.firstName(),
				title: faker.name.title(),
				address: faker.address.city(),
				companyName: faker.company.companyName(),
				industry: faker.name.jobArea()
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