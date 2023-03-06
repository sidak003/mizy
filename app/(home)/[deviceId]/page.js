import styles from './ProblemPage.module.css'
import PpSection from './PpSection'
import { HiExclamationTriangle, HiOutlineInformationCircle } from 'react-icons/hi2'

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
    // const ppList = await getPp(params.deviceId)
    return (
        <div className={styles.window}>
            <div className={styles.rec1}/>
            <div className={styles.rec2}/>
            <HiExclamationTriangle className={styles.alertIcon} />
            <h3 className={styles.headline}>Specify Your Problem</h3>
            <div className={styles.wrapper}>
                {/* <PpSection ppList={ppList}/> */}
                <PpSection ppList={[{"ppId":2029,"problemName":"Broken Screen","price":"*"},{"ppId":1353,"problemName":"Won't Charge","price":"898"},{"ppId":2755,"problemName":"Short Battery Life","price":"*"},{"ppId":1354,"problemName":"Mic","price":"898"},{"ppId":1355,"problemName":"Speaker","price":"898"},{"ppId":1356,"problemName":"Earpiece","price":"898"},{"ppId":2030,"problemName":"Phone Dead","price":"*"}]}/>
                <div className={styles.infoLine}><HiOutlineInformationCircle className={styles.icon}/>
                    {'Price would be told before pickup for confirmation via call or any other medium'}
                </div>
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
    // const devices = await getDevices();
    const devices = [{"deviceId":1,"deviceName":"Samsung Galaxy S21FE"},{"deviceId":2,"deviceName":"Apple iPhone 12"},{"deviceId":3,"deviceName":"Oppo Reno 8"},{"deviceId":4,"deviceName":"Redmi Note 12 Pro + 5G"},{"deviceId":5,"deviceName":"Realme 7"},{"deviceId":6,"deviceName":"OnePlus 9T"},{"deviceId":7,"deviceName":"Poco X2"},{"deviceId":8,"deviceName":"Apple iPhone 12 Pro"}]
  
    return devices.map((device) => ({
        deviceId: device.deviceId.toString(),
    }));
}