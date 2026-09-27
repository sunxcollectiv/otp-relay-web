import { useEffect, useState, type AnchorHTMLAttributes, type MouseEvent } from 'react'

// A two-page site does not need a router library. This tracks the pathname,
// intercepts same-origin link clicks, and re-renders on back/forward.

export function usePath(): string {
  const [path, setPath] = useState(() => normalize(window.location.pathname))

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return path
}

export function navigate(to: string) {
  if (normalize(to) === normalize(window.location.pathname)) return
  window.history.pushState(null, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo(0, 0)
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string }

export function Link({ to, onClick, ...rest }: LinkProps) {
  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e)
    if (e.defaultPrevented || e.button !== 0) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    navigate(to)
  }
  return <a href={to} onClick={handle} {...rest} />
}

function normalize(p: string): string {
  const trimmed = p.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}
