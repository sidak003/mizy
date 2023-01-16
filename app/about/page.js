import Image from 'next/image'
import styles from './about.module.css'

export default function About() {


    return (
        <div className={styles.about}>
            <div className={styles.rec1}/>
            <div className={styles.rec2}/>
            <div className={styles.rec3}/>
            <div className={styles.rec4}/>
            <div className={styles.rec5}/>
            <div className={styles.rec6}/>
            <div className={styles.aboutHero}>
                <b className={styles.headline}>What's Mizy?</b>
                <p className={styles.headPara}>
                    You know its pretty tough to walk to a repair shop, 
                    tell them the whole tragedy the phone got through, 
                    battle for the price, bla bla bla !!!
                    So we thought of an angel who could do this for us. 
                    Luckily we couldn't find anywhere nearby, 
                    so we created one ourseleves.
                    Mizy is a new-age startup co-founded by two brats 
                    currently reared by SRMIST.</p>
            </div>
            <div className={styles.sec1}>
                <b className={styles.subHeading1}>Meet the Co's</b>
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
                <b className={styles.subHeading2}>Tell Us To Improve</b>
                <div className={styles.feedbackSection}>
                    <div className={styles.field}>
                        <b className={styles.fieldName}>Name</b>
                        <input className={styles.fieldInput} type={'text'} placeholder={'Enter your name'} />
                    </div>
                    <div className={styles.field}>
                        <b className={styles.fieldName}>@Email</b>
                        <input className={styles.fieldInput} type={'email'} placeholder={'Enter your email'} />
                    </div>
                    <div className={styles.field}>
                        <b className={styles.fieldName}>Feedback</b>
                        <input className={styles.fieldInput} type={'text'} placeholder={'We would love to hear you out............'} />
                    </div>
                </div>
            </div>
        </div>
    )
}