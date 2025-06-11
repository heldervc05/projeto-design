import type React from "react"
import { MainNav } from "@/components/main-nav"
import { Search } from "@/components/search"
import { UserNav } from "@/components/user-nav"
import { Bell, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Suspense } from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <div className="flex flex-col flex-grow border-r border-gray-200 bg-white pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 mb-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <h1 className="text-xl font-bold text-blue-800">Hagaveta</h1>
            </div>
          </div>
          <div className="mt-5 flex-1 flex flex-col px-3">
            <MainNav />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-white px-4 sm:px-6">
          <div className="hidden md:block flex-1">
            <Suspense>
              <Search />
            </Suspense>
          </div>

          <div className="flex items-center gap-4 md:ml-auto">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                3
              </Badge>
              <span className="sr-only">Notificações</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                5
              </Badge>
              <span className="sr-only">Mensagens</span>
            </Button>
            <UserNav />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-white py-4 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">H</span>
              </div>
              <p className="text-sm text-gray-600">© 2025 Hagaveta do Saber. Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Termos de Uso
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                Contato
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
