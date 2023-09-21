import styled from 'styled-components'


export const FooterStyles = styled.div`
padding-top:2.5rem;
padding-bottom:2.5rem;
max-width: 100%;
background:#21334F;

.container{
width:50%;
margin: 0 auto;
display:flex;
flex-direction:column;
align-items:center;    
}
.header{
    display:flex;
    margin-top:1.5rem;
    margin-bottom:1.2rem;
    font-size: 0.5rem;
    color:white;
    align-items:center;
    
}
.header h1{
    margin-left:15px;
}
.links ul{
    display:flex;
    list-style:none;
    
}
ul a{
    color:white;
    text-decoration:none;
    margin-left: 1.5rem;   
}

.divider{
   border:1px solid white;
    text-align:center;
    margin-top: 2rem;
    background: #FFFFFF;
    opacity: 0.2;
    margin-left:5rem;
    margin-right:5rem;
}
.details{
    color:white;
}
.icons{
    color:white;
    
    
}
.footerInfo{
    display:flex;
    justify-content: space-between;
    margin-left:3rem;
    margin-right:3rem;
    margin-top:1.2rem;
    
}
@media only screen and (max-width: 600px) {
padding-top:1.5rem;
padding-bottom:1.5rem; 
max-width: 100%;
}
.container{
width:50%;
margin: 0 auto;
display:flex;
flex-direction:column;
align-items:center;    
}
.header{
    display:flex;
    margin-top:0.5rem;
    margin-bottom:0.5rem;
    font-size: 0.5rem;
    color:white;
    align-items:center;
    
}
.header h1{
    margin-left:5px;
}
.details, .icons{
   font-size:11px; 
}

@media only screen and (max-width: 400px) {
padding-top:1rem;
padding-bottom:1rem;
}
.container{
width:100%;
margin: 0 auto;
display:flex;
flex-direction:column;
align-items:center;    
}
.header{
    display:flex;
    align-items:center;
    justify-content:center;
    width:50px;
    height:50px;
}
img{
    width:70%;
    height:70%;
}
.links ul{
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
}
.footerInfo{
    display:flex;
    flex-direction:column;
    text-align:center;
}
.details p{
    font-size:15px;
}


`