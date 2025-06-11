"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { useState } from "react"
import { Search, Calendar, MapPin, Users, Clock, ExternalLink, Plus, Filter } from "lucide-react"

const eventos = [
  {
    id: 1,
    titulo: "Simpósio Internacional de Pesquisa Acadêmica",
    descricao: "Participe do maior evento de pesquisa acadêmica do ano com palestrantes renomados e networking.",
    data: "2025-06-15",
    horario: "09:00 - 18:00",
    local: "Centro de Convenções - São Paulo, SP",
    tipo: "presencial",
    categoria: "simposio",
    vagas: 500,
    inscritos: 342,
    preco: "R$ 150,00",
    organizador: "Universidade Federal",
    imagem: "/placeholder.svg?height=200&width=400",
    tags: ["Pesquisa", "Acadêmico", "Networking"],
    palestrantes: ["Dr. João Silva", "Dra. Maria Santos", "Prof. Carlos Lima"],
  },
  {
    id: 2,
    titulo: "Workshop: Metodologia de Pesquisa Qualitativa",
    descricao: "Aprenda técnicas avançadas de pesquisa qualitativa com especialistas da área.",
    data: "2025-03-20",
    horario: "14:00 - 17:00",
    local: "Online via Zoom",
    tipo: "online",
    categoria: "workshop",
    vagas: 100,
    inscritos: 78,
    preco: "Gratuito",
    organizador: "Instituto de Pesquisa",
    imagem: "/placeholder.svg?height=200&width=400",
    tags: ["Metodologia", "Qualitativa", "Workshop"],
    palestrantes: ["Dra. Ana Beatriz", "Prof. Roberto Mendes"],
  },
  {
    id: 3,
    titulo: "Congresso Nacional de Ciências Exatas",
    descricao: "Apresente seus trabalhos e conheça as últimas descobertas em ciências exatas.",
    data: "2025-08-10",
    horario: "08:00 - 19:00",
    local: "Universidade Estadual - Rio de Janeiro, RJ",
    tipo: "presencial",
    categoria: "congresso",
    vagas: 800,
    inscritos: 234,
    preco: "R$ 200,00",
    organizador: "Sociedade Brasileira de Ciências",
    imagem: "/placeholder.svg?height=200&width=400",
    tags: ["Ciências Exatas", "Apresentação", "Pesquisa"],
    palestrantes: ["Prof. Eduardo Santos", "Dra. Fernanda Costa", "Dr. Lucas Oliveira"],
  },
  {
    id: 4,
    titulo: "Webinar: Publicação em Periódicos Internacionais",
    descricao: "Dicas essenciais para publicar seus artigos em periódicos de alto impacto.",
    data: "2025-02-28",
    horario: "19:00 - 21:00",
    local: "Online via YouTube Live",
    tipo: "online",
    categoria: "webinar",
    vagas: 1000,
    inscritos: 567,
    preco: "Gratuito",
    organizador: "Editora Acadêmica",
    imagem: "/placeholder.svg?height=200&width=400",
    tags: ["Publicação", "Periódicos", "Internacional"],
    palestrantes: ["Dr. Michael Johnson", "Dra. Sarah Williams"],
  },
  {
    id: 5,
    titulo: "Seminário de Ética na Pesquisa",
    descricao: "Discussão sobre os aspectos éticos fundamentais na condução de pesquisas científicas.",
    data: "2025-04-05",
    horario: "09:00 - 12:00",
    local: "Auditório Central - Brasília, DF",
    tipo: "presencial",
    categoria: "seminario",
    vagas: 200,
    inscritos: 156,
    preco: "R$ 50,00",
    organizador: "Comitê de Ética",
    imagem: "/placeholder.svg?height=200&width=400",
    tags: ["Ética", "Pesquisa", "Responsabilidade"],
    palestrantes: ["Dra. Marina Silva", "Prof. Carlos Mendes"],
  },
  {
    id: 6,
    titulo: "Mesa Redonda: Futuro da Pesquisa no Brasil",
    descricao: "Debate sobre os desafios e oportunidades da pesquisa científica brasileira.",
    data: "2025-05-12",
    horario: "15:00 - 18:00",
    local: "Híbrido - Presencial e Online",
    tipo: "hibrido",
    categoria: "mesa-redonda",
    vagas: 300,
    inscritos: 189,
    preco: "R$ 75,00",
    organizador: "CNPq",
    imagem: "/placeholder.svg?height=200&width=400",
    tags: ["Futuro", "Pesquisa", "Brasil"],
    palestrantes: ["Dr. Antonio Silva", "Dra. Beatriz Santos", "Prof. Ricardo Lima"],
  },
]

