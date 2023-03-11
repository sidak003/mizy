import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <Link href={'/'} className={styles.logoLink}>
                <Image className={styles.logo} alt={'mizy Logo'} src={'/mizy-rounded.png'} width={100} height={100} />
                {'mizy'}
            </Link>
            <div className={styles.links}>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
            </div>
        </div>
    )
}