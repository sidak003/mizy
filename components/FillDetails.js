'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './fillDetails.module.css'
import { faChevronLeft, faChevronRight, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const data = [
    {'id':1, 'name':'Oori Hostel'},
    {'id':2, 'name':'University Building'},
    {'id':3, 'name':'Tech Park'},
    {'id':4, 'name':'Arch Gate'},
    {'id':5, 'name':'Java'},
]


export default function FillDetailsSection() {


    const router = useRouter()
    const [name, setName] = useState('')
    const [number, setNumber] = useState()
    const [isOpen, open] = useState(false)
    const [pickupPoint, setPickupPoint] = useState('')


    const verifyNumber = () => {
        //
    }


    return (
        <div>
            <div className={styles.fillDetailsSection}>
                <div className={styles.field}>
                    <label className={styles.fieldName}>Name</label>
                    <input className={styles.fieldInput} type={'text'} value={name} placeholder={'Enter your name'} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.field}>
                    <label className={styles.fieldName}>Pickup Point</label>
                    <div className={styles.pickup} onClick={() => open(!isOpen)}>
                        <p className={styles.pickupText}>{pickupPoint==='' ? 'Choose pickup point' : pickupPoint}</p>
                        <div className={styles.downButton}>
                            <FontAwesomeIcon className={styles.downButtonIcon} icon={isOpen? faChevronUp : faChevronDown} />
                        </div>
                    </div>
                    {isOpen && <div className={styles.results}>
                        {data.map((item, key) => {
                            return <div className={styles.item} key={key} onClick={() => {
                                setPickupPoint(item.name)
                                open(!isOpen)
                            }}><p>{item.name}</p></div>
                        })}
                    </div>}
                </div>
                <div className={styles.field}>
                    <label className={styles.fieldName}>Mobile Number</label>
                    <input className={styles.fieldInput} type={'number'} max={'100'} value={number} placeholder={'Enter your number'} onChange={(e) => setNumber(e.target.value)}/>
                </div>
            </div>
            <div className={styles.buttonsSection}>
                <div className={styles.prevButton} onClick={() => router.back()}>
                    <FontAwesomeIcon className={styles.prevButtonIcon} icon={faChevronLeft} />
                </div>
                <div className={styles.nextButton} onClick={() => verifyNumber}>
                    <FontAwesomeIcon className={styles.nextButtonIcon} icon={faChevronRight} />
                </div>
            </div>
        </div>
    )
}