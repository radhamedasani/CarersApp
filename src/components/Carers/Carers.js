import * as Styled from './Carers.styled'
import CarerItem from './CarerItem'

const Carers = ({ carers, onClickAvailability }) => {
  return (
    <Styled.Container>
      {carers.map(item => (
        <CarerItem {...item} onClickAvailability={onClickAvailability} />
      ))}
    </Styled.Container>
  )
}

export default Carers
