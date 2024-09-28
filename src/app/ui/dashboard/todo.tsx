import { TodoData } from "../../lib/models"
import styles from './todo.module.css'

export default function Todo(data: TodoData){
    const {title, repo, file, due_date, status} = data
    return(
        <tr>
            <td>{title}</td>
            <td>
                <select>
                    <option>Repo 1</option>
                    <option>Repo 2</option>
                    <option>Repo 3</option>
                </select>
            </td>
            <td>
                <select>
                    <option>File 1</option>
                    <option>File 2</option>
                    <option>File 3</option>
                </select>
            </td>
            <td>{due_date.toLocaleDateString()}</td>
            <td>
                <select 
                    className={ `todo_select ${
                        status === 'Complete' 
                        ? styles.complete 
                        : status === 'In Progress'
                        ? styles.in_progress
                        : styles.awaiting}`
                    }
                    defaultValue={status}
                    >
                    <option value={'Awaiting'}>Awaiting</option>
                    <option value={'In Progress'}>In Progress</option>
                    <option value={'Complete'}>Complete</option>
                </select>
            </td> 
        </tr>
    )
}