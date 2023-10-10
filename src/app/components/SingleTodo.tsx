import React, { useEffect, useRef, useState } from "react";
import { Todo } from "@/model";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import UpdateIcon from "@mui/icons-material/Update";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id == id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRefe=useRef<HTMLInputElement>(null)
  useEffect(()=>{
    inputRefe.current?.focus();
  },[edit])

  
  return (
    <>
      <div className="todo2" key={todo.id}>
        {edit ? (
          <input
            className="input2"
            ref={inputRefe}
            type="text"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
        ) : todo.isDone ? (
          <s style={{fontWeight:"bold",fontSize:"18px"}}>{todo.todo}</s>
        ) : (
          <span style={{fontWeight:"bold",fontSize:"18px"}}>{todo.todo}</span>
        )}
        

        <div className="together">
          <span className="padding"
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }else{
                setEdit(!edit)
              }
            }}
          >
            <EditIcon />
          </span>
        

        <span className="padding" onClick={() => handleDelete(todo.id)}>
          <DeleteIcon />
        </span>
        {edit ? (
          <span className="padding" onClick={(e) => handleEdit(e, todo.id)}>
            <UpdateIcon />
          </span>
        ) : (
          <span className="padding" onClick={(e) => handleDone(e, todo.id)}>
            <DoneIcon />
          </span>


            )}
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
