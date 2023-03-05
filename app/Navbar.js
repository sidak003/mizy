import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {

    return (
        <div className={styles.navbar}>
            <Link href={'/'} className={styles.logoLink}>
                <Image className={styles.logo} alt={'Mizy Logo'} src={'./mizy.svg'} width={50} height={50} />
                {'Mizy'}
            </Link>
            <div className={styles.links}>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
            </div>
        </div>
    )
}