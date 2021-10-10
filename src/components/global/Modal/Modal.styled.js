import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 99999 !important;
`

export const Content = styled.div`
  background-color: #fff;
  min-width: 300px;
  min-height: 400px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14px 24px;
  position: relative;
  background: #d7d7d7;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
