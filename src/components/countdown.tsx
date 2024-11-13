"use client"

import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    function calculateTimeLeft(): TimeLeft {
      const dt = +targetDate - +new Date()
  
      if (dt <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }
  
      return {
        days: Math.floor(dt / (1000 * 60 * 60 * 24)),
        hours: Math.floor((dt / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((dt / 1000 / 60) % 60),
        seconds: Math.floor((dt / 1000) % 60)
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])


  // i want to add a number interpolation animation here
  if (!timeLeft) return null

  return (
    <div className="flex gap-4">
      <div>
        <span className="font-bold text-2xl">{timeLeft.days}</span>
        <span className="text-sm"> days</span>
      </div>
      <div>
        <span className="font-bold text-2xl">{timeLeft.hours}</span>
        <span className="text-sm"> hours</span>
      </div>
      <div>
        <span className="font-bold text-2xl">{timeLeft.minutes}</span>
        <span className="text-sm"> minutes</span>
      </div>
      <div>
        <span className="font-bold text-2xl">{timeLeft.seconds}</span>
        <span className="text-sm"> seconds</span>
      </div>
    </div>
  )
}