'use client'
import { clsx } from 'clsx'
import PageHeader from '@/components/PageHeader'
import SkipNavigation from '@/components/navigations/SkipNavigation'
import Content from '@/app/contato/content.mdx'

export default function ContatoTemplate() {
  return (
    <>
      <SkipNavigation />
      <PageHeader
        title="Contato"
        description="Entre em contato comigo a qualquer momento, através das redes sociais ou e-mail"
        caption="Trabalho"
      />
      <div
        className={clsx('content-wrapper flex-shrink-0 overflow-hidden font-plusjakartasans', 'lg:overflow-visible')}
      >
        <div className={clsx('flex flex-row-reverse gap-8', 'xl:gap-24')}>
          <div className={clsx('mdx-contents min-w-0 flex-1 scroll-mt-[86px]')} id="main-contents" data-ss-wrapper>
            <Content />
          </div>
          <div className={clsx('border-divider-light hidden border-l', ' dark:border-divider-dark lg:block')} />
        </div>
      </div>
    </>
  )
}
