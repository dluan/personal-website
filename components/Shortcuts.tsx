'use client'
import { useEffect, useRef } from 'react'
import { toast } from 'react-hot-toast'

import Toast from '@/components/Toast'

import useFocusMode from '@/hooks/useFocusMode'
import useGlobal from '@/hooks/useGlobal'
import useShortcut from '@/hooks/useShortcut'
import useTheme from '@/hooks/useTheme'

const focusToast = {
  title: 'Foco {STATUS}',
  message: 'O foco ajuda a reduzir as distrações ocultando componentes flutuantes.'
}

export default function Shortcuts() {
  const toastRef = useRef<any>()
  const { theme, setTheme } = useTheme()
  const { isQuickAccessOpen, setQuickAccessOpen } = useGlobal()
  const { focusMode, setFocusMode } = useFocusMode()

  useShortcut('KeyT', () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  })

  useShortcut('KeyA', () => {
    setQuickAccessOpen(!isQuickAccessOpen)
  })

  useShortcut('KeyF', () => {
    setFocusMode(!focusMode)
  })

  useEffect(() => {
    if (toastRef.current) {
      toast.remove(toastRef.current.id)
    }
    if (focusMode) {
      toastRef.current = toast.custom((t) => (
        <Toast title={focusToast.title.replace('{STATUS}', 'Ligado')} message={focusToast.message} t={t} />
      ))
    } else {
      toastRef.current = toast.custom((t) => (
        <Toast title={focusToast.title.replace('{STATUS}', 'Desligado')} message={focusToast.message} t={t} />
      ))
    }
  }, [focusMode])

  return null
}
