import React from 'react'
import './styles.css'

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'button'
}) => {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="my-button"
    >
      {children}
    </button>
  )
}
