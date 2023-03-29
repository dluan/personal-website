'use client'
import { clsx } from 'clsx'
import PageHeader from '@/components/PageHeader'
import SkipNavigation from '@/components/navigations/SkipNavigation'
import Content from '@/app/experiencias/content.mdx'
import Summary, { LinkProps } from '@/components/Summary'

export default function Experiencias() {
  const summaryData: LinkProps[] = [
    { title: 'Freelancer', depth: 1 },
    { title: 'Gerente de Projetos', depth: 1 },
    { title: 'Desenvolvedor Front-End', depth: 1 },
    { title: 'Co-Fundador', depth: 1 },
    { title: 'Desenvolvedor Full-Stack', depth: 1 }
  ]
  return (
    <>
      <SkipNavigation />
      <PageHeader title="Experiências" description="Tudo sobre minhas experiências profissionais" caption="Trabalho" />
      <div
        className={clsx('content-wrapper flex-shrink-0 overflow-hidden font-plusjakartasans', 'lg:overflow-visible')}
      >
        <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
          <div className={clsx('-mt-48 hidden', 'lg:block')}>
            <div className={clsx('sticky top-24 z-[901] w-64', 'xl:w-[272px]', 'fm:relative fm:top-0')}>
              <Summary items={summaryData} />
            </div>
          </div>
          <div className={clsx('mdx-contents min-w-0 flex-1 scroll-mt-[86px]')} id="main-contents" data-ss-wrapper>
            <Content />
          </div>
          <div className={clsx('border-divider-light hidden border-l', ' dark:border-divider-dark lg:block')} />
        </div>
      </div>
    </>
  )
}
