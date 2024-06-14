const TodoItem = ({ todo }) => {
    return (
        <div className="flex justify-between items-center border-b border-neutral-700 py-2">
            <p>{todo.content}</p>
            <p>{todo.due}</p>
        </div>
    );
};

export default TodoItem;
