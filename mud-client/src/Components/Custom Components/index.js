import styled from "styled-components";



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  align-self: center;
  margin: 0 auto;
`;

export const FormInput = styled.input`
  border: none;
  padding-left: 2em;
  height: 1.5em;
  font-size: 1em;
  width: 70%;
  font-family: "Press Start 2P", cursive;
  background-color: #e4ebe5;
  padding-top: 0.3em;
`;

export const FormLabel = styled.label`
  width: 50%;
  border: 1px solid black;
  border-radius: 50px;
  height: 3em;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 1.5em;
  margin-bottom: 3em;
  background-color: #e4ebe5;
  border: 1.5px solid #016b18;
`;

export const FormSubmit = styled.button`
  cursor: pointer;
  width: 40%;
  height: 2.5em;
  border-radius: 10px;
  font-size: 1em;
  font-weight: bold;
  background-color: #094512;
  border: 1px solid #747574;
  color: #e4ebe5;
  font-family: "Press Start 2P", cursive;

  &:hover {
    box-shadow: 5px 5px 20px rgba(255, 255, 255, 0.35);
    transition: box-shadow 0.1s ease-in-out;
  }
`;

export const FormText = styled.p`
  color: black;
  font-size: 1em;
  margin-top: 1.5em;
  font-family: "Saira Stencil One", cursive;
  -webkit-text-stroke: 0.2px grey;
`;

export const FormHeader = styled.h1`
  color: black;
  font-family:  cursive;
  font-size: 3.5em;
  color: gray;
  
`;

export const FormBackground = styled.div`
  width: 50%;
  max-height: 70vh;
  margin-top: 5em;
  padding-top: 2em;
`;


export const Body = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: auto;
`;