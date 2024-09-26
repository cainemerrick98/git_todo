import { TodoData } from "@/app/lib/models"

export default function Todo(data: TodoData){
    const {title, repo, file, due_date, status} = data
    return(
        <tr>
            <td>{title}</td>
            <td>{repo}</td>
            <td>{file}</td>
            <td>{due_date.toLocaleDateString()}</td>
            <td>{status}</td> 
        </tr>
    )
}