interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    debugMode?: boolean;
}

export default function SectionContainer({ children, className, debugMode = false, ...props }: SectionContainerProps) {
    return (
        <section className={`px-4 md:px-8 lg:px-32 overflow-hidden ${className} ${debugMode && "border-2 border-red-500" }`} {...props}>
            <div className={`max-w-7xl mx-auto ${debugMode && "border-2 border-blue-500"}`}>
                {children}
            </div>
        </section>
    )
}