import { defineWorld } from "@latticexyz/world";

export default defineWorld({
  namespace: "app",
  tables: {
    SkillProcess: {
      schema: {
        skillProcessIdSkillType: "uint8",
        skillProcessIdPlayerId: "uint256",
        skillProcessIdSequenceNumber: "uint8",
        itemId: "uint32",
        startedAt: "uint64",
        creationTime: "uint64",
        completed: "bool",
        endedAt: "uint64",
        batchSize: "uint32",
        existing: "bool",
      },
      key: ["skillProcessIdSkillType", "skillProcessIdPlayerId", "skillProcessIdSequenceNumber"],
    },
    SkillPrcMtrlCount: {
      schema: {
        skillProcessIdSkillType: "uint8",
        skillProcessIdPlayerId: "uint256",
        skillProcessIdSequenceNumber: "uint8",
        count: "uint64",
      },
      key: ["skillProcessIdSkillType", "skillProcessIdPlayerId", "skillProcessIdSequenceNumber"],
    },
    SkillPrcMtrl: {
      schema: {
        skillProcessIdSkillType: "uint8",
        skillProcessIdPlayerId: "uint256",
        skillProcessIdSequenceNumber: "uint8",
        productionMaterialIndex: "uint64",
        productionMaterialItemId: "uint32",
        productionMaterialQuantity: "uint32",
      },
      key: ["skillProcessIdSkillType", "skillProcessIdPlayerId", "skillProcessIdSequenceNumber", "productionMaterialIndex"],
    },
    Counter: {
      schema: {
        value: "uint32",
      },
      key: [],
    },
  },
});
