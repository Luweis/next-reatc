import Link from 'next/link';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const NavBar = styled.div`
  padding: 40px 0;
  & a {
    color: black;
    font-size: 16px;
  }
  @media (min-width: 768px){
    & .nav-btn{
      display: none;
    }
  }
`;
const NavRow = styled(Row)`
  @media (max-width: 768px) {
    flex-direction: column;
    &>div{
      text-align: center;
      padding: 5px 0;
    }
  }
`;

const links = [
  { href: '/', label: '首页' },
  { href: '/doc', label: '咨询医生' },
  { href: '/2', label: '预约手术' },
  { href: '/3', label: '经典问答' },
  { href: '/4', label: '布谷健康' },
  { href: '/5', label: '疾病库' },
  { href: '/6', label: '健康商城' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <NavBar>
    <Row>
      <Col xs={18} md={6} lg={12}>
        <a href='/'>
          <img src='/static/bugu.ico' style={{marginRight: '12px'}}/>布谷医生
        </a>
      </Col>
      <Col xs={6} className="nav-btn">
        <div>123oppoip</div>
      </Col>
      <Col xs={24} md={18} lg={12}>
        <NavRow type="flex" justify="space-between">
          {links.map(
            ({ key, href, label }) => (
              <Col key={key} >
                <Link href={href} >
                  <a style={{fontWeight: 500}}>{label}</a>
                </Link>
              </Col>
            )
          )}
        </NavRow>
      </Col>
    </Row>
  </NavBar>
)

export default Nav

