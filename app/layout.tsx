import { JetBrains_Mono, Plus_Jakarta_Sans } from 'next/font/google'

import '@/styles/main.css'
import Header from '@/components/Header'
import QuickAccess from '@/components/QuickAccess'
import Shortcuts from '@/components/Shortcuts'
import Provider from '@/providers'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata = {
  title: {
    default: 'Denner Luan · Desenvolvedor Front-End',
    template: '%s · Denner Luan · Desenvolvedor Front-End'
  },
  description:
    'Apresento meu portfolio onde desenvolvo sites, sistemas, blogs com React, Next.js, Tailwind CSS. Além disso veja um pouco sobre minha carreira e área de trabalho.',
  category: 'Comic books',
  authors: [{ name: 'Denner Luan', url: 'https://dluan.com.br/' }],
  colorScheme: 'dark',
  openGraph: {
    type: 'website',
    title: 'Denner Luan · Desenvolvedor Front-End',
    description:
      'Apresento meu portfolio onde desenvolvo sites, sistemas, blogs com React, Next.js, Tailwind CSS. Além disso veja um pouco sobre minha carreira e área de trabalho.',
    url: 'https://dluan.com.br/',
    siteName: 'Denner Luan · Desenvolvedor Front-End',
    images: {
      url: 'https://dluan.com.br/assets/images/og-image.png',
      width: 1899,
      height: 914,
      type: 'image/png'
    }
  },
  twitter: {
    card: 'summary',
    title: 'Denner Luan · Desenvolvedor Front-End',
    description:
      'Apresento meu portfolio onde desenvolvo sites, sistemas, blogs com React, Next.js, Tailwind CSS. Além disso veja um pouco sobre minha carreira e área de trabalho.',
    images: ['https://dluan.com.br/assets/images/og-image.png']
  }
}

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jet-brains-mono',
  display: 'swap'
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap'
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Script
        id="urlAnalytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING}`}
      />
      <Script
        id="bodyAnalytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}', {
          page_path: window.location.pathname,
        });`
        }}
      />
      <body>
        <div id="__root" className={`${jetBrainsMono.variable} ${plusJakartaSans.variable}`}>
          <div id="skip-navigation" />
          <Provider>
            <QuickAccess />
            <Shortcuts />
            <Header />
            <main>{children}</main>
            <Footer />
          </Provider>
        </div>
      </body>
    </html>
  )
}
