import { Toaster } from 'react-hot-toast'
import { AppRoutes } from './routes/AppRoutes'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ThemeToggle } from './components/ThemeToggle'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <div className="fixed right-4 bottom-4 z-50"><ThemeToggle /></div>
        <AppRoutes />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  )
}


