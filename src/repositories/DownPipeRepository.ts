import { db } from '@/db/db';
import type { DownPipe } from '@/models/DownPipe';
import type { HydratedContribution } from '@/models/Contribution';
import type { System } from '@/models/System';
import { BaseRepository } from './BaseRepository';
import { toDownPipe, fromDownPipe, type DownPipeDTO } from '@/dto/downPipe';
import SystemRepository from './SystemRepository';
import ContributionRepository from './ContributionRepository';

export type HydratedDownPipe = DownPipe & {
    system: System;
    contributions: HydratedContribution[];
};

export async function hydrateDownPipe(pipe: DownPipe): Promise<HydratedDownPipe> {
    const system = await SystemRepository.getById(pipe.systemId);
    const contributions = await Promise.all(
        pipe.contributionIds.map(id => ContributionRepository.getHydratedById(id))
    );

    return {
        ...pipe,
        system: system!,
        contributions: contributions.filter(
            (c): c is HydratedContribution => c !== undefined
        ),
    };
}

class DownPipeRepository extends BaseRepository<DownPipe, DownPipeDTO> {
    constructor() {
        super(db.downpipes, toDownPipe, fromDownPipe);
    }
}

export default new DownPipeRepository();

