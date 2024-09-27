import styles from './toolbar.module.css'

export default function Toolbar(){
    return(
        <div className={styles.toolbar}>
            <div className={styles.toolbar_contents}>
                <button className={styles.add_todo_btn}>Add</button>
                <input type='text' placeholder='Search' className={styles.search_bar}></input>
            </div>
        </div>
    )
}