import styles from './sidebar.module.css'

export default function Sidebar(){
    return(
        <div className={styles.sidebar}>
            <div className={styles.tab}>
                Pending
            </div>
        </div>
    )
}