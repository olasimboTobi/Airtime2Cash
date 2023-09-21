import styled from 'styled-components'

export const MyDisplayStyles = styled.div`
padding-top:2.5rem;
padding-bottom:2.5rem;
max-width: 100%;
overflow-x:hidden;
  .grid-container {
    background: linear-gradient(108.97deg,#d9e9ba 1.84%, #a98dcfe3 80.67%);
    width:70rem;
    height: 32rem;
     margin: 0 auto;
     display:flex;
     align-items:center;
     border-radius:1.7rem;
     
  }
  .grid-child1 {
    width: 60%;
    padding-left:4rem; 
    
  }
  .content {
    font-size:1.2rem;
    width:75%;
    margin-bottom:1rem;
    
    
  }
  .paragraph {
    width:60%;
    font-size:1rem;
    margin-bottom:1rem;
    color: #03435f;  
   
  }
  .btn-container {
    padding-top: 1.5rem;
    width: 10rem;
  }
  .btn {
     background: linear-gradient(#de3d6d, #f5844c);
    gap: 10px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    border: none;
  }
  .btn a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
  }
 
  .grid-child {
    position: relative;
    width: 40%;
  }
 
  .img1{
    position: relative;
  }
  .img2{
    position:absolute;
    top:9rem;
    left:9.5rem;
    width:8rem;
    height:4rem;
    background: #fff;
    display:flex;
    align-items: center;
    justify-content:center;
    border-radius: 10px;
  }
  @media only screen and (max-width: 600px) {
     .grid-child1 {
    width: 100%;
    padding-left:15px;  
    
  }
    .grid-container{
    width:20rem;
    height: 15rem;
    margin: 0 auto;
    display:flex;
    align-items:center;
    border-radius:0.5rem;
    }
    .btn-container {
    padding-top: 10px;
    width: 5rem;
  }
  .btn a {
    font-size: 10px;
    width: 100%;
  }
   .content h1{
    font-size:20px;
    width:90%;
    margin-bottom:10px;
    
  }
  .paragraph {
    width:80%;
    font-size:15px;
    margin-bottom:10px;
    
   
  }
  .grid-child{
    display:none;
  }
  }
  @media only screen and (min-width: 768px) {
     .grid-child1 {
    width: 60%;
    padding-left:4rem; 
    
  }
    .grid-container{
     width:70rem;
    height: 32rem;
     margin: 0 auto;
     display:flex;
     align-items:center;
     border-radius:1.7rem;
    }
    .btn-container {
     padding-top: 1.5rem;
    width: 10rem;
  }
  .btn a {
    font-weight: bold;

    font-size: 1rem;
  }
   .content h1{
    font-size:20px;
    width:90%;
    margin-bottom:10px;
    
  }
  .paragraph {
    width:80%;
    font-size:15px;
    margin-bottom:10px;
    
   
  }
  .grid-child{
    display:flex;
  }
  }
@media only screen and (max-width: 400px) {
   max-width:100%;
    .grid-child1 {
    width: 100%;
    padding-left:15px;  
    
  }
    .grid-container{
    width:20rem;
    height: 15rem;
    margin: 0 auto;
    display:flex;
    align-items:center;
    border-radius:0.5rem;
    }
    .btn-container {
    justify-content:center;
    padding-top: 10px;
    width: 5rem;
  }
  .btn a {
    font-size: 10px;
    width: 100%;
  }
   .content h1{
    font-size:20px;
    width:90%;
    margin-bottom:10px;
    
  }
  .paragraph {
    width:80%;
    font-size:15px;
    margin-bottom:10px;
  }
  .grid-child{
    display:none;
  }
}

    
`