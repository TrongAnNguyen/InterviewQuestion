import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  position: relative;
`;

export const Card = styled.div`
  position: relative;
  padding: 40px;
  margin-bottom: 32px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0.4rem 0.8rem -0.1rem rgb(0 32 128 / 10%), 0 0 0 1px #f0f2f7;
  line-height: 1.8;
  font-size: 18px;
  overflow: hidden;
`;

export const Header = styled.div``;

export const QuestionBadge = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -7px;
  padding: 5px 10px;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: white;
  color: #8385aa;
  line-height: 1;
  border-top: 1px solid #e3e6f0;
  z-index: 1;
`;

export const QuestionTag = styled.div`
  position: absolute;
  top: 0;
  right: -65px;
  transform: rotate(45deg);
  width: 125px;
  height: 40px;
  color: white;
  background: black;

  &.is-html {
    background: linear-gradient(130deg, #f53d02, #ff7d55);
  }
  &.is-js {
    background: linear-gradient(130deg, #ffaf0e, #ffc089);
  }
  &.is-react {
    background: linear-gradient(130deg, #b721ff, #21d4fd);
  }
`;
