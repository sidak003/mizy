import styles from '../[deviceId]/ProblemPage.module.css'
import { HiPencil } from 'react-icons/hi2'
import OrderForm from './OrderForm'


async function getPoints() {
    try {
        const res = await fetch(`${process.env.clientApii}/getpoints`)
        if(!res.ok) throw new Error('Error Bad Response')
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}


export default async function FillDetailsPage() {
    const points = await getPoints()
    return (
        <div className={styles.window}>
            <div className={styles.rec1}/>
            <div className={styles.rec2}/>
            <HiPencil className={styles.pencilIcon} />
            <h3 className={styles.headline}>Fill Your Details</h3>
            <div className={styles.wrapper}>
                <FillDetailsSection points={points}/>
                {/* <OrderForm points={[{"pointId":1,"pointName":"Clock Tower"},{"pointId":2,"pointName":"Pierre Fauchard"},{"pointId":3,"pointName":"Tech Park"},{"pointId":4,"pointName":"University Building"}]}/> */}
            </div>
        </div>
    )
}