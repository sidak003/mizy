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
    const ppList = await getPp(params.device.replace('device-', ''))
    return (
        <div className={styles.window}>
            <div className={styles.rec1}/>
            <div className={styles.rec2}/>
            <HiExclamationTriangle className={styles.alertIcon} />
            <h3 className={styles.headline}>specify your problem</h3>
            <div className={styles.wrapper}>
                <PpSection ppList={ppList}/>
                {/* <PpSection ppList={[{"ppId":1354,"problemName":"Screen Guard","price":"98"},{"ppId":2029,"problemName":"Broken Screen","price":"i"},{"ppId":1353,"problemName":"Won't Charge","price":"898"},{"ppId":2755,"problemName":"Short Battery Life","price":"i"},{"ppId":2030,"problemName":"Phone Dead","price":"i"},{"ppId":2031,"problemName":"Don't Know / Others","price":"i"}]}/> */}
                <div className={styles.infoLine}><HiOutlineInformationCircle className={styles.icon}/>
                    {'Price would be informed through a confirmation phone call'}
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
    const devices = await getDevices()
    // const devices = [{"deviceId":1,"deviceName":"Samsung Galaxy S21FE"},{"deviceId":2,"deviceName":"Apple iPhone 12"},{"deviceId":3,"deviceName":"Oppo Reno 8"},{"deviceId":4,"deviceName":"Redmi Note 12 Pro + 5G"},{"deviceId":5,"deviceName":"Realme 7"},{"deviceId":6,"deviceName":"OnePlus 9T"},{"deviceId":7,"deviceName":"Poco X2"},{"deviceId":8,"deviceName":"Apple iPhone 12 Pro"}]
  
    return devices?.map((device) => ({
        device: "device-" + device.deviceId.toString(),
    }));
}