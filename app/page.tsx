import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <header className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">H</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-800">
            Hagaveta do Saber
          </h1>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <Link href="/sobre">Sobre</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/recursos">Recursos</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contato">Contato</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/login">Entrar</Link>
          </Button>
          <Button asChild>
            <Link href="/cadastro">Cadastrar</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-5xl font-bold text-blue-900 mb-6">
              Sua jornada acadêmica em um só lugar
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Conecte-se com outros pesquisadores, acesse conteúdos de qualidade
              e desenvolva suas habilidades acadêmicas em uma plataforma
              completa.
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/cadastro">Começar agora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sobre">Saiba mais</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/hero-students.png"
              alt="Estudantes colaborando"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <section className="mb-20">
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Por que escolher a Hagaveta do Saber?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    <path d="M8 7h6" />
                    <path d="M8 11h8" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Conteúdo de Qualidade
                </h4>
                <p className="text-gray-600">
                  Acesse artigos, tutoriais e guias revisados por especialistas
                  para impulsionar sua carreira acadêmica.
                </p>
              </CardContent>
            </Card>
            <Card className="border-purple-100">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Comunidade Colaborativa
                </h4>
                <p className="text-gray-600">
                  Conecte-se com outros pesquisadores, participe de discussões e
                  amplie seu networking acadêmico.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                    <path d="M12 13v8" />
                    <path d="M12 3v3" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">
                  Mentoria Especializada
                </h4>
                <p className="text-gray-600">
                  Receba orientação de pesquisadores experientes para
                  desenvolver suas habilidades e publicações acadêmicas.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">
            Junte-se a milhares de pesquisadores
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            A Hagaveta do Saber já ajudou mais de 10.000 estudantes e
            pesquisadores a desenvolverem suas carreiras acadêmicas.
          </p>
          <Button size="lg" asChild>
            <Link href="/cadastro">Criar conta gratuita</Link>
          </Button>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <h3 className="text-lg font-bold text-blue-800">
                  Hagaveta do Saber
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Plataforma de conteúdo e colaboração acadêmica para estudantes e
                pesquisadores.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Publicações
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Comunidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Trilhas de Aprendizado
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Eventos
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2">
                <li className="text-gray-600">
                  contato@hagavetadosaber.com.br
                </li>
                <li className="text-gray-600">+55 (11) 9999-9999</li>
                <li className="flex gap-4 mt-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>© 2025 Hagaveta do Saber. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
