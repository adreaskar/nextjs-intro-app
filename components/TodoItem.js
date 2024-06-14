'use client';

import { FiCircle, FiCheckCircle } from 'react-icons/fi';
import { checkTodo } from '@/utils/actions';

const TodoItem = ({ todo }) => {
    return (
        <div
            onClick={() => checkTodo(todo.id)}
            className={`mt-2 flex justify-between items-center p-2 hover:cursor-pointer hover:bg-neutral-700/30 rounded-md ${
                todo.completed && 'text-neutral-500'
            }`}
        >
            <div className="flex items-center gap-2">
                {todo.completed ? <FiCheckCircle /> : <FiCircle />}
                <p>{todo.content}</p>
            </div>
            <p>{todo.dueDate}</p>
        </div>
    );
};

export default TodoItem;
