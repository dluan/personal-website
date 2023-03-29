'use client'
import Image from 'next/image'

import clsx from 'clsx'

import HeroCta from './HeroCta'
import HeroTechStack from './HeroTechStack'
import HeroTitle from './HeroTitle'

export default function Hero() {
  return (
    <div
      id="page-header"
      className={clsx(
        'background-grid background-grid--fade-out pt-36 pb-20 font-plusjakartasans',
        'lg:pb-28 lg:pt-52'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('relative')}>
          <div className={clsx('relative z-10')}>
            <HeroTitle />
          </div>
          <div className={clsx('mt-6 md:mt-8')}>
            <HeroCta />
          </div>
          <div className={clsx('mt-20 lg:mt-36')}>
            <HeroTechStack />
          </div>
          <div className="absolute top-2/4 right-0 hidden -translate-y-1/2 md:block">
            <div className={clsx('relative h-[426px] w-[457px]')}>
              <Image src="/assets/images/ArtSite.png" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
