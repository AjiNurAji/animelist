import Link from "next/link"

const Navbar = () => {
  return (
    <header className="bg-indigo-500">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-2">
        <Link className="font-bold text-white md:text-2xl text-md" href="/">CUYANIMELIST</Link>
        <input type="text" placeholder="Cari anime..." className=""/>
      </div>
    </header>
  )
}

export default Navbar