import { type RefObject, useLayoutEffect } from 'react'

export const useDomMutationLog = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  text: string,
) => {
  useLayoutEffect(() => {
    if (!ref.current) return

    const mo = new MutationObserver(() => console.log(text))

    mo.observe(ref.current, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true,
    })

    return () => mo.disconnect()
  }, [ref, text])
}
