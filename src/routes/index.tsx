import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import Layout from '@/pages/Layout/Layout';
import Home from '@/pages/Home';

import EquipamentsListPage from '@/pages/Equipaments/ListPage';
import EquipamentCreatePage from '@/pages/Equipaments/CreatePage';
import EquipamentEditPage from '@/pages/Equipaments/EditPage';
import EquipamentSetsEditor from '@/pages/EquipamentSetsEditor';
import LevelsListPage from '@/pages/Levels/ListPage';
import LevelCreatePage from '@/pages/Levels/CreatePage';
import LevelEditPage from '@/pages/Levels/EditPage';
import DownPipesEditor from '@/pages/DownPipesEditor';

import NoPage from '@/pages/NoPage';

export function RoutesApp (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="equipaments" element={<Outlet />}> 
                        <Route index element={<EquipamentsListPage />} /> 
                        <Route path="new" element={<EquipamentCreatePage />} /> 
                        <Route path=":id" element={<EquipamentEditPage />} /> 
                    </Route> 
                    <Route path="levels" element={<Outlet />}> 
                        <Route index element={<LevelsListPage />} /> 
                        <Route path="new" element={<LevelCreatePage />} /> 
                        <Route path=":id" element={<LevelEditPage />} /> 
                    </Route> 
                    <Route path="conjuntos" element={<EquipamentSetsEditor />} />
                    <Route path="prumadas" element={<DownPipesEditor />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
