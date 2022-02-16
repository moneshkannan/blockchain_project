import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import {ethers} from 'ethers'
import { ThirdwebSDK } from '@3rdweb/sdk'
import axios from 'axios'

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.NEXT_PUBLIC_METAMASK_KEY,
        ethers.getDefaultProvider(
            'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'
        )
    )
)
function Dashboard({address}) {
  const [sanityTokens, setSanityTokens] = useState([])
  const [thirdWebTokens, setThirdWebTokens] = useState([])

  const getSanityAndThirdWebTokens = async () => {
    const sanityTokensGetDataFromApi = await axios.get("https://dk0dg5q5.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D'coins'%5D%7B%0A%20%20name%2C%0A%20%20inrPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D")
    console.log(sanityTokensGetDataFromApi['data']['result'])
    const sanityTokens = sanityTokensGetDataFromApi['data']['result']
    setSanityTokens(sanityTokens)
    setThirdWebTokens(
        sanityTokens.map(token => sdk.getTokenModule(token['contractAddress']))
    )
    // console.log(apiCoins)
  }

  useEffect(()=>{
    getSanityAndThirdWebTokens();
  },[])

  return (
    <Wrapper>
      <Sidebar/>
      <MainContainer>
        <Header 
          walletAddress={address} 
          sanityTokens={sanityTokens} 
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          walletAddress={address} 
          sanityTokens={sanityTokens} 
          thirdWebTokens={thirdWebTokens}
        />
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