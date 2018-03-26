import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import {sizes, colors, fontSizes} from '../utils/constant';

const Wrap = styled.div`
  padding: 20px 0;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    height: 50px;
  }
  & > div {
    flex: 1;
    margin-left: 12px;
    & :first-child{
      font-size: 15px;
      font-weight: 500;
      color: black;
    }
    & > span{
      color: ${colors.warning};
      font-size: ${fontSizes.small};
    }
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  height: 40px;
  border-radius: 23px;
  border: 1px solid ${colors.dar3};
  & > img {
    height: 80%;
    margin-left: 18px;
  }
  & > input {
    flex: 1;
    height: 100%;
    border: none;
    padding: 8px;
    outline: none;
  }
`;

const SearBtn = styled.span`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  width: 80px;
  background-color: ${colors.warning};
  color: white;
  height: 100%;
  border-top-right-radius: 23px;
  border-bottom-right-radius: 23px;
  font-size: ${fontSizes.small};
`;

function SearchBar({dataSource}) {
  return (
    <Wrap>
     <Row>
       <Col xs={24} lg={10}>
         <Header>
           <img src={dataSource.source}/>
           <div>
             <div>{dataSource.title}</div>
             <span>{dataSource.desc}</span>
           </div>
         </Header>
       </Col>
       <Col xs={24} lg={14} style={{textAlign: 'center'}}>
       <Search>
         <img src='../static/icon-search.png'/>
         <input type='search'placeholder={dataSource.placeholder} />
         <SearBtn>搜索</SearBtn>
       </Search>
       </Col>
     </Row>
    </Wrap>
  )
}

SearchBar.defaultProps = {
  dataSource: {
    source: '../static/question.png',
    title: '查找你想要的手术医生',
    desc: '预约热线： 400 6882 120',
    placeholder: '搜医院、医生、科室、城市、疾病'
  }
}

export default SearchBar;
