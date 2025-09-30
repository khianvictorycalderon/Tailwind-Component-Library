import React from "react";

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

export function BaseText({ children, className }: RegularTextProps) {
  return (
    <p className={`text-sm md:text-base lg:text-base ${className || ""}`}>
      {children}
    </p>
  );
}

export function SmallText({ children, className }: SmallerTextProps) {
  return (
    <span className={`text-xs md:text-sm lg:text-sm ${className || ""}`}>
      {children}
    </span>
  );
}

// ===== Headings =====

export function HeadingText({ children, className }: HeadingTextProps) {
  return (
    <h1
      className={`text-base md:text-lg lg:text-xl font-bold tracking-tight ${
        className || ""
      }`}
    >
      {children}
    </h1>
  );
}

export function SubHeadingText({ children, className }: HeadingTextProps) {
  return (
    <h2
      className={`text-lg md:text-xl lg:text-2xl font-semibold ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
}

export function HeroHeadingText({ children, className }: HeadingTextProps) {
  return (
    <h1
      className={`text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
        className || ""
      }`}
    >
      {children}
    </h1>
  );
}

export function HeroSubHeadingText({ children, className }: HeadingTextProps) {
  return (
    <h2
      className={`text-lg md:text-xl lg:text-2xl text-gray-600 font-medium ${
        className || ""
      }`}
    >
      {children}
    </h2>
  );
}

// ===== Utility Texts =====

export function CaptionText({ children, className }: SmallerTextProps) {
  return (
    <span
      className={`text-xs text-gray-500 italic ${className || ""}`}
    >
      {children}
    </span>
  );
}

export function OverlineText({ children, className }: SmallerTextProps) {
  return (
    <span
      className={`text-[10px] md:text-xs uppercase tracking-wide text-gray-400 ${
        className || ""
      }`}
    >
      {children}
    </span>
  );
}
