import { describe, it, expect } from 'vitest'
import {
  toContribution,
  type ContributionDTO,
  type HydratedContributionDTO,
} from '@/dto/contribution'
import {
  toEquipamentSet,
  type EquipamentSetDTO,
} from '@/dto/equipamentSet'
import { toDownPipe, type DownPipeDTO } from '@/dto/downPipe'
import { type LevelDTO } from '@/dto/level'
import { type EquipamentDTO } from '@/dto/equipament'
import { type SystemDTO } from '@/dto/system'
import { SystemType } from '@/models/enums/SystemType'
import { Contribution, HydratedContribution } from '@/models/Contribution'
import { Equipament } from '@/models/Equipament'
import { EquipamentSet } from '@/models/EquipamentSet'
import { DownPipe } from '@/models/DownPipe'


describe('DTO mappers', () => {
  it('converts ContributionDTO to Contribution', () => {
    const dto: ContributionDTO = { id: 1, levelId: 2, equipamentId: 3 }
    const model = toContribution(dto)
    expect(model).toBeInstanceOf(Contribution)
    expect(model).toMatchObject(dto)
  })

  it('converts nested EquipamentSetDTO to EquipamentSet', () => {
    const dto: EquipamentSetDTO = {
      id: 1,
      name: 'Set',
      equipaments: [
        { id: 2, name: 'E1', abreviation: 'E1', uhc: 5 } as EquipamentDTO,
        {
          id: 3,
          name: 'Nested',
          equipaments: [
            { id: 4, name: 'E2', abreviation: 'E2', uhc: 7 } as EquipamentDTO,
          ],
        },
      ],
    }
    const model = toEquipamentSet(dto)
    expect(model).toBeInstanceOf(EquipamentSet)
    expect(model.equipaments[0]).toBeInstanceOf(Equipament)
    expect(model.equipaments[1]).toBeInstanceOf(EquipamentSet)
  })

  it('converts DownPipeDTO to DownPipe', () => {
    const level: LevelDTO = { id: 1, name: 'Nível 1', height: 0 }
    const equip: EquipamentDTO = {
      id: 1,
      name: 'E1',
      abreviation: 'E1',
      uhc: 10,
    }
    const contributionDto: HydratedContributionDTO = {
      id: 1,
      level,
      equipament: equip,
    }
    const system: SystemDTO = {
      id: 1,
      name: 'Sistema',
      systemAbreviation: 'S',
      systemType: SystemType.Hidraulico,
    }
    const dto: DownPipeDTO = {
      id: 1,
      numeration: '1',
      diameter: 100,
      system,
      contributions: [contributionDto],
    }
    const model = toDownPipe(dto)
    expect(model).toBeInstanceOf(DownPipe)
    expect(model.system.systemAbreviation).toBe('S')
    expect(model.contributions[0]).toBeInstanceOf(HydratedContribution)
    expect(model.contributions[0].equipament).toBeInstanceOf(Equipament)
  })
})

