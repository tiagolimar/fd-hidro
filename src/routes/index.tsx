import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/pages/Layout/Layout'
import Home from '@/pages/Home'

import EquipamentsEditor from '@/pages/EquipamentsEditor'
import EquipamentSetsEditor from '@/pages/EquipamentSetsEditor'
import LevelsEditor from '@/pages/LevelsEditor'
import DownPipesEditor from '@/pages/DownPipesEditor'

import NoPage from '@/pages/NoPage'

export function RoutesApp (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pecas" element={<EquipamentsEditor />} />
          <Route path="conjuntos" element={<EquipamentSetsEditor />} />
          <Route path="pavimentos" element={<LevelsEditor />} />
          <Route path="prumadas" element={<DownPipesEditor />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}