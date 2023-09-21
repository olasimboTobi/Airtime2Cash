import styled from 'styled-components'

export const InfoStyles = styled.div`

padding-top:2.5rem;
padding-bottom:2.5rem;
max-width: 100%;
.container{
width:50%;
margin: 0 auto;
display:flex;
flex-direction:column;
align-items:center;    
}
.header{
    margin-top:1.5rem;
    margin-bottom:1.2rem;
    font-size: 1.2rem;
    color:#03435F;
}
.paragraph{
    color:#03435F;
    font-size:1.2rem;
}

@media only screen and (max-width: 600px) {

padding-top:1.5rem;
padding-bottom:1.5rem;
max-width: 100%;
.container{
width:50%;
margin: 0 auto;
display:flex;
flex-direction:column;
align-items:center;    
}
    .header{
    margin-top:1rem;
    margin-bottom:1rem;
    font-size: 0.7rem;
    
}
}
@media only screen and (max-width: 400px) {
padding-top:1rem;
padding-bottom:1rem;
max-width: 100%;
.container{
width:50%;
margin: 0 auto;
display:flex;
flex-direction:column;
align-items:center;    
}
.header{
margin-bottom:1rem;
font-size: 0.5rem;
    
}
.paragraph{
    
    font-size:1rem;
}
}
`