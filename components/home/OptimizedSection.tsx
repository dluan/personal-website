import clsx from 'clsx'

import SectionTitle from '@/components/sections/SectionTitle'

export default function OptimizedSection() {
  return (
    <section className={clsx('mb-12', 'lg:mb-24')}>
      <div className={clsx('mb-8')}>
        <SectionTitle
          title="Performance é importante!"
          caption="Performance"
          description="Para você ser encontrado, seu serviço deve ser performático. Um código bem otimizado pode fazer toda a diferença para atingir o sucesso."
        />
      </div>
    </section>
  )
}
