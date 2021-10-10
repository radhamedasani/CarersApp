import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1580px;
  margin: 0 auto;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  width: 23%;
  padding-left: 20px;
`
export const Avatar = styled.img`
  width: 80%;
  height: 220px;
  align-self: flex-end;
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  font-family: Cairo;
  font-style: normal;
  height: 60px;
  padding: 8px 0px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  color: #222222;
  margin: 0;
`

export const Slots = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #880e4f;
  margin: 0;
  width: 200px;
`

export const Availability = styled.button`
  background-color: #880e4f;
  color: #ffffff;
  border: 0;
  width: 120px;
  height: 40px;
  cursor: pointer;
`
