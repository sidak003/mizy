import styles from './Home.module.css'
import Image from 'next/image'
import SearchWrapper from './SearchWrapper'


export default async function HomeLayout({ children }) {
    return (
        <div>
            <div className={styles.hero}>
                <Image className={styles.bgPattern1} alt={'Background'} src={'/background/bgPattern1Home.svg'} width={1} height={1}/>
                <Image className={styles.illustration} alt={'Mobile Repair Illustration'} src={'/mobileRepair.svg'} width={1} height={1}/>
                <h1 className={styles.headline}>
                    Mobile Repairs<br/>Made
                    <span className={styles.headlineAccent}>{' izy'}</span>
                </h1>
                <Image className={styles.linePattern} alt={'Background'} src={'/background/line.svg'} width={1} height={1} />
                <div className={styles.headPara}>
                    <p className={styles.para}>
                        Mizy is a new in town pick and drop mobile repair service.
                        We aim to bring to you the most convenient hassle
                        free experience when its hard on your phone.
                        For SRMites, By SRMites
                    </p>
                </div>
                <SearchWrapper />
            </div>
            {children}
        </div>
    )
}