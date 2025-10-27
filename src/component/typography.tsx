import React from "react";

// You can customize this depending on your project
// ===== Base Props Interfaces =====

// Paragraph text props
interface RegularTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
}

// Inline small text props
interface SmallerTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

// Heading text props
interface HeadingTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
}

// ===== Base Texts =====

export function BaseText({ children, className, ...props }: RegularTextProps) {
  return (
    <p className={`text-sm md:text-base ${className || ""}`} {...props}>
      {children}
    </p>
  );
}

export function SmallText({ children, className, ...props }: SmallerTextProps) {
  return (
    <span className={`text-xs md:text-sm ${className || ""}`} {...props}>
      {children}
    </span>
  );
}

// ===== Headings =====

export function HeadingText({ children, className, ...props }: HeadingTextProps) {
  return (
    <h2
      className={`text-base md:text-lg lg:text-xl font-bold tracking-tight ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SubHeadingText({ children, className, ...props }: HeadingTextProps) {
  return (
    <h2
      className={`text-lg md:text-xl lg:text-2xl font-semibold ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function HeroHeadingText({ children, className, ...props }: HeadingTextProps) {
  return (
    <h1
      className={`text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function HeroSubHeadingText({ children, className, ...props }: HeadingTextProps) {
  return (
    <h2
      className={`text-lg md:text-xl lg:text-2xl text-gray-600 font-medium ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </h2>
  );
}

// ===== Utility Texts =====

export function CaptionText({ children, className, ...props }: SmallerTextProps) {
  return (
    <span
      className={`text-xs text-gray-500 italic ${className || ""}`}
      {...props}
    >
      {children}
    </span>
  );
}

export function OverlineText({ children, className, ...props }: SmallerTextProps) {
  return (
    <span
      className={`text-[10px] md:text-xs uppercase tracking-wide text-gray-400 ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </span>
  );
}
