export type TodoData = {
    title: string;
    repo: string;
    file: string;
    due_date: Date;
    status: 'Awaiting' | 'In Progress' | 'Complete';

}

export type TableData = {
    rows: TodoData[];
}