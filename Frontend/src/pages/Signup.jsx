import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import toast from 'react-hot-toast'

const schema = z.object({
  name: z.string().min(2, 'Enter your name'),
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Minimum 6 characters'),
})

export default function Signup() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (_data) => {
    // Mock success for now
    toast.success('Account created! Please login')
    window.location.href = '/login'
  }

  return (
    <div className="px-6 py-10 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Create account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input {...register('name')} className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-300 dark:bg-gray-900 dark:border-gray-800" placeholder="Your name" />
          {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input {...register('email')} className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-300 dark:bg-gray-900 dark:border-gray-800" placeholder="you@example.com" />
          {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input {...register('password')} className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-300 dark:bg-gray-900 dark:border-gray-800" placeholder="••••••••" type="password" />
          {errors.password && <p className="text-sm text-red-600 mt-1">{errors.password.message}</p>}
        </div>
        <button disabled={isSubmitting} className="w-full bg-brand-500 hover:bg-brand-600 text-white py-2 rounded shadow-soft disabled:opacity-60">{isSubmitting ? 'Creating...' : 'Sign up'}</button>
        <p className="text-sm text-gray-600 dark:text-gray-300">Already have an account? <a className="text-brand-600" href="/login">Login</a></p>
      </form>
    </div>
  )
}


