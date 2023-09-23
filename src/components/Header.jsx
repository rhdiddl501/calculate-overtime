import React from "react";
import styled from "styled-components";

const Header = () => {
    return(
        <HeaderBox>
            <HeaderTitle>초과근무 계산</HeaderTitle>
            <HeaderItem>로그인</HeaderItem> 
        </HeaderBox>
    )
}

export default Header;

const HeaderBox = styled.header`
display: flex;
align-items: center;
justify-content: space-evenly;
margin: 0 auto;
height: 112px;
left: 0px;
right: 0px;
top: 0px;
`

const HeaderTitle = styled.h1`

`

const HeaderItem = styled.span`
margin: 0 5px;
`
