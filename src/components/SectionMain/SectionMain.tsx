export default function SectionMain({ children }: { children: React.ReactNode }) {
    return (
        <section className="container mx-auto pb-4 px-8">
            {children}
        </section>
    )
}