import styled from "@emotion/styled";

export const Title = styled.h1`
  color: #222222;
  display: inline-block;
  background-color: rgb(248, 242, 199);
  padding: 10px 50px;
  position: relative;
  margin-bottom: 20px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-top: 20px solid rgba(159, 153, 117, 1);
    border-right: 20px solid transparent;
    opacity: 1;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 0;
    border-bottom: 20px solid rgba(159, 153, 117, 1);
    border-left: 20px solid transparent;
    opacity: 1;
  }
`;
