import Link from 'next/link'
import { Row, Col, Carousel } from 'antd';
import styled from 'styled-components';
import Head from '../components/head';
import Nav from '../components/nav';
import Consultation from '../components/consultation';
import Tip from '../components/tip';
import SearchBar from '../components/searchbar';
import Recommend from '../components/recommend';
import Question from '../components/question';
import Mark from '../components/mark';
import Footer from '../components/footer';
import Shop from  '../components/shop';
import { sizes } from "../utils/constant";

const title = '布谷医生-在线骨科诊断|治疗|用药专家';
const imgs = [
  'https://secure.cdn.drbugu.com/53911783-e66c-4a88-be27-34e5dbf6e6e2.png',
  "https://secure.cdn.drbugu.com/032d78d6-5e68-4e61-980a-8fe4e475fc3c.png"
];

const questionTps = {
  title: '咨询医生',
  desc: '汇聚全国权威医 ，只要是 健康问题，在这 轻松解决!'
}

const appointment = {
  title:'预约手术',
  desc: '全国近1000家三甲医院，副主任医师以上名医主'
}
const classic = { // 经典问答
  title:'经典问答',
  desc: '经典问答,了解相关问题。'
}

const knowledge = {
  title: '疾病库',
  desc: '健康垂直领域疾病库多达1000多种'
}

const shop = {
  title: '健康商城',
  desc: '专业骨科支具、康复器材商城'
}

const health = {
  title: '布骨健康',
  desc: '健康领域医学资讯、科普 章 应俱全'
}



const SecrionRow = styled(Row)`
  margin: ${`${sizes.sectionMargin} 0`}
`;

export default () => (
  <div className="container">
    <Head title={title} />
    <Nav />
    <main>
      {/*左侧*/}

      <Row>
        <Col xs={24} lg={16}>
          <Row >
            {/*banner*/}
            <Col xs={24} lg={22}>
              <Carousel autoplay>
                {imgs.map((img) => (
                  <div key={img}><img src={img} style={{width: '100%'}}/></div>
                ))}
              </Carousel>
              {/*咨询医生*/}
              <Row style={{paddingBottom: '20px',margin: `${sizes.sectionMargin} 0`}}>
                <Col xs={24} lg={11} style={{paddingTop: '20px'}}>
                  <Consultation />
                </Col>
                <Col xs={24} lg={11} style={{paddingTop: '20px'}}>
                  <Consultation />
                </Col>
              </Row>
              <SecrionRow >
                <Tip dataSource={questionTps}/>
              </SecrionRow>
              <Row style={{margin: '40px 0'}}>
                <SearchBar />
                <div>
                  <Recommend />
                </div>
              </Row>
              <SecrionRow >
                <Tip dataSource={appointment}/>
              </SecrionRow>
              <Row>
                <SearchBar/>
                <SecrionRow>
                  <Recommend />
                </SecrionRow>
              </Row>
              {/*经典问答*/}
              <SecrionRow >
                <Tip dataSource={classic}/>
              </SecrionRow>

              <SecrionRow>
                <Question />
                <Question />
              </SecrionRow>

              {/*疾病库*/}
              <SecrionRow>
                <Tip dataSource={knowledge}/>
                <SecrionRow>
                  <h4>常见疾病</h4>
                  <Mark/>
                </SecrionRow>
              </SecrionRow>
            </Col>
          </Row>
        </Col>

        {/*右侧*/}
        <Col xs={24} lg={8}>
          {/*商城*/}
         <div>
           <Tip dataSource={shop}/>
           <Shop />
         </div>

         {/* 布骨健康*/}

         {/*<div>*/}
           {/*<Tip dataSource={health}/>*/}
         {/*</div>*/}
        </Col>
      </Row>
    </main>
    <Footer />
  </div>
)
