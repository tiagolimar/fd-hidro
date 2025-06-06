import type { HydraulicFittingMount } from "./HydraulicFittingMountType";

export interface HydraulicFittingSet {
    id: number;
    name: string;
    fittingsMounts: HydraulicFittingMount[];
    totalWeight: number;
}
