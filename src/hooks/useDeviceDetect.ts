import { useEffect, useState } from 'react'

const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState<boolean>(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))
    setMobile(mobile)
  }, [])

  return { isMobile }
}

export default useDeviceDetect
