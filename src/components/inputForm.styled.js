import styled from 'styled-components';

export const InputFormBox = styled.div`
padding: 10px;
margin: 10px;
width: 320px;
border: 1px solid black;
border-radius: 5px;
background-color: yellow;
`
export const InputItem= styled.input`
display: flex;
flex-direction: column;
margin-bottom: 10px;
:invalid {
  border: 2px dashed red;
}
:invalid:required {
  background-image: linear-gradient(to right, pink, gray);
}

`