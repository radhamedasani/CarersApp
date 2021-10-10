import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 141px;
  background-color: #880e4f;
  align-items: center;
  position: relative;
`
export const Logo = styled.img`
  width: 196px;
  height: 91px;
  margin-left: 20px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  height: 100%;
  font-family: Cairo;
  font-style: normal;
  font-weight: normal;
  justify-content: center;
  flex: 1;
`

export const Title = styled.p`
  font-size: 36px;
  color: #ffffff;
  margin: 0;
`

export const SubTitle = styled.p`
  font-size: 20px;
  color: #f5f5f5;
  margin: 0;
`

export const CurrentTime = styled.p`
  font-size: 24px;
  color: #f5f5f5;
  right: 20px;
  position: absolute;
`
