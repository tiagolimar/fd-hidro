import { Toaster } from 'sonner';
import CardContainer from '@/components/Cards/CardContainer';
import CardAdd from '@/components/Cards/CardAdd';

function PipesEditor() {

	return (
		<section className="container mx-auto pb-4">
			<Toaster />
			<h1 className="my-4">Menu de Edição de Prumadas</h1>
			<CardContainer>
				<CardAdd title="Adicionar Prumada" />
			</CardContainer>
		</section>
	)
}

export default PipesEditor