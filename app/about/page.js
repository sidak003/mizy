import Image from 'next/image'
import styles from './about.module.css'
import { faCrosshairs, faHeart, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function About() {


    return (
        <div className={styles.about}>
            <div className={styles.rec1}/>
            <div className={styles.rec2}/>
            <div className={styles.rec3}/>
            <div className={styles.rec4}/>
            <div className={styles.rec5}/>
            <div className={styles.rec6}/>
            <Image className={styles.bgPattern1} alt={''} src={'/group-4.svg'} width={1} height={1} />
            <div className={styles.aboutHero}>
                <FontAwesomeIcon className={styles.targetIcon} icon={faCrosshairs} />
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
                <FontAwesomeIcon className={styles.heartIcon} icon={faHeart} />
                <h3 className={styles.subHeading1}>Meet the Co's</h3>
                <div className={styles.cosSection}>
                    <div className={styles.cof}>
                        <Image className={styles.cofImage} alt={''} src={'/image-1@2x.png'} width={500} height={500} />
                        <div className={styles.cofName}>Sidak Singh</div>
                    </div>
                    <div className={styles.cof}>
                        <Image className={styles.cofImage} alt={''} src={'/image-2@2x.png'} width={500} height={500} />
                        <div className={styles.cofName}>Arish Ali</div>
                    </div>
                </div>
            </div>
            <div className={styles.sec2}>
                <h2 className={styles.subHeading2}>Tell Us To Improve</h2>
                <div className={styles.feedbackSection}>
                    <div className={styles.field}>
                        <label className={styles.fieldName}>Name</label>
                        <input className={styles.fieldInput} type={'text'} placeholder={'Enter your name'} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.fieldName}>@Email</label>
                        <input className={styles.fieldInput} type={'email'} placeholder={'Enter your email'} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.fieldName}>Feedback</label>
                        <textarea className={styles.feedInput} type={'text'} maxLength={256} placeholder={'We would love to hear you out............\n(only 256 characters)'} />
                    </div>
                </div>
                <div className={styles.sendButton} >
                    <FontAwesomeIcon className={styles.sendButtonIcon} icon={faPaperPlane} />
                </div>
            </div>
            <div className={styles.attribution}>
                <span>
                    {'Illustration used in the home page are from '}
                    <Link href={'https://storyset.com/'}>Storyset</Link>
                </span>
            </div>
        </div>
    )
}