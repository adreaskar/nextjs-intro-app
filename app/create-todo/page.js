import NewTodoForm from '@/components/NewTodoForm';

const CreateTodo = () => {
    return (
        <main className="py-14 w-1/2 m-auto">
            <h1 className="text-6xl font-bold">Create Todo</h1>
            <p className="text-lg mt-5 opacity-50">
                Yet another thing to worry about
            </p>
            <NewTodoForm />
        </main>
    );
};

export default CreateTodo;
