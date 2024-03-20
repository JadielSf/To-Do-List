
export default function index({filterCategory, setFilterCategory}) {
  return (
    <div className="font-mono flex-col  ">
        <h2 className="mt-14 pl-3 text-2xl">Filtrar categoria</h2>
        <select 
        className="w-64 h-11 rounded-3xl text-withPrimary text-2xl text-center font-mono bg-pinkEfect border-2 border-withPrimary"
        value={filterCategory}  onChange={(e) => setFilterCategory(e.target.value)} >
            <option className="font-extrabold" value="All">Tudo</option>
            <option className="font-extrabold" value="Estudos">Estudos</option>
            <option className="font-extrabold" value="Pessoal">Pessoal</option>
            <option className="font-extrabold" value="Lazer">Lazer</option>
            <option className="font-extrabold" value="Trabalho">Trabalho</option>
        </select>
    </div>
  )
}
