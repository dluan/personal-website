'use client'
import { clsx } from 'clsx'
import PageHeader from '@/components/PageHeader'
import SkipNavigation from '@/components/navigations/SkipNavigation'
import Content from '@/app/area-de-trabalho/content.mdx'
import Summary, { LinkProps } from '@/components/Summary'

export default function WorkspaceTemplate() {
  const summaryData: LinkProps[] = [
    { title: 'Computador', depth: 1 },
    { title: 'Monitor', depth: 1 },
    { title: 'Ambos', depth: 2 },
    { title: 'Periféricos', depth: 1 },
    { title: 'Dispositivos para vídeo conferências', depth: 1 },
    { title: 'Outros', depth: 1 }
  ]
  return (
    <>
      <SkipNavigation />
      <PageHeader
        title="Área de trabalho"
        description="Um espaço de trabalho em casa que me permite concluir a maioria das tarefas com eficiência."
        caption="Trabalho"
      />
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
