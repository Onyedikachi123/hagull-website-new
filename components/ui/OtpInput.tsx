'use client'

import React, { useRef, KeyboardEvent, ChangeEvent, ClipboardEvent } from 'react'

interface OtpInputProps {
  length?: number
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

export function OtpInput({ length = 4, value, onChange, disabled = false }: OtpInputProps) {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value
    if (!/^\d*$/.test(val)) return // Only allow digits

    const newVal = value.split('')
    newVal[index] = val.substring(val.length - 1) // Take the last digit if multiple
    const updatedValue = newVal.join('')
    onChange(updatedValue)

    // Focus next input
    if (val && index < length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (!value[index] && index > 0) {
        // If empty and backspace is pressed, focus previous and delete its value
        const newVal = value.split('')
        newVal[index - 1] = ''
        onChange(newVal.join(''))
        inputsRef.current[index - 1]?.focus()
      } else {
        // Just delete current value
        const newVal = value.split('')
        newVal[index] = ''
        onChange(newVal.join(''))
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputsRef.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
    if (pastedData) {
      onChange(pastedData.padEnd(value.length, '').slice(0, length)) // maintain length
      const nextFocus = Math.min(pastedData.length, length - 1)
      inputsRef.current[nextFocus]?.focus()
    }
  }

  return (
    <div className="flex gap-2 sm:gap-3 justify-center w-full max-w-full">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el
          }}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          disabled={disabled}
          value={value[index] || ''}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className={`flex-1 min-w-[2.5rem] max-w-[3rem] sm:max-w-[3.5rem] md:max-w-[4rem] h-12 sm:h-14 md:h-16 text-center text-xl sm:text-2xl md:text-3xl font-bold bg-muted/30 border rounded-xl shadow-sm transition-all shrink
            ${disabled ? 'opacity-50 cursor-not-allowed bg-muted/50 border-muted' : 'border-border focus:border-hagull-500 focus:ring-2 focus:ring-hagull-500/20 bg-white'}
          `}
          aria-label={`Digit ${index + 1}`}
        />
      ))}
    </div>
  )
}
