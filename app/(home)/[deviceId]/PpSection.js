'use client'
import styles from './PpSection.module.css'
import { useState } from 'react';
import { HiSpeakerWave, HiChevronRight } from 'react-icons/hi2';
import Link from 'next/link';


export default function ProblemSection( {ppList} ) {

    const [selectedPpId, selectPp] = useState({})

    return (
        <div className={styles.problemSection} id={'pp'}>
            {ppList?.map((pp) => {
                return (
                    <div className={selectedPpId === pp.ppId ? styles.selectedPp : styles.pp} key={pp.ppId} onClick={() => {selectPp(selectedPpId===pp.ppId ? 0 : pp.ppId)}}>
                        <div className={styles.ppItem}>
                            <HiSpeakerWave className={styles.ppIcon} />
                            <div className={styles.ppName}>{pp.problemName}</div>
                        </div>
                        <div className={styles.ppPrice}>₹{pp.price}</div>
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