"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { Search, Star, Calendar, Clock, MessageSquare, Video, Filter, CheckCircle } from "lucide-react"

const mentores = [
  {
    id: 1,
    nome: "Prof. Carlos Silva, PhD",
    area: "Metodologia Científica",
    especializacoes: ["Pesquisa Qualitativa", "Análise de Dados", "Publicação"],
    experiencia: "15 anos",
    avaliacao: 4.9,
    totalAvaliacoes: 127,
    preco: "R$ 80/hora",
    disponivel: true,
    proximaVaga: "Hoje às 15:00",
    bio: "Doutor em Ciências Sociais com vasta experiência em orientação de pesquisas qualitativas e quantitativas.",
    avatar: "CS",
    sessoes: 234,
    areas: ["Ciências Sociais", "Metodologia", "Estatística"],
  },
  {
    id: 2,
    nome: "Dra. Ana Beatriz Santos",
    area: "Redação Científica",
    especializacoes: ["ABNT", "Artigos Científicos", "Revisão de Texto"],
    experiencia: "12 anos",
    avaliacao: 4.8,
    totalAvaliacoes: 89,
    preco: "R$ 70/hora",
    disponivel: true,
    proximaVaga: "Amanhã às 09:00",
    bio: "Especialista em redação acadêmica e normas ABNT, com mais de 200 artigos publicados em periódicos internacionais.",
    avatar: "AB",
    sessoes: 156,
    areas: ["Redação", "Linguística", "Publicação"],
  },
  {
    id: 3,
    nome: "Prof. Roberto Mendes",
    area: "Estatística Aplicada",
    especializacoes: ["SPSS", "R", "Análise Multivariada"],
    experiencia: "18 anos",
    avaliacao: 4.7,
    totalAvaliacoes: 203,
    preco: "R$ 90/hora",
    disponivel: false,
    proximaVaga: "Segunda às 14:00",
    bio: "Professor titular com expertise em análise estatística para pesquisas acadêmicas e consultoria em metodologia quantitativa.",
    avatar: "RM",
    sessoes: 312,
    areas: ["Estatística", "Matemática", "Análise de Dados"],
  },
  {
    id: 4,
    nome: "Dra. Marina Costa",
    area: "Ética na Pesquisa",
    especializacoes: ["Comitê de Ética", "Pesquisa com Humanos", "Bioética"],
    experiencia: "10 anos",
    avaliacao: 4.9,
    totalAvaliacoes: 67,
    preco: "R$ 75/hora",
    disponivel: true,
    proximaVaga: "Hoje às 16:30",
    bio: "Membro de comitês de ética em pesquisa e especialista em aspectos éticos da investigação científica.",
    avatar: "MC",
    sessoes: 98,
    areas: ["Ética", "Bioética", "Direito"],
  },
  {
    id: 5,
    nome: "Prof. Eduardo Santos",
    area: "Publicação Internacional",
    especializacoes: ["Periódicos Internacionais", "Peer Review", "Impact Factor"],
    experiencia: "20 anos",
    avaliacao: 4.8,
    totalAvaliacoes: 145,
    preco: "R$ 100/hora",
    disponivel: true,
    proximaVaga: "Sexta às 10:00",
    bio: "Editor associado de revistas internacionais e consultor em estratégias de publicação acadêmica.",
    avatar: "ES",
    sessoes: 278,
    areas: ["Publicação", "Editoração", "Comunicação Científica"],
  },
]

const sessoesAgendadas = [
  {
    id: 1,
    mentor: "Prof. Carlos Silva",
    tema: "Análise de dados qualitativos",
    data: "2025-01-15",
    horario: "15:00",
    duracao: "1 hora",
    tipo: "video",
    status: "confirmada",
  },
  {
    id: 2,
    mentor: "Dra. Ana Beatriz Santos",
    tema: "Revisão do artigo científico",
    data: "2025-01-18",
    horario: "09:00",
    duracao: "1.5 horas",
    tipo: "presencial",
    status: "pendente",
  },
]

const avaliacoes = [
  {
    id: 1,
    mentor: "Prof. Carlos Silva",
    avaliacao: 5,
    comentario: "Excelente orientação! Me ajudou muito com a metodologia da minha pesquisa.",
    autor: "Maria Santos",
    data: "2025-01-10",
  },
  {
    id: 2,
    mentor: "Dra. Ana Beatriz Santos",
    avaliacao: 5,
    comentario: "Muito didática e paciente. Meu artigo ficou muito melhor após suas sugestões.",
    autor: "João Silva",
    data: "2025-01-08",
  },
]

