import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('adara_theme')
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ? stored === 'dark' : prefersDark
    setDark(initial)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (dark) root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('adara_theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center w-10 h-10 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  )
}
