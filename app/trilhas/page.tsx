"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { useState } from "react"
import { BookMarked, Clock, Users, Star, Play, CheckCircle, Award } from "lucide-react"

const trilhas = [
  {
    id: 1,
    titulo: "Metodologia Científica na Prática",
    descricao: "Aprenda os fundamentos da metodologia científica e aplique em seus projetos de pesquisa.",
    instrutor: "Prof. Roberto Mendes",
    nivel: "Iniciante",
    duracao: "8 horas",
    modulos: 5,
    alunos: 1247,
    avaliacao: 4.8,
    progresso: 0,
    imagem: "/images/trilha-metodologia.png",
    tags: ["Metodologia", "Pesquisa", "Fundamentos"],
    certificado: true,
    preco: "Gratuito",
  },
  {
    id: 2,
    titulo: "Redação Científica Avançada",
    descricao: "Domine as técnicas de escrita acadêmica e publique artigos de alta qualidade.",
    instrutor: "Dra. Ana Beatriz",
    nivel: "Avançado",
    duracao: "12 horas",
    modulos: 8,
    alunos: 856,
    avaliacao: 4.9,
    progresso: 60,
    imagem: "/images/trilha-redacao.png",
    tags: ["Redação", "Publicação", "ABNT"],
    certificado: true,
    preco: "R$ 149,90",
  },
  {
    id: 3,
    titulo: "Estatística para Pesquisadores",
    descricao: "Aprenda análise estatística aplicada à pesquisa científica com ferramentas práticas.",
    instrutor: "Prof. Carlos Silva",
    nivel: "Intermediário",
    duracao: "15 horas",
    modulos: 10,
    alunos: 634,
    avaliacao: 4.7,
    progresso: 0,
    imagem: "/images/trilha-estatistica.png",
    tags: ["Estatística", "Análise", "SPSS"],
    certificado: true,
    preco: "R$ 199,90",
  },
  {
    id: 4,
    titulo: "Ética na Pesquisa Científica",
    descricao: "Compreenda os princípios éticos fundamentais para conduzir pesquisas responsáveis.",
    instrutor: "Dra. Marina Santos",
    nivel: "Iniciante",
    duracao: "6 horas",
    modulos: 4,
    alunos: 923,
    avaliacao: 4.6,
    progresso: 100,
    imagem: "/images/trilha-etica.png",
    tags: ["Ética", "Pesquisa", "Responsabilidade"],
    certificado: true,
    preco: "Gratuito",
  },
  {
    id: 5,
    titulo: "Ferramentas Digitais para Pesquisa",
    descricao: "Conheça e domine as principais ferramentas digitais que otimizam o trabalho acadêmico.",
    instrutor: "Prof. Lucas Oliveira",
    nivel: "Intermediário",
    duracao: "10 horas",
    modulos: 7,
    alunos: 445,
    avaliacao: 4.5,
    progresso: 25,
    imagem: "/images/trilha-ferramentas.png",
    tags: ["Ferramentas", "Tecnologia", "Produtividade"],
    certificado: true,
    preco: "R$ 99,90",
  },
  {
    id: 6,
    titulo: "Apresentações Acadêmicas Eficazes",
    descricao: "Desenvolva habilidades para apresentar seus trabalhos de forma clara e impactante.",
    instrutor: "Dra. Fernanda Costa",
    nivel: "Iniciante",
    duracao: "5 horas",
    modulos: 3,
    alunos: 567,
    avaliacao: 4.4,
    progresso: 0,
    imagem: "/images/trilha-apresentacoes.png",
    tags: ["Apresentação", "Comunicação", "PowerPoint"],
    certificado: false,
    preco: "R$ 79,90",
  },
]

