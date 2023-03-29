'use client'
import Image from 'next/image'
import clsx from 'clsx'
import { m, useAnimationControls } from 'framer-motion'

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1
  }
}

export default function HeroTitle() {
  const controls = useAnimationControls()

  return (
    <div>
      <m.div
        className={clsx(
          'mb-1 flex items-center gap-1 text-2xl text-slate-600',
          'md:mb-0 md:gap-2 md:text-4xl',
          'dark:text-slate-400'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        olá!
        <m.div
          initial={{
            opacity: 0,
            y: 16,
            rotate: 30,
            transformOrigin: 'right center'
          }}
          animate={controls}
          transition={{
            type: 'spring',
            delay: 0.35,
            bounce: 0.7,
            duration: 0.7
          }}
        >
          <Image
            className={clsx('w-7 md:w-10')}
            alt="Love-you Gesture"
            src="/assets/emojis/love-you-gesture.png"
            width={48}
            height={48}
            onLoadingComplete={() => {
              controls.start({
                opacity: 1,
                y: 0,
                rotate: 0
              })
            }}
            priority
          />
        </m.div>
      </m.div>
      <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <m.span
          className={clsx('mb-4 block text-[2.5rem] font-[1000] leading-none', 'md:mb-6 md:text-7xl')}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          Sou <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>Denner</strong> Luan,{' '}
        </m.span>
        <m.h1
          className={clsx('block text-base text-slate-600', 'md:text-xl', 'dark:text-slate-400')}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <span className={clsx('lowercase')}>Um</span>{' '}
          <strong className={clsx('font-bold lowercase text-slate-700', 'dark:text-slate-300')}>
            desenvolvedor Front-End
          </strong>{' '}
          e,{' '}
          <strong className={clsx('block font-bold lowercase text-slate-700', 'dark:text-slate-300')}>
            gerente de projetos
          </strong>
        </m.h1>
      </span>
    </div>
  )
}
