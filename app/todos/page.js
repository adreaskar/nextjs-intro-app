const TodosPage = () => {
    return (
        <main className="py-14 w-1/2 m-auto">
            <div className="border-b border-neutral-700 pb-2">
                <h1 className="text-6xl font-bold">Todo List</h1>
                <div className="mt-5 text-lg flex justify-between px-1">
                    <p className="opacity-50">Here are all your todos</p>
                    <p className="opacity-50">Due</p>
                </div>
            </div>
        </main>
    );
};

export default TodosPage;
