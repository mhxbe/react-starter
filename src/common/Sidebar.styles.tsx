import styled from '@emotion/styled';

interface AsideProps {
  readonly showSidebar: boolean;
}
export const Aside = styled.div<AsideProps>`
  background: white;
  height: 100%;
  left: 0;
  overflow-y: auto;
  padding: 12px;
  position: absolute;
  top: 0;
  transform: translateX(
    ${({ showSidebar }) => (showSidebar ? '0px' : '-300px')}
  );
  transition: 0.25s ease-in-out;
  width: 300px;
  z-index: 2;
`;

interface OverlayProps {
  readonly showSidebar: boolean;
}
export const Overlay = styled.div<OverlayProps>`
  background: black;
  height: 100%;
  left: 0;
  opacity: ${({ showSidebar }) => (showSidebar ? '0.5' : '0')};
  position: absolute;
  top: 0;
  transition: 0.25s ease-in-out;
  width: 100%;
  z-index: 1;
`;

export const ButtonClose = styled.button`
  background-color: lightgrey;
  border: 0;
  cursor: pointer;
  height: 48px;
  margin: 0;
  padding: 12px;
  position: absolute;
  right: 0;
  top: 0;
  width: 48px;

  svg {
    height: 24px;
    width: 24px;
  }
`;
