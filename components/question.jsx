import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import {colors} from "../utils/constant";

const Ques = styled.div`
  display: flex;
  &>img{
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
  >div{
    color: ${colors.warning};
  }
`;

const Answer =styled.div`
  display: flex;
   &>img{
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }
`;

const AnswerContent = styled.ul`
  & > li {
  margin-bottom: 20px;
  }
`


class Question extends Component{
  render(){
    return(
      <div>
        <Ques>
          <img src='../static/ques.png'/>
          <div>
            v法国 vu  功夫个 股俄 v 股合格 合格合肥 v 恶狠狠合肥 v 回复 v 和 v 居家服 vv  纪空间和 v 房间布局为别
            就被解放军济南警  v  附加费
          </div>
        </Ques>
        <Answer style={{marginTop: '30px'}}>
          <img src='../static/ques.png' style={{width:'30px', height:'30px'}}/>
          <AnswerContent>
            <li>
              <Answer>
                <img src='../static/ques.png' style={{height: '30px',width:'30px'}} />
                <div>
                  <div>
                    <span style={{fontSize: '20px', marginRight: '20px'}}>姓名</span>
                    <span>职称</span>
                  </div>
                  <div>
                    <span style={{marginRight: '20px'}}>骨科综合</span>
                    <span>所属医院</span>
                  </div>
                </div>
              </Answer>
              <p>
                v法国 vu  功夫个 股俄 v 股合格 合格合肥 v 恶狠狠合肥 v 回复 v 和 v 居家服 vv  纪空间和 v 房间布局为别  就被解放军济南警  v  附加费
              </p>
            </li>
            <li>
              <Answer>
                <img src='../static/ques.png' style={{height: '30px',width:'30px'}} />
                <div>
                  <div>
                    <span>姓名</span>
                    <span>职称</span>
                  </div>
                  <div>
                    <span>骨科综合</span>
                    <span>所属医院</span>
                  </div>
                </div>
              </Answer>
              <p>
                v法国 vu  功夫个 股俄 v 股合格 合格合肥 v 恶狠狠合肥 v 回复 v 和 v 居家服 vv  纪空间和 v 房间布局为别  就被解放军济南警  v  附加费
              </p>
            </li>
          </AnswerContent>
        </Answer>
      </div>
    )
  }
}

export default Question;

