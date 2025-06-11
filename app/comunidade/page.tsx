"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { Search, Plus, MessageSquare, Eye, ThumbsUp, Users, TrendingUp, Pin } from "lucide-react"

const categorias = [
  { id: "redacao", nome: "Redação Científica", cor: "bg-blue-100 text-blue-800", topicos: 156, posts: 1240 },
  { id: "duvidas", nome: "Dúvidas Gerais", cor: "bg-purple-100 text-purple-800", topicos: 89, posts: 567 },
  { id: "networking", nome: "Networking", cor: "bg-green-100 text-green-800", topicos: 67, posts: 423 },
  { id: "metodologia", nome: "Metodologia", cor: "bg-orange-100 text-orange-800", topicos: 134, posts: 890 },
  { id: "ferramentas", nome: "Ferramentas", cor: "bg-pink-100 text-pink-800", topicos: 78, posts: 345 },
  { id: "eventos", nome: "Eventos", cor: "bg-indigo-100 text-indigo-800", topicos: 45, posts: 234 },
]

const topicos = [
  {
    id: 1,
    titulo: "Dúvida sobre formatação ABNT para citações longas",
    autor: "Pedro Lima",
    categoria: "redacao",
    respostas: 8,
    visualizacoes: 42,
    curtidas: 5,
    tempo: "há 2 horas",
    fixado: false,
    ultimaResposta: "há 30 min",
  },
  {
    id: 2,
    titulo: "Recomendações de software para análise qualitativa",
    autor: "Juliana Costa",
    categoria: "ferramentas",
    respostas: 12,
    visualizacoes: 78,
    curtidas: 9,
    tempo: "há 5 horas",
    fixado: true,
    ultimaResposta: "há 1 hora",
  },
  {
    id: 3,
    titulo: "Como escolher o periódico ideal para submissão?",
    autor: "Ricardo Fernandes",
    categoria: "duvidas",
    respostas: 15,
    visualizacoes: 124,
    curtidas: 18,
    tempo: "há 1 dia",
    fixado: false,
    ultimaResposta: "há 3 horas",
  },
  {
    id: 4,
    titulo: "Networking em eventos acadêmicos: dicas práticas",
    autor: "Ana Beatriz",
    categoria: "networking",
    respostas: 23,
    visualizacoes: 189,
    curtidas: 34,
    tempo: "há 2 dias",
    fixado: false,
    ultimaResposta: "há 5 horas",
  },
  {
    id: 5,
    titulo: "Metodologia mista: quando e como aplicar?",
    autor: "Prof. Carlos Silva",
    categoria: "metodologia",
    respostas: 19,
    visualizacoes: 156,
    curtidas: 27,
    tempo: "há 3 dias",
    fixado: false,
    ultimaResposta: "há 1 dia",
  },
]

const usuariosAtivos = [
  { nome: "Dra. Maria Santos", posts: 234, curtidas: 1567, avatar: "MS" },
  { nome: "Prof. João Silva", posts: 189, curtidas: 1234, avatar: "JS" },
  { nome: "Ana Costa", posts: 156, curtidas: 987, avatar: "AC" },
  { nome: "Pedro Oliveira", posts: 134, curtidas: 876, avatar: "PO" },
  { nome: "Luiza Ferreira", posts: 123, curtidas: 765, avatar: "LF" },
]

