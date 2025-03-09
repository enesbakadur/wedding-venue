import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'remixicon/fonts/remixicon.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Wedding Venue',
    description: 'Your perfect wedding venue',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='stylesheet'
                    href='https://use.typekit.net/vbe8vjq.css'
                />
                <link
                    rel='stylesheet'
                    href='https://use.typekit.net/fkb0lft.css'
                />
                <link
                    rel='stylesheet'
                    href='https://use.typekit.net/zhe6gmk.css'
                />
            </head>
            <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
