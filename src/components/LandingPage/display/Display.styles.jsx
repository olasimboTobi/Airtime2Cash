import styled from "styled-components";

export const DisplayStyles = styled.div`
  background-color: #fef9f6;
  height: 80vh;
  max-width: 100%;
  overflow-y: hidden;
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-top: 3rem;
  }
  .grid-child1 {
    padding-left: 7rem;
    width: 100%;
    height: max-content;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 5rem;
  }
  .content {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 40px;
    line-height: 40px;
  }
  .paragraph {
    padding-top: 1.5rem;
    width: 80%;
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
    font-size: 0.5rem;
  }
  .grid-child1 > .content > h1 {
    -webkit-text-fill-color: transparent;
    background: linear-gradient(89.39deg, #de3d6d 18.77%, #f5844c 91.68%);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 3rem;
    line-height: 3.5rem;
  }
  .grid-child {
    position: relative;
    width: 100%;
    
  }
  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    height: 500px;
    margin-top: -175px;
    margin-left: -250px;
  }
  


  @media only screen and (max-width: 600px) {
    height: 60vh;
    max-width: 100%;

    .grid-container {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      padding-top: 1rem;
    }
    .grid-child1 > .content > h1 {
      -webkit-text-fill-color: transparent;
      background: linear-gradient(89.39deg, #de3d6d 18.77%, #f5844c 91.68%);
      -webkit-background-clip: text;
      background-clip: text;
      font-size: 2rem;
      line-height: 2rem;
    }
    .btn-container {
      padding-top: 1rem;
      height: 3rem;
      width: 8rem;
    }
    .btn a {
      font-weight: 0.3rem;
      font-size: 1rem;
    }
    .btn {
      gap: 6px;
      border-radius: 0.5rem;
      padding: 5px;
      width: 100%;
      height: 100%;
    }
    .paragraph {
      padding-top: 1rem;
      width: 80%;
      font-size: 1.2rem;
    }
    .grid-child1 {
      width: 100%;
    }
    .grid-child {
      display: none;
    }
  }
  @media only screen and (min-width: 768px) {
    .grid-container {
      align-items: center;
      justify-content: center;
    }

    .grid-child1 > .content > h1 {
      font-size: 3rem;
      line-height: 2.5rem;
    }

    .btn-container {
      padding-top: 1.5rem;
      width: 10rem;
    }

    .btn a {
      font-weight: bold;
      font-size: 1.5rem;
    }

    .btn {
      gap: 10px;
      border-radius: 5px;
      padding: 10px;
    }

    .paragraph {
      padding-top: 1.5rem;
      width: 80%;
      font-size: 20px;
    }
    .grid-child {
      display: flex;
    }
  }
  @media only screen and (min-width: 992px) {
    .grid-child1 > .content > h1 {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }

    .btn-container {
      padding-top: 1.5rem;
      width: 10rem;
    }

    .btn a {
      font-weight: bold;
      font-size: 1rem;
    }

    .btn {
      gap: 10px;
      border-radius: 5px;
      padding: 10px;
    }

    .paragraph {
      padding-top: 1.5rem;
      width: 80%;
      font-size: 20px;
    }
    .grid-child {
      display: flex;
    }
  }
  @media only screen and (max-width: 400px) {
    height: 50vh;
    max-width: 100%;
   

    .grid-container {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content:center;
    text-align:center;
    padding-top: 1rem;
    }
    .grid-child1 > .content > h1 {
      -webkit-text-fill-color: transparent;
      background: linear-gradient(89.39deg, #de3d6d 18.77%, #f5844c 91.68%);
      -webkit-background-clip: text;
      background-clip: text;
      font-size: 1rem;
      line-height: 1rem;
    }
  
   
    .paragraph {
      padding-top: 0.5rem;
      width: 80%;
      font-size: 0.8rem;
    }
    .grid-child1 {
    width: 100%;
    padding-left:1.5rem;
    width: 100%;
    height: max-content;
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 5rem;
    }
    .grid-child {
      display: none;
    }
    .btn-container{
      margin-left:15%;
      margin-right:25%;
    }
    .grid-child1 {
    padding-left: 3rem;
    
    }
   
  }
`;
