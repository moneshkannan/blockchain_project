import React, { useState } from 'react'
import styled from 'styled-components'
import CoinSelector from './CoinSelector'
import Transfer from './Transfer'
import { Triangle } from  'react-loader-spinner'
import Receive from './Receive'
import Lottie from 'react-lottie'
import Success from '../../animation/success.json'

const TransferModel = ({sanityTokens, thirdWebTokens, walletAddress}) => {
    const [action, setAction] = useState('send')
    const [selectedToken, setSelectedToken] = useState(sanityTokens[0])

    const selectedStyle = {
        color: '#3773f5'
    }
    const unSelectedStyle = {
        border: '1px solid #282b2f'
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Success,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };

    const selectedModal = (option) => {
        switch (option) {
            case 'send':
                return <Transfer 
                            selectedToken={selectedToken} 
                            setAction={setAction}
                            thirdWebTokens={thirdWebTokens}
                            walletAddress={walletAddress}
                        />
            case 'select':
                return <CoinSelector
                    setAction={setAction}
                    selectedToken={selectedToken}
                    setSelectedToken = {setSelectedToken}
                    sanityTokens={sanityTokens}
                    thirdWebTokens={thirdWebTokens}
                    walletAddress={walletAddress}
                />
            case 'transferring':
                return <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.5rem'
                }}>
                    <h2>Transfer in progress</h2>
                    <Triangle
                        height="100"
                        width="100"
                        color='#3773f5'
                        ariaLabel='loading'
                    />
                </div>
            case 'transferred':
                return <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.5rem'
                }}>
                    <h2>Transfer Complete</h2>
                    <Lottie options={defaultOptions} height={300} width={300}/> 
                </div>
            case 'receive':
                return(
                    <Receive
                        setAction={setAction}
                        selectedToken={selectedToken}
                        walletAddress = {walletAddress}
                    />
                )
            default:
                return <h2>send</h2>
        }
    }
  return (
    <Wrapper>
        <Selector>
            <Options 
                style={action === 'send' ? selectedStyle : unSelectedStyle} 
                onClick={() => setAction('send')}
                >
                <p>Send</p>
            </Options>
            <Options 
                style={action === 'receive' ? selectedStyle : unSelectedStyle} 
                onClick={() => setAction('receive')}
                >
                <p>Receive</p>
            </Options>
        </Selector>
        <ModalMain>
            {selectedModal(action)}
        </ModalMain>
    </Wrapper>
  )
}

export default TransferModel

const Wrapper = styled.div`
    height: 35rem;
    width: 27rem;
    color: white;
    border: 1px solid #282b2f;
    display: flex;
    flex-direction: column;
`

const Selector = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5rem;
`

const Options = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover {
        cursor: pointer;
        background-color: #111214;
    }
`

const ModalMain = styled.div`
    padding: 1rem;
    flex: 1;
`