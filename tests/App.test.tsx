import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App', () => {
  it('should render the Hello World heading', () => {
    render(<App />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Hello World')
  })

  it('should render the tech stack description', () => {
    render(<App />)
    
    const description = screen.getByText('React 18 + TypeScript + Vite + Tailwind CSS')
    expect(description).toBeInTheDocument()
  })

  it('should render the ready message with rocket emoji', () => {
    render(<App />)
    
    const readyMessage = screen.getByText(/Your app is ready to go!/i)
    expect(readyMessage).toBeInTheDocument()
    expect(readyMessage.textContent).toContain('🚀')
  })

  it('should have correct styling classes on the main container', () => {
    render(<App />)
    
    // The main container has the heading inside it
    const heading = screen.getByRole('heading', { level: 1 })
    const mainDiv = heading.closest('div.min-h-screen') as HTMLElement
    
    expect(mainDiv).toBeInTheDocument()
    expect(mainDiv).toHaveClass('min-h-screen')
    expect(mainDiv).toHaveClass('flex')
    expect(mainDiv).toHaveClass('items-center')
    expect(mainDiv).toHaveClass('justify-center')
  })

  it('should render heading with white text styling', () => {
    render(<App />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('text-white')
    expect(heading).toHaveClass('text-6xl')
    expect(heading).toHaveClass('font-bold')
  })
})
