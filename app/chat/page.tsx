"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { Send, Search, MoreVertical, Phone, Video, Paperclip, Smile, Users, Circle } from "lucide-react"

const conversas = [
  {
    id: 1,
    nome: "Dra. Ana Santos",
    ultimaMensagem: "Obrigada pela ajuda com a metodologia!",
    tempo: "há 5 min",
    naoLidas: 0,
    online: true,
    tipo: "mentor",
    avatar: "AS",
  },
  {
    id: 2,
    nome: "Grupo: Metodologia Científica",
    ultimaMensagem: "Pedro: Alguém tem o template da ABNT?",
    tempo: "há 15 min",
    naoLidas: 3,
    online: false,
    tipo: "grupo",
    avatar: "MC",
  },
  {
    id: 3,
    nome: "Prof. Carlos Silva",
    ultimaMensagem: "Vamos marcar uma reunião para discutir seu projeto",
    tempo: "há 1 hora",
    naoLidas: 1,
    online: true,
    tipo: "mentor",
    avatar: "CS",
  },
  {
    id: 4,
    nome: "Juliana Costa",
    ultimaMensagem: "Vi seu artigo, ficou excelente!",
    tempo: "há 2 horas",
    naoLidas: 0,
    online: false,
    tipo: "colega",
    avatar: "JC",
  },
  {
    id: 5,
    nome: "Grupo: Estatística Aplicada",
    ultimaMensagem: "Maria: Compartilhei o link do software",
    tempo: "há 3 horas",
    naoLidas: 0,
    online: false,
    tipo: "grupo",
    avatar: "EA",
  },
  {
    id: 6,
    nome: "Pedro Lima",
    ultimaMensagem: "Conseguiu resolver a questão das citações?",
    tempo: "ontem",
    naoLidas: 0,
    online: false,
    tipo: "colega",
    avatar: "PL",
  },
]

const mensagens = [
  {
    id: 1,
    remetente: "Dra. Ana Santos",
    conteudo: "Olá! Vi que você está trabalhando com metodologia qualitativa. Posso ajudar com algumas dicas?",
    tempo: "14:30",
    proprio: false,
  },
  {
    id: 2,
    remetente: "Você",
    conteudo: "Oi, Dra. Ana! Seria ótimo! Estou com dificuldades na análise dos dados das entrevistas.",
    tempo: "14:32",
    proprio: true,
  },
  {
    id: 3,
    remetente: "Dra. Ana Santos",
    conteudo: "Perfeito! Que tipo de análise você está fazendo? Análise de conteúdo ou análise temática?",
    tempo: "14:33",
    proprio: false,
  },
  {
    id: 4,
    remetente: "Você",
    conteudo: "Estou tentando fazer análise temática, mas estou perdida na categorização dos temas.",
    tempo: "14:35",
    proprio: true,
  },
  {
    id: 5,
    remetente: "Dra. Ana Santos",
    conteudo: "Entendo! A análise temática pode ser desafiadora no início. Vou te enviar um material que pode ajudar.",
    tempo: "14:36",
    proprio: false,
  },
  {
    id: 6,
    remetente: "Dra. Ana Santos",
    conteudo: "📎 Guia_Analise_Tematica.pdf",
    tempo: "14:37",
    proprio: false,
  },
  {
    id: 7,
    remetente: "Você",
    conteudo: "Muito obrigada! Vou dar uma olhada e depois te falo se surgir alguma dúvida.",
    tempo: "14:40",
    proprio: true,
  },
  {
    id: 8,
    remetente: "Dra. Ana Santos",
    conteudo: "Perfeito! Fico à disposição. Lembre-se: o importante é identificar padrões recorrentes nos dados.",
    tempo: "14:42",
    proprio: false,
  },
]

const mentoresOnline = [
  { nome: "Prof. Roberto Mendes", area: "Metodologia", avatar: "RM" },
  { nome: "Dra. Luísa Ferreira", area: "Estatística", avatar: "LF" },
  { nome: "Prof. Eduardo Santos", area: "Redação Científica", avatar: "ES" },
]

