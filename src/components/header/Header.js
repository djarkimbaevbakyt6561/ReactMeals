import styled from "styled-components"
import OrderBasket from "./OrderBasket"
const Header = () => {
    return (
        <header style={{width: "100%"}}>
            <Container>
                <ReactMeals>ReactMeals</ReactMeals>
                <OrderBasket>Your Cart</OrderBasket>
            </Container>
        </header>

    )
}
export default Header
const Container = styled.div`
   height: 101px;
   background: #8A2B06;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 120px;
   font-family: "Poppins";
`
const ReactMeals = styled.h1`
   color: #FFFFFF;
   font-style: normal;
   font-weight: 600;
   line-height: 57px;
   margin: 0;
`