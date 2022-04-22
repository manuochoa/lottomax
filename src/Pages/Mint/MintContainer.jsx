import React, { useEffect, useState } from 'react'
import Mint from './Mint'
import diamonds from '../../Assets/Images/diamonds.png'
import diamonds_2 from '../../Assets/Images/small_diamonds.png'

const MintContainer = (props) => {
    const [count, setCount] = useState(10)
    const currency = 90.0

    let date = new Date();
    date.setDate(date.getDate()+1);

    const limit = 100

    const [discount, setDiscount] = useState(0)

    const [total, setTotal] = useState(count * 10)

    const nfts = [diamonds, diamonds_2, diamonds]

    const handleInputCount = (e) => {
        let value = Number(e.target.value.replace(/[^0-9]/g, ''))
        if(value <= limit) {
            setCount(value)
        }else {
            setCount(limit)
        }
    }

    const handleCount = (operation) => {
        if(operation === "minus" && count - 1 >= 0) {
            setCount(count - 1)
        }else if(operation === "plus" && count + 1 <= limit) {
            setCount(count + 1)
        }
    }

    useEffect(() => {
        let discount = 0
        if(count < 10){
            setDiscount(0)
            discount = 0
        } else if(count >= 10 && count < 50){
            setDiscount(10)
            discount = 10
        } else if(count >= 50 && count < 100){
            setDiscount(15)
            discount = 15
        } else if(count === 100) {
            setDiscount(20)
            discount = 20
        }
        let discountValue = (count * currency) / 100 * discount
        setTotal((count * currency) - discountValue) 
    }, [count])

    return (
        <>
            <Mint
                currency={currency}
                count={count}
                handleCount={handleCount}
                date={date}
                nfts={nfts}
                total={total}
                discount={discount}
                handleInputCount={handleInputCount}
            />
        </>
    )
}

export default MintContainer