import type { HydraulicFitting } from "@/types/HydraulicFittingType";
import { removeFittingService, getFittings, initFittingsStorage } from "../../service/fittingsService";
import FittingsSettings from "./FittingsSettings";
import { useState } from "react";
import type { setFittingsProps } from "./setFittingsProps";
import { Toaster, toast } from 'sonner';

function Fittings({children}: {children: React.ReactNode}) {
    return (
        <article>
			<div className="container px-4 flex flex-wrap gap-4 justify-between">
				{children}
			</div>
		</article>
    )
}

function removeFitting(fitting: HydraulicFitting, setFittings: setFittingsProps) {
    removeFittingService(fitting.id);
	toast("Peça removida com sucesso!");
    setFittings(getFittings());
}

function Fitting({fitting, setFittings}: {fitting: HydraulicFitting, setFittings: setFittingsProps}) {
    return (
      <div data-id={fitting.id} className="border shadow-sm hover:shadow-lg hover:shadow-stone-300 transition-shadow p-4 rounded-lg border-stone-300 flex flex-col gap-2 flex-1 min-w-[200px] text-center">
        <h2 className="bg-stone-200 rounded">{fitting.name}</h2>
        <p className="bg-stone-100 rounded">{fitting.abreviation}</p>
        <p className="bg-stone-100 rounded">{fitting.relativeWeight}</p>
        <button onClick={() => {removeFitting(fitting, setFittings)}} className="btn-danger">Excluir</button>
      </div>
    )
}

function FittingsEditor() {
    initFittingsStorage();
	const [fittings, setFittings] = useState(getFittings());

	return (
		<section className="container mx-auto pb-4">
			<Toaster />
			<h1 className="my-4">Menu de Edição de Peças Hidráulicas</h1>
			<FittingsSettings setFittings={setFittings} />
			<Fittings>
				{fittings.map((fitting) => (
					<Fitting key={fitting.id} fitting={fitting} setFittings={setFittings} />
				))}
			</Fittings>
		</section>
	)
}

export default FittingsEditor