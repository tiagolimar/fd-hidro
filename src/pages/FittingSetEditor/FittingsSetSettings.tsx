import type { HydraulicFittingSet } from "@/types/FittingSetType";
import { addFittingSetService, generateNextId, getFittingsSets, initFittingsSetsStorage } from "../../service/fittingsServiceSet";
import { Toaster, toast } from 'sonner';
import { useState } from "react";
import type { setFittingsSetsProps } from "./setFittingsSetsProps";

function resetFittings(setFittingsSets: setFittingsSetsProps) {
    if (confirm("Tem certeza que deseja resetar as peças?")) {
        localStorage.removeItem("hydraulicFittings");
        initFittingsStorage();
        setFittings(getFittings());
        toast("Peças resetadas com sucesso!");
    }
}

function addFitting(fittingSet: HydraulicFittingSet, setFittingsSets: setFittingsSetsProps) {
    addFittingService(fittingSet);
    setFittingsSets(getFittingsSets());
    console.log(fittingSet)
    toast("Peça adicionada com sucesso!");
}

function AddFittingSetModal({setFittingsSets, showModal, setShowModal}: {setFittingsSets: setFittingsSetsProps, showModal: boolean, setShowModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [fittingSet, setFittingSet] = useState({
        id: 0,
        name: "Conjunto de Peças",
        fittingsIds: [],
    } as HydraulicFittingSet);
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFittingSet({
            ...fittingSet,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        fittingSet.id = generateNextId();
        addFitting(fittingSet, setFittingsSets);
        setShowModal(false);
    }
    
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000060] z-10" style={{ display: showModal ? "block" : "none" }}>
            <form className="bg-white p-4 rounded w-1/2 flex flex-col gap-4 mx-auto mt-8">
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" placeholder="Peça" required name="name" onChange={handleChange} value={fittingSet.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="abreviation">Abreviação</label>
                    <input type="text" placeholder="PC" required name="abreviation" onChange={handleChange} value={fittingSet.abreviation}/>
                </div>
                <div className="flex gap-4">
                    <button className="flex-1 btn-primary" type="submit" onClick={(e) => handleSubmit(e)}>Adicionar</button>
                    <button className="flex-1 btn-danger" type="button" onClick={() => setShowModal(false)}>Fechar</button>
                </div>
            </form>
        </div>
    )
}

export default function FittingsSettings( {setFittingsSets}: {setFittingsSets: setFittingsSetsProps} ) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex gap-4 py-4 mb-4 border-b border-t border-stone-500">
            <Toaster />
            <button className="flex-1 btn-primary" onClick={() => setShowModal(true)}>Adicionar Peça</button>	
            <button className="flex-1 btn-secondary" onClick={() => resetFittings(setFittingsSets)}>Resetar Peças</button>	
            <AddFittingSetModal setFittingsSets={setFittingsSets} showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}
