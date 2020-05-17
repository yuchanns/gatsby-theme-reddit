import { useEffect } from 'react'

const useOutsideClick = (ref, callback) => {
  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  })
}

export default useOutsideClick