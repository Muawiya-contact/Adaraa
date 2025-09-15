export const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center px-5 py-2.5 rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary: 'bg-brand-500 hover:bg-brand-600 text-white focus:ring-brand-400',
    outline: 'border border-brand-500 text-brand-600 hover:bg-brand-50 focus:ring-brand-300',
    ghost: 'text-brand-600 hover:bg-brand-50',
    dark: 'bg-gray-900 hover:bg-black text-white focus:ring-gray-600',
  }
  const cls = `${base} ${variants[variant]} ${className}`
  return (
    <button className={cls} {...props}>{children}</button>
  )
}


