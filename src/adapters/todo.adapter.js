export const createTodoAdapter = (todo) => ({
    id: todo.id,
    text: todo.text,
    createdAt: todo.created_at,
})

export const updateTodoAdapter = (todo) => ({
    id: todo.id,
    text: todo.text,
    updatedAt: todo.updated_at,
});

export const deleteTodoAdapter = (todo) => ({
    id: todo.id,
});