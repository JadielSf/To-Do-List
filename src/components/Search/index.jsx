export default function index({search, setSearch}) {
  return (
    <div className="flex items-center py-8">
        <input
          className="w-full h-12 mr-8  pl-5 bg-ligthBlue  border-b-2 border-withSecond duration-300 hover:-translate-y-1 focus:outline-none text-3xl text-withPrimary font-extrabold active:outline-none"
          type="text"
          name="Search"
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
          placeholder="Procurando alguma coisa?!"
        />
    </div>
  )
}
