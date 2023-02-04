import styles from './Navbar.module.css'
import Link from 'next/link'

export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <Link href={'/'} className={styles.logo}>Mizy</Link>
            <div className={styles.links}>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
            </div>
        </div>
    )
}