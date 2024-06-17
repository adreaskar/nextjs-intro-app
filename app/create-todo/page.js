import NewTodoForm from '@/components/NewTodoForm';

const CreateTodo = () => {
    return (
        <div>
            <h1 className="text-6xl font-bold">Create Todo</h1>
            <p className="text-lg mt-5 opacity-50">
                Yet another thing to worry about
            </p>
            <NewTodoForm />
        </div>
    );
};

export default CreateTodo;
