'use client'
import PageHeader from '@/components/PageHeader'
import SkipNavigation from '@/components/navigations/SkipNavigation'
import Content from '@/app/habilidades/content.mdx'
import Summary, { LinkProps } from '@/components/Summary'

export default function HabilidadesTemplate() {
  const summaryData: LinkProps[] = [
    { title: 'Desenvolvedor Front-End', depth: 1 },
    { title: 'TypeScript', depth: 2 },
    { title: 'React', depth: 2 },
    { title: 'Tailwind CSS', depth: 2 },
    { title: 'HeadlessCMS', depth: 2 },
    { title: 'Next.js', depth: 2 },
    { title: 'Gerente de Projetos', depth: 1 },
    { title: 'Ferramentas', depth: 1 },
    { title: 'Linguagens de Programação', depth: 2 },
    { title: 'Tecnologias', depth: 2 },
    { title: 'Headless CMS', depth: 2 },
    { title: 'Hospedagens', depth: 2 },
    { title: 'Banco de dados', depth: 2 },
    { title: 'Ferramentas de programação', depth: 2 },
    { title: 'Ferramentas de design', depth: 2 },
    { title: 'Ferramentas de planejamento', depth: 2 },
    { title: 'Ferramentas de BI', depth: 2 },
    { title: 'Monitoramento de Marketing Digital', depth: 2 }
  ]
  return (
    <>
      <SkipNavigation />
      <PageHeader
        title="Habilidades"
        description="Veja todas as linguagens de programação, bibliotecas e ferramentas que já trabalhei"
        caption="Trabalho"
      />
      <div className="content-wrapper flex-shrink-0 overflow-hidden font-plusjakartasans lg:overflow-visible">
        <div className="flex flex-row-reverse gap-8 xl:gap-24">
          <div className="-mt-48 hidden lg:block">
            <div className="sticky top-24 z-[901] w-64 xl:w-[272px] fm:relative fm:top-0">
              <Summary items={summaryData} />
            </div>
          </div>
          <div className="mdx-contents min-w-0 flex-1 scroll-mt-[86px]" id="main-contents" data-ss-wrapper>
            <Content />
          </div>
          <div className="border-divider-light hidden border-l dark:border-divider-dark lg:block" />
        </div>
      </div>
    </>
  )
}
