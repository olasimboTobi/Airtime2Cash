import styled from 'styled-components'

export const CardsStyle = styled.div`
  display:flex;
  gap:40px;
  justify-content:center;
  margin-top:2rem;
  margin-bottom:2rem;
  #box-1{
    background: rgba(226, 0, 16, 0.05);
 }
 #box-2{
    background: rgba(245, 132, 76, 0.05);
 }
 #box-3{
    
background: rgba(85, 166, 48, 0.05);
 }

 @media only screen and (max-width: 600px) {
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
   
 }
 @media only screen and (min-width: 768px) {
    display:flex;
    align-items: center;
    justify-content:center;
 }
 @media only screen and (min-width: 992px) {
    display:flex;
    align-items: center;
    justify-content:center;
 }
 @media only screen and (max-width: 400px) {
    width:100%;
    overflow-x:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    padding:0 7px 0 7px;
    align-items: center;
    justify-content:center;
 }
   
`

    