export default function ComunidadePage() {
  const [busca, setBusca] = useState("")
  const [categoriaAtiva, setCategoriaAtiva] = useState("todas")

  const topicosFiltrados = topicos.filter((topico) => {
    const matchBusca =
      topico.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      topico.autor.toLowerCase().includes(busca.toLowerCase())
    const matchCategoria = categoriaAtiva === "todas" || topico.categoria === categoriaAtiva

    return matchBusca && matchCategoria
  })

  const getCorCategoria = (categoria: string) => {
    const cat = categorias.find((c) => c.id === categoria)
    return cat ? cat.cor : "bg-gray-100 text-gray-800"
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Comunidade</h1>
          <p className="text-gray-600">
            Conecte-se, compartilhe conhecimento e tire suas dúvidas com outros pesquisadores
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nova Discussão
        </Button>
      </div>

      {/* Busca */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Buscar discussões..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Conteúdo principal */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="discussoes" className="space-y-4">
            <TabsList>
              <TabsTrigger value="discussoes">Discussões</TabsTrigger>
              <TabsTrigger value="categorias">Categorias</TabsTrigger>
              <TabsTrigger value="populares">Populares</TabsTrigger>
            </TabsList>

            <TabsContent value="discussoes" className="space-y-4">
              {/* Filtros por categoria */}
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={categoriaAtiva === "todas" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategoriaAtiva("todas")}
                >
                  Todas
                </Button>
                {categorias.map((categoria) => (
                  <Button
                    key={categoria.id}
                    variant={categoriaAtiva === categoria.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCategoriaAtiva(categoria.id)}
                  >
                    {categoria.nome}
                  </Button>
                ))}
              </div>

              {/* Lista de tópicos */}
              <div className="space-y-4">
                {topicosFiltrados.map((topico) => (
                  <Card key={topico.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        {topico.id === 1 && (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/images/avatar-pedro-lima.png" />
                            <AvatarFallback>PL</AvatarFallback>
                          </Avatar>
                        )}
                        {topico.id === 2 && (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/images/avatar-juliana-costa.png" />
                            <AvatarFallback>JC</AvatarFallback>
                          </Avatar>
                        )}
                        {topico.id === 3 && (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/images/avatar-ricardo-fernandes.png" />
                            <AvatarFallback>RF</AvatarFallback>
                          </Avatar>
                        )}
                        {topico.id === 4 && (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/images/avatar-ana-beatriz.png" />
                            <AvatarFallback>AB</AvatarFallback>
                          </Avatar>
                        )}
                        {topico.id === 5 && (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/images/avatar-carlos-silva.png" />
                            <AvatarFallback>CS</AvatarFallback>
                          </Avatar>
                        )}

                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {topico.fixado && <Pin className="h-4 w-4 text-blue-600" />}
                            <Badge className={getCorCategoria(topico.categoria)}>
                              {categorias.find((c) => c.id === topico.categoria)?.nome}
                            </Badge>
                            <span className="text-xs text-gray-500">{topico.tempo}</span>
                          </div>

                          <h3 className="font-semibold text-lg mb-2 hover:text-blue-600 cursor-pointer">
                            {topico.titulo}
                          </h3>

                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm text-gray-600">por</span>
                            <span className="text-sm font-medium">{topico.autor}</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-500">última resposta {topico.ultimaResposta}</span>
                          </div>

                          <div className="flex items-center gap-6">
                            <span className="text-sm text-gray-500 flex items-center">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              {topico.respostas} respostas
                            </span>
                            <span className="text-sm text-gray-500 flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {topico.visualizacoes} visualizações
                            </span>
                            <span className="text-sm text-gray-500 flex items-center">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              {topico.curtidas} curtidas
                            </span>
                          </div>
                        </div>

                        <Button size="sm" variant="ghost">
                          Responder
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="categorias" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                {categorias.map((categoria) => (
                  <Card key={categoria.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={categoria.cor}>{categoria.nome}</Badge>
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Tópicos</span>
                          <span className="font-medium">{categoria.topicos}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Posts</span>
                          <span className="font-medium">{categoria.posts}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="populares" className="space-y-4">
              <div className="space-y-4">
                {topicos
                  .sort((a, b) => b.curtidas - a.curtidas)
                  .slice(0, 5)
                  .map((topico, index) => (
                    <Card key={topico.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold text-sm">
                            {index + 1}
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge className={getCorCategoria(topico.categoria)}>
                                {categorias.find((c) => c.id === topico.categoria)?.nome}
                              </Badge>
                              <TrendingUp className="h-4 w-4 text-green-600" />
                            </div>

                            <h3 className="font-semibold mb-2 hover:text-blue-600 cursor-pointer">{topico.titulo}</h3>

                            <div className="flex items-center gap-6 text-sm text-gray-500">
                              <span className="flex items-center">
                                <ThumbsUp className="h-4 w-4 mr-1" />
                                {topico.curtidas}
                              </span>
                              <span className="flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                {topico.respostas}
                              </span>
                              <span className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                {topico.visualizacoes}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Usuários mais ativos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5" />
                Usuários Mais Ativos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {usuariosAtivos.map((usuario, index) => (
                <div key={index} className="flex items-center gap-3">
                  {usuario.nome === "Dra. Maria Santos" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/avatar-maria-silva.png" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                  )}
                  {usuario.nome === "Prof. João Silva" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/avatar-joao-paulo.png" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                  )}
                  {usuario.nome === "Ana Costa" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/avatar-ana-santos.png" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                  )}
                  {usuario.nome === "Pedro Oliveira" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/avatar-pedro-lima.png" />
                      <AvatarFallback>PO</AvatarFallback>
                    </Avatar>
                  )}
                  {usuario.nome === "Luiza Ferreira" && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/avatar-luisa-ferreira.png" />
                      <AvatarFallback>LF</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium">{usuario.nome}</p>
                    <p className="text-xs text-gray-500">
                      {usuario.posts} posts • {usuario.curtidas} curtidas
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Estatísticas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Estatísticas da Comunidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Total de membros</span>
                <span className="font-medium">2,847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Discussões ativas</span>
                <span className="font-medium">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Posts hoje</span>
                <span className="font-medium">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Novos membros</span>
                <span className="font-medium">12</span>
              </div>
            </CardContent>
          </Card>

          {/* Regras da comunidade */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Regras da Comunidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <p>• Seja respeitoso com todos os membros</p>
                <p>• Mantenha as discussões relevantes ao tema</p>
                <p>• Use títulos descritivos para seus tópicos</p>
                <p>• Evite spam e autopromoção excessiva</p>
                <p>• Cite suas fontes quando necessário</p>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                Ver regras completas
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
