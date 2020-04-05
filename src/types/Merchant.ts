import {objectType} from 'nexus'

export const Merchant = objectType({
	name: 'Merchant',
	definition(t) {
		t.model.id()
		t.model.name()
	}
})