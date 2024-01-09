import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google';
import './globals.css'

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['Arial', 'sans-serif'],
});

export const metadata: Metadata = {
    title: 'Generic stack',
    description: 'This is a tutorial project created to learn the generic topic in TypeScript.',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={montserrat.className}>{children}</body>
        </html>
    )
}
