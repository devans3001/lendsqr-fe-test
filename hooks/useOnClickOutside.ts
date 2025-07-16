import { useEffect, RefObject } from 'react'
//https://dev-shelf.vercel.app/docs/snippets/react-hooks

export function useClickOutside(ref: RefObject<HTMLElement | null>, callback: () => void): void {
  useEffect(() => {
   
    function handleClickOutside(event: MouseEvent): void {
      // Check if the clicked element is outside the referenced element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}