import React, { useState } from 'react'
import styled from 'styled-components'

const TransferModel = () => {
    const [action, setAction] = useState('send')

    const selectedStyle = {
        color: '#3773f5'
    }
    const unSelectedStyle = {
        border: '1px solid #282b2f'
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