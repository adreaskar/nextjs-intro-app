import TodoItem from './TodoItem';

const TodosList = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </div>
    );
};

export default TodosList;
