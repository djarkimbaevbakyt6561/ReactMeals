import styled from "styled-components"
import summaryImage from '../../assets/images/summary-image.png'
import Meals from "../meals/Meals"
import MealSummaryCard from "./MealSummaryCard"
const MealSummary = () => {
    return (
        <Container>
            <Image src={summaryImage} alt="summary">
            </Image>
            <MealSummaryCard></MealSummaryCard>
        </Container>
    )
}
export default MealSummary
const Container = styled.div`
  width: 100%;
  background: #383838;
  display: flex;
  flex-direction:column;
  align-items: center;
  height: 550px;

`
const Image = styled.img`
  width: 100%;
  height: 432px;
`