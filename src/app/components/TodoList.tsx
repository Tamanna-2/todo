"use client";
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState); 
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");

  
  const filteredTodoList = todoList.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "pending") return !item.completed;
    return true; 
  });

  return (
    <div>
      <h1>Todo List</h1>

      
      <div>
        <Button variant="default" onClick={() => setFilter("all")}>
          All Tasks
        </Button>
        <Button variant="default" onClick={() => setFilter("completed")}>
          Completed Tasks
        </Button>
        <Button variant="default" onClick={() => setFilter("pending")}>
          Pending Tasks
        </Button>
      </div>

      
      
        {filteredTodoList.map((item) => (
          
            <Card>
              <TodoItem {...item} />
            </Card>
          
        ))}
      

      
      <input
        type="text"
        placeholder="Add new todo"
        onKeyPress={(e) => {
          if (e.key === "Enter" && e.target.value.trim() !== "") {
            setTodoList([
              ...todoList,
              { id: todoList.length + 1, text: e.target.value, completed: false },
            ]);
            e.target.value = ""; 
          }
        }}
      />
    </div>
  );
};

export default TodoList;