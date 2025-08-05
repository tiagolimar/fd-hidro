export default function CardContainer({children}: {children: React.ReactNode}) {
    return (
        <article>
			<div className="container px-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
				{children}
			</div>
		</article>
    )
}

// "px-4 flex flex-wrap gap-4 justify-between"