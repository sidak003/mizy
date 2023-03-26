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
                    mobile repairs<br/>with
                    <span className={styles.headlineAccent}>{' mizy'}</span>
                </h1>
                <div className={styles.headPara}>
                    <p className={styles.para}>
                        We are introducing a new pick and drop mobile repair service
                        with a promise to be atmost honest to you when its about your most personal thing.<br/>
                        For SRMites, By SRMites
                    </p>
                </div>
                <SearchWrapper />
            </div>
            {children}
        </div>
    )
}