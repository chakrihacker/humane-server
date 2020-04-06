import { objectType, arg, core } from "nexus";

export const ClientContact = objectType({
	name: "ClientContacts",
	definition(t) {
		t.model.id()
		t.model.address()
		t.model.companyName()
		t.model.createdAt()
		t.model.industry()
		t.model.name()
		t.model.title()
	}
})