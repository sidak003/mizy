import styles from './problemPage.module.css'
import ProblemSection from '../../../components/ProblemSection'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ProblemPage({params}) {
    return (
        <div>
            <FontAwesomeIcon className={styles.alertIcon} icon={faExclamationCircle} />
            <b className={styles.headline}>Specify Your Problem</b>
            <ProblemSection url={params.deviceName}/>
        </div>
    )
}