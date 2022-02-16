import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {coins} from '../static/coins'
import Coin from './Coin'
import axios from 'axios'
import BalanceChart from './BalanceChart'

const Portfolio = ({walletAddress, sanityTokens, thirdWebTokens}) => {
    thirdWebTokens[2].balanceOf(walletAddress).then(balance => console.log(balance['displayValue']))
    const [INRprice, setINRprice] = useState(1)
    
    const getUSDprice = async () => {
        const response = await axios.get('https://free.currconv.com/api/v7/convert?q=usd_inr&compact=ultra&apiKey=a073a9674b26cc29c184')
        .catch(e=>{
            console.log(e)
        })
        console.log(response)
        if(response.data){
            setINRprice(response.data.USD_INR)
        }else{
            setINRprice(1)
        }
    }
    useEffect(()=>{
        // getUSDprice();
    },[])
  return (
    <Wrapper>
        <Content>
            <Chart>
                <div>
                    <Balance>
                        <BalanceTitle>Portfolio Balance</BalanceTitle>
                        <BalanceValue>
                            {'$'}
                            {/* {walletBalance.toLocaleString()} */}
                            4,000
                        </BalanceValue>
                    </Balance>
                </div>
                <BalanceChart/>
            </Chart>
            <PortfolioTable>
                <TableItem>
                    <Title>Your Assets</Title>
                </TableItem>
                <Divider/>
                <Table>
                    <TableItem>
                        <TableRow>
                            <div style={{ flex:3 }}>Name</div>
                            <div style={{ flex:2 }}>Balance</div>
                            <div style={{ flex:1 }}>Price</div>
                            <div style={{ flex:1 }}>Allocation</div>
                            <div style={{ flex:0 }}><BsThreeDotsVertical/></div>
                        </TableRow>
                    </TableItem>
                    <Divider/>
                    <div>
                        {coins.map( coin => (
                            <div key={coin.id}>
                                <Coin coin={coin} price={INRprice}/>
                                <Divider/>
                            </div>
                        ))}
                    </div>
                </Table>
            </PortfolioTable>
        </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`
const Content = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 2rem 1rem;
`
const Chart = styled.div`
    border: 1px solid #282b2f;
    padding: 1rem 2rem;
`
const Balance = styled.div``
const BalanceTitle = styled.div`
    color: #8a919e;
    font-size: 0.9rem;
`
const BalanceValue = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0.5rem 0;
`
const PortfolioTable = styled.div`
    margin-top: 1rem;
    border: 1px solid #282b2f;
`
const Table = styled.table`
    width: 100%;
`
const TableRow = styled.tr`
    width: 100%;
    display: flex;
    justify-content: center;

    & > th {
        text-align: center;
    }
`

const TableItem = styled.div`
    padding: 1rem 2rem;
`

const Divider = styled.div`
    border-bottom: 1px solid #282b2f;
`
const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`