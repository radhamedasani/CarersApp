import { useEffect, useState } from 'react'
import Header from '../global/Header'
import CarerComponent from '../../components/Carers/Carers'
import CarerSlots from './CarerSlots'
import * as api from '../../services/api'

const Carers = props => {
  const [carers, setCarers] = useState([])
  const [slctdCarer, setSlctdCarer] = useState('')

  const onClickAvailability = item => setSlctdCarer(item)

  const onBookSlot = carerName => {
    api.put('https://ceracare.github.io/availableSlots.json', {
      name: carerName
    })
    setSlctdCarer('')
  }

  useEffect(() => {
    const fetchCarers = async () => {
      const caresResp = await api.get('https://ceracare.github.io/carers.json')
      setCarers(caresResp ? caresResp.carers : [])
    }
    fetchCarers()
  }, [])
  return (
    <>
      <Header />
      <CarerComponent
        carers={carers}
        onClickAvailability={onClickAvailability}
      />
      {slctdCarer ? (
        <CarerSlots slctdCarer={slctdCarer} onBookSlot={onBookSlot} />
      ) : null}
    </>
  )
}

export default Carers
