'use client'
import styles from './problemSection.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { faVolumeHigh, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';


const data = [
    {'id': 0, 'name': 'Broken Screen', 'price': 1999, 'icon': '../volumehighsolid-9.svg'},
    {'id': 1,'name': 'Wont Charge', 'price': 499, 'icon': '../volumehighsolid-9.svg'},
    {'id': 2,'name': 'Speaker', 'price': 799, 'icon': '../volumehighsolid-9.svg'},
    {'id': 3,'name': 'Mic', 'price': 799, 'icon': '../volumehighsolid-9.svg'},
    {'id': 4,'name': 'Headphone Jack', 'price': 499, 'icon': '../volumehighsolid-9.svg'},
    {'id': 5,'name': 'Earpiece', 'price': 499, 'icon': '../volumehighsolid-9.svg'},
    {'id': 6,'name': 'Battery Issue', 'price': 999, 'icon': '../volumehighsolid-9.svg'},
    {'id': 7,'name': 'Water Damage', 'price': 1499, 'icon': '../volumehighsolid-9.svg'},
    {'id': 8,'name': 'Phone Dead', 'price': 799, 'icon': '../volumehighsolid-9.svg'},
]


export default function ProblemSection({url}) {

    const router = useRouter()
    const [cart, setCart] = useState({})


    return (
        <div className={styles.problemSection}>
            {data.map((item, key) => {
                return (
                    <div className={cart === item ? styles.cartItem : styles.item} key={key} onClick={() => {setCart(cart===item ? {} : item)}}>
                        <div className={styles.innerItem}>
                            <FontAwesomeIcon className={styles.itemIcon} icon={faVolumeHigh} />
                            <div className={styles.itemName}>{item.name}</div>
                        </div>
                        <div className={styles.itemPrice}>₹{item.price}</div>
                    </div>
                )
            })}
            <div className={styles.nextButton} onClick={() => router.push(`/${url}/fill-details?problem=${cart.name}`)}>
                <FontAwesomeIcon className={styles.buttonIcon} icon={faChevronRight} />
            </div>
        </div>
    )
}