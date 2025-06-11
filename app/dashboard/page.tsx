import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { BookOpen, Calendar, MessageSquare, ThumbsUp, Users, BookMarked, Clock, Eye } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Olá, Maria! 👋</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Hoje
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Artigos Lidos</CardTitle>
            <BookOpen className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-gray-500">+3 na última semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Trilhas Concluídas</CardTitle>
            <BookMarked className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500">+1 no último mês</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Discussões</CardTitle>
            <MessageSquare className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-gray-500">+2 na última semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eventos Participados</CardTitle>
            <Calendar className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-gray-500">+1 no último mês</p>
          </CardContent>
        </Card>
      </div>

      {/* Main content */}
      <Tabs defaultValue="destaques" className="space-y-4">
        <TabsList>
          <TabsTrigger value="destaques">Destaques da Semana</TabsTrigger>
          <TabsTrigger value="recomendados">Recomendado para Você</TabsTrigger>
          <TabsTrigger value="discussoes">Últimas Discussões</TabsTrigger>
        </TabsList>
        <TabsContent value="destaques" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Artigo 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/artigo-estrutura.png" alt="Imagem do artigo" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Artigo</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 10 min de leitura
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Como estruturar sua primeira publicação científica</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Um guia completo para iniciantes sobre como estruturar e formatar seu primeiro artigo científico.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/images/avatar-joao-paulo.png" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">Prof. João Paulo</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" /> 1.2k
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1" /> 84
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Artigo 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/artigo-ferramentas.png" alt="Imagem do artigo" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Tutorial</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 15 min de leitura
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Ferramentas essenciais para pesquisa acadêmica</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Conheça as principais ferramentas que todo pesquisador deve dominar para otimizar seu trabalho
                  acadêmico.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/images/avatar-ana-santos.png" />
                      <AvatarFallback>AS</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">Dra. Ana Santos</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" /> 956
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1" /> 72
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Artigo 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/evento-simposio.png" alt="Imagem do artigo" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Evento</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" /> 15/06/2025
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Simpósio Internacional de Pesquisa Acadêmica</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Participe do maior evento de pesquisa acadêmica do ano com palestrantes renomados e networking.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/placeholder.svg?height=30&width=30" />
                      <AvatarFallback>UF</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">Universidade Federal</span>
                  </div>
                  <Button size="sm" variant="outline">
                    Inscrever-se
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Ver mais destaques</Button>
          </div>
        </TabsContent>

        <TabsContent value="recomendados" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Trilha 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/trilha-metodologia.png" alt="Imagem da trilha" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Trilha</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 5 módulos
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Metodologia Científica na Prática</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Aprenda os fundamentos da metodologia científica e aplique em seus projetos de pesquisa.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/images/avatar-roberto-mendes.png" />
                      <AvatarFallback>RM</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">Prof. Roberto Mendes</span>
                  </div>
                  <Button size="sm">Iniciar</Button>
                </div>
              </CardContent>
            </Card>

            {/* Artigo 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/artigo-revisao.png" alt="Imagem do artigo" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Artigo</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" /> 8 min de leitura
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Técnicas avançadas de revisão bibliográfica</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Domine as técnicas mais eficientes para realizar uma revisão bibliográfica completa e eficaz.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/images/avatar-luisa-ferreira.png" />
                      <AvatarFallback>LF</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">Dra. Luísa Ferreira</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" /> 823
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="h-3 w-3 mr-1" /> 67
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mentoria */}
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/images/avatar-carlos-silva.png" alt="Imagem do mentor" fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Mentoria</span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <Users className="h-3 w-3 mr-1" /> 3 vagas disponíveis
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Orientação para publicação em periódicos internacionais</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Receba orientação personalizada para publicar seus artigos em periódicos de alto impacto.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src="/images/avatar-carlos-silva.png" />
                      <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                    <span className="text-xs">Prof. Carlos Silva, PhD</span>
                  </div>
                  <Button size="sm" variant="outline">
                    Solicitar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Ver mais recomendações</Button>
          </div>
        </TabsContent>

        <TabsContent value="discussoes" className="space-y-4">
          <div className="grid gap-4">
            {/* Discussão 1 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/avatar-pedro-lima.png" />
                    <AvatarFallback>PL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">Pedro Lima</span>
                      <span className="text-xs text-gray-500">há 2 horas</span>
                    </div>
                    <h4 className="font-semibold mb-2">Dúvida sobre formatação ABNT para citações longas</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Estou com dificuldade para formatar citações diretas longas segundo as normas da ABNT. Alguém
                      poderia me ajudar com exemplos práticos?
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-500 flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" /> 8 respostas
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Eye className="h-3 w-3 mr-1" /> 42 visualizações
                      </span>
                      <Button size="sm" variant="ghost">
                        Responder
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Discussão 2 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/avatar-juliana-costa.png" />
                    <AvatarFallback>JC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">Juliana Costa</span>
                      <span className="text-xs text-gray-500">há 5 horas</span>
                    </div>
                    <h4 className="font-semibold mb-2">Recomendações de software para análise qualitativa</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Estou iniciando uma pesquisa qualitativa e preciso de recomendações de softwares para análise de
                      entrevistas. Quais vocês recomendam?
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-500 flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" /> 12 respostas
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Eye className="h-3 w-3 mr-1" /> 78 visualizações
                      </span>
                      <Button size="sm" variant="ghost">
                        Responder
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Discussão 3 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/avatar-ricardo-fernandes.png" />
                    <AvatarFallback>RF</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">Ricardo Fernandes</span>
                      <span className="text-xs text-gray-500">há 1 dia</span>
                    </div>
                    <h4 className="font-semibold mb-2">Como escolher o periódico ideal para submissão?</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Terminei meu artigo e agora preciso escolher onde submeter. Quais critérios vocês usam para
                      escolher o periódico ideal?
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-500 flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" /> 15 respostas
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Eye className="h-3 w-3 mr-1" /> 124 visualizações
                      </span>
                      <Button size="sm" variant="ghost">
                        Responder
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button variant="outline">Ver todas as discussões</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
