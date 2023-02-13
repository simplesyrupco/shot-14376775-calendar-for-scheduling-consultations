import { FC, PropsWithChildren } from 'react'
import { Inter } from '@next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Calendar for scheduling consultations</title>
                <meta
                    name="description"
                    content="A code implementation of dribbble shot #14376775"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={inter.className}>{children}</div>
        </>
    )
}
