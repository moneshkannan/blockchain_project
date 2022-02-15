import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

function Dashboard({address}) {
  return (
    <Wrapper>
      <Sidebar/>
      <MainContainer>
        <Header walletAddress={address}/>
        <Main/>
      </MainContainer>
    </Wrapper>
  )
}

export default Dashboard

const Wrapper = styled.div`
  display: flex;
  height: 105vh;
  width: 100%;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`
const MainContainer = styled.div`
  flex: 1;
`