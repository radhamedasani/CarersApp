import * as Styled from './Header.styled'
import Logo from '../../../assets/images/logo.png'

const Header = ({ currentTime }) => {
  return (
    <Styled.Container>
      <Styled.Logo src={Logo} />
      <Styled.TitleContainer>
        <Styled.Title>Carers</Styled.Title>
        <Styled.SubTitle>
          Here you’ll be able to schedule your carers visits
        </Styled.SubTitle>
      </Styled.TitleContainer>
      <Styled.CurrentTime>{currentTime}</Styled.CurrentTime>
    </Styled.Container>
  )
}

export default Header
