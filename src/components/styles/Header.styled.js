import styled from 'styled-components'

export const StyledHeader = styled.header`
    div {
        font-family: 'Poppins', sans-serif;
        ${'' /* border: 1px solid black; */}
        display: flex;
        ${'' /* text-align: center; */}
        justify-content: center;
        align-item: center;
        padding: 10px;
    }

    input {
        border: 1px solif lightgrey;
        padding: 10px;
        margin: 3px;
        border-radius: 25px;
    }

    span {
        border: 1px solid black;
        background-color: #F2BE22;
        border-radius: 5px;
        padding: 3px;
        color: black;
        font-size: large;
        font-weight: bold;
        justify-content: center;
    }

`