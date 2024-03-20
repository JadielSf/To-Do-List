import { useState } from "react";

export default function ModalFomr({addTodo}){ 


  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")
    
  const handleSubmit = (e) =>{
      e.preventDefault()
      if(!value || !category )return;
      addTodo(value,category)
      setValue("")
      setCategory("")
  }

  return (
    <div className="duration-300">
      <div className="fixed inset-0 bg-darkBlue bg-opacity-70 transition-opacity "></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
          <div className="relative transform overflow-hidden rounded-3xl text-left shadow-xl transition-all  ">
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4 bg-withSecond  ">
            <div>
                <h2 className="text-3xl my-8 font-bold text-ligthBlue ">Criar Tarefa</h2>
                <form onSubmit={handleSubmit}>
                  
                  <input 
                  className="w-full h-12 mb-5 px-5 focus:outline-none text-2xl rounded-3xl"
                  type="text"
                  name="title" 
                  value={value}
                  placeholder="Algo que queira fazer!?"
                  onChange={(e)=> setValue(e.target.value)}
                  />
                  <select 
                  onChange={(e)=> setCategory(e.target.value)}
                  name="Type"
                  value={category}
                  className="w-full h-12  px-5 text-2xl rounded-3xl ">
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Lazer">Lazer</option>
                  </select>
                  <button 
                  name="create" 
                  type="submit"
               
                  className="bg-[#2bd825] w-32 h-12 border-withPrimary border-4 rounded-3xl my-5 font-extrabold text-withPrimary duration-300 hover:-translate-y-1 accent-pinkEfect">ADICIONAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

