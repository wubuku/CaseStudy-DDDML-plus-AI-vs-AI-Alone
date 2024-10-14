// SPDX-License-Identifier: MIT
pragma solidity >=0.8.24;

import { System } from "@latticexyz/world/src/System.sol";
import { SkillProcess, SkillProcessData, Counter } from "../codegen/index.sol";

contract SkillProcessSystem is System {
    function createSkillProcess(uint8 skillType, uint256 playerId, uint32 itemId, uint32 batchSize) public returns (uint8) {
        // Get the current sequence number for the player and skill type
        uint32 currentSequence = Counter.get();
        Counter.set(currentSequence + 1);

        // Ensure the sequence number is within uint8 range
        require(currentSequence < 256, "Sequence number overflow");
        uint8 sequenceNumber = uint8(currentSequence);

        // Create a new SkillProcess
        SkillProcessData memory newProcess = SkillProcessData({
            skillProcessIdSkillType: skillType,
            skillProcessIdPlayerId: playerId,
            skillProcessIdSequenceNumber: sequenceNumber,
            itemId: itemId,
            startedAt: 0, // Unstarted process
            creationTime: uint64(block.timestamp),
            completed: false,
            endedAt: 0,
            batchSize: batchSize,
            existing: true
        });

        // Store the new SkillProcess
        SkillProcess.set(skillType, playerId, sequenceNumber, newProcess);

        return sequenceNumber;
    }
}
