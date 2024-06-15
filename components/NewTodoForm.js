import { addTodo } from '@/utils/actions';
import { FiPlus } from 'react-icons/fi';

const NewTodoForm = () => {
    return (
        <div className="mt-14">
            <form action={addTodo}>
                <div className="flex gap-4">
                    <div>
                        <label>Todo name:</label> <br />
                        <input type="text" name="content" id="todo" />
                    </div>
                    <div>
                        <label>Due date:</label> <br />
                        <input type="date" name="date" id="todo" />
                    </div>
                </div>

                <button
                    className="duration-200 mt-10 py-3 px-5 rounded-lg border border-neutral-700 hover:bg-neutral-800/30"
                    type="submit"
                >
                    Add Todo
                    <FiPlus className="inline-block ml-1" />
                </button>
            </form>
        </div>
    );
};

export default NewTodoForm;
