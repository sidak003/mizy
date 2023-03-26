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
                <h1 className={styles.headline}>what's mizy?</h1>
                <p className={styles.headPara}>
                    We are a company on a mission to inspire people like
                    you to do crazy things. Not to do boring, monotonous,
                    repetitive things that have no meaning, but do
                    things that change the world around you and make
                    your life feel worth living.<br/>
                    So how do we do this? simple.....<br/>
                    by leading the way ourselves.
                    Currently, we focus on making some waves in the mobile repair industry.
                </p>
            </div>
            <div className={styles.sec1}>
                <HiHeart className={styles.heartIcon} />
                <h3 className={styles.subHeading1}>meet the co's</h3>
                <div className={styles.cosSection}>
                    <div className={styles.cof}>
                        <Image className={styles.cofImage} alt={'Co-Founder'} src={'/cof1.jpg'} width={320} height={320} />
                        <div className={styles.cofName}>Sidak</div>
                    </div>
                    <div className={styles.cof}>
                        <Image className={styles.cofImage} alt={'Co-Founder'} src={'/cof2.jpg'} width={320} height={320} />
                        <div className={styles.cofName}>Arish🕋</div>
                    </div>
                </div>
            </div>
            <div className={styles.sec2}>
                <h2 className={styles.subHeading2}>tell us to improve</h2>
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