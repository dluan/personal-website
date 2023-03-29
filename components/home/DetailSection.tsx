import clsx from 'clsx'

import SectionTitle from '@/components/sections/SectionTitle'

export default function DetailSection() {
  return (
    <section className={clsx('mb-12', 'lg:mb-24')}>
      <div className={clsx('mb-8')}>
        <SectionTitle
          title="O serviço/produto é para todos"
          caption="Acessibilidade"
          description="Toda desenvolvimento e usabilidade é planejado para alcançar o máximo de pessoas possíveis."
        />
      </div>
    </section>
  )
}
