import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  background-color: #00d8ff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 56px;
  justify-content: center;
  text-align: center;
  z-index: 3;
`;

export const Title = styled.h1`
  color: #282a37;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 440px) {
    font-size: 24px;
  }
`;

export const ButtonToggleSidebar = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: 48px;
  left: 4px;
  margin: 0;
  padding: 12px;
  position: absolute;
  top: 4px;
  width: 48px;

  svg {
    height: 24px;
    width: 24px;
  }
`;