export default function ChatPage() {
  const [conversaAtiva, setConversaAtiva] = useState(1)
  const [novaMensagem, setNovaMensagem] = useState("")
  const [busca, setBusca] = useState("")

  const conversasFiltradas = conversas.filter((conversa) => conversa.nome.toLowerCase().includes(busca.toLowerCase()))

  const conversaAtual = conversas.find((c) => c.id === conversaAtiva)

  const enviarMensagem = () => {
    if (novaMensagem.trim()) {
      // Aqui seria implementada a lógica de envio
      console.log("Enviando mensagem:", novaMensagem)
      setNovaMensagem("")
    }
  }

  const getCorTipo = (tipo: string) => {
    switch (tipo) {
      case "mentor":
        return "bg-blue-100 text-blue-800"
      case "grupo":
        return "bg-purple-100 text-purple-800"
      case "colega":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex-1 flex h-[calc(100vh-4rem)]">
      {/* Lista de conversas */}
      <div className="w-80 border-r border-gray-200 bg-white flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Mensagens</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Buscar conversas..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-2">
            {conversasFiltradas.map((conversa) => (
              <div
                key={conversa.id}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                  conversaAtiva === conversa.id ? "bg-blue-50 border border-blue-200" : ""
                }`}
                onClick={() => setConversaAtiva(conversa.id)}
              >
                <div className="relative">
                  {conversa.nome === "Dra. Ana Santos" ? (
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/images/avatar-ana-santos.png" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                  ) : conversa.nome === "Prof. Carlos Silva" ? (
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/images/avatar-carlos-silva.png" />
                      <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                  ) : conversa.nome === "Juliana Costa" ? (
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/images/avatar-juliana-costa.png" />
                      <AvatarFallback>JC</AvatarFallback>
                    </Avatar>
                  ) : conversa.nome === "Pedro Lima" ? (
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/images/avatar-pedro-lima.png" />
                      <AvatarFallback>PL</AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>{conversa.avatar}</AvatarFallback>
                    </Avatar>
                  )}
                  {conversa.online && (
                    <Circle className="absolute -bottom-1 -right-1 h-4 w-4 text-green-500 fill-current" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-medium text-sm truncate">{conversa.nome}</h3>
                    <span className="text-xs text-gray-500">{conversa.tempo}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{conversa.ultimaMensagem}</p>
                    {conversa.naoLidas > 0 && (
                      <Badge className="bg-blue-600 text-white text-xs">{conversa.naoLidas}</Badge>
                    )}
                  </div>
                  <Badge className={`${getCorTipo(conversa.tipo)} text-xs mt-1`}>
                    {conversa.tipo === "mentor" ? "Mentor" : conversa.tipo === "grupo" ? "Grupo" : "Colega"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Mentores online */}
        <div className="p-4 border-t border-gray-200">
          <h3 className="font-medium mb-3 flex items-center gap-2">
            <Users className="h-4 w-4" />
            Mentores Online
          </h3>
          <div className="space-y-2">
            {mentoresOnline.map((mentor, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="relative">
                  {mentor.nome === "Prof. Roberto Mendes" ? (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/avatar-roberto-mendes.png" />
                      <AvatarFallback>RM</AvatarFallback>
                    </Avatar>
                  ) : mentor.nome === "Dra. Luísa Ferreira" ? (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/avatar-luisa-ferreira.png" />
                      <AvatarFallback>LF</AvatarFallback>
                    </Avatar>
                  ) : (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/images/avatar-eduardo-santos.png" />
                      <AvatarFallback>ES</AvatarFallback>
                    </Avatar>
                  )}
                  <Circle className="absolute -bottom-1 -right-1 h-3 w-3 text-green-500 fill-current" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{mentor.nome}</p>
                  <p className="text-xs text-gray-500">{mentor.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Área de chat */}
      <div className="flex-1 flex flex-col">
        {conversaAtual ? (
          <>
            {/* Header do chat */}
            <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/avatar-ana-santos.png" />
                    <AvatarFallback>{conversaAtual.avatar}</AvatarFallback>
                  </Avatar>
                  {conversaAtual.online && (
                    <Circle className="absolute -bottom-1 -right-1 h-3 w-3 text-green-500 fill-current" />
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{conversaAtual.nome}</h3>
                  <p className="text-sm text-gray-500">{conversaAtual.online ? "Online" : "Offline"}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Mensagens */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {mensagens.map((mensagem) => (
                  <div key={mensagem.id} className={`flex ${mensagem.proprio ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        mensagem.proprio ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                      }`}
                    >
                      {!mensagem.proprio && <p className="text-xs font-medium mb-1">{mensagem.remetente}</p>}
                      <p className="text-sm">{mensagem.conteudo}</p>
                      <p className={`text-xs mt-1 ${mensagem.proprio ? "text-blue-100" : "text-gray-500"}`}>
                        {mensagem.tempo}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input de mensagem */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Digite sua mensagem..."
                    value={novaMensagem}
                    onChange={(e) => setNovaMensagem(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && enviarMensagem()}
                    className="pr-10"
                  />
                  <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 transform -translate-y-1/2">
                    <Smile className="h-4 w-4" />
                  </Button>
                </div>
                <Button onClick={enviarMensagem} disabled={!novaMensagem.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
                <Send className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">Selecione uma conversa</h3>
              <p className="text-gray-600">Escolha uma conversa da lista para começar a trocar mensagens</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
