import { describe, it, expect } from "vitest";
import { toContribution, type ContributionDTO } from "@/dto/contribution";
import { toEquipamentSet, type EquipamentSetDTO } from "@/dto/equipamentSet";
import { toDownPipe, type DownPipeDTO } from "@/dto/downPipe";
import { Contribution } from "@/models/Contribution";
import { EquipamentSet } from "@/models/EquipamentSet";
import { DownPipe } from "@/models/DownPipe";

describe("DTO mappers", () => {
    it("converts ContributionDTO to Contribution", () => {
        const dto: ContributionDTO = { id: 1, levelId: 2, equipamentId: 3 };
        const model = toContribution(dto);
        expect(model).toBeInstanceOf(Contribution);
        expect(model).toMatchObject(dto);
    });

    it("converts EquipamentSetDTO to EquipamentSet", () => {
        const dto: EquipamentSetDTO = {
            id: 1,
            name: "Set",
            items: [{ equipamentId: 2 }, { equipamentSetId: 3 }],
        };
        const model = toEquipamentSet(dto);
        expect(model).toBeInstanceOf(EquipamentSet);
        expect(model.items).toEqual(dto.items);
    });

    it("converts DownPipeDTO to DownPipe", () => {
        const dto: DownPipeDTO = {
            id: 1,
            numeration: "1",
            diameter: 100,
            systemId: 1,
            contributionIds: [1],
        };
        const model = toDownPipe(dto);
        expect(model).toBeInstanceOf(DownPipe);
        expect(model.systemId).toBe(1);
        expect(model.contributionIds).toEqual([1]);
    });
});
