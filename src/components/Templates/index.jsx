import Profile from "../assets/profile.jpg";
import Search from "../Search/index";
import CardCategory from "../CardCategory/index";
import Tasks from "../Tasks/index";
import Filtered from "../FilteredStatus/index"
import FilteredCategory from "../FilteredCatergory/index"
import { FiPlus } from "react-icons/fi";
import ModalForm from "../ModalForm/index";
import { useState } from "react";

export default function Tamplate() {
  //Todos para Testes
  const [todos,setTodo] = useState([
    {
      id: 2,
      text: "Reuniao com o time de desenvolvimento",
      category: "Trabalho",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: true,
    },
    {
      id: 5,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: true,
    },
    {
      id: 7,
      text: "Cinema as 28h",
      category: "Lazer",
      isCompleted: false,
    }
  ]);
  //state-Seach
  const [search, setSearch] = useState("")
  //Função-Modal
  const [open, setOpen] = useState(false);
  //Função-Adicionar-ToDo
  const addTodo = (text, category) => {
    const newTodo =[{
      id: Math.floor(Math.random()* 10000),
      text,
      category,
      isCompleted:false
    },...todos];
    setTodo(newTodo)
  }
  //Função-Remover-ToDo
  const removeTodo = (id) =>{

    const newTodo = [...todos]
    const filterTodo = newTodo.filter(todo => 
      todo.id !== id ? todo : null )
      setTodo(filterTodo)
  }
  //Função-Completar-ToDo
  const completeTodo = (id) =>{
    const newTodo = [...todos]
    newTodo.map((todo)=> todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodo(newTodo);
  }
  //Função-Filtrar-ToDo-Status
  const [filter, setFilter] = useState("All")

    //Função-Filtrar-ToDo-Categoria
  const [filterCategory, setFilterCategory] = useState("All")
 
  return (
    <div className="min-w-full  min-h-screen flex  bg-gradient-to-bl from-darkBlue from-30% via-grayPrimary via-50% to-darkBlue to-70% font-mono ">
      <aside className="w-96 pt-40 text-5xl m-20 text-withPrimary font-mono font-extrabold">
        <div className="w-full flex flex-col items-center ">
          <img
            className="rounded-full w-32 border-4 border-solid border-blueEfect mb-10 p-2 "
            src={Profile}
            alt="Profile"
          />
          <p>Askelad</p>
          <p>Montier</p>
        </div>
        <hr className="w-64 mt-10" />
        <hr className="w-64 my-1" />
        <Filtered filter={filter} setFilter={setFilter}/>
        <FilteredCategory filterCategory={filterCategory} setFilterCategory={setFilterCategory}/>
      </aside>
      <main className="w-full rounded-large mt-20 mr-20 py-12 px-10 bg-ligthBlue border-2 border-withSecond border-opacity-30 static">
        <Search search={search}  setSearch={setSearch}/>
        <p className="text-5xl text-withPrimary text font-mono font-extrabold pt-6 duration-300 hover:-translate-y-1 ">
          Olá Askelad!!
        </p>
        <h2 className="text-xl text-withSecond font-mono font-semibold  pt-6">
          Categorias
        </h2>
        <div className="flex mb-8 ">
          <CardCategory  title={"Trabalho"} todo={todos}/>
          <CardCategory  title={"Pessoal"} todo={todos}/>
          <CardCategory  title={"Estudos"} todo={todos}/>
          <CardCategory  title={"Lazer"} todo={todos}/>
        </div>
        <h2 className="text-xl text-withSecond font-mono font-semibold  py-6">
          Tarefas de Hoje
        </h2>
        <div>
          {todos
          .filter((todo) => filterCategory === "All" ? true : todo.category === filterCategory ? todo : null)
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((todo)=>todo.text.toLowerCase().includes(search.toLowerCase())
          ).map((todo) => (
            <Tasks 
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo} 
            completeTodo={completeTodo} />
          ))}
        </div>
        {
          open === true ?
            <button
              onClick={() => setOpen(!open)}
              className="z-50 w-60 h-20 rounded-full  flex items-center justify-center duration-300 hover:-translate-y-1 fixed bottom-[200px] right-[500px] border-4 border-withPrimary bg-pinkEfect text-2xl font-extrabold text-withPrimary  ">
              FECHAR
            </button> 
            : 
            <button
              onClick={() => setOpen(!open)}
              className="z-50 w-40 h-20 rounded-full bg-pinkEfect flex items-center justify-center duration-300  hover:-translate-y-1 fixed bottom-[43.7rem] right-32 border-4 border-withPrimary " >
              <FiPlus className="w-8 h-8 text-withPrimary duration-300 hover:rotate-180" />
            </button>
        }
        {open && (
          <ModalForm addTodo={addTodo}/>
        )}
      </main>
    </div>
  );
}
