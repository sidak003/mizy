import './Globals.css'
import Navbar from './Navbar'
import { Montserrat, Noto_Sans } from 'next/font/google'


export const metadata = {
    title: 'Mobile Repairs in SRM | mizy',
    applicationName: 'mizy',
    description: 'We are introducing a new pick and drop mobile repair service with a promise to be atmost honest to you when its about your most personal thing. For SRMites, By SRMites',
    keywords: ['mizy', 'mobile repair', 'srm', 'srm university', 'phone repair', 'mobile shop', 'mobile repair shop near me'],
    themeColor: '#ffffff',
    manifest: '/site.webmanifest',
    icons: {
        icon: [
            { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ],
        apple: { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    },
    verification: {
        google: 'XQj-bJZhDJA8XMXrCuMsWiUDBVnRcYCzGujrUt3J4KU',
    },
}


const mont = Montserrat({
    weight : ['400', '500', '700'],
    subsets : ['latin'],
    display : 'swap',
    variable : '--mont'
})

const noto = Noto_Sans({
    weight : ['400'],
    subsets : ['latin'],
    display : 'swap',
    variable : '--noto'
})


export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mont.variable} ${noto.variable}`}>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
