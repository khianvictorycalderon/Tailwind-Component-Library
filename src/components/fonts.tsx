interface RegularTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
    className?: string;
}

// Regular Texts

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

// Heading Texts

interface HeadingTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    className?: string;
}

export function HeadingText({ children, className}: HeadingTextProps) {
    return (
        <h1 className={`text-base md:text-lg lg:text-xl font-bold tracking-tight ${className}`}>
            {children}
        </h1>
    )
}