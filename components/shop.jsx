import React from 'react';
import styled from 'styled-components';
import {colors, fontSizes} from "../utils/constant";

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TextCenter = styled.div`
  text-align: center;
`;

const ShopContent = styled.div`
  flex: 50% 0 0;
  > img {
    width: 100%;
    padding: 15px 15px 15px 0;
  }
  
  button{
    margin-top: 8px;
    padding: 2px 5px;
    background-color: ${colors.warning};
    color: white;
    outline: none;
    border: none;
    font-size: ${fontSizes.small};
  }
`;

function Shop() {
  return(
    <Wrap>
      <ShopContent >
        <img src='../static/shop-example.png'/>
        <div>
          <div>硅胶冰古代家宴保护套</div>
          <div>
            <span>划线价格</span>
            <span>444元</span>
          </div>
          <TextCenter >
            <button>立即购买</button>
          </TextCenter>
        </div>
      </ShopContent>
      <ShopContent >
        <img src='../static/shop-example.png'/>
        <div>
          <div>硅胶冰古代家宴保护套</div>
          <div>
            <span>划线价格</span>
            <span>444元</span>
          </div>
          <TextCenter >
            <button>立即购买</button>
          </TextCenter>
        </div>
      </ShopContent>
      <ShopContent >
        <img src='../static/shop-example.png'/>
        <div>
          <div>硅胶冰古代家宴保护套</div>
          <div>
            <span>划线价格</span>
            <span>444元</span>
          </div>
          <TextCenter >
            <button>立即购买</button>
          </TextCenter>
        </div>
      </ShopContent>
    </Wrap>
  );
}

export default Shop;
