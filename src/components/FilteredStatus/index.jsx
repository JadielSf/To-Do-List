export default function index({filter , setFilter}) {
  return (
    <div className="font-mono">
        <h2 className="mt-14 pl-3 text-2xl">Filtrar por status</h2>
        <select 
        className="w-64 h-11 rounded-3xl text-withPrimary text-2xl text-center font-mono bg-pinkEfect border-2 border-withPrimary"
        value={filter}  onChange={(e) => setFilter(e.target.value)} >
            <option className="font-extrabold" value="All">Tudo</option>
            <option className="font-extrabold" value="Completed">Completa</option>
            <option className="font-extrabold" value="Incomplete">Incompleta</option>
        </select>
    </div>
  )
}
