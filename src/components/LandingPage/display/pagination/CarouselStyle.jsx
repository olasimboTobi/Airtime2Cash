import styled from "styled-components";


export const Item= styled.div`
  display: flex;
  max-width:100%;
  height: 20rem;
  align-items:center;
 
  
  .content{
    text-align:center;
    width: 15rem;
    height:100%;
    background: rgba(0, 0, 0, 0.04);
    padding:10px;
  }
  .content h2{
    margin-bottom:1rem;
  }
 @media only screen and (max-width: 400px) {
  display: flex;
  max-width:100%;
  /* height: 3rem; */
  align-items:center;
 
  
  .content{
    text-align:center;
    width: 15rem;
    /* height:100%; */
    background: rgba(0, 0, 0, 0.04);
    padding:10px;
  }
  .content h2{
    margin-bottom:0.5rem;
    font-size:15px;
  }
  .content p{
    font-size:13px;
  }
 }
`