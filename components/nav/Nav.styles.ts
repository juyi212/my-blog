import styled from '@emotion/styled';

export const NavContainer = styled.header`
  position: sticky;
  height: 5rem;
  background-color: rgb(255, 246, 230);
`;

export const NavInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 768px;
  margin: auto;
  height: 100%;
`;

export const NavCategory = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  font-size: 20px;
  font-weight: bold;
`;
