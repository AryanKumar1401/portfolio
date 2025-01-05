'use client';


type RootLayoutProps = {
    children: React.ReactNode;
};

export const RootLayoutClient = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>

                {children}

            </body>
        </html>
    );
};