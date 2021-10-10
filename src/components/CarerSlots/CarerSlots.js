import Modal from '../global/Modal/Modal'
import * as Styled from './CarerSlots.styled'

const CarerSlots = ({ slctdCarer, slots, onBookSlot }) => {
  return (
    <Modal>
      <Styled.Title>Schedule Carer</Styled.Title>
      <Styled.Name>{slctdCarer}</Styled.Name>
      {slots.map(item => (
        <Styled.Slot onClick={onBookSlot}>{item}</Styled.Slot>
      ))}
    </Modal>
  )
}

export default CarerSlots
