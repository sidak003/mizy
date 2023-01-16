import styles from '../problemPage.module.css'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FillDetailsSection from '../../../../components/FillDetails'

export default function FillDetailsPage() {
    return (
        <div>
            <FontAwesomeIcon className={styles.penIcon} icon={faPen} />
            <b className={styles.headline}>Fill Your Details</b>
            <FillDetailsSection/>
        </div>
    )
}