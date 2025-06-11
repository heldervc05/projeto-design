"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { useState } from "react"
import { SearchIcon } from "lucide-react"

export function Search() {
  const [query, setQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Pesquisando por:", query)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-sm">
      <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        type="search"
        placeholder="Pesquisar..."
        className="w-full pl-9 bg-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  )
}
