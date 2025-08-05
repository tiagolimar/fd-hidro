import type { FittingMount } from "./FittingMountType";

export interface FittingSet {
    id: number;
    name: string;
    fittingsMounts: FittingMount[];
    totalWeight: number;
}
