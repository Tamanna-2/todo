
"use client";

import { RecoilRoot } from 'recoil';
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
}
