import { useEffect, useState } from 'react'

// Returns how far the page is scrolled, from 0 to 100.
const useScrollProgress = () => {
  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setCompletion(scrollable > 0 ? Math.round((window.scrollY / scrollable) * 100) : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return completion
}

export default useScrollProgress
