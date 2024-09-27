import { TodoData } from "@/app/lib/models"
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
                <select>
                    <option selected={status == 'Awaiting' ? true : false}>Awaiting</option>
                    <option selected={status == 'In Progress' ? true : false}>In Progress</option>
                    <option selected={status == 'Complete' ? true : false}>Complete</option>
                </select>
            </td> 
        </tr>
    )
}