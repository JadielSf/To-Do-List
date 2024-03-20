

export default function cardCategory({ title , todo }) {


    const T = todo.filter((todo) => todo.category === "Trabalho")
    const Tcomplete = (todo.filter((todo) => todo.category === "Trabalho").filter((todo)=> todo.isCompleted === true).length / T.length) * 100;
    const percentT = Tcomplete.toString() + "%";

    const E = todo.filter((todo) => todo.category === "Estudos")
    const Ecomplete = (todo.filter((todo) => todo.category ===  "Estudos").filter((todo)=> todo.isCompleted === true).length / E.length) * 100;
    const percentE = Ecomplete.toString() + "%";

    const L = todo.filter((todo) => todo.category === "Lazer")
    const Lcomplete = (todo.filter((todo) => todo.category ===  "Lazer").filter((todo)=> todo.isCompleted === true).length / L.length) * 100;
    const percentL = Lcomplete.toString() + "%";

    const P = todo.filter((todo) => todo.category === "Pessoal")
    const Pcomplete = (todo.filter((todo) => todo.category ===  "Pessoal").filter((todo)=> todo.isCompleted === true).length / P.length) * 100;
    const percentP = Pcomplete.toString() + "%";
  
  return (
    <div className="mt-4 mr-8 w-72 p-5 px-5 rounded-3xl shadow-xl duration-300 hover:-translate-y-1 bg-gradient-to-br from-darkBlue to-100%">
      
      {title === "Trabalho" ? <span className=" text-lg text-withSecond font-semibold ">{T.length} tarefas</span> :''}
      {title === "Estudos" ? <span className=" text-lg text-withSecond font-semibold ">{E.length} tarefas</span> :''}
      {title === "Lazer" ? <span className=" text-lg text-withSecond font-semibold ">{L.length} tarefas</span> :''}
      {title === "Pessoal" ? <span className=" text-lg text-withSecond font-semibold ">{P.length} tarefas</span> :''}

      <h1 className="mb-6 mt-3 text-3xl text-withPrimary font-semibold">
        {title}
      </h1>
      
      <div className="w-full h-1 bg-graySecond rounded-large">
        {title === "Trabalho" ? <div style={{width : percentT}} className="rounded-large h-1 bg-[#55e5ff]"></div> :''}
        {title === "Estudos" ? <div style={{width : percentE}} className="rounded-large h-1 bg-[#46ff21]"></div> :''}
        {title === "Lazer" ? <div style={{width : percentL}} className="rounded-large h-1 bg-[#FB32FF]"></div> :''}
        {title === "Pessoal" ? <div style={{width : percentP}} className="rounded-large h-1 bg-[#ff1e00]"></div> :''}
      </div>
    </div>
  );
}
