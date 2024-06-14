'use server';

import db from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Server function to add a new todo item
export const addTodo = async (formData) => {
    await db.todo.create({
        data: {
            content: formData.get('content'),
            dueDate: formData.get('date'),
        },
    });

    redirect('/todos');
};

// Server function to check/uncheck a todo item
export const checkTodo = async (id) => {
    const todo = await db.todo.findUnique({
        where: {
            id,
        },
    });

    await db.todo.update({
        where: {
            id,
        },
        data: {
            completed: !todo.completed,
        },
    });

    revalidatePath('/todos');
};
