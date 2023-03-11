import styles from './About.module.css'
import Image from 'next/image'
import { HiBolt, HiHeart, HiPaperAirplane } from 'react-icons/hi2'
import Link from 'next/link'
import FeedbackForm from './FeedbackForm'

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.rec1} />
            <div className={styles.rec2} />
            <div className={styles.rec3} />
            <div className={styles.rec4} />
            <div className={styles.rec5} />
            <div className={styles.rec6} />
            <Image className={styles.bgPattern1} alt={'Background'} src={'/background/bgPatternAbout.svg'} width={1} height={1} />
            <div className={styles.hero}>
                <HiBolt className={styles.boltIcon} />
                <h1 className={styles.headline}>What's Mizy?</h1>
                <p className={styles.headPara}>
                    You know its pretty tough to walk to a repair shop, 
                    tell them the whole tragedy the phone got through, 
                    battle for the price, bla bla bla !!!
                    So we thought of an angel who could do this for us. 
                    Luckily we couldn't find anywhere nearby, 
                    so we created one ourseleves.
                    Mizy is a new-age startup co-founded by two brats 
                    currently reared by SRMIST.
                </p>
            </div>
            <div className={styles.sec1}>
                <HiHeart className={styles.heartIcon} />
                <h3 className={styles.subHeading1}>Meet the Co's</h3>
                <div className={styles.cosSection}>
                    <div className={styles.cof}>
                        <Image className={styles.cofImage} alt={'Co-Founder'} src={'/cof1.jpg'} width={320} height={320} />
                        <div className={styles.cofName}>Sidak</div>
                    </div>
                    <div className={styles.cof}>
                        <Image className={styles.cofImage} alt={'Co-Founder'} src={'/cof2.jpg'} width={320} height={320} />
                        <div className={styles.cofName}>Arish</div>
                    </div>
                </div>
            </div>
            <div className={styles.sec2}>
                <h2 className={styles.subHeading2}>Tell Us To Improve</h2>
                <FeedbackForm />
                <button className={styles.sendButton} form={'feedbackForm'} type={'submit'}>
                    <HiPaperAirplane className={styles.sendButtonIcon} />
                </button>
            </div>
            <div className={styles.attribution}>
                <span>
                    {'Illustration used in the home page are from '}
                    <Link href={'https://storyset.com/'} target={'_blank'}>Storyset</Link>
                </span>
            </div>
        </div>
    )
}