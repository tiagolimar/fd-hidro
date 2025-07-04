import React from 'react'

type CardProps = {
    className?: string;
    children: React.ReactNode,
    "data-id"?: number
}
function Card(props : CardProps) {
    const {children, "data-id": dataId, className} = props;
    return (
        <div data-id={dataId} className={`border shadow-sm hover:shadow-lg hover:shadow-stone-300 transition-shadow p-4 rounded-lg border-stone-300 flex flex-col gap-2 flex-1 min-w-[200px] text-center ${className}`}>
            {children}
        </div>
    )
}

export default Card