import { useEffect, useState } from "react"

export function useWindowSize() {
  const [windowsize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      },)
    }, [])
  })
  return windowsize;
}