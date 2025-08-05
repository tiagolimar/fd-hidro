import type { HydraulicFitting } from "@/models/FittingType";
import { addFittingService, generateNextId, getFittings, initFittingsStorage } from "../../service/fittingsService";
import { Toaster, toast } from 'sonner';
import { useState } from "react";
import type { setFittingsProps } from "./setFittingsProps";

function resetFittings(setFittings: setFittingsProps) {
    if (confirm("Tem certeza que deseja resetar as peças?")) {
        localStorage.removeItem("hydraulicFittings");
        initFittingsStorage();
        setFittings(getFittings());
        toast("Peças resetadas com sucesso!");
    }
}

function addFitting(fitting: HydraulicFitting, setFittings: setFittingsProps) {
    addFittingService(fitting);
    setFittings(getFittings());
    console.log(fitting)
    toast("Peça adicionada com sucesso!");
}

function AddFittingModal({setFittings, showModal, setShowModal}: {setFittings: setFittingsProps, showModal: boolean, setShowModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [fitting, setFitting] = useState({
        id: 0,
        name: "Peça",
        abreviation: "PC",
        relativeWeight: 1,
    } as HydraulicFitting);
    
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFitting({
            ...fitting,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        fitting.id = generateNextId();
        addFitting(fitting, setFittings);
        setShowModal(false);
    }
    
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#00000060] z-10" style={{ display: showModal ? "block" : "none" }}>
            <form className="bg-white p-4 rounded w-1/2 flex flex-col gap-4 mx-auto mt-8">
                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input type="text" placeholder="Peça" required name="name" onChange={handleChange} value={fitting.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="abreviation">Abreviação</label>
                    <input type="text" placeholder="PC" required name="abreviation" onChange={handleChange} value={fitting.abreviation}/>
                </div>
                <div className="form-group">
                    <label htmlFor="relativeWeight">Peso Relativo</label>
                    <input type="number" placeholder="1" required name="relativeWeight" onChange={handleChange} value={fitting.relativeWeight}/>
                </div>
                <div className="flex gap-4">
                    <button className="flex-1 btn-primary" type="submit" onClick={(e) => handleSubmit(e)}>Adicionar</button>
                    <button className="flex-1 btn-danger" type="button" onClick={() => setShowModal(false)}>Fechar</button>
                </div>
            </form>
        </div>
    )
}

export default function FittingsSettings({setFittings}: {setFittings: setFittingsProps} ) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex gap-4 py-4 mb-4 border-b border-t border-stone-500">
            <Toaster />
            <button className="flex-1 btn-primary" onClick={() => setShowModal(true)}>Adicionar Peça</button>	
            <button className="flex-1 btn-secondary" onClick={() => resetFittings(setFittings)}>Resetar Peças</button>	
            <AddFittingModal setFittings={setFittings} showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}
