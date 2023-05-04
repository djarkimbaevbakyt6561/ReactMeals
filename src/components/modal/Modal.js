import styled from "styled-components"
import Button from "../UI/Button"

const Modal = ({onClick}) => {
    return (
        <Wrapper>
            <Container>
                <UnorderdList>
                    <ListItem>
                        <TitleOfProduct>
                            <h3>Barbecue Burger</h3>
                            <PriceAndCount>
                                <Price>$22.99</Price>
                                <CountP>x 1</CountP>
                            </PriceAndCount>
                        </TitleOfProduct>
                        <ButtonContainerTwo>
                            <Button square={true}>-</Button>
                            <Button square={true} marginLeft='14px'>+</Button>
                        </ButtonContainerTwo>
                    </ListItem>
                    <ListItem>
                        <TitleOfProduct>
                            <h3>Barbecue Burger</h3>
                            <PriceAndCount>
                                <Price>$22.99</Price>
                                <CountP>x 1</CountP>
                            </PriceAndCount>
                        </TitleOfProduct>
                        <ButtonContainerTwo>
                            <Button square={true}>-</Button>
                            <Button square={true} marginLeft='14px'>+</Button>
                        </ButtonContainerTwo>

                    </ListItem>
                </UnorderdList>
                <div>
                    <TotalAmount>
                        <h3>Total Amount</h3>
                        <p>$200.99</p>
                    </TotalAmount>
                    <ButtonContainer>
                        <Button onClick={onClick} circle={true} buttonState={false} colorState={true} borderState={true}>Close</Button>
                        <Button circle={true} marginLeft="16px" buttonState={false} colorState={false} borderState={false} >Order</Button>
                    </ButtonContainer>
                </div>
            </Container>
        </Wrapper>
    )
}
export default Modal
const Container = styled.div`
padding: 32px 32px;
width: 607px;
height: 373px;
background: #FFFFFF;
border-radius: 20px;
`
const TotalAmount = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
h3 {
font-family: 'Poppins';
font-style: normal;
line-height: 30px;
margin: 0;
color: #222222;
}
p {
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 22px;
line-height: 33px;
color: #8A2B06;
margin: 0;
}
`
const Wrapper = styled.div`
position: fixed;
top:0;
left: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.7);
`
const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
`
const UnorderdList = styled.ul`
padding: 0;
margin: 0;
`
const ListItem = styled.li`
display: flex;
justify-content: space-between;
align-items: flex-end;
margin-top: 4px;
border-bottom: 1px solid  #D6D6D6;
margin-bottom: 28px;
`
const TitleOfProduct = styled.div`
h3 {
font-family: 'Poppins';
font-style: normal;
line-height: 30px;
color: #222222;
margin: 0;
}
`
const PriceAndCount = styled.div`
display: flex;
align-items: center;
margin-top: 12px;
margin-bottom: 24px;

`
const Price = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: #AD5502;
margin: 0;
`
const CountP = styled.p`
padding:5px 14px;
border: 1px solid #D6D6D6;
border-radius: 6px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
line-height: 24px;
color: #222222;
margin: 0;
margin-left: 47px;
`
const ButtonContainerTwo = styled.div`
display: flex;
margin-bottom: 26px;

`