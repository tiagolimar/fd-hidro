import { removeFittingSetService } from "../../service/fittingsServiceSet";
import { useState } from "react";
import type { setFittingsSetsProps } from "./setFittingsSetsProps";
import { Toaster, toast } from 'sonner';
import CardContainer from "../../components/Cards/CardContainer";
import Card from "../../components/Cards/Card";
import { getFittingsSets } from "../../service/fittingsServiceSet";
import type { FittingSet } from "@/models/FittingSetType";
import { getFittingByIds } from "../../service/fittingsService";
import type { HydraulicFitting } from "@/models/FittingType";

function removeFittingSet(fittingSet: FittingSet, setFittingsSets: setFittingsSetsProps) {
	if (confirm("Tem certeza que deseja remover este conjunto de peças?")) {
		removeFittingSetService(fittingSet.id);
		toast("Conjunto de peças removido com sucesso!"	);
		setFittingsSets(getFittingsSets());
	}
}

function FittingSetCard ({fittingSet, setFittingsSets}: {fittingSet: FittingSet, setFittingsSets: setFittingsSetsProps}) {
    const fittings = getFittingByIds(fittingSet.fittingsIds);
    return (
      <Card data-id={fittingSet.id}>
        <h2 className="bg-stone-200 rounded">{fittingSet.name}</h2>
        <p className="bg-stone-100 rounded">{fittings.map((fitting: HydraulicFitting) => fitting.abreviation).join(", ")}</p>
        <button className="btn-primary">Editar</button>
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
				<CardAdd title="Adicionar Conjunto de Peças" onClick={()=>{}} />
				{fittingsSets.length > 0 ? 
                    fittingsSets.map((fittingSet) => (
					    <FittingSetCard key={fittingSet.id} fittingSet={fittingSet} setFittingsSets={setFittingsSets} />
				    )) : <p>Nenhum conjunto de peças cadastrado</p>
                }
			</CardContainer>
		</section>
	)
}