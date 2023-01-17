import styles from '../../styles/styles.module.css'
import SearchBar from '../../components/SearchBar'
import Image from 'next/image'

export default function HomeLayout({ children }) {
    return (
        <div>
            <div className={styles.hero}>
                <Image className={styles.bgPattern1} alt={''} src={'/group-6.svg'} width={1} height={1}/>
                <p className={styles.illustration}>Copppyyywrite</p>
                <Image className={styles.illustration} alt={''} src={'/phone-maintenanceamico-1.svg'} width={1} height={1}/>
                <h1 className={styles.headline}>
                    Mobile Repairs<br/>Made
                    <span className={styles.headlineAccent}>{' izy'}</span>
                </h1>
                <Image className={styles.linePattern} alt={''} src={'/line-1.svg'} width={1} height={1} />
                <div className={styles.headPara}>
                    <p className={styles.para}>
                    Mizy is a new in town pick and drop mobile repair service.
                    We aim to bring to you the most convenient hassle
                    free experience when its hard on your phone.
                    For SRMites, By SRMites
                    </p>
                </div>
                <SearchBar />
            </div>
            {children}
        </div>
    )
}