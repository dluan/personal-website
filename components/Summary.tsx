import clsx from 'clsx'
import { m } from 'framer-motion'
import slug from 'slug'

import useOnScroll from '@/hooks/useOnScroll'
import useScrollSpy from '@/hooks/useScrollSpy'

export type LinkProps = {
  title: string
  depth: number
}

type LinkStatusProps = LinkProps & {
  active: boolean
}

function TableOfContentsLink({ title, depth, active = false }: LinkStatusProps) {
  return (
    <a
      className={clsx('toc-link', {
        'toc-link--depth-2': depth === 2,
        'toc-link--active': active
      })}
      href={`#${slug(title)}`}
    >
      {title}
    </a>
  )
}

type SummaryProps = {
  items: LinkProps[]
}

export default function Summary({ items = [] }: SummaryProps) {
  const isScrolled = useOnScroll(200)
  const { currentVisibles } = useScrollSpy()

  const handleScrollToTopClick = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <nav
      aria-label="Lista de conteúdo"
      className={clsx('border-divider-light rounded-xl border bg-white', 'dark:border-divider-dark dark:bg-[#161e31]')}
    >
      <div
        className={clsx(
          'border-divider-light flex items-center justify-between border-b py-3 px-5 text-sm font-bold',
          'dark:border-divider-dark'
        )}
      >
        <h2 className={clsx('text-slate-700', 'dark:text-slate-300')} id="table-of-contents">
          Sumário
        </h2>
        <m.div initial={{ x: 16, opacity: 0 }} animate={isScrolled ? { x: 0, opacity: 1 } : { x: 16, opacity: 0 }}>
          <a
            href="#skip-navigation"
            className={clsx(
              'border-divider-light text-accent-700 flex h-6 cursor-pointer items-center rounded-full border px-2 text-xs font-normal',
              'dark:border-divider-dark dark:text-accent-400'
            )}
            tabIndex={isScrolled ? 0 : -1}
            onClick={handleScrollToTopClick}
          >
            voltar ao topo
          </a>
        </m.div>
      </div>
      <div className={clsx('relative p-3 py-4')}>
        <ol className={clsx('toc flex flex-col gap-2')}>
          {items.map(({ title, depth }) => {
            let slugTitle = slug(title)
            const isActive = currentVisibles && currentVisibles[slugTitle]

            return (
              <li key={`summary-${slugTitle}`}>
                <TableOfContentsLink title={title} depth={depth} active={isActive} />
                {isActive && <div className={clsx('toc-visible')} />}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}
