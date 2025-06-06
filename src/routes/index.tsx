import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '../pages/Layout/Layout'
import Home from '../pages/Home'
import FittingsEditor from '../pages/FittingEditor/FittingsEditor'
import FittingSetEditor from '../pages/FittingSetEditor/FittingSetEditor'
import NoPage from '../pages/NoPage'

export function RoutesApp (){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pecas" element={<FittingsEditor />} />
          <Route path="conjuntos" element={<FittingSetEditor />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}