import { describe, it, expect } from 'vitest'
import { HydratedContribution } from '@/models/Contribution'
import { Level } from '@/models/Level'
import { Equipament } from '@/models/Equipament'
import { HydratedEquipamentSet } from '@/models/EquipamentSet'
import { DownPipe } from '@/models/DownPipe'
import { System } from '@/models/System'
import { SystemType } from '@/models/enums/SystemType'

describe('totaluhc calculations', () => {
    it('calculates totaluhc for HydratedContribution with Equipament', () => {
        const level = new Level('N1', 0)
        const equip = new Equipament('E1', 'E1', 10)
        const contribution = new HydratedContribution(level, equip)
        expect(contribution.totaluhc).toBe(10)
    })

    it('calculates totaluhc for HydratedContribution with EquipamentSet', () => {
        const level = new Level('N1', 0)
        const e1 = new Equipament('E1', 'E1', 10)
        const e2 = new Equipament('E2', 'E2', 15)
        const set = new HydratedEquipamentSet('Set', [
            { equipament: e1, quantity: 1 },
            { equipament: e2, quantity: 1 },
        ])
        const contribution = new HydratedContribution(level, set)
        expect(contribution.totaluhc).toBe(25)
    })

    it('multiplies uhc by quantity inside EquipamentSet', () => {
        const e1 = new Equipament('E1', 'E1', 10)
        const set = new HydratedEquipamentSet('Set', [
            { equipament: e1, quantity: 3 },
        ])
        expect(set.totaluhc).toBe(30)
    })

    it('multiplies contribution totaluhc by quantity', () => {
        const level = new Level('N1', 0)
        const e1 = new Equipament('E1', 'E1', 10)
        const contribution = new HydratedContribution(level, e1, 3)
        expect(contribution.totaluhc).toBe(30)
    })

    it('calculates totaluhc for nested EquipamentSet', () => {
        const e1 = new Equipament('E1', 'E1', 10)
        const e2 = new Equipament('E2', 'E2', 15)
        const inner = new HydratedEquipamentSet('Inner', [
            { equipament: e2, quantity: 1 },
        ])
        const root = new HydratedEquipamentSet('Root', [
            { equipament: e1, quantity: 1 },
            { equipament: inner, quantity: 1 },
        ])
        expect(root.totaluhc).toBe(25)
    })

    it('calculates totaluhc for DownPipe', () => {
        const level = new Level('N1', 0)
        const e1 = new Equipament('E1', 'E1', 10)
        const e2 = new Equipament('E2', 'E2', 20)
        const c1 = new HydratedContribution(level, e1)
        const c2 = new HydratedContribution(level, e2)
        const system = new System('Sistema', 'S', SystemType.Hidraulico)
        const pipe = new DownPipe('1', 100, 1, [1, 2])
        pipe.system = system
        pipe.contributions = [c1, c2]
        expect(pipe.totaluhc).toBe(30)
    })
})
