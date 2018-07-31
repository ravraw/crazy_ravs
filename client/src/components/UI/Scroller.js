import React from "react";
import styled from "styled-components";

const Scroll = styled.div`
  display: flex;
  align-items: center;
  .container {
    display: flex;
    overflow: scroll;
    padding: 50px 0;
    width: 100%;
  }

  > div {
    > svg {
      width: 50px;
      fill: gray;
    }
    > :hover {
      fill: red;
      cursor: pointer;
    }
  }
`;

const Scroller = props => {
  const moveRight = () => {
    document.getElementsByClassName("container")[0].scrollLeft += 100;
  };
  const moveLeft = () => {
    document.getElementsByClassName("container")[0].scrollLeft -= 100;
  };
  return (
    <Scroll>
      <div className="arrow" onClick={() => moveLeft()}>
        <svg>
          <use xlinkHref={`svg/sprite.svg#arrow-1`} />
        </svg>
      </div>

      <div className="container">{props.children}</div>
      <div className="arrow" onClick={() => moveRight()}>
        <svg>
          <use xlinkHref={`svg/sprite.svg#chevron`} />
        </svg>
      </div>
    </Scroll>
  );
};

export default Scroller;
