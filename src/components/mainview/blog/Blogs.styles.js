import styled from "@emotion/styled";

export const BlogContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;

`

export const BlogImg = styled.img`
    /* width: 50%; */
    width: 100%;
    height: 250px;
    border: 1px solid rgba(255, 255, 255, .6);
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

`

export const BlogDesc = styled.div`
     /* width: 50%; */
     width: 100%;
    align-items: top;
`