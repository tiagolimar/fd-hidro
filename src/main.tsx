import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RoutesApp } from '@/routes/index'
import './index.css'
import { db } from '@/db/db'
import { runSeeds } from '@/seeds'

runSeeds(db)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesApp />
  </StrictMode>,
)
