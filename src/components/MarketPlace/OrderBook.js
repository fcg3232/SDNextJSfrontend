import React from 'react'
import '../MarketPlace/compo.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const orderBookData = [
    {
        text: 'Last trade',
        price: '49.00',
        text2: 'Last trade value',
        toolTip: 'long description description description description description description description'
    },
    {
        text: 'Estimated value',
        price: '50.05',
        text2: 'HouseCanary',
        toolTip: 'long description descrdddddddddddddddddddddddddddddd ddddddddddddddd description description'
    },
    {
        text: 'Trade volume',
        price: '4,606',
        text2: 'Last 4 weeks',
        toolTip: 'long description description qwertyuqwerty hgvfcdddddddddddddddddddddd'
    },
    {
        text: 'Market cap',
        price: '293,743',
        text2: '5,869 tokens',
        toolTip: 'long description dnjdnsdcnnmn dsdddlkfjkfkf dsdsdsfkj '
    }
]


const OrderBook = () => {
    return (
        <>
            <div className='order-book-container'>
                <div className='order-price-container'>
                    {orderBookData.map((currElem) => (
                        <OrderBookPriceCard data={currElem} />
                    ))}
                </div>
                <div className='open-order-container'>
                    <h4 className='open-order-heading'>Open orders</h4>
                    <div className='table-container'>
                        <div className='table-sub-container'>
                            <table className='open-order-table'>
                                <tr>
                                    <th>Price (USD)</th>
                                    <th>Buy order</th>
                                </tr>
                                <tr>
                                    <td>47.50</td>
                                    <td>1 Token</td>
                                </tr>
                                <tr>
                                    <td>30.30</td>
                                    <td>5 Tokens</td>
                                </tr>
                            </table>
                        </div>
                        <div className='mid-container'></div>
                        <div className='table-sub-container'>
                            <table className='open-order-table'>
                                <tr>
                                    <th>Price (USD)</th>
                                    <th>Buy order</th>
                                </tr>
                                <tr>
                                    <td>47.50</td>
                                    <td>1 Token</td>
                                </tr>
                                <tr>
                                    <td>30.30</td>
                                    <td>5 Tokens</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='open-order-container'>
                    <h4 className='open-order-heading'>Recently filled orders</h4>
                    <div className='table-container'>
                        <div className='filled-order-table-sub-container'>
                            <table className='filled-order-table'>
                                <tr>
                                    <th>Filled</th>
                                    <th className='filled-order-th'>Size</th>
                                    <th>Transacted Price</th>
                                </tr>
                                <tr>
                                    <td>November 20</td>
                                    <td>10 Tokens</td>
                                    <td className='filled-order-td'>49.00</td>
                                </tr>
                                <tr>
                                    <td>November 20</td>
                                    <td>10 Tokens</td>
                                    <td className='filled-order-td'>49.00</td>
                                </tr>
                                <tr>
                                    <td>November 20</td>
                                    <td>10 Tokens</td>
                                    <td className='filled-order-td'>49.00</td>
                                </tr>
                                <tr>
                                    <td>November 15</td>
                                    <td>10 Tokens</td>
                                    <td className='filled-order-td'>49.00</td>
                                </tr>
                                <tr>
                                    <td>November 13</td>
                                    <td>10 Tokens</td>
                                    <td className='filled-order-td'>49.00</td>
                                </tr>
                                <tr>
                                    <td>November 14</td>
                                    <td>10 Tokens</td>
                                    <td className='filled-order-td'>49.00</td>
                                </tr>
                                <tr>
                                    <td>November 20</td>
                                    <td>10 Tokens</td>
                                    <td className='filled-order-td'>49.00</td>
                                </tr>
                                <tr>
                                    <td>November 20</td>
                                    <td>10 Tokens</td>
                                    <td className='filled-order-td'>49.00</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>
            </div >
        </>
    )
}

export default OrderBook


export const OrderBookPriceCard = ({ data }) => {
    const { text, price, text2, toolTip } = data
    return (
        <>
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={(props) => (
                    <Tooltip id="button-tooltip" {...props}>
                        {toolTip}
                    </Tooltip>
                )}
            >
                <div className='order-price-card'>
                    <p className='order-card-text'>{text}</p>
                    <div className='price-card'>
                        <span className='dollar-sign'>$</span><span className='order-card-price-text'>{price}</span>
                    </div>
                    <p className='order-card-text'>{text2}</p>
                </div>
            </OverlayTrigger>
        </>
    )
}