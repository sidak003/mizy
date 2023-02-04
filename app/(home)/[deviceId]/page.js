import styles from './ProblemPage.module.css'
import PpSection from './PpSection'
import { HiExclamationTriangle } from 'react-icons/hi2'

export const dynamicParams = false;

async function getPp(deviceId) {
    try {
        const res = await fetch(`${process.env.clientApii}/getpp?deviceId=${deviceId}`)
        if(!res.ok) throw new Error('Error Bad Response')
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}


export default async function ProblemPage( {params} ) {
    const ppList = await getPp(params.deviceId)
    return (
        <div className={styles.window}>
            <div className={styles.rec1}/>
            <div className={styles.rec2}/>
            <HiExclamationTriangle className={styles.alertIcon} />
            <h3 className={styles.headline}>Specify Your Problem</h3>
            <div className={styles.wrapper}>
                <PpSection ppList={ppList}/>
                {/* <PpSection ppList={[{"ppId":10,"problemName":"Broken Screen","price":"2999"},{"ppId":11,"problemName":"Won't Charge","price":"499"},{"ppId":12,"problemName":"Battery Issue","price":"1299"},{"ppId":13,"problemName":"Water Damage","price":"1999"}]}/> */}
            </div>
        </div>
    )
}


async function getDevices() {
    try {
        const res = await fetch(`${process.env.clientApii}/getdevices`)
        if(!res.ok) throw new Error('Error Bad Response')
        return await res.json()
    } catch(err) {
        console.log(err)
    }
}


export async function generateStaticParams() {
    const devices = await getDevices();
    // const devices = [{"deviceId":1,"deviceName":"Samsung Galaxy S21FE"},{"deviceId":2,"deviceName":"Apple iPhone 12"},{"deviceId":3,"deviceName":"Oppo Reno 8"},{"deviceId":4,"deviceName":"Redmi Note 12 Pro + 5G"},{"deviceId":5,"deviceName":"Realme 7"},{"deviceId":6,"deviceName":"OnePlus 9T"},{"deviceId":7,"deviceName":"Poco X2"},{"deviceId":8,"deviceName":"Apple iPhone 12 Pro"}]
  
    return devices.map((device) => ({
        deviceId: device.deviceId.toString(),
    }));
}