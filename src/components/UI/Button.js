import styled from "styled-components"
import { ReactComponent as Plus } from '../../assets/icons/Vector.svg'

const Button = ({ children, plus }) => {
    return (
        <ButtonAll>
            {plus && <Span><Plus></Plus></Span>}
            {children}
        </ButtonAll>
    )
}
export default Button
const ButtonAll = styled.button`
background: #8A2B06;
border-radius: 20px;
padding:10px 20px;
border: none;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 21px;
letter-spacing: 0.03em;
text-transform: capitalize;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
 &:hover {
    background: #7E2A0A;
 }
 &:active {
    background: #993108
 }
 &:disabled {
    background: #CAC6C4;
 }
`
const Span = styled.span`
margin-right: 13px;
`