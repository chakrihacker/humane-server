import {objectType} from 'nexus'

export const Transaction = objectType({
	name: 'Transaction',
	definition(t) {
		t.model.id()
		t.model.items()
		t.model.amount()
		t.model.merchantId()
	}
})