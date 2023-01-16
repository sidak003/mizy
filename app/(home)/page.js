import styles from '../../styles/styles.module.css'
import { faMagnifyingGlass, faLocationDot, faFaceLaughBeam, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Backgroud1 from '../../components/Background1';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {


  return (
    <div className={styles.window}>
      <Backgroud1 />
      <div className={styles.section1}>
        <FontAwesomeIcon className={styles.locationDotIcon} icon={faLocationDot}/>
        <b className={styles.heading1}>Locations</b>
        <div className={styles.loc1}>
          <Image className={styles.loc1Image} alt={''} src='/pic3@2x.png' width={200} height={200} />
          <div className={styles.loc1Name}>
            <p className={styles.tabInactive}>SRMIST<br/>Campus</p>
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <FontAwesomeIcon className={styles.faceLaughIcon} icon={faFaceLaughBeam} />
        <b className={styles.heading2}>How izy?</b>
        <div className={styles.howIzyPara}>
          <p className={styles.para}>
            Just place a Service Request with us, will collect your Device as soon as we
            can then we will take it to our repair centre and repair it with best possible
            care. After the repair process is done we will hand the device to you.
            That’s sooooooooo izy
          </p>
        </div>
      </div>
      <div className={styles.section3} id={'trackOrder'}>
        <Image className={styles.bgPattern2} alt={''} src={'/group-7.svg'} width={1} height={1} />
        <FontAwesomeIcon className={styles.truckIcon} icon={faTruck}/>
        <b className={styles.heading3}>Track Order</b>
        <div className={styles.trackOrderSearch}>
          <input type={'number'} min={0} max={9999999999} placeholder={'Enter your order number'}></input>
          <div className={styles.trackOrderButton}>
            <Link href={'#'}></Link>
            <FontAwesomeIcon className={styles.searchIconSmall} icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className={styles.trackOrderResult}>
          Search order number to view order status.
        </div>
      </div>
      <div className={styles.end}>
        <div className={styles.endOfPage}>End of Page</div>
        <div className={styles.endLine}>
          <span>{`Wanna hear more about us visit `}</span>
          <span className={styles.aboutAccent}>About</span>
        </div>
      </div>
    </div>
  )
}