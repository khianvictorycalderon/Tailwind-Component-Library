interface RegularTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    className?: string;
}

export function BaseText({ children, className }: RegularTextProps) {
    return (
        <p className={`text-sm md:text-base lg:text-base ${className}`}>
            {children}
        </p>
    )
}

interface SmallerTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
    className?: string;
}

export function SmallText({ children, className }: SmallerTextProps) {
    return (
        <span className={`text-xs md:text-sm lg:text-sm ${className}`}>
            {children}
        </span>
    )
}