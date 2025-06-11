"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { Edit, Save, Camera, Award, BookOpen, Users, Calendar, Star, ExternalLink, Plus, Trash2 } from "lucide-react"

const perfilUsuario = {
  nome: "Maria Silva Santos",
  email: "maria.silva@exemplo.com",
  telefone: "(11) 99999-9999",
  instituicao: "Universidade Federal de São Paulo",
  curso: "Doutorado em Ciências Sociais",
  areaInteresse: "Metodologia de Pesquisa Qualitativa",
  bio: "Doutoranda em Ciências Sociais com foco em metodologia de pesquisa qualitativa. Interessada em análise de discurso e estudos de gênero. Atualmente desenvolvendo tese sobre representações sociais na mídia digital.",
  localizacao: "São Paulo, SP",
  lattes: "http://lattes.cnpq.br/1234567890",
  orcid: "0000-0000-0000-0000",
  linkedin: "linkedin.com/in/mariasilva",
  avatar: "MS",
}

const conquistas = [
  { id: 1, titulo: "Primeiro Artigo Publicado", data: "2024-03-15", icone: "📝" },
  { id: 2, titulo: "Mentor do Mês", data: "2024-02-01", icone: "🏆" },
  { id: 3, titulo: "100 Horas de Estudo", data: "2024-01-20", icone: "📚" },
  { id: 4, titulo: "Participação em Evento", data: "2023-12-10", icone: "🎯" },
]

const publicacoes = [
  {
    id: 1,
    titulo: "Metodologia qualitativa em pesquisas sociais: uma abordagem prática",
    tipo: "Artigo",
    revista: "Revista Brasileira de Ciências Sociais",
    ano: "2024",
    status: "Publicado",
    link: "#",
  },
  {
    id: 2,
    titulo: "Análise de discurso na era digital: desafios e oportunidades",
    tipo: "Capítulo de Livro",
    revista: "Comunicação e Sociedade Digital",
    ano: "2023",
    status: "Publicado",
    link: "#",
  },
  {
    id: 3,
    titulo: "Representações de gênero na mídia social: um estudo exploratório",
    tipo: "Artigo",
    revista: "Journal of Social Media Studies",
    ano: "2024",
    status: "Em revisão",
    link: "#",
  },
]

const trilhasConcluidas = [
  { id: 1, nome: "Metodologia Científica na Prática", progresso: 100, certificado: true },
  { id: 2, nome: "Ética na Pesquisa Científica", progresso: 100, certificado: true },
  { id: 3, nome: "Redação Científica Avançada", progresso: 75, certificado: false },
  { id: 4, nome: "Estatística para Pesquisadores", progresso: 45, certificado: false },
]

const atividades = [
  { id: 1, tipo: "publicacao", descricao: "Publicou um novo artigo", data: "há 2 dias" },
  { id: 2, tipo: "trilha", descricao: "Concluiu a trilha 'Ética na Pesquisa'", data: "há 1 semana" },
  { id: 3, tipo: "discussao", descricao: "Participou de uma discussão sobre ABNT", data: "há 2 semanas" },
  { id: 4, tipo: "evento", descricao: "Se inscreveu no Simpósio de Pesquisa", data: "há 3 semanas" },
]

