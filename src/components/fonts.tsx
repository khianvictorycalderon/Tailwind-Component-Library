interface RegularTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    className?: string;
}

export default function RegularText({ children, className }: RegularTextProps) {
    return (
        <p className={`text-sm md:text-base lg:text-base ${className}`}>
            {children}
        </p>
    )
}