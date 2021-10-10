import { memo } from 'react'
import * as Styled from './Carers.styled'

const CarerItem = props => {
  const { name, slots, photo, onClickAvailability } = props
  return (
    <Styled.ItemContainer>
      <Styled.Avatar src={photo} />
      <Styled.Info>
        <Styled.ItemContainer>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Slots>{`${slots} slots available`}</Styled.Slots>
        </Styled.ItemContainer>
        <Styled.Availability onClick={() => onClickAvailability(name)}>
          Check Availability
        </Styled.Availability>
      </Styled.Info>
    </Styled.ItemContainer>
  )
}

export default memo(CarerItem)
