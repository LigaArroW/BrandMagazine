import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Replik Store",
    description: "Зеркальные реплики мировых брендов",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
