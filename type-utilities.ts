type Todo = {
	title: string;
	description: string;
	completed: boolean;
};

/**
 * Readonly
 */
const todo: Readonly<Todo> = {
	title: 'Configurar nginx no WSL',
	description: 'Configurar com base no tutorial do treina web',
	completed: false
};

console.log(todo);

// todo.completed = true;

/**
 * Partial
 */
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return {...todo, ...fieldsToUpdate};
}

const todo2: Todo = updateTodo(todo, {
	completed: true
});

console.log(todo2);

/**
 * Pick
 */
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
	title: 'Configurar mysql no nginx',
	completed: false
};

console.log(todo3);

/**
 * Omit
 */
type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview = {
	title: 'Configurar mysql no nginx',
	completed: false
};

console.log(todo4);
