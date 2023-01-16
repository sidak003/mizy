import styles from './problemPage.module.css'

export default function ProblemLayout({ children }) {
    return (
        <div className={styles.window}>
            <div className={styles.rec1}/>
            <div className={styles.rec2}/>
            {children}
        </div>
    )
}