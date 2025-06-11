"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BookOpen, Calendar, Home, MessageSquare, Settings, Users, BookMarked, GraduationCap, User } from "lucide-react"

const items = [
  {
    title: "Início",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Publicações",
    href: "/publicacoes",
    icon: BookOpen,
  },
  {
    title: "Comunidade",
    href: "/comunidade",
    icon: Users,
  },
  {
    title: "Trilhas",
    href: "/trilhas",
    icon: BookMarked,
  },
  {
    title: "Eventos",
    href: "/eventos",
    icon: Calendar,
  },
  {
    title: "Chat",
    href: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Mentoria",
    href: "/mentoria",
    icon: GraduationCap,
  },
  {
    title: "Perfil",
    href: "/perfil",
    icon: User,
  },
  {
    title: "Configurações",
    href: "/configuracoes",
    icon: Settings,
  },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-1">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            pathname === item.href ? "bg-blue-100 text-blue-900" : "text-gray-600 hover:bg-blue-50 hover:text-blue-900",
          )}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.title}</span>
        </Link>
      ))}
    </nav>
  )
}
