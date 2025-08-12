import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Layout from '@/pages/Layout/Layout';
import Home from '@/pages/Home';

import EquipamentsList from '@/pages/Equipaments';
import EquipamentForm from '@/pages/Equipaments/Form';
import EquipamentSetsEditor from '@/pages/EquipamentSetsEditor';
import LevelsList from '@/pages/Levels';
import LevelForm from '@/pages/Levels/Form';
import DownPipesEditor from '@/pages/DownPipesEditor';

import NoPage from '@/pages/NoPage';

export function RoutesApp (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="equipaments" element={<Outlet />}>
                        <Route index element={<EquipamentsList />} />
                        <Route path="new" element={<EquipamentForm />} />
                        <Route path=":id" element={<EquipamentForm />} />
                    </Route>
                    <Route path="levels" element={<Outlet />}>
                        <Route index element={<LevelsList />} />
                        <Route path="new" element={<LevelForm />} />
                        <Route path=":id" element={<LevelForm />} />
                    </Route>
                    <Route path="conjuntos" element={<EquipamentSetsEditor />} />
                    <Route path="prumadas" element={<DownPipesEditor />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
