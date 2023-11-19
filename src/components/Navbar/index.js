import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex flex-col md:flex-row justify-between md:items-center p-4 gap-2">
        <Link className="font-bold text-white md:text-2xl text-md" href="/">CUYANIMELIST</Link>
        <InputSearch />
      </div>
    </header>
  )
}

export default Navbar