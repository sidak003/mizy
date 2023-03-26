import styles from './Home.module.css'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import { HiMapPin, HiPhone, HiFaceSmile } from 'react-icons/hi2'
import { RiInstagramLine, RiFacebookCircleLine } from 'react-icons/ri'
import Link from 'next/link';
import Image from 'next/image';


export default async function Home() {
  return (
    <div className={styles.window}>
      <div className={styles.rec2} />
      <div className={styles.rec6} />
      <div className={styles.rec4} />
      <div className={styles.rec8} />
      <div className={styles.rec3} />
      <div className={styles.rec1} />
      <div className={styles.rec5} />
      <div className={styles.rec7} />
      <div className={styles.section1}>
        <HiMapPin className={styles.locationDotIcon} />
        <h3 className={styles.heading1}>locations</h3>
        <div className={styles.loc1}>
          <Image className={styles.loc1Image} alt={'SRM University'} src='/srm.jpg' width={320} height={320} />
          <div className={styles.loc1Name}>
            <p>SRM<br/>Campus</p>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <HiFaceSmile className={styles.faceLaughIcon} />
        <h3 className={styles.heading2}>how to?</h3>
        <div className={styles.howIzyPara}>
          <p className={styles.para}>
            # Search your phone...............................<br/>
            # Select the problem & fill details.........<br/>
            # Will tell the price, if you agree collect<br/>
            # After repair will drop...........................
          </p>
        </div>
      </div>
      <div className={styles.section3}>
        <Image className={styles.bgPattern2} alt={'Background'} src={'/background/bgPattern2Home.svg'} width={1} height={1} />
        <HiPhone className={styles.phoneIcon} />
        <h3 className={styles.heading3}>contact us</h3>
        <div className={styles.contactSection}>
            <span>
                {'For queries regarding orders contact us via'}
                <div className={styles.linksHolder}>
                    <Link className={styles.linkItem} href={'tel: +916381784458'}>
                        <HiOutlinePhone className={styles.linkIcon} />
                        <label className={styles.linkName}>{process.env.phone}</label>
                    </Link>
                    <Link className={styles.linkItem} href={'mailto: mizyindia@gmail.com'}>
                        <HiOutlineMail className={styles.linkIcon} />
                        <label className={styles.linkName}>{process.env.email}</label>
                    </Link>
                </div>
                {'or be a part of our journey at '}
            </span>
        </div>
        <div className={styles.linksHolder}>
            <Link className={styles.linkItem} href={process.env.instagramLink} target={'_blank'}>
                <RiInstagramLine className={styles.linkIcon} />
                <label className={styles.linkName}>mizyindia</label>
            </Link>
            <Link className={styles.linkItem} href={process.env.facebookLink} target={'_blank'}>
                <RiFacebookCircleLine className={styles.linkIcon} />
                <label className={styles.linkName}>mizyindia</label>
            </Link>
        </div>
      </div>
      <div className={styles.end}>
        <div className={styles.endOfPage}>end of page</div>
        <div className={styles.endLine}>
          <span>
            {'Want to hear more from us visit '}
            <Link className={styles.aboutAccent} href={'/about'}>About</Link>
          </span>
        </div>
      </div>
    </div>
  )
}