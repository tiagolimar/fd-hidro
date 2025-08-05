import type { HydraulicFitting } from "@/types/FittingType";
import { removeFittingService, getFittings, initFittingsStorage } from "../../service/fittingsService";
import FittingsSettings from "./FittingsSettings";
import { useState } from "react";
import type { setFittingsProps } from "./setFittingsProps";
import { Toaster, toast } from 'sonner';
import CardContainer from "@/components/Cards/CardContainer";
import Card from "@/components/Cards/Card";
import CardAdd from "@/components/Cards/CardAdd";

function removeFitting(fitting: HydraulicFitting, setFittings: setFittingsProps) {
	if (confirm("Tem certeza que deseja remover esta peça?")) {
		removeFittingService(fitting.id);
		toast("Peça removida com sucesso!");
		setFittings(getFittings());
	}
}

function FittingCard ({fitting, setFittings}: {fitting: HydraulicFitting, setFittings: setFittingsProps}) {
    return (
      <Card data-id={fitting.id} className="hover:border-stone-500">
        <h2 className="bg-stone-200 rounded">{fitting.name}</h2>
        <p className="bg-stone-100 rounded">{fitting.abreviation}</p>
        <p className="bg-stone-100 rounded">{fitting.relativeWeight}</p>
        <button onClick={() => {removeFitting(fitting, setFittings)}} className="btn-danger">Excluir</button>
      </Card>
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
			<CardContainer>
				<CardAdd title="Adicionar Peça" />
				{fittings.map((fitting) => (
					<FittingCard key={fitting.id} fitting={fitting} setFittings={setFittings} />
				))}
			</CardContainer>
		</section>
	)
}

export default FittingsEditor