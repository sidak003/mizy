import styles from './OrderSummary.module.css'
import { HiGiftTop } from 'react-icons/hi2'
import Image from 'next/image'
import Link from 'next/link'

export default function OrderSummary() {
    return (
        <div className={styles.order}>
            <div className={styles.rec1} />
            <div className={styles.rec2} />
            <div className={styles.rec3} />
            <div className={styles.rec4} />
            <Image className={styles.bgPattern1} alt={'Background'} src={'/background/bgPatternOrderSummary.svg'} width={1} height={1} />
            <div className={styles.hero}>
                <HiGiftTop className={styles.giftIcon} />
                <h1 className={styles.headline}>congrats!</h1>
                <p className={styles.headPara}>
                    You have successfully placed an order with us.<br/>
                    Will call you within next <b>2hrs</b> on your registered number to pick your mobile phone.<br/><br/>
                    If you have any queries regarding your order or for cancelling your order just contact us via links provided on home page.<br/>
                    happy mizy :)
                </p>
                <div className={styles.end}>
                    <div className={styles.endOfPage}>end of page</div>
                    <div className={styles.endLine}>
                    <span>
                        {'You have reached the end of page visit '}
                        <Link className={styles.accent} href={'/'}>Home</Link>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}