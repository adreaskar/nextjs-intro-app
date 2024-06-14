import TodoItem from './TodoItem';

const TodosList = ({ todos }) => {
    return (
        <div className="h-[calc(100%-60px)] overflow-auto">
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodosList;
