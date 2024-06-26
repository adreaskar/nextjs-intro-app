import db from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
    const todos = await db.todo.findMany();

    return NextResponse.json(todos);
};

export const POST = async (request) => {
    const data = await request.json();
    const todo = await db.todo.create({
        data,
    });

    return NextResponse.json(todo);
};
