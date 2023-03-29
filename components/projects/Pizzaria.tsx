'use client'
import clsx from 'clsx'
import { useState } from 'react'

import { ListIcon, VercelIcon } from '@/components/Icons'
import { SectionButton } from '@/components/sections/SectionButton'
import SectionContent from '@/components/sections/SectionContent'
import SectionTitle from '@/components/sections/SectionTitle'
import AppWindow from '@/components/wireframes/AppWindow'
import ListWireframe from '@/components/wireframes/List'
import PrintWireframe from '@/components/wireframes/Print'

export default function ProjectPizzaria() {
  const [currentState, setCurrentState] = useState<'vercel' | 'list'>('vercel')
  return (
    <div>
      <SectionTitle
        title="Modelo para área gastronomica"
        caption="site modelo"
        description="Site modelo para área gastronomica. Usabilidade pensada para atendimento via whatsapp, uma forma de aproximar um potencial cliente de forma mais rápida e baixo custo."
        button={{
          title: 'Ver site',
          href: 'https://restaurant-template-ten.vercel.app/'
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Hospedado na Vercel"
                icon={<VercelIcon className={clsx('my-2 h-16 w-16')} />}
                description="Hospedagem de alto desempenho para melhor navegação e compatibilidade com a tecnologia Next.js"
                active={currentState === 'vercel'}
                onClick={() => setCurrentState('vercel')}
              />
              <SectionButton
                title="Tecnologias utilizadas"
                icon={<ListIcon className={clsx('my-2 h-16 w-16')} />}
                description="Lista de tecnologias utilizadas para desenvolvimento desse projeto"
                active={currentState === 'list'}
                onClick={() => setCurrentState('list')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <VercelIcon className="h-4 w-4" />,
                      title: 'Pizzaria modelo',
                      isActive: currentState === 'vercel'
                    },
                    {
                      icon: <ListIcon className="h-4 w-4" />,
                      title: 'Lista de tecnologias',
                      isActive: currentState === 'list'
                    }
                  ]}
                >
                  {currentState === 'vercel' && (
                    <PrintWireframe srcImage="/assets/images/projects/template-pizzaria.png" />
                  )}
                  {currentState === 'list' && (
                    <ListWireframe items={['Next.js (appDir)', 'Tailwind CSS', 'Headless CMS', 'Radix UI', 'Github']} />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </div>
  )
}