const certificados = [
  {
    id: 1,
    trilha: "Ética na Pesquisa Científica",
    dataConlusao: "15/12/2024",
    instrutor: "Dra. Marina Santos",
    cargaHoraria: "6 horas",
  },
  {
    id: 2,
    trilha: "Metodologia Científica Básica",
    dataConlusao: "28/11/2024",
    instrutor: "Prof. João Silva",
    cargaHoraria: "8 horas",
  },
]

export default function TrilhasPage() {
  const [filtroNivel, setFiltroNivel] = useState("todos")
  const [filtroProgresso, setFiltroProgresso] = useState("todos")

  const trilhasFiltradas = trilhas.filter((trilha) => {
    const matchNivel = filtroNivel === "todos" || trilha.nivel.toLowerCase() === filtroNivel
    const matchProgresso =
      filtroProgresso === "todos" ||
      (filtroProgresso === "nao-iniciadas" && trilha.progresso === 0) ||
      (filtroProgresso === "em-andamento" && trilha.progresso > 0 && trilha.progresso < 100) ||
      (filtroProgresso === "concluidas" && trilha.progresso === 100)

    return matchNivel && matchProgresso
  })

  const getCorNivel = (nivel: string) => {
    switch (nivel) {
      case "Iniciante":
        return "bg-green-100 text-green-800"
      case "Intermediário":
        return "bg-yellow-100 text-yellow-800"
      case "Avançado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getIconeProgresso = (progresso: number) => {
    if (progresso === 0) return <Play className="h-4 w-4" />
    if (progresso === 100) return <CheckCircle className="h-4 w-4 text-green-600" />
    return <Clock className="h-4 w-4 text-blue-600" />
  }

  const getTextoBotao = (progresso: number) => {
    if (progresso === 0) return "Iniciar"
    if (progresso === 100) return "Revisar"
    return "Continuar"
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trilhas de Aprendizado</h1>
          <p className="text-gray-600">Desenvolva suas habilidades acadêmicas com nossos cursos estruturados</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Award className="mr-2 h-4 w-4" />
            Meus Certificados
          </Button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4">
        <div className="flex gap-2">
          <span className="text-sm font-medium text-gray-700">Nível:</span>
          <Button
            variant={filtroNivel === "todos" ? "default" : "outline"}
            size="sm"
            onClick={() => setFiltroNivel("todos")}
          >
            Todos
          </Button>
          <Button
            variant={filtroNivel === "iniciante" ? "default" : "outline"}
            size="sm"
            onClick={() => setFiltroNivel("iniciante")}
          >
            Iniciante
          </Button>
          <Button
            variant={filtroNivel === "intermediário" ? "default" : "outline"}
            size="sm"
            onClick={() => setFiltroNivel("intermediário")}
          >
            Intermediário
          </Button>
          <Button
            variant={filtroNivel === "avançado" ? "default" : "outline"}
            size="sm"
            onClick={() => setFiltroNivel("avançado")}
          >
            Avançado
          </Button>
        </div>

        <div className="flex gap-2">
          <span className="text-sm font-medium text-gray-700">Progresso:</span>
          <Button
            variant={filtroProgresso === "todos" ? "default" : "outline"}
            size="sm"
            onClick={() => setFiltroProgresso("todos")}
          >
            Todos
          </Button>
          <Button
            variant={filtroProgresso === "nao-iniciadas" ? "default" : "outline"}
            size="sm"
            onClick={() => setFiltroProgresso("nao-iniciadas")}
          >
            Não iniciadas
          </Button>
          <Button
            variant={filtroProgresso === "em-andamento" ? "default" : "outline"}
            size="sm"
            onClick={() => setFiltroProgresso("em-andamento")}
          >
            Em andamento
          </Button>
          <Button
            variant={filtroProgresso === "concluidas" ? "default" : "outline"}
            size="sm"
            onClick={() => setFiltroProgresso("concluidas")}
          >
            Concluídas
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Lista de trilhas */}
        <div className="lg:col-span-3">
          <div className="grid gap-6 md:grid-cols-2">
            {trilhasFiltradas.map((trilha) => (
              <Card key={trilha.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={trilha.imagem || "/placeholder.svg"} alt={trilha.titulo} fill className="object-cover" />
                  {trilha.progresso > 0 && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-white text-gray-800">{trilha.progresso}% concluído</Badge>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge className={getCorNivel(trilha.nivel)}>{trilha.nivel}</Badge>
                    <Badge variant="secondary">{trilha.preco}</Badge>
                    {trilha.certificado && <Award className="h-4 w-4 text-yellow-500" />}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{trilha.titulo}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{trilha.descricao}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {trilha.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {trilha.progresso > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progresso</span>
                        <span>{trilha.progresso}%</span>
                      </div>
                      <Progress value={trilha.progresso} className="h-2" />
                    </div>
                  )}

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {trilha.duracao}
                    </span>
                    <span className="flex items-center">
                      <BookMarked className="h-4 w-4 mr-1" />
                      {trilha.modulos} módulos
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {trilha.alunos}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {trilha.instrutor === "Prof. Roberto Mendes" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/images/avatar-roberto-mendes.png" />
                          <AvatarFallback>RM</AvatarFallback>
                        </Avatar>
                      )}
                      {trilha.instrutor === "Dra. Ana Beatriz" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/images/avatar-ana-beatriz.png" />
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                      )}
                      {trilha.instrutor === "Prof. Carlos Silva" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/images/avatar-carlos-silva.png" />
                          <AvatarFallback>CS</AvatarFallback>
                        </Avatar>
                      )}
                      {trilha.instrutor === "Dra. Marina Santos" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/images/avatar-marina-santos.png" />
                          <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                      )}
                      {trilha.instrutor === "Prof. Lucas Oliveira" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/images/avatar-lucas-oliveira.png" />
                          <AvatarFallback>LO</AvatarFallback>
                        </Avatar>
                      )}
                      {trilha.instrutor === "Dra. Fernanda Costa" && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/images/avatar-fernanda-costa.png" />
                          <AvatarFallback>FC</AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <p className="text-sm font-medium">{trilha.instrutor}</p>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-xs text-gray-500">{trilha.avaliacao}</span>
                        </div>
                      </div>
                    </div>

                    <Button size="sm" className="flex items-center gap-2">
                      {getIconeProgresso(trilha.progresso)}
                      {getTextoBotao(trilha.progresso)}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Progresso geral */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Seu Progresso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3</div>
                <p className="text-sm text-gray-600">Trilhas concluídas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">2</div>
                <p className="text-sm text-gray-600">Em andamento</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">45h</div>
                <p className="text-sm text-gray-600">Horas estudadas</p>
              </div>
            </CardContent>
          </Card>

          {/* Certificados recentes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Award className="h-5 w-5" />
                Certificados Recentes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {certificados.map((cert) => (
                <div key={cert.id} className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-1">{cert.trilha}</h4>
                  <p className="text-xs text-gray-600">Concluído em {cert.dataConlusao}</p>
                  <p className="text-xs text-gray-600">
                    {cert.cargaHoraria} • {cert.instrutor}
                  </p>
                  <Button size="sm" variant="outline" className="w-full mt-2">
                    Baixar Certificado
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recomendações */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recomendado para Você</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="border rounded-lg p-3">
                <h4 className="font-medium text-sm mb-1">Análise de Dados Qualitativos</h4>
                <p className="text-xs text-gray-600 mb-2">Baseado no seu interesse em metodologia</p>
                <Button size="sm" variant="outline" className="w-full">
                  Ver Trilha
                </Button>
              </div>
              <div className="border rounded-lg p-3">
                <h4 className="font-medium text-sm mb-1">Publicação em Periódicos Internacionais</h4>
                <p className="text-xs text-gray-600 mb-2">Próximo passo após redação científica</p>
                <Button size="sm" variant="outline" className="w-full">
                  Ver Trilha
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
