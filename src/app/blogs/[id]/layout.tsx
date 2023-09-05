import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'View detail',
    description: 'Description',

}
export default function ViewDetailLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}
