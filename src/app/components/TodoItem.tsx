
"use client";
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../atoms';
import { Button } from '@/components/ui/button';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);


  const handleToggleCompleted = () => {
    const todoItemIndex = todoList.findIndex((item) => item.id === id);
    if (todoItemIndex !== -1) {
      const updatedTodoItem = { ...todoList[todoItemIndex], completed: !completed };
      setTodoList([...todoList.slice(0, todoItemIndex), updatedTodoItem, ...todoList.slice(todoItemIndex + 1)]);
    }
  };

const handleDelete = () => {
  const todoItemIndex = todoList.findIndex((item) => item.id === id);
  if (todoItemIndex !== -1) {
    setTodoList([...todoList.slice(0, todoItemIndex), ...todoList.slice(todoItemIndex + 1)]);
  }
};

  return (
    <div className='flex justify-between mt-2 '>
<span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>

     <Button 
     variant={"destructive"}
     size={"default"}
        onClick={handleToggleCompleted}
        
      >
        {completed ? 'Completed' : 'Incomplete'}
      </Button>
      
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
};

export default TodoItem;