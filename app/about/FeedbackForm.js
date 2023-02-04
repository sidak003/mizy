'use client'
import styles from './FeedbackForm.module.css'
import useSWRMutation from 'swr/mutation'


const createFeedback = async(url, { arg }) => {
    const options = {
        method : 'POST',
        body : JSON.stringify(arg.body)
    }
    return fetch(`${process.env.clientApii}/createfeedback`, options).then(res => {
        if(!res.ok) throw Error('Error Bad Response')
        document.getElementById('feedbackForm').reset()
        alert('Congo, We received your feedback')
    })
}


export default function FeedbackForm() {

    const { trigger } = useSWRMutation(`${process.env.clientApii}/createfeedback`, createFeedback)

    return (
        <form className={styles.feedbackSection} id={'feedbackForm'} onSubmit={(e) => {
            e.preventDefault()
            const body = {
                'feedbackName' : e.target.fet.value.toString(),
                'feedbackEmail' : e.target.fot.value.toString(),
                'feedback' : e.target.fit.value.toString(),
            }
            trigger({body})
        }}>
            <div className={styles.field}>
                <label className={styles.fieldName}>Name</label>
                <input className={styles.fieldInput} name={'fet'} type={'text'} autoCapitalize={'words'} placeholder={'Enter your name'} />
            </div>
            <div className={styles.field}>
                <label className={styles.fieldName}>@Email</label>
                <input className={styles.fieldInput} name={'fot'} type={'email'} placeholder={'Enter your email'} />
            </div>
            <div className={styles.field}>
                <label className={styles.fieldName}>Feedback</label>
                <textarea className={styles.feedInput} name={'fit'} type={'text'} maxLength={256} autoCapitalize={'on'} placeholder={'We would love to hear you out............\n(only 256 characters)'} />
            </div>
        </form>
    )
}