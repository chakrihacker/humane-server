import { objectType } from "nexus";

export const Transaction = objectType({
  name: "Transaction",
  definition(t) {
    t.model.id();
    t.model.items();
    t.model.amount();
		t.model.merchantId();
		t.model.merchant();
		t.model.createdAt();
		t.model.updatedAt();
  },
});

export const SpendHistory = objectType({
  name: "SpendHistory",
  definition(t) {
    t.string("cursor", { nullable: true });
    t.boolean("hasMore");
    t.field("spends", { type: "Transaction", list: true });
  },
});
