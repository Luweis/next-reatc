import React from 'react';
import styled from 'styled-components';

import { colors, fontSizes } from '../utils/constant';

const Wrap = styled.div`
  display: flex;
`;

const Header = styled.div`
  width: 70px;
  & > img {
    width: 100%;
  }
`;
const Desc = styled.div`
  flex: 1;
  padding-left: 20px;
  & > div{
    width: 100px;
    text-align: center;
    padding: 5px 0;
    border-radius: 15px;
    background-color: ${colors.warning};
    color: white;
  }
  & > p{
    margin: 12px 0 0 0;
    font-size: ${fontSizes.small};
    color: ${colors.dark2};
    font-weight: 300;
  }
`;

//咨询bar

function Consultation({  }) {
  return (
    <Wrap>
      <Header>
        <img src="../static/yu-shoushu.png"/>
      </Header>
      <Desc>
        <div>免费问医生</div>
        <p>免费向几万家医院医生咨询,生咨询</p>
      </Desc>
    </Wrap>
  )
}

export default Consultation;

