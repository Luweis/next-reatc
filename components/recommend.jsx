import React, {Component} from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { Carousel } from 'antd';
import {colors} from "../utils/constant";

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid red;
`;

const Card = styled.div`
  flex: 50% 0 0;
  display: flex;
  height: 40%;
`;

const QuestionBtn = styled.span`
  padding: 2px ;
  border: 1px solid ${colors.warning};
  border-radius: 3px;
`;

const Name = styled.span`
  font-size: 20px;
  margin-right: 12px;
  & + span{
    font-size: 13px;
  }
`;
const Des = styled.p`
  color: ${colors.dar3};
`;

function Recommend() {
  return(
  <div>
    <h4>推荐医生</h4>
    <Carousel>
      <div>
        <Row>
          {[1,2,3,4].map((item,index) => (
            <Col xs={24} md={12}  key={index}>
              <Row style={{marginTop: '20px'}}>
                <Col span={8} style={{textAlign: 'center',paddingRight: '12px'}}>
                  <img src='../static/yu-shoushu.png' style={{width:'100%'}}/>
                  <QuestionBtn>点击咨询</QuestionBtn>
                </Col>
                <Col span={14}>
                  <div>
                    <Name>名字</Name>
                    <span>职位</span>
                  </div>
                  <div>
                    <span style={{marginRight: '12px'}}>类别</span>
                    <span>所属医院</span>
                  </div>
                  <Des style={{}}>腰椎间盘突出症、颈椎病等常见脊柱疾病的诊治，以及骨关节炎、骨质疏松等常见骨科疾病的诊治。</Des>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <Row>
          {[1,2,3,4].map((item,index) => (
            <Col xs={24} md={12}  key={index}>
              <Row style={{marginTop: '20px'}}>
                <Col span={8} style={{textAlign: 'center',paddingRight: '12px'}}>
                  <img src='../static/yu-shoushu.png' style={{width:'100%'}}/>
                  <QuestionBtn>点击咨询</QuestionBtn>
                </Col>
                <Col span={14}>
                  <div>
                    <Name>名字</Name>
                    <span>职位</span>
                  </div>
                  <div>
                    <span style={{marginRight: '12px'}}>类别</span>
                    <span>所属医院</span>
                  </div>
                  <Des style={{}}>腰椎间盘突出症、颈椎病等常见脊柱疾病的诊治，以及骨关节炎、骨质疏松等常见骨科疾病的诊治。</Des>
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </div>
      <div>
      <Row>
        {[1,2,3,4].map((item,index) => (
          <Col xs={24} md={12}  key={index}>
            <Row style={{marginTop: '20px'}}>
              <Col span={8} style={{textAlign: 'center',paddingRight: '12px'}}>
                <img src='../static/yu-shoushu.png' style={{width:'100%'}}/>
                <QuestionBtn>点击咨询</QuestionBtn>
              </Col>
              <Col span={14}>
                <div>
                  <Name>名字</Name>
                  <span>职位</span>
                </div>
                <div>
                  <span style={{marginRight: '12px'}}>类别</span>
                  <span>所属医院</span>
                </div>
                <Des style={{}}>腰椎间盘突出症、颈椎病等常见脊柱疾病的诊治，以及骨关节炎、骨质疏松等常见骨科疾病的诊治。</Des>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
    </Carousel>
  </div>
  );
}

export default Recommend;
