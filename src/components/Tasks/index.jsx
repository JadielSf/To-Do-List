import { FiCheck } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";



export default function index({todo, removeTodo, completeTodo}) {
  
  return (
    <div>
      <div className="flex items-center justify-between w-full h-20 duration-300 hover:-translate-y-1 rounded-3xl text-2xl text-withPrimary bg-darkBlue   mb-3 pr-5">
        <div className="flex items-center">
          { todo.category === "Trabalho" ? <span className="w-12 h-12 border-[#55e5ff] flex items-center justify-center  mx-5 border-4 border-solid rounded-full " >
          {todo.isCompleted && (<FiCheck className="bg-[#55e5ff] w-11 h-11 rounded-full" />)}</span> : ""}

          { todo.category === "Estudos" ? <span className="w-12 h-12 border-[#46ff21] flex items-center justify-center mx-5 border-4 border-solid rounded-full" >
          {todo.isCompleted && (<FiCheck className="bg-[#46ff21] w-11 h-11 rounded-full" /> )}</span> : ""}

          { todo.category === "Pessoal" ? <span className="w-12 h-12  border-[#ff1e00] flex items-center justify-center mx-5 border-4 border-solid rounded-full" >
          {todo.isCompleted && (<FiCheck className="bg-[#ff1e00] w-11 h-11 rounded-full" />)}</span> : ""}

          { todo.category === "Lazer" ? <span className="w-12 h-12 border-[#FB32FF] flex items-center justify-center mx-5 border-4 border-solid rounded-full" >
          {todo.isCompleted && (<FiCheck className="bg-[#FB32FF] w-11 h-11 rounded-full" />)}</span> : ""}

          {todo.isCompleted === true ? <p className="line-through opacity-30">{todo.text}</p> : <p>{todo.text}</p>}
      </div>
      <div className="flex">
        <button 
        onClick={()=> completeTodo(todo.id)}
        className="flex items-center justify-center text-withPrimary font-extrabold border-2 border-withPrimary bg-[#2bd825] h-10 rounded-3xl px-5 mr-3 active:bg-graySecond ">Concluir</button>
        <button 
        onClick={()=> removeTodo(todo.id)}
        className="flex items-center justify-center text-withPrimary border-2 active:bg-graySecond border-withPrimary bg-[#e14b37] h-10 w-10 rounded-full duration-300 hover:-translate-y-1 " >
          <FiTrash2  className="w-6 h-6" />
        </button>
      </div>       
      </div>
    </div>

    
 )
  
}
