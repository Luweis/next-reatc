import React from 'react';
import styled from 'styled-components';

import {colors, fontSizes, sizes } from '../utils/constant';

const Wrap = styled.div`
  display: flex;
  height: ${sizes.navHeight};
  & > span{
    flex: 60px 0 0;
    line-height: ${sizes.navHeight};
    font-weight: bold;
    font-size: ${fontSizes.small};
  }
`;

const Header = styled.div`
  flex: 1;
  display: flex;
  // & > span{
  //   display: inline-block;
  //   height: 100%;
  //   width: 23px;
  //   background-color: ${colors.warning};
  // }
  // & > div{
  //   flex: 1;
  //   padding-left: 12px;
  //   & > h3 {
  //     margin: 0;
  //     padding: 0;
  //   }
  //   & > p{
  //     margin: 5px 0 0 0;
  //     font-size: ${fontSizes.small};
  //     color: ${colors.dar3};
  //   }
  // }
`;

function Tip ({ dataSource }) {
  return(
    <Wrap>
      <Header>
        <span></span>
        <div>
          <h3>{dataSource.title}</h3>
          <p>{dataSource.desc}</p>
        </div>
      </Header>
      <span>
        更多》
      </span>
    </Wrap>
  );
}

export default Tip;


