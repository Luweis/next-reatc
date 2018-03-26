import React, {Component} from 'react';
import styled from 'styled-components';
import { Row, Col} from 'antd';
import { fontSizes } from "../utils/constant";


const Wrap = styled.footer`
  background-color: black;
  font-size: ${fontSizes.small};
  color: white;
  padding: 40px;
  @media (max-width: 768px){
    padding: 40px 0;
  }
`;

const Title = styled.ul`
  text-align: center;
  & > li{
    display: inline-block;
    padding-left: 20px;
    > a{
      color: white;
      font-size: ${fontSizes.base};
    }
  }
`;

const Card = styled.div`
  display: flex;
  padding: 10px;
  & > img {
    height: 80px;
  }
  &>div{
    font-size: ${fontSizes.base};
  }
  
  & p {
     margin-top: 6px;
     font-size: ${fontSizes.small};
  }
`;

const About = styled.div`
  text-align: center;
  padding: 6px;
  a {
    color: white;
    margin-left: 16px;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrap>
        <Title>
          <li>
            <a>布骨康复医疗中</a>
          </li>
          <li>
            <a>加入我们</a>
          </li>
        </Title>
        <Row>
          <Col xs={24} lg={8}>
            <Card>
              <img src='../static/erweima.png' />
              <div style={{marginLeft: '10px'}}>
                <div>如果您是用户</div>
                <p>
                  微信扫描二维码，立即向全国近2000家医院的几万名专业医生进行咨询。 您也可以在医院就诊后向您的医生索要二维码添加。
                </p>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card>
              <img src='../static/erweima.png' style={{height: '80px'}}/>
              <div style={{marginLeft: '10px'}}>
                <div>如果您是用户</div>
                <p>
                  微信扫描二维码，立即向全国近2000家医院的几万名专业医生进行咨询。 您也可以在医院就诊后向您的医生索要二维码添加。
                </p>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card>
              <img src='../static/erweima.png' style={{height: '80px'}}/>
              <div style={{marginLeft: '10px'}}>
                <div>如果您是用户</div>
                <p>
                  微信扫描二维码，立即向全国近2000家医院的几万名专业医生进行咨询。 您也可以在医院就诊后向您的医生索要二维码添加。
                </p>
              </div>
            </Card>
          </Col>
        </Row>
        <About>上海灵蛇信息科技有限公司</About>
        <About style={{textAlign:'center'}}>
          <span>www.drbugu.com</span>
          <a>Tel: 400 6882 120 021-33555120</a>
        </About>
        <About style={{textAlign:'center'}}>
          <a>E-mail:bugu@drbugu.com</a>
        </About>
      </Wrap>
    );
  }
}

export default Footer;
