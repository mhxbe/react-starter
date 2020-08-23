import styled from '@emotion/styled';
import { BREAKPOINT_DESKTOP, HEADER_HEIGHT } from '../constants';

export const StyledHeader = styled.header`
  background-color: #00d8ff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: ${HEADER_HEIGHT}px;
  justify-content: center;
  left: 0;
  min-height: ${HEADER_HEIGHT}px;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 3;
`;

export const HeaderTitle = styled.span`
  color: #282a37;
  font-size: 1.25rem;
  font-weight: bold;

  @media (min-width: 440px) {
    font-size: 1.5rem;
  }
`;

export const ButtonToggleSidebar = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  height: 48px;
  left: 4px;
  line-height: 1;
  margin: 0;
  padding: 12px;
  position: absolute;
  top: 4px;
  width: 48px;

  @media (min-width: ${BREAKPOINT_DESKTOP}px) {
    display: none;
  }

  svg {
    height: 24px;
    width: 24px;
  }
`;
