import { TodosGrid } from "@/todos";
import prisma from "@/lib/prisma";

export const metadata = {
  title: 'listado de todos',
  description: 'SEO title',
}

export default async function RestTodosPage() {

  const todo = await prisma.todo.findMany({orderBy: {description: 'asc'}})


    return (
      <TodosGrid todos={todo} />
    );
  }
  
