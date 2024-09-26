import TodoTable from '@/app/ui/dashboard/todo_table'
import { TodoData } from '../lib/models'
import styles from '@/app/ui/dashboard/dashboard.module.css'

const todos: TodoData[] = [
    {
        title:'caine',
        repo:'caine',
        file:'caine',
        due_date:new Date(),
        status:'In Progress',
    },
    {
        title:'caine',
        repo:'caine',
        file:'caine',
        due_date:new Date(),
        status:'In Progress',
    },
]

export default function Page(){
    return(
        <div className={styles.dashboard_container}>
            <h1>GitTodo</h1>
            <div className={styles.todotable_container}>
                <TodoTable rows={todos}></TodoTable>
            </div>
        </div>
    )
}