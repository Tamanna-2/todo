
"use client";
import TodoItem from "./TodoItem";
import { todoListState } from "../atoms";
import { useRecoilState } from "recoil";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState, []);   
  const handleAddTodo = (text: string) => {
    if (text.trim() !== '') {
      setTodoList([...todoList, { id: todoList.length + 1, text, completed: false }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      handleAddTodo(e.target.value);
      e.target.value = '';
    }
  };

  return (
    
    <Card className="h-screen flex justify-center items-center">
    <CardHeader className="bg-black-900 text-white max-w-md p-4 rounded shadow-md">
      <CardTitle>To do List</CardTitle>
      <CardDescription>you should complete your task</CardDescription>
    </CardHeader>
    <CardContent>
    
       <input
         type="text"
         placeholder="Add new todo"
         className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus"
         onKeyPress={handleKeyPress} 
       />
    </CardContent>
    <CardFooter>
    
        {todoList.map((item) => (
          <>
             <TodoItem {...item} />
             </>
         ))}
       
    </CardFooter>
  </Card>

  );
};

export default TodoList;