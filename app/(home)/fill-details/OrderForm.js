'use client'
import styles from './OrderForm.module.css'
import useSWRMutation from 'swr/mutation'
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import { HiChevronDown, HiChevronUp, HiChevronLeft, HiChevronRight } from 'react-icons/hi2';


export default function OrderForm( {points} ) {


    const router = useRouter()
    const searchParams = useSearchParams()
    const [validation, setValidation] = useState(false)
    const [isOpen, open] = useState(false)
    const [point, setPoint] = useState('')


    const createOrder = async(url, { arg }) => {
        const options = {
            method : 'POST',
            body : JSON.stringify(arg)
        }
        return fetch(url, options).then(res => {
            if(!res.ok) throw Error('Error Bad Response')
            router.push('/order-summary')
        })
    }
    const { trigger } = useSWRMutation(`${process.env.clientApii}/createorder`, createOrder)


    const validate = () => {
        const name = orderForm.nem.value
        const number = orderForm.meb.value
        const isNemValid = /^[A-Za-z\s]+$/.test(name)
        document.getElementById('nameField').style.boxShadow = isNemValid? 'var(--drop-mini)' : '1px 1px 40px #ffa3a3'
        const isMebValid = /^\d{10}$/.test(number)
        document.getElementById('numberField').style.boxShadow = isMebValid ? 'var(--drop-mini)' : '1px 1px 40px #ffa3a3'
        setValidation(isNemValid && isMebValid)
    }


    return (
        <div>
            <form className={styles.fillDetailsSection} id={'orderForm'} onChange={() => validate()} onSubmit={(e) => {
                e.preventDefault()
                router.prefetch('/order-summary')
                const body = {
                    'customerName' : e.target.nem.value,
                    'customerPhone' : e.target.meb.value,
                    'pointId' : point.pointId,
                    'ppId' : searchParams.get('ppid'),
                }
                trigger(body)
            }}>
                <div className={styles.field}>
                    <label className={styles.fieldName}>Name</label>
                    <input className={styles.fieldInput} id={'nameField'} name={'nem'} type={'text'} maxLength={32} autoCapitalize={'words'} placeholder={'Enter your name'} />
                </div>
                <div className={styles.field}>
                    <label className={styles.fieldName}>Pickup Point</label>
                    <div className={styles.pickup} onClick={() => open(!isOpen)}>
                        <p className={styles.pickupText}>{point === ''? 'Choose pickup point' : point.pointName}</p>
                        <div className={styles.downButton}>
                            {isOpen? <HiChevronUp className={styles.downButtonIcon} /> : <HiChevronDown className={styles.downButtonIcon} />}
                        </div>
                    </div>
                    {isOpen && <div className={styles.results}>
                        {points.map((point) => {
                            return <div className={styles.item} key={point.pointId} onClick={() => {
                                setPoint(point)
                                open(!isOpen)
                            }}><p>{point.pointName}</p></div>
                        })}
                    </div>}
                </div>
                <div className={styles.field}>
                    <label className={styles.fieldName}>Mobile Number</label>
                    <input className={styles.fieldInput} id={'numberField'} name={'meb'} type={'tel'} maxLength={10} placeholder={'Enter your number'} />
                </div>
            </form>
            <div className={styles.buttonsSection}>
                <button className={styles.prevButton} onClick={() => router.back()}>
                    <HiChevronLeft className={styles.prevButtonIcon} />
                </button>
                {validation && point &&
                <button className={styles.nextButton} form={'orderForm'} type={'submit'}>
                    <HiChevronRight className={styles.nextButtonIcon} />
                </button>}
            </div>
        </div>
    )
}