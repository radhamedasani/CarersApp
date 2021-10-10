import * as Styled from './Modal.styled'

const Modal = props => {
  return (
    <Styled.Container>
      <Styled.Content>{props.children}</Styled.Content>
    </Styled.Container>
  )
}

export default Modal