const categorias = [
  { value: "todas", label: "Todas as categorias" },
  { value: "simposio", label: "Simpósio" },
  { value: "workshop", label: "Workshop" },
  { value: "congresso", label: "Congresso" },
  { value: "webinar", label: "Webinar" },
  { value: "seminario", label: "Seminário" },
  { value: "mesa-redonda", label: "Mesa Redonda" },
]

const tipos = [
  { value: "todos", label: "Todos os tipos" },
  { value: "presencial", label: "Presencial" },
  { value: "online", label: "Online" },
  { value: "hibrido", label: "Híbrido" },
]

export default function EventosPage() {
  const [busca, setBusca] = useState("")
  const [categoriaFiltro, setCategoriaFiltro] = useState("todas")
  const [tipoFiltro, setTipoFiltro] = useState("todos")

  const eventosFiltrados = eventos.filter((evento) => {
    const matchBusca =
      evento.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      evento.descricao.toLowerCase().includes(busca.toLowerCase()) ||
      evento.tags.some((tag) => tag.toLowerCase().includes(busca.toLowerCase()))
    const matchCategoria = categoriaFiltro === "todas" || evento.categoria === categoriaFiltro
    const matchTipo = tipoFiltro === "todos" || evento.tipo === tipoFiltro

    return matchBusca && matchCategoria && matchTipo
  })

  const getCorTipo = (tipo: string) => {
    switch (tipo) {
      case "presencial":
        return "bg-blue-100 text-blue-800"
      case "online":
        return "bg-green-100 text-green-800"
      case "hibrido":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCorCategoria = (categoria: string) => {
    switch (categoria) {
      case "simposio":
        return "bg-red-100 text-red-800"
      case "workshop":
        return "bg-yellow-100 text-yellow-800"
      case "congresso":
        return "bg-indigo-100 text-indigo-800"
      case "webinar":
        return "bg-pink-100 text-pink-800"
      case "seminario":
        return "bg-orange-100 text-orange-800"
      case "mesa-redonda":
        return "bg-teal-100 text-teal-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  }

  const eventosProximos = eventos
    .filter((evento) => new Date(evento.data) >= new Date())
    .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime())
    .slice(0, 3)

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Eventos Acadêmicos</h1>
          <p className="text-gray-600">Descubra eventos, workshops e conferências para expandir seu conhecimento</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Criar Evento
        </Button>
      </div>

      {/* Filtros e busca */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Buscar eventos..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoriaFiltro} onValueChange={setCategoriaFiltro}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            {categorias.map((categoria) => (
              <SelectItem key={categoria.value} value={categoria.value}>
                {categoria.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={tipoFiltro} onValueChange={setTipoFiltro}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Tipo" />
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Lista de eventos */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="todos" className="space-y-4">
            <TabsList>
              <TabsTrigger value="todos">Todos os Eventos</TabsTrigger>
              <TabsTrigger value="proximos">Próximos</TabsTrigger>
              <TabsTrigger value="meus">Meus Eventos</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="space-y-4">
              <div className="grid gap-6">
                {eventosFiltrados.map((evento) => (
                  <Card key={evento.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-64 h-48 md:h-auto relative">
                        <Image
                          src={
                            evento.categoria === "simposio"
                              ? "/images/evento-simposio.png"
                              : evento.categoria === "workshop"
                                ? "/images/evento-workshop.png"
                                : evento.categoria === "congresso"
                                  ? "/images/evento-congresso.png"
                                  : evento.categoria === "webinar"
                                    ? "/images/evento-webinar.png"
                                    : evento.categoria === "seminario"
                                      ? "/images/evento-seminario.png"
                                      : evento.categoria === "mesa-redonda"
                                        ? "/images/evento-mesa-redonda.png"
                                        : evento.imagem || "/placeholder.svg"
                          }
                          alt={evento.titulo}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="flex-1 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge className={getCorCategoria(evento.categoria)}>
                            {evento.categoria.charAt(0).toUpperCase() + evento.categoria.slice(1)}
                          </Badge>
                          <Badge className={getCorTipo(evento.tipo)}>
                            {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                          </Badge>
                          <Badge variant="outline">{evento.preco}</Badge>
                        </div>

                        <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
                          {evento.titulo}
                        </h3>

                        <p className="text-gray-600 mb-4">{evento.descricao}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            {formatarData(evento.data)} • {evento.horario}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="h-4 w-4 mr-2" />
                            {evento.local}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            {evento.inscritos}/{evento.vagas} inscritos
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="h-4 w-4 mr-2" />
                            {evento.organizador}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {evento.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2">Palestrantes:</p>
                          <p className="text-sm text-gray-600">{evento.palestrantes.join(", ")}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-500">{evento.vagas - evento.inscritos} vagas restantes</div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Detalhes
                            </Button>
                            <Button size="sm">
                              <Calendar className="h-4 w-4 mr-2" />
                              Inscrever-se
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="proximos" className="space-y-4">
              <div className="grid gap-6">
                {eventosProximos.map((evento) => (
                  <Card key={evento.id} className="overflow-hidden border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className={getCorCategoria(evento.categoria)}>
                          {evento.categoria.charAt(0).toUpperCase() + evento.categoria.slice(1)}
                        </Badge>
                        <Badge className={getCorTipo(evento.tipo)}>
                          {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold mb-2">{evento.titulo}</h3>
                      <p className="text-gray-600 mb-4">{evento.descricao}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          {formatarData(evento.data)}
                        </div>
                        <Button size="sm">Ver Detalhes</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="meus" className="space-y-4">
              <div className="text-center py-12">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Nenhum evento inscrito</h3>
                <p className="text-gray-600 mb-4">
                  Você ainda não se inscreveu em nenhum evento. Explore os eventos disponíveis e faça sua inscrição!
                </p>
                <Button>Explorar Eventos</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Próximos eventos */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">🗓️ Próximos Eventos</h3>
              <div className="space-y-4">
                {eventosProximos.slice(0, 3).map((evento) => (
                  <div key={evento.id} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-sm mb-1">{evento.titulo}</h4>
                    <p className="text-xs text-gray-600">{formatarData(evento.data)}</p>
                    <p className="text-xs text-gray-600">{evento.local}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categorias populares */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">📊 Categorias Populares</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Workshops</span>
                  <span className="text-sm font-medium">23 eventos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Webinars</span>
                  <span className="text-sm font-medium">18 eventos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Congressos</span>
                  <span className="text-sm font-medium">12 eventos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Simpósios</span>
                  <span className="text-sm font-medium">8 eventos</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dicas para eventos */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">💡 Dicas para Eventos</h3>
              <div className="space-y-3 text-sm">
                <p>• Inscreva-se com antecedência para garantir sua vaga</p>
                <p>• Prepare perguntas relevantes para os palestrantes</p>
                <p>• Leve cartões de visita para networking</p>
                <p>• Participe ativamente das discussões</p>
                <p>• Conecte-se com outros participantes nas redes sociais</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
