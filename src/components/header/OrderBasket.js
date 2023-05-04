import styled from "styled-components"
import { ReactComponent as BasketIcon } from '../../assets/icons/Group.svg'

const OrderBasket = ({ children }) => {
    return (
        <Button>
            <BasketIcon />
            <OrderBasketTitle>
                {children}
            </OrderBasketTitle>
            <OrderBasketCount>7</OrderBasketCount>
        </Button>
    )
}
export default OrderBasket
const Button = styled.button`
   width: 249px;
   height: 59px;
   background: #5A1F08;
   border-radius: 30px;
   border: none;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   &:hover {
    background-color: #4d1601;
   }

`
const OrderBasketTitle = styled.span`
   color: white;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   line-height: 24px;
   margin-left: 13px;
`
const OrderBasketCount = styled.span`
   width: 51px;
   height: 35px;
   background: #8A2B06;
   border-radius: 30px;
   font-family: 'Poppins';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 27px;
   color: #FFFFFF;
   margin-left: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
`