"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { useState } from "react"
import { Search, Filter, Plus, Clock, Eye, ThumbsUp, BookOpen, Video, FileText } from "lucide-react"

const publicacoes = [
  {
    id: 1,
    titulo: "Como estruturar sua primeira publicação científica",
    autor: "Prof. João Paulo",
    tipo: "artigo",
    area: "metodologia",
    tempoLeitura: "10 min",
    visualizacoes: 1200,
    curtidas: 84,
    tags: ["ABNT", "Estrutura", "Iniciantes"],
    imagem: "/placeholder.svg?height=200&width=400",
    resumo: "Um guia completo para iniciantes sobre como estruturar e formatar seu primeiro artigo científico.",
    dataPublicacao: "2025-01-10",
  },
  {
    id: 2,
    titulo: "Ferramentas essenciais para pesquisa acadêmica",
    autor: "Dra. Ana Santos",
    tipo: "tutorial",
    area: "ferramentas",
    tempoLeitura: "15 min",
    visualizacoes: 956,
    curtidas: 72,
    tags: ["Software", "Produtividade", "Pesquisa"],
    imagem: "/placeholder.svg?height=200&width=400",
    resumo: "Conheça as principais ferramentas que todo pesquisador deve dominar para otimizar seu trabalho acadêmico.",
    dataPublicacao: "2025-01-08",
  },
  {
    id: 3,
    titulo: "Técnicas avançadas de revisão bibliográfica",
    autor: "Dra. Luísa Ferreira",
    tipo: "video",
    area: "metodologia",
    tempoLeitura: "25 min",
    visualizacoes: 823,
    curtidas: 67,
    tags: ["Revisão", "Bibliografia", "Avançado"],
    imagem: "/placeholder.svg?height=200&width=400",
    resumo: "Domine as técnicas mais eficientes para realizar uma revisão bibliográfica completa e eficaz.",
    dataPublicacao: "2025-01-05",
  },
  {
    id: 4,
    titulo: "Estatística aplicada à pesquisa qualitativa",
    autor: "Prof. Carlos Mendes",
    tipo: "artigo",
    area: "estatistica",
    tempoLeitura: "20 min",
    visualizacoes: 654,
    curtidas: 45,
    tags: ["Estatística", "Qualitativa", "Análise"],
    imagem: "/placeholder.svg?height=200&width=400",
    resumo: "Aprenda como aplicar métodos estatísticos em pesquisas qualitativas de forma eficiente.",
    dataPublicacao: "2025-01-03",
  },
  {
    id: 5,
    titulo: "Ética na pesquisa científica: princípios fundamentais",
    autor: "Dra. Marina Silva",
    tipo: "dica",
    area: "etica",
    tempoLeitura: "12 min",
    visualizacoes: 1100,
    curtidas: 98,
    tags: ["Ética", "Pesquisa", "Princípios"],
    imagem: "/placeholder.svg?height=200&width=400",
    resumo: "Entenda os princípios éticos fundamentais que devem guiar toda pesquisa científica.",
    dataPublicacao: "2025-01-01",
  },
  {
    id: 6,
    titulo: "Como escolher o periódico ideal para sua publicação",
    autor: "Prof. Roberto Lima",
    tipo: "tutorial",
    area: "publicacao",
    tempoLeitura: "18 min",
    visualizacoes: 789,
    curtidas: 56,
    tags: ["Periódicos", "Submissão", "Estratégia"],
    imagem: "/placeholder.svg?height=200&width=400",
    resumo: "Estratégias para escolher o periódico mais adequado para sua área de pesquisa e tipo de artigo.",
    dataPublicacao: "2024-12-28",
  },
]

const areas = [
  { value: "todas", label: "Todas as áreas" },
  { value: "metodologia", label: "Metodologia" },
  { value: "ferramentas", label: "Ferramentas" },
  { value: "estatistica", label: "Estatística" },
  { value: "etica", label: "Ética" },
  { value: "publicacao", label: "Publicação" },
]

const tipos = [
  { value: "todos", label: "Todos os tipos" },
  { value: "artigo", label: "Artigo" },
  { value: "tutorial", label: "Tutorial" },
  { value: "video", label: "Vídeo" },
  { value: "dica", label: "Dica" },
]

