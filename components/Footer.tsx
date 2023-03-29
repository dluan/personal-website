import clsx from 'clsx'
import Link from 'next/link'

import { ExternalLink, GitHubIcon, TwitterIcon } from '@/components/Icons'

interface FooterLinkProps {
  title: string
  href: string
  label?: 'new' | 'soon'
  isInternal?: boolean
}

function FooterLink({ title, href, label = undefined, isInternal = true }: FooterLinkProps) {
  if (label === 'soon') {
    return (
      <span className={clsx('footer-link footer-link--soon')}>
        {title}
        <span className={clsx('footer-link__label')}>Em breve</span>
      </span>
    )
  }

  if (isInternal) {
    return (
      <Link href={href} className={clsx('footer-link')}>
        {title}
        {label && <span className={clsx('footer-link__label')}>{label}</span>}
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer nofollow" className={clsx('footer-link')}>
      {title}
      <ExternalLink className={clsx('h-3.5 w-3.5')} />
      {label && <span className={clsx('footer-link__label')}>{label}</span>}
    </a>
  )
}

interface FooterGroupProps {
  title: string
  links: Array<FooterLinkProps>
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={clsx('flex-1')}>
      <div className={clsx('mb-2 px-2 text-[13px] text-slate-600', 'dark:text-slate-400')}>{title}</div>
      <ul className={clsx('flex flex-col')}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink title={linkTitle} href={href} label={label} isInternal={isInternal} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterDescription() {
  return (
    <div className={clsx('max-w-[348px]')}>
      <div className={clsx('mb-3 text-[13px] text-slate-600', 'dark:text-slate-400')}>Sobre mim</div>
      <p className={clsx('mb-4 font-normal leading-relaxed')}>
        Sou um <strong>desenvolvedor front-end</strong> e <b>gerente de projetos</b>
      </p>
      <ul className={clsx('-ml-2 flex gap-1')}>
        <li>
          <a
            href="https://twitter.com/dluancr"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="Meu perfil do Twitter"
            title="Meu perfil do Twitter"
          >
            <TwitterIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/dluan"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx('flex h-9 w-9 items-center justify-center')}
            aria-label="Meu perfil do Github"
            title="Meu perfil do Github"
          >
            <GitHubIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default function Footer() {
  const date = new Date()
  return (
    <footer
      className={clsx(
        'background-grid background-grid--fade-in border-divider-light mt-24 pt-16 text-sm text-slate-900 font-plusjakartasans',
        'dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div className={clsx('py-10 font-semibold')}>
          <div className={clsx('flex flex-col-reverse gap-16', 'lg:flex-row')}>
            <div className={clsx('flex-1')}>
              <FooterDescription />
            </div>
            <div className={clsx('-mx-2 flex flex-1 flex-col justify-end gap-8', 'sm:flex-row sm:gap-16 lg:mx-0')}>
              <div className={clsx('flex', 'sm:gap-16')}>
                <FooterGroup
                  title="Trabalho"
                  links={[
                    { title: 'Contato', href: '/work/contact' },
                    { title: 'Experiências', href: '/work/experience' },
                    {
                      title: 'Projetos',
                      href: '/projects'
                    },
                    {
                      title: 'Habilidades',
                      href: '/work/skills-and-tools'
                    },
                    { title: 'Área de trabalho', href: '/work/studio' }
                  ]}
                />
              </div>
              <div className={clsx('flex', 'sm:gap-16')}>
                <FooterGroup
                  title="Esse site"
                  links={[
                    {
                      title: 'Conceito do design',
                      href: 'https://www.figma.com/community/file/1176392613303840973',
                      isInternal: false
                    },
                    {
                      title: 'Código fonte',
                      href: 'https://github.com/dluan/personal-website',
                      isInternal: false
                    }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx('border-divider-light flex justify-center border-t py-6 text-xs', 'dark:border-divider-dark')}
        >
          <div className={clsx('font-semibold')}>&copy; {date.getFullYear()}, Denner Luan</div>
        </div>
      </div>
    </footer>
  )
}
