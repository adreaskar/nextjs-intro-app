import TodosList from '@/components/TodosList';
import db from '@/utils/db';

const getTodos = async () => {
    const todos = await db.todo.findMany();
    return todos;
};

const TodosPage = async () => {
    const todos = await getTodos();
    return (
        <main className="py-14 w-1/2 m-auto h-[calc(100vh-168px)] overflow-hidden">
            <div className="border-b border-neutral-700/70 pb-2">
                <h1 className="text-6xl font-bold">Todo List</h1>
                <div className="mt-5 text-lg flex justify-between px-1">
                    <p className="opacity-50">Your todos listed below</p>
                    <p className="opacity-50">Due</p>
                </div>
            </div>
            <TodosList todos={todos} />
        </main>
    );
};

export default TodosPage;
