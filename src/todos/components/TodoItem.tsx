import { Todo } from "@prisma/client"

interface Props {
  todo: Todo
}

export function TodoItem({ todo }: Props) {
  return (
    <div>
      <h1>{todo.description}</h1>
      <p>{todo.complete ? 'Completado' : 'Pendiente'}</p>
    </div>
  );
}
