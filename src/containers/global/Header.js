import { useState, useEffect } from 'react'
import HeaderComponent from '../../components/global/Header/Header'
import moment from 'moment'

const Header = props => {
  const getCurrentDateTime = () => {
    return moment().format('h:mm a')
  }
  const [currentTime, setCurrentTime] = useState(getCurrentDateTime())
  useEffect(() => {
    const intervalId = setInterval(
      () => setCurrentTime(getCurrentDateTime()),
      1000
    )
    return () => clearInterval(intervalId)
  }, [])
  return <HeaderComponent currentTime={currentTime} />
}

export default Header
