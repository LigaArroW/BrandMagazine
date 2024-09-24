import React from 'react';
import clsx from 'clsx';

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'ul' | 'ol' | 'b';
    children: React.ReactNode;
    className?: string;
}

export const Typography = ({
    variant = 'p',
    children,
    className,
    ...props
}: TypographyProps) => {
    const Component = variant;

    return (
        <Component className={clsx(`typography typography--${variant}`, className)} {...props}>
            {children}
        </Component>
    );
};
