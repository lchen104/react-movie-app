import styled from 'styled-components'

export const StyledCard = styled.div`

    font-family: 'Poppins', sans-serif;
    background-color: #000;
    color: #fff;
    border: 1px solid black;
    display: flex;
    padding: 10px;

    & > div {
        padding: 10px;
    }

    span {
        color: #F2BE22;;
        font-weight: bold;
    }

    img {
        border: 5px solid white;
        border-radius: 10px;
    }
`