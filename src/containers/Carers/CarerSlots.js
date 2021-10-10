import { useEffect, useState } from 'react'
import CarerSlotsComponent from '../../components/CarerSlots/CarerSlots.js'
import * as api from '../../services/api'

const CarerSlots = ({ slctdCarer, onBookSlot }) => {
  const [slots, setSlots] = useState([])

  useEffect(() => {
    const fetchSlots = async () => {
      const slotsResp = await api.get(
        'https://ceracare.github.io/availableSlots.json'
      )
      setSlots(slotsResp ? slotsResp.UTCAvailableSlots || [] : [])
    }
    fetchSlots()
  }, [])
  return (
    <CarerSlotsComponent
      slots={slots}
      slctdCarer={slctdCarer}
      onBookSlot={onBookSlot}
    />
  )
}

export default CarerSlots
