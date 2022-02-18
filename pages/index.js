import styled from 'styled-components'
import {useWeb3} from '@3rdweb/hooks'
import Dashboard from './Dashboard'
import Head from 'next/head'

export default function Home() {
  const {address, connectWallet} = useWeb3()
  return (
    <Wrapper>
      <Head>
        <title>Coinbase</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {address ? (
        <Dashboard address={address}/>
        // <h2>{address}</h2>
      ):(
        <WalletConnect>
          <Button onClick={() => connectWallet('injected')}>Connect Wallet</Button>
          <Details>
            You need Chrome to be
            <br/> able to run this app 
          </Details>
          <h2>Developed By Monesh</h2>
        </WalletConnect>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: black;
  color: white;
  display: grid;
  place-items: center;
`

const WalletConnect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Button = styled.div`
  /* flex: 0; */
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  background-color: #3773f5;
  color: #000;

  &:hover{
    cursor: pointer;
  }
`

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: #282b2f;
`