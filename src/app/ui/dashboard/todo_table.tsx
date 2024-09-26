import Todo from './todo'
import React from 'react'
import { TableData, TodoData } from '@/app/lib/models'
import styles from './todo_table.module.css'

export default function TodoTable(todos: TableData){
    const {rows} = todos;
    return(
        <table className={styles.todo_table}>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Repo</th>
                    <th>File</th>
                    <th>Due Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((todo, index) =>
                    <Todo
                        key={index}
                        title={todo.title} 
                        repo={todo.repo}
                        file={todo.file}
                        due_date={todo.due_date}
                        status={todo.status}
                        >
                    </Todo>
                )}
            </tbody>
        </table>
    )
}