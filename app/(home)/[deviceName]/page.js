import styles from './problemPage.module.css'
import ProblemSection from '../../../components/ProblemSection'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ProblemPage({params}) {
    return (
        <div>
            <FontAwesomeIcon className={styles.alertIcon} icon={faExclamationCircle} />
            <h3 className={styles.headline}>Specify Your Problem</h3>
            <div className={styles.wrapper}>
                <ProblemSection url={params.deviceName}/>
            </div>
        </div>
    )
}