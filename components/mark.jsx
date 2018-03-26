import React from 'react';
import styled from 'styled-components';

const Mk = styled.span`
  margin-right: 15px;
`;

function Mark() {
  return (
    <p>
      {
        [1,2,3,4,5,10,1,3,4,5,5,5,5,5,1,2,3,4,5,10,1,3,1,2,3,4,5,10,1,3].map(() => (
          <Mk>关节炎关节炎</Mk>
        ))
      }
    </p>
  );
}

export default Mark;
