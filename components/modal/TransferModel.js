import React, { useState } from 'react'
import styled from 'styled-components'
import Transfer from './Transfer'

const TransferModel = ({sanityTokens, thirdWebTokens, walletAddress}) => {
    const [action, setAction] = useState('send')
    const [selectedToken, setSelectedToken] = useState(sanityTokens[0])

    const selectedStyle = {
        color: '#3773f5'
    }
    const unSelectedStyle = {
        border: '1px solid #282b2f'
    }

    const selectedModal = (option) => {
        switch (option) {
            case 'send':
                return <Transfer 
                            selectedToken={selectedToken} 
                            setAction={setAction}
                            thirdWebTokens={thirdWebTokens}
                            walletAddress={walletAddress}
                        />
            case 'receive':
                return <h2>Receive</h2>
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
                <p>send</p>
            </Options>
            <Options 
                style={action === 'receive' ? selectedStyle : unSelectedStyle} 
                onClick={() => setAction('receive')}
                >
                <p>receive</p>
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