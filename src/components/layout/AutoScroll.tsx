'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Pause, Play } from 'lucide-react'

export default function AutoScroll() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isScrolling) {
      interval = setInterval(() => {
        const currentScroll = window.scrollY
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight

        if (currentScroll + windowHeight >= documentHeight) {
          // If at bottom, scroll to top
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        } else {
          // Scroll down one viewport height
          window.scrollBy({
            top: windowHeight,
            behavior: 'smooth'
          })
        }
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isScrolling])

  // Stop auto-scroll when user manually scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) setIsScrolling(false)
    }

    window.addEventListener('wheel', handleScroll)
    window.addEventListener('touchmove', handleScroll)

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
    }
  }, [isScrolling])

  return (
    <Button
      onClick={() => setIsScrolling(!isScrolling)}
      className="fixed bottom-4 right-4 z-50 rounded-full w-12 h-12 p-0"
      variant="default"
    >
      {isScrolling ? <Pause size={24} /> : <Play size={24} />}
    </Button>
  )
} 