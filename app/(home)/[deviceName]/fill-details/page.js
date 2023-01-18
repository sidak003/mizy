import styles from '../problemPage.module.css'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FillDetailsSection from '../../../../components/FillDetails'

export default function FillDetailsPage() {
    return (
        <div>
            <FontAwesomeIcon className={styles.penIcon} icon={faPen} />
            <h3 className={styles.headline}>Fill Your Details</h3>
            <div className={styles.wrapper}>
                <FillDetailsSection/>
            </div>
        </div>
    )
}