import { removeFittingSetService } from "../../service/fittingsServiceSet";
import { useState } from "react";
import type { setFittingsSetsProps } from "./setFittingsSetsProps";
import { Toaster, toast } from 'sonner';
import CardContainer from "../../components/CardContainer";
import Card from "../../components/Card";
import { getFittingsSets } from "../../service/fittingsServiceSet";
import type { HydraulicFittingSet } from "@/types/HydraulicFittingSetType";

function removeFittingSet(fittingSet: HydraulicFittingSet, setFittingsSets: setFittingsSetsProps) {
	if (confirm("Tem certeza que deseja remover este conjunto de peças?")) {
		removeFittingSetService(fittingSet.id);
		toast("Conjunto de peças removido com sucesso!");
		setFittingsSets(getFittingsSets());
	}
}

function FittingSetCard ({fittingSet, setFittingsSets}: {fittingSet: HydraulicFittingSet, setFittingsSets: setFittingsSetsProps}) {
    return (
      <Card data-id={fittingSet.id}>
        <h2 className="bg-stone-200 rounded">{fittingSet.name}</h2>
        <p className="bg-stone-100 rounded">{fittingSet.fittings.length}</p>
        <button onClick={() => {removeFittingSet(fittingSet, setFittingsSets)}} className="btn-danger">Excluir</button>
      </Card>
    )
}

export default function FittingsEditor() {
	const [fittingsSets, setFittingsSets] = useState(getFittingsSets());

	return (
		<section className="container mx-auto pb-4">
			<Toaster />
			<h1 className="my-4">Menu de Edição de Conjunto de Peças</h1>
			{/* <FittingsSetSettings setFittingsSets={setFittingsSets} /> */}
			<CardContainer>
				{fittingsSets.length > 0 ? 
                    fittingsSets.map((fittingSet) => (
					    <FittingSetCard key={fittingSet.id} fittingSet={fittingSet} setFittingsSets={setFittingsSets} />
				)) : <p>Nenhum conjunto de peças cadastrado</p>}
			</CardContainer>
		</section>
	)
}