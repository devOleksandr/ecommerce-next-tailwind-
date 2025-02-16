import {useEffect} from "react";

const useClickOutside = (ref: any, setState: (x: any) => void, capture?: boolean) => {
  const clickOutside = (e: any) => {
    if (!ref?.current?.contains(e.target)) {
      setState(() => {
        return false
      })
    }
  }


  const EscActions = (e: any) => {
    if (e.key === "Escape") {
      setState(() => {
        return false
      })
    }
  }

  useEffect(() => {
    document.addEventListener('click', clickOutside, {capture: !!capture})
    document.addEventListener('keydown', EscActions, {capture: !!capture})

    return () => {
      document.removeEventListener('click', clickOutside, {capture: !!capture})
      document.removeEventListener('keydown', EscActions, {capture: !!capture})
    }
  }, []);
}
export default useClickOutside