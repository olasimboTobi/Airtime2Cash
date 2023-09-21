import styled from 'styled-components'

export const FirstStyle = styled.div`
display:flex;
margin-top: 4rem;
margin-bottom:4rem;
margin-left: 9rem;
height:8rem;
.sidebar{
    height:100%;
    border: 0.5rem solid #DE3D6D;
    border-radius: 10px 10px 0px 0px;
}
.header{
    width: 70%;
    font-size:20px;
    color: #03435F;
}
.content{
     padding-left: 2.5rem;
     height:100%
}
.paragraph{
    margin-top:1rem;
    width:60%;
    color: #03435F;
    font-size:1.2rem;
}
@media only screen and (max-width: 600px) {
    .container{
        height: 8rem;
    }
    .content{
     padding-left: 1.5rem;    
   }
   .header{
    font-size:10px;
   }
   .paragraph{
    font-size:1.2rem;
    margin-top: 0.7rem;
   }
   .sidebar{
    height: 6rem;
    border: 0.2rem solid #DE3D6D;
   }
}
 @media only screen and (min-width: 768px) {
     .content{
     padding-left: 2.5rem;    
   }
   .header{
    font-size:20px;
   }
   .paragraph{
    font-size:1rem;
    margin-top: 0.7rem;
   }
   .sidebar{
    height:100%;
    border: 0.5rem solid #DE3D6D;
    border-radius: 10px 10px 0px 0px;
   }
 }
 @media only screen and (max-width: 400px) {
display:flex;
margin-top: 2rem;
margin-bottom:2rem;
margin-left: 2.5rem;
height:7rem;
max-width:100%;
    .container{
        height: 6rem;
    }
    .content{
     padding-left: 0.5rem;    
   }
   .header{
    font-size:7px;
    width:90%;
   }
   .paragraph{
    font-size:1rem;
    margin-top: 0.3rem;
   }
   .sidebar{
    height: 100%;
    border: 0.2rem solid #DE3D6D;
   }
 }
`





