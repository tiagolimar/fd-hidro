import React from 'react'
import Table from '@/components/Table/Table'

function LevelsEditor() {
    const levels = [
        {
            id: 1,
            name: "Nível 1",
            height: 1
        },
        {
            id: 2,
            name: "Nível 2",
            height: 2
        },
        {
            id: 3,
            name: "Nível 3",
            height: 3
        }
    ]
  return (
    <section className="container mx-auto">
        <h1 className="my-4">Níveis</h1>
        <Table data={levels} columns={[
            {id: "name", name: "Nome"},
            {id: "height", name: "Altura"}
        ]}/>
    </section>
  )
}

export default LevelsEditor