export default function PublicacoesPage() {
  const [busca, setBusca] = useState("")
  const [areaFiltro, setAreaFiltro] = useState("todas")
  const [tipoFiltro, setTipoFiltro] = useState("todos")

  const publicacoesFiltradas = publicacoes.filter((pub) => {
    const matchBusca =
      pub.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      pub.autor.toLowerCase().includes(busca.toLowerCase()) ||
      pub.tags.some((tag) => tag.toLowerCase().includes(busca.toLowerCase()))
    const matchArea = areaFiltro === "todas" || pub.area === areaFiltro
    const matchTipo = tipoFiltro === "todos" || pub.tipo === tipoFiltro

    return matchBusca && matchArea && matchTipo
  })

  const getIconeTipo = (tipo: string) => {
    switch (tipo) {
      case "artigo":
        return <BookOpen className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "tutorial":
        return <FileText className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getCorTipo = (tipo: string) => {
    switch (tipo) {
      case "artigo":
        return "bg-blue-100 text-blue-800"
      case "video":
        return "bg-red-100 text-red-800"
      case "tutorial":
        return "bg-purple-100 text-purple-800"
      case "dica":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Publicações Acadêmicas</h1>
          <p className="text-gray-600">
            Explore artigos, tutoriais e conteúdos de qualidade para sua jornada acadêmica
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Publicar Novo Conteúdo
        </Button>
      </div>

      {/* Filtros e busca */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar por título, autor ou tags..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={areaFiltro} onValueChange={setAreaFiltro}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Área de interesse" />
          </SelectTrigger>
          <SelectContent>
            {areas.map((area) => (
              <SelectItem key={area.value} value={area.value}>
                {area.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={tipoFiltro} onValueChange={setTipoFiltro}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Tipo de conteúdo" />
          </SelectTrigger>
          <SelectContent>
            {tipos.map((tipo) => (
              <SelectItem key={tipo.value} value={tipo.value}>
                {tipo.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Sidebar com dicas */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          {/* Lista de publicações */}
          <div className="grid gap-6">
            {publicacoesFiltradas.map((pub) => (
              <Card key={pub.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-48 h-48 md:h-auto relative">
                    {pub.id === 1 && (
                      <Image src="/images/artigo-estrutura.png" alt={pub.titulo} fill className="object-cover" />
                    )}
                    {pub.id === 2 && (
                      <Image src="/images/artigo-ferramentas.png" alt={pub.titulo} fill className="object-cover" />
                    )}
                    {pub.id === 3 && (
                      <Image src="/images/artigo-revisao.png" alt={pub.titulo} fill className="object-cover" />
                    )}
                    {pub.id === 4 && (
                      <Image src="/images/artigo-estatistica.png" alt={pub.titulo} fill className="object-cover" />
                    )}
                    {pub.id === 5 && (
                      <Image src="/images/artigo-etica.png" alt={pub.titulo} fill className="object-cover" />
                    )}
                    {pub.id === 6 && (
                      <Image src="/images/artigo-publicacao.png" alt={pub.titulo} fill className="object-cover" />
                    )}
                  </div>
                  <CardContent className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={`${getCorTipo(pub.tipo)} flex items-center gap-1`}>
                        {getIconeTipo(pub.tipo)}
                        {pub.tipo.charAt(0).toUpperCase() + pub.tipo.slice(1)}
                      </Badge>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {pub.tempoLeitura}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">{pub.titulo}</h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">{pub.resumo}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {pub.id === 1 && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/images/avatar-joao-paulo.png" />
                            <AvatarFallback>JP</AvatarFallback>
                          </Avatar>
                        )}
                        {pub.id === 2 && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/images/avatar-ana-santos.png" />
                            <AvatarFallback>AS</AvatarFallback>
                          </Avatar>
                        )}
                        {pub.id === 3 && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/images/avatar-luisa-ferreira.png" />
                            <AvatarFallback>LF</AvatarFallback>
                          </Avatar>
                        )}
                        {pub.id === 4 && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/images/avatar-carlos-mendes.png" />
                            <AvatarFallback>CM</AvatarFallback>
                          </Avatar>
                        )}
                        {pub.id === 5 && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/images/avatar-marina-santos.png" />
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                        )}
                        {pub.id === 6 && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="/images/avatar-roberto-mendes.png" />
                            <AvatarFallback>RL</AvatarFallback>
                          </Avatar>
                        )}
                        <div>
                          <p className="text-sm font-medium">{pub.autor}</p>
                          <p className="text-xs text-gray-500">{pub.dataPublicacao}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {pub.visualizacoes}
                          </span>
                          <span className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {pub.curtidas}
                          </span>
                        </div>
                        <Button size="sm">Ler mais</Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {publicacoesFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nenhuma publicação encontrada com os filtros aplicados.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setBusca("")
                  setAreaFiltro("todas")
                  setTipoFiltro("todos")
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>

        {/* Sidebar com dicas */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">💡 Dicas Rápidas</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-sm">Estrutura básica</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Todo artigo deve ter: introdução, metodologia, resultados e conclusão.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-sm">Citações ABNT</h4>
                  <p className="text-xs text-gray-600 mt-1">Use (AUTOR, ano) para citações diretas e indiretas.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-sm">Revisão por pares</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Sempre peça para colegas revisarem seu trabalho antes da submissão.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">📚 Recursos Úteis</h3>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Manual ABNT
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Templates de Artigos
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Checklist de Revisão
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Banco de Periódicos
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">🎯 Estatísticas</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Total de publicações</span>
                  <span className="font-medium">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Novos esta semana</span>
                  <span className="font-medium">23</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Mais populares</span>
                  <span className="font-medium">Metodologia</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
