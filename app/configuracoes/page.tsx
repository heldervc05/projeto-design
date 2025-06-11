"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { Save, Shield, Bell, Palette, Download, Trash2, Eye, EyeOff } from "lucide-react"

export default function ConfiguracoesPage() {
  const [notificacoes, setNotificacoes] = useState({
    email: true,
    push: true,
    discussoes: true,
    eventos: true,
    mentoria: true,
    publicacoes: false,
  })

  const [privacidade, setPrivacidade] = useState({
    perfilPublico: true,
    mostrarEmail: false,
    mostrarTelefone: false,
    permitirMensagens: true,
    mostrarAtividades: true,
  })

  const [aparencia, setAparencia] = useState({
    tema: "claro",
    idioma: "pt-BR",
    tamanhoFonte: "medio",
  })

  const [mostrarSenha, setMostrarSenha] = useState(false)

  const handleSalvarNotificacoes = () => {
    console.log("Salvando notificações:", notificacoes)
    // Aqui seria implementada a lógica de salvamento
  }

  const handleSalvarPrivacidade = () => {
    console.log("Salvando privacidade:", privacidade)
    // Aqui seria implementada a lógica de salvamento
  }

  const handleSalvarAparencia = () => {
    console.log("Salvando aparência:", aparencia)
    // Aqui seria implementada a lógica de salvamento
  }

  const handleExportarDados = () => {
    console.log("Exportando dados...")
    // Aqui seria implementada a lógica de exportação
  }

  const handleExcluirConta = () => {
    console.log("Excluindo conta...")
    // Aqui seria implementada a lógica de exclusão
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
          <p className="text-gray-600">Gerencie suas preferências e configurações da conta</p>
        </div>
      </div>

      <Tabs defaultValue="conta" className="space-y-4">
        <TabsList>
          <TabsTrigger value="conta">Conta</TabsTrigger>
          <TabsTrigger value="notificacoes">Notificações</TabsTrigger>
          <TabsTrigger value="privacidade">Privacidade</TabsTrigger>
          <TabsTrigger value="aparencia">Aparência</TabsTrigger>
          <TabsTrigger value="dados">Dados</TabsTrigger>
        </TabsList>

        <TabsContent value="conta" className="space-y-6">
          {/* Informações da conta */}
          <Card>
            <CardHeader>
              <CardTitle>Informações da Conta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" defaultValue="Maria Silva Santos" />
                </div>
                <div>
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" defaultValue="maria.silva@exemplo.com" />
                </div>
                <div>
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" defaultValue="(11) 99999-9999" />
                </div>
                <div>
                  <Label htmlFor="instituicao">Instituição</Label>
                  <Input id="instituicao" defaultValue="Universidade Federal de São Paulo" />
                </div>
              </div>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="senha-atual">Senha atual</Label>
                <div className="relative">
                  <Input
                    id="senha-atual"
                    type={mostrarSenha ? "text" : "password"}
                    placeholder="Digite sua senha atual"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                  >
                    {mostrarSenha ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div>
                <Label htmlFor="nova-senha">Nova senha</Label>
                <Input id="nova-senha" type="password" placeholder="Digite sua nova senha" />
              </div>
              <div>
                <Label htmlFor="confirmar-senha">Confirmar nova senha</Label>
                <Input id="confirmar-senha" type="password" placeholder="Confirme sua nova senha" />
              </div>
              <Button>Alterar Senha</Button>

              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium">Autenticação de dois fatores</h4>
                <p className="text-sm text-gray-600">Adicione uma camada extra de segurança à sua conta</p>
                <Button variant="outline">Configurar 2FA</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notificacoes" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Preferências de Notificação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Canais de notificação</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notif-email">Notificações por e-mail</Label>
                      <p className="text-sm text-gray-600">Receba notificações no seu e-mail</p>
                    </div>
                    <Switch
                      id="notif-email"
                      checked={notificacoes.email}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, email: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notif-push">Notificações push</Label>
                      <p className="text-sm text-gray-600">Receba notificações no navegador</p>
                    </div>
                    <Switch
                      id="notif-push"
                      checked={notificacoes.push}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, push: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Tipos de notificação</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notif-discussoes">Discussões</Label>
                      <p className="text-sm text-gray-600">Novas respostas em discussões que você participa</p>
                    </div>
                    <Switch
                      id="notif-discussoes"
                      checked={notificacoes.discussoes}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, discussoes: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notif-eventos">Eventos</Label>
                      <p className="text-sm text-gray-600">Novos eventos e lembretes</p>
                    </div>
                    <Switch
                      id="notif-eventos"
                      checked={notificacoes.eventos}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, eventos: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notif-mentoria">Mentoria</Label>
                      <p className="text-sm text-gray-600">Mensagens de mentores e agendamentos</p>
                    </div>
                    <Switch
                      id="notif-mentoria"
                      checked={notificacoes.mentoria}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, mentoria: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="notif-publicacoes">Publicações</Label>
                      <p className="text-sm text-gray-600">Novas publicações de áreas de interesse</p>
                    </div>
                    <Switch
                      id="notif-publicacoes"
                      checked={notificacoes.publicacoes}
                      onCheckedChange={(checked) => setNotificacoes({ ...notificacoes, publicacoes: checked })}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleSalvarNotificacoes}>
                <Save className="mr-2 h-4 w-4" />
                Salvar Preferências
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacidade" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Privacidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="font-medium">Visibilidade do perfil</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="perfil-publico">Perfil público</Label>
                      <p className="text-sm text-gray-600">Permitir que outros usuários vejam seu perfil</p>
                    </div>
                    <Switch
                      id="perfil-publico"
                      checked={privacidade.perfilPublico}
                      onCheckedChange={(checked) => setPrivacidade({ ...privacidade, perfilPublico: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="mostrar-email">Mostrar e-mail</Label>
                      <p className="text-sm text-gray-600">Exibir seu e-mail no perfil público</p>
                    </div>
                    <Switch
                      id="mostrar-email"
                      checked={privacidade.mostrarEmail}
                      onCheckedChange={(checked) => setPrivacidade({ ...privacidade, mostrarEmail: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="mostrar-telefone">Mostrar telefone</Label>
                      <p className="text-sm text-gray-600">Exibir seu telefone no perfil público</p>
                    </div>
                    <Switch
                      id="mostrar-telefone"
                      checked={privacidade.mostrarTelefone}
                      onCheckedChange={(checked) => setPrivacidade({ ...privacidade, mostrarTelefone: checked })}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Interações</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="permitir-mensagens">Permitir mensagens</Label>
                      <p className="text-sm text-gray-600">Outros usuários podem enviar mensagens diretas</p>
                    </div>
                    <Switch
                      id="permitir-mensagens"
                      checked={privacidade.permitirMensagens}
                      onCheckedChange={(checked) => setPrivacidade({ ...privacidade, permitirMensagens: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="mostrar-atividades">Mostrar atividades</Label>
                      <p className="text-sm text-gray-600">Exibir suas atividades recentes no perfil</p>
                    </div>
                    <Switch
                      id="mostrar-atividades"
                      checked={privacidade.mostrarAtividades}
                      onCheckedChange={(checked) => setPrivacidade({ ...privacidade, mostrarAtividades: checked })}
                    />
                  </div>
                </div>
              </div>

              <Button onClick={handleSalvarPrivacidade}>
                <Save className="mr-2 h-4 w-4" />
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="aparencia" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Aparência e Idioma
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tema">Tema</Label>
                  <Select value={aparencia.tema} onValueChange={(value) => setAparencia({ ...aparencia, tema: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tema" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="claro">Claro</SelectItem>
                      <SelectItem value="escuro">Escuro</SelectItem>
                      <SelectItem value="sistema">Sistema</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idioma">Idioma</Label>
                  <Select
                    value={aparencia.idioma}
                    onValueChange={(value) => setAparencia({ ...aparencia, idioma: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                      <SelectItem value="en-US">English (US)</SelectItem>
                      <SelectItem value="es-ES">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tamanho-fonte">Tamanho da fonte</Label>
                  <Select
                    value={aparencia.tamanhoFonte}
                    onValueChange={(value) => setAparencia({ ...aparencia, tamanhoFonte: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tamanho" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pequeno">Pequeno</SelectItem>
                      <SelectItem value="medio">Médio</SelectItem>
                      <SelectItem value="grande">Grande</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleSalvarAparencia}>
                <Save className="mr-2 h-4 w-4" />
                Salvar Preferências
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dados" className="space-y-6">
          {/* Exportar dados */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Exportar Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Baixe uma cópia de todos os seus dados da plataforma, incluindo perfil, publicações, mensagens e
                atividades.
              </p>
              <Button onClick={handleExportarDados}>
                <Download className="mr-2 h-4 w-4" />
                Solicitar Exportação
              </Button>
            </CardContent>
          </Card>

          {/* Excluir conta */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Trash2 className="h-5 w-5" />
                Zona de Perigo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium text-red-600">Excluir conta</h4>
                <p className="text-sm text-gray-600">
                  Esta ação é irreversível. Todos os seus dados serão permanentemente removidos e não poderão ser
                  recuperados.
                </p>
              </div>
              <Button variant="destructive" onClick={handleExcluirConta}>
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Conta Permanentemente
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
