export default function CardContainer({children}: {children: React.ReactNode}) {
    return (
        <article>
			<div className="container px-4 flex flex-wrap gap-4 justify-between">
				{children}
			</div>
		</article>
    )
}
