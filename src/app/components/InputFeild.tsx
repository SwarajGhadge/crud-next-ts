import React, { useRef } from "react";
import AddIcon from '@mui/icons-material/Add';
import ".././globals.css"
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
const InputFeild = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className='container1'>
        <input
          className="input1"
          type="text"
          name="todos"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <span className="Add"
        onClick={(e: React.FormEvent) => {
            handleAdd(e);
            inputRef.current?.blur();
          }}
        ><AddIcon className="icon"/></span>
      
    </div>
  );
};

export default InputFeild;
