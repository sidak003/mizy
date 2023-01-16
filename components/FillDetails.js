'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './fillDetails.module.css'
import { faChevronLeft, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


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
    const [number, setNumber] = useState(0)
    const [isOpen, open] = useState(false)
    const [pickupPoint, setPickupPoint] = useState('')


    return (
        <div>
            <div className={styles.fillDetailsSection}>
                <div className={styles.field}>
                    <b className={styles.fieldName}>Name</b>
                    <input className={styles.fieldInput} type={'text'} value={name} placeholder={'Enter your name'} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className={styles.field}>
                    <b className={styles.fieldName}>Pickup Point</b>
                    <div className={styles.pickup}>
                        <p className={styles.pickupText}>{pickupPoint==='' ? 'Choose pickup point' : pickupPoint}</p>
                        <div className={styles.downButton} onClick={() => open(!isOpen)}>
                            <FontAwesomeIcon className={styles.downButtonIcon} icon={faChevronDown} />
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
                    <b className={styles.fieldName}>Mobile Number</b>
                    <input className={styles.fieldInput} type={'number'} maxLength={10} value={number} placeholder={'Enter your number'} onChange={(e) => setNumber(e.target.value)}/>
                </div>
            </div>
            <div className={styles.buttonsSection}>
                <div className={styles.prevButton} onClick={() => router.back()}>
                    <FontAwesomeIcon className={styles.prevButtonIcon} icon={faChevronLeft} />
                </div>
                <Link className={styles.nextButton} href={{pathname:'/about', query:{name:'naem'}}}>
                    <FontAwesomeIcon className={styles.nextButtonIcon} icon={faChevronRight} />
                </Link>
            </div>
        </div>
    )
}