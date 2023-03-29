import clsx from 'clsx'

import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/Icons'
import FeaturedCard from './FeaturedCard'

export default function FeaturedSection() {
  return (
    <section className={clsx('hidden font-plusjakartasans', 'lg:-mt-16 lg:mb-24 lg:block')}>
      <div className={clsx('content-wrapper')}>
        <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
          <FeaturedCard
            icon={
              <div className={clsx('rounded-full bg-amber-300 p-3.5', 'dark:bg-amber-900')}>
                <SparklesIcon className={clsx('h-5 w-5 text-white')} />
              </div>
            }
            title="Moderno & Intuitivo"
            desc="Layouts modernos pensando sempre na usabilidade"
          />
          <FeaturedCard
            icon={
              <div className={clsx('rounded-full bg-pink-300 p-3.5', 'dark:bg-pink-900')}>
                <HeartIcon className={clsx('h-5 w-5 text-white')} />
              </div>
            }
            title="Acessibilidade"
            desc="Cuidados com acessibilidade para que o produto seja entregue a todos"
          />
          <FeaturedCard
            icon={
              <div className={clsx('rounded-full bg-sky-300 p-3.5', 'dark:bg-sky-900')}>
                <CodeIcon className={clsx('h-5 w-5 text-white')} />
              </div>
            }
            title="Performance"
            desc="Código otimizado, focando o alto desempenho ao menor custo possível"
          />
        </div>
      </div>
    </section>
  )
}
