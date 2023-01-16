import Link from 'next/link'
import header from './header.module.css'

export default function Header() {

    return (
        <div className={header.header}>
            <Link href={'/'} className={header.logo}>Mizy</Link>
            <div className={header.navbar}>
                <a href={'/#trackOrder'}>Track Order</a>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
            </div>
        </div>
    )
}