export default function MentoriaPage() {
  const [busca, setBusca] = useState("")
  const [areaFiltro, setAreaFiltro] = useState("todas")
  const [disponibilidadeFiltro, setDisponibilidadeFiltro] = useState("todos")

  const mentoresFiltrados = mentores.filter((mentor) => {
    const matchBusca =
      mentor.nome.toLowerCase().includes(busca.toLowerCase()) ||
      mentor.area.toLowerCase().includes(busca.toLowerCase()) ||
      mentor.especializacoes.some((esp) => esp.toLowerCase().includes(busca.toLowerCase()))
    const matchArea =
      areaFiltro === "todas" || mentor.areas.some((area) => area.toLowerCase().includes(areaFiltro.toLowerCase()))
    const matchDisponibilidade =
      disponibilidadeFiltro === "todos" ||
      (disponibilidadeFiltro === "disponivel" && mentor.disponivel) ||
      (disponibilidadeFiltro === "indisponivel" && !mentor.disponivel)

    return matchBusca && matchArea && matchDisponibilidade
  })

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-500 fill-current" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mentoria Acadêmica</h1>
          <p className="text-gray-600">Conecte-se com mentores experientes para acelerar sua jornada acadêmica</p>
        </div>
        <Button>
          <Calendar className="mr-2 h-4 w-4" />
          Minhas Sessões
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Conteúdo principal */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="mentores" className="space-y-4">
            <TabsList>
              <TabsTrigger value="mentores">Encontrar Mentores</TabsTrigger>
              <TabsTrigger value="sessoes">Minhas Sessões</TabsTrigger>
              <TabsTrigger value="avaliacoes">Avaliações</TabsTrigger>
            </TabsList>

            <TabsContent value="mentores" className="space-y-4">
              {/* Filtros e busca */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Buscar mentores por nome, área ou especialização..."
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={areaFiltro} onValueChange={setAreaFiltro}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Área" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todas">Todas as áreas</SelectItem>
                    <SelectItem value="metodologia">Metodologia</SelectItem>
                    <SelectItem value="redacao">Redação</SelectItem>
                    <SelectItem value="estatistica">Estatística</SelectItem>
                    <SelectItem value="etica">Ética</SelectItem>
                    <SelectItem value="publicacao">Publicação</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={disponibilidadeFiltro} onValueChange={setDisponibilidadeFiltro}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Disponibilidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos</SelectItem>
                    <SelectItem value="disponivel">Disponível</SelectItem>
                    <SelectItem value="indisponivel">Indisponível</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>

              {/* Lista de mentores */}
              <div className="grid gap-6">
                {mentoresFiltrados.map((mentor) => (
                  <Card key={mentor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-6">
                        <div className="relative">
                          {mentor.nome === "Prof. Carlos Silva, PhD" ? (
                            <Avatar className="h-20 w-20">
                              <AvatarImage src="/images/avatar-carlos-silva.png" />
                              <AvatarFallback className="text-lg">CS</AvatarFallback>
                            </Avatar>
                          ) : mentor.nome === "Dra. Ana Beatriz Santos" ? (
                            <Avatar className="h-20 w-20">
                              <AvatarImage src="/images/avatar-ana-beatriz.png" />
                              <AvatarFallback className="text-lg">AB</AvatarFallback>
                            </Avatar>
                          ) : mentor.nome === "Prof. Roberto Mendes" ? (
                            <Avatar className="h-20 w-20">
                              <AvatarImage src="/images/avatar-roberto-mendes.png" />
                              <AvatarFallback className="text-lg">RM</AvatarFallback>
                            </Avatar>
                          ) : mentor.nome === "Dra. Marina Costa" ? (
                            <Avatar className="h-20 w-20">
                              <AvatarImage src="/images/avatar-marina-costa.png" />
                              <AvatarFallback className="text-lg">MC</AvatarFallback>
                            </Avatar>
                          ) : (
                            <Avatar className="h-20 w-20">
                              <AvatarImage src="/images/avatar-eduardo-santos.png" />
                              <AvatarFallback className="text-lg">ES</AvatarFallback>
                            </Avatar>
                          )}
                          {mentor.disponivel && (
                            <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                              <CheckCircle className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-semibold">{mentor.nome}</h3>
                              <p className="text-blue-600 font-medium">{mentor.area}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-green-600">{mentor.preco}</p>
                              <p className="text-sm text-gray-500">{mentor.experiencia} de experiência</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center">{renderStars(mentor.avaliacao)}</div>
                            <span className="font-medium">{mentor.avaliacao}</span>
                            <span className="text-gray-500">({mentor.totalAvaliacoes} avaliações)</span>
                            <span className="text-gray-500">• {mentor.sessoes} sessões</span>
                          </div>

                          <p className="text-gray-600 mb-4">{mentor.bio}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {mentor.especializacoes.map((esp) => (
                              <Badge key={esp} variant="secondary" className="text-xs">
                                {esp}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {mentor.disponivel ? mentor.proximaVaga : "Indisponível"}
                              </span>
                              <Badge
                                className={
                                  mentor.disponivel ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }
                              >
                                {mentor.disponivel ? "Disponível" : "Ocupado"}
                              </Badge>
                            </div>

                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <MessageSquare className="h-4 w-4 mr-2" />
                                Mensagem
                              </Button>
                              <Button size="sm" disabled={!mentor.disponivel}>
                                <Video className="h-4 w-4 mr-2" />
                                Agendar Sessão
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sessoes" className="space-y-4">
              <div className="grid gap-4">
                {sessoesAgendadas.map((sessao) => (
                  <Card key={sessao.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          {sessao.mentor === "Prof. Carlos Silva" ? (
                            <Avatar className="h-12 w-12">
                              <AvatarImage src="/images/avatar-carlos-silva.png" />
                              <AvatarFallback>CS</AvatarFallback>
                            </Avatar>
                          ) : (
                            <Avatar className="h-12 w-12">
                              <AvatarImage src="/images/avatar-ana-beatriz.png" />
                              <AvatarFallback>AB</AvatarFallback>
                            </Avatar>
                          )}
                          <div>
                            <h3 className="font-semibold">{sessao.tema}</h3>
                            <p className="text-gray-600">com {sessao.mentor}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                              <span className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(sessao.data).toLocaleDateString("pt-BR")}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {sessao.horario} ({sessao.duracao})
                              </span>
                              <Badge
                                className={
                                  sessao.tipo === "video" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                                }
                              >
                                {sessao.tipo === "video" ? "Online" : "Presencial"}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Badge
                            className={
                              sessao.status === "confirmada"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }
                          >
                            {sessao.status === "confirmada" ? "Confirmada" : "Pendente"}
                          </Badge>
                          <Button variant="outline" size="sm">
                            {sessao.tipo === "video" ? "Entrar na Chamada" : "Ver Detalhes"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {sessoesAgendadas.length === 0 && (
                  <div className="text-center py-12">
                    <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Nenhuma sessão agendada</h3>
                    <p className="text-gray-600 mb-4">
                      Você ainda não tem sessões de mentoria agendadas. Explore nossos mentores e agende sua primeira
                      sessão!
                    </p>
                    <Button>Encontrar Mentores</Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="avaliacoes" className="space-y-4">
              <div className="grid gap-4">
                {avaliacoes.map((avaliacao) => (
                  <Card key={avaliacao.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {avaliacao.autor === "Maria Santos" ? (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/images/avatar-maria-silva.png" />
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                        ) : (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src="/images/avatar-joao-paulo.png" />
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-medium">{avaliacao.autor}</h4>
                              <p className="text-sm text-gray-600">Sessão com {avaliacao.mentor}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="flex">{renderStars(avaliacao.avaliacao)}</div>
                              <span className="text-sm text-gray-500">
                                {new Date(avaliacao.data).toLocaleDateString("pt-BR")}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-700">{avaliacao.comentario}</p>
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
          {/* Estatísticas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Suas Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">8</div>
                <p className="text-sm text-gray-600">Sessões realizadas</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">12h</div>
                <p className="text-sm text-gray-600">Horas de mentoria</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4.9</div>
                <p className="text-sm text-gray-600">Avaliação média</p>
              </div>
            </CardContent>
          </Card>

          {/* Próximas sessões */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Próximas Sessões
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sessoesAgendadas.slice(0, 2).map((sessao) => (
                <div key={sessao.id} className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-1">{sessao.tema}</h4>
                  <p className="text-xs text-gray-600 mb-2">com {sessao.mentor}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span>{new Date(sessao.data).toLocaleDateString("pt-BR")}</span>
                    <span>{sessao.horario}</span>
                  </div>
                </div>
              ))}
              {sessoesAgendadas.length === 0 && (
                <p className="text-sm text-gray-600 text-center">Nenhuma sessão agendada</p>
              )}
            </CardContent>
          </Card>

          {/* Dicas de mentoria */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">💡 Dicas de Mentoria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>• Prepare suas dúvidas com antecedência</p>
              <p>• Seja específico sobre seus objetivos</p>
              <p>• Mantenha um caderno de anotações</p>
              <p>• Pratique o que foi discutido na sessão</p>
              <p>• Dê feedback ao seu mentor</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
