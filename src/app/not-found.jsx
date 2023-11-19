"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen max-w-xl mx-auto">
      <div className="flex flex-col justify-cener items-center gap-3">
        <FileSearch size={50} className="text-color-accent border-b-[1px] pb-3 border-color-secondary" />
        <h3 className="text-color-accent text-2xl font-bold">NOT FOUND</h3>
        <Link href="/" className="text-color-primary hover:text-color-accent transition-all underline">Kembali</Link>
      </div>
    </div>
  )
}

export default Page