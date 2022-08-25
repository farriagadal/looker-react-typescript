import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 60px;
  position: relative;
  /* Blanco */
  background: #FFFFFF;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.12);
  overflow-x: scroll;
  white-space: nowrap;
  padding-left: 10px;
  padding-right: 10px;

  a:hover{
    background: #ED1650;
    border-radius: 30px;
    color: #FFFFFF;
    border: none;
  }
`
export const ListMenu = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  height: 22px;
  width: auto;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #929292;
  background: #FFFFFF;
  border: 1px solid #929292;
  border-radius: 30px;
  margin: 16px 0px 20px 8px;
`
