'use client'
import styles from './PpSection.module.css'
import { useState } from 'react';
import { HiDevicePhoneMobile, HiBoltSlash, HiMicrophone, HiSpeakerWave, HiPhone, HiCpuChip, HiChevronRight, HiOutlineInformationCircle } from 'react-icons/hi2';
import { IoBatteryDead } from 'react-icons/io5'
import Link from 'next/link';


function PpIcon({ problemName }) {
    if(problemName==="Broken Screen") return <HiDevicePhoneMobile className={styles.ppIcon} />
    else if(problemName==="Won't Charge") return <HiBoltSlash className={styles.ppIcon} />
    else if(problemName==="Short Battery Life") return <IoBatteryDead className={styles.ppIcon} />
    else if(problemName==="Mic") return <HiMicrophone className={styles.ppIcon} />
    else if(problemName==="Speaker") return <HiSpeakerWave className={styles.ppIcon} />
    else if(problemName==="Earpiece") return <HiPhone className={styles.ppIcon} />
    else if(problemName==="Phone Dead") return <HiCpuChip className={styles.ppIcon} />
}


export default function ProblemSection( {ppList} ) {

    const [selectedPpId, selectPp] = useState({})

    return (
        <div className={styles.problemSection}>
            {ppList?.map((pp) => {
                return (
                    <div className={selectedPpId === pp.ppId ? styles.selectedPp : styles.pp} key={pp.ppId} onClick={() => {selectPp(selectedPpId===pp.ppId ? 0 : pp.ppId)}}>
                        <div className={styles.ppItem}>
                            <PpIcon problemName={pp.problemName} />
                            <div className={styles.ppName}>{pp.problemName}</div>
                        </div>
                        {pp.price==="*"? <HiOutlineInformationCircle className={styles.ppIcon} /> : <div className={styles.ppPrice}>₹{pp.price}</div>}
                    </div>
                )
            })}
            {selectedPpId > 0 &&
            <Link className={styles.nextButton} href={`/fill-details?ppid=${selectedPpId}`}>
                <HiChevronRight className={styles.buttonIcon} />
            </Link>}
        </div>
    )
}