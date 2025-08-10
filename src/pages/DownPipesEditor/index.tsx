import { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import type { DownPipe } from '@/models/DownPipe';
import DownPipeRepository from '@/repositories/DownPipeRepository';
import Table from '@/components/Table/Table';
import SectionMain from '@/components/SectionMain/SectionMain';

export default function DownPipesEditor() {
	const [downpipes, setDownpipes] = useState<DownPipe[]>([]);
	
	useEffect(() => {
		DownPipeRepository.getAll().then(setDownpipes);
	}, []);
	
	return (
		<SectionMain>
			<Toaster />
			<h1 className="my-4">Prumadas</h1>
			<Table data={downpipes} />
		</SectionMain>
	)
}