export default function PerfilPage() {
  const [editando, setEditando] = useState(false)
  const [dadosEditados, setDadosEditados] = useState(perfilUsuario)

  const handleSalvar = () => {
    // Aqui seria implementada a lógica de salvamento
    console.log("Salvando dados:", dadosEditados)
    setEditando(false)
  }

  const handleCancelar = () => {
    setDadosEditados(perfilUsuario)
    setEditando(false)
  }

  const getIconeAtividade = (tipo: string) => {
    switch (tipo) {
      case "publicacao":
        return <BookOpen className="h-4 w-4 text-blue-600" />
      case "trilha":
        return <Award className="h-4 w-4 text-purple-600" />
      case "discussao":
        return <Users className="h-4 w-4 text-green-600" />
      case "evento":
        return <Calendar className="h-4 w-4 text-orange-600" />
      default:
        return <Star className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Meu Perfil</h1>
        <div className="flex gap-2">
          {editando ? (
            <>
              <Button variant="outline" onClick={handleCancelar}>
                Cancelar
              </Button>
              <Button onClick={handleSalvar}>
                <Save className="mr-2 h-4 w-4" />
                Salvar
              </Button>
            </>
          ) : (
            <Button onClick={() => setEditando(true)}>
              <Edit className="mr-2 h-4 w-4" />
              Editar Perfil
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar com informações básicas */}
        <div className="lg:col-span-1 space-y-6">
          {/* Avatar e informações básicas */}
          <Card>
            <CardContent className="p-6 text-center">
              <div className="relative inline-block mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/images/avatar-maria-silva.png" />
                  <AvatarFallback className="text-2xl">{perfilUsuario.avatar}</AvatarFallback>
                </Avatar>
                {editando && (
                  <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full">
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <h2 className="text-xl font-semibold mb-2">{perfilUsuario.nome}</h2>
              <p className="text-gray-600 mb-2">{perfilUsuario.curso}</p>
              <p className="text-sm text-gray-500">{perfilUsuario.instituicao}</p>
              <Badge className="mt-2">{perfilUsuario.areaInteresse}</Badge>
            </CardContent>
          </Card>

          {/* Estatísticas rápidas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Estatísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Publicações</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Trilhas concluídas</span>
                <span className="font-medium">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Horas de estudo</span>
                <span className="font-medium">127h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Conquistas</span>
                <span className="font-medium">4</span>
              </div>
            </CardContent>
          </Card>

          {/* Links acadêmicos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Links Acadêmicos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href={perfilUsuario.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Currículo Lattes
              </a>
              <a
                href={`https://orcid.org/${perfilUsuario.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                ORCID
              </a>
              <a
                href={`https://${perfilUsuario.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-blue-600 hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Conteúdo principal */}
        <div className="lg:col-span-3">
          <Tabs defaultValue="geral" className="space-y-4">
            <TabsList>
              <TabsTrigger value="geral">Informações Gerais</TabsTrigger>
              <TabsTrigger value="publicacoes">Publicações</TabsTrigger>
              <TabsTrigger value="trilhas">Trilhas</TabsTrigger>
              <TabsTrigger value="atividades">Atividades</TabsTrigger>
            </TabsList>

            <TabsContent value="geral" className="space-y-6">
              {/* Informações pessoais */}
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome">Nome completo</Label>
                      <Input
                        id="nome"
                        value={dadosEditados.nome}
                        onChange={(e) => setDadosEditados({ ...dadosEditados, nome: e.target.value })}
                        disabled={!editando}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        type="email"
                        value={dadosEditados.email}
                        onChange={(e) => setDadosEditados({ ...dadosEditados, email: e.target.value })}
                        disabled={!editando}
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefone">Telefone</Label>
                      <Input
                        id="telefone"
                        value={dadosEditados.telefone}
                        onChange={(e) => setDadosEditados({ ...dadosEditados, telefone: e.target.value })}
                        disabled={!editando}
                      />
                    </div>
                    <div>
                      <Label htmlFor="localizacao">Localização</Label>
                      <Input
                        id="localizacao"
                        value={dadosEditados.localizacao}
                        onChange={(e) => setDadosEditados({ ...dadosEditados, localizacao: e.target.value })}
                        disabled={!editando}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Informações acadêmicas */}
              <Card>
                <CardHeader>
                  <CardTitle>Informações Acadêmicas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="instituicao">Instituição</Label>
                      <Input
                        id="instituicao"
                        value={dadosEditados.instituicao}
                        onChange={(e) => setDadosEditados({ ...dadosEditados, instituicao: e.target.value })}
                        disabled={!editando}
                      />
                    </div>
                    <div>
                      <Label htmlFor="curso">Curso/Programa</Label>
                      <Input
                        id="curso"
                        value={dadosEditados.curso}
                        onChange={(e) => setDadosEditados({ ...dadosEditados, curso: e.target.value })}
                        disabled={!editando}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="areaInteresse">Área de Interesse</Label>
                    <Input
                      id="areaInteresse"
                      value={dadosEditados.areaInteresse}
                      onChange={(e) => setDadosEditados({ ...dadosEditados, areaInteresse: e.target.value })}
                      disabled={!editando}
                    />
                  </div>
                  <div>
                    <Label htmlFor="bio">Biografia</Label>
                    <Textarea
                      id="bio"
                      value={dadosEditados.bio}
                      onChange={(e) => setDadosEditados({ ...dadosEditados, bio: e.target.value })}
                      disabled={!editando}
                      rows={4}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Conquistas */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Conquistas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {conquistas.map((conquista) => (
                      <div key={conquista.id} className="flex items-center gap-3 p-3 border rounded-lg">
                        <span className="text-2xl">{conquista.icone}</span>
                        <div>
                          <h4 className="font-medium">{conquista.titulo}</h4>
                          <p className="text-sm text-gray-500">
                            {new Date(conquista.data).toLocaleDateString("pt-BR")}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="publicacoes" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Minhas Publicações</h3>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Adicionar Publicação
                </Button>
              </div>

              <div className="space-y-4">
                {publicacoes.map((pub) => (
                  <Card key={pub.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{pub.tipo}</Badge>
                            <Badge
                              className={
                                pub.status === "Publicado"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }
                            >
                              {pub.status}
                            </Badge>
                          </div>
                          <h4 className="font-semibold mb-2">{pub.titulo}</h4>
                          <p className="text-gray-600 mb-2">
                            {pub.revista} • {pub.ano}
                          </p>
                          {pub.link && (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Ver publicação
                            </a>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trilhas" className="space-y-4">
              <h3 className="text-lg font-semibold">Progresso nas Trilhas</h3>

              <div className="grid gap-4">
                {trilhasConcluidas.map((trilha) => (
                  <Card key={trilha.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">{trilha.nome}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{trilha.progresso}%</span>
                          {trilha.certificado && <Award className="h-5 w-5 text-yellow-500" />}
                        </div>
                      </div>
                      <Progress value={trilha.progresso} className="mb-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          {trilha.progresso === 100 ? "Concluída" : "Em andamento"}
                        </span>
                        {trilha.certificado && (
                          <Button variant="outline" size="sm">
                            Ver Certificado
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="atividades" className="space-y-4">
              <h3 className="text-lg font-semibold">Atividades Recentes</h3>

              <div className="space-y-4">
                {atividades.map((atividade) => (
                  <Card key={atividade.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        {getIconeAtividade(atividade.tipo)}
                        <div className="flex-1">
                          <p className="font-medium">{atividade.descricao}</p>
                          <p className="text-sm text-gray-500">{atividade.data}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
