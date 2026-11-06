import { useEffect, useRef, useState } from 'react'

/**
 * Anima a entrada do elemento quando ele entra na área visível (viewport).
 * `delay` (em ms) permite escalonar animações de elementos vizinhos.
 */
export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const combinedClassName = ['reveal', isVisible && 'is-visible', className]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag
      ref={elementRef}
      className={combinedClassName}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
