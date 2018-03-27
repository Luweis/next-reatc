import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import {sizes, colors, fontSizes} from '../utils/constant';

const Wrap = styled.div`
  display: flex;
  padding: 20px 0;
   @media(max-width: 600px){
    flex-direction: column;
    align-items: center;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 210px;
  margin-right: 30px;
  
  & > img {
    height: 40px;
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
  flex: 1;
  align-items: center;
  height: 40px;
  border-radius: 23px;
  border: 1px solid ${colors.dar3};
  @media(max-width: 600px){
    flex: 0 0 80%;
    margin-top: 30px;
    max-width: 400px;
  }
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
      <Header>
        <img src={dataSource.source}/>
        <div>
          <div>{dataSource.title}</div>
          <span>{dataSource.desc}</span>
        </div>
      </Header>
      <Search>
        <img src='../static/icon-search.png'/>
        <input type='search'placeholder={dataSource.placeholder} />
        <SearBtn>搜索</SearBtn>
      </Search>
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
