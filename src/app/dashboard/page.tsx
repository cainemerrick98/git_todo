import TodoTable from '../ui/dashboard/todo_table'
import Sidebar from '../ui/dashboard/sidebar'
import Toolbar from '../ui/dashboard/toolbar'
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
        status:'Awaiting',
    },
    {
        title:'caine',
        repo:'caine',
        file:'caine',
        due_date:new Date(),
        status:'Complete',
    },
]

export default function Page(){
    return(
        <div className={styles.dashboard_container}>
            <Sidebar></Sidebar>
            <div className={styles.main_container}>
                <div className={styles.toolbar_container}>
                    <Toolbar></Toolbar>
                </div>
                <div className={styles.todotable_container}>
                    <TodoTable rows={todos}></TodoTable>
                </div>
            </div>
        </div>
    )
}