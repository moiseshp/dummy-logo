import styled from 'styled-components';
import MenuItem from './MenuItem';

const StyledBrandItem = styled(MenuItem)`
  border-bottom: ${({ theme }) => `${theme.helpers.getRem(1)} solid ${theme.pallete.lightGray}`};
`;

const BrandItem = ({ children }) => {
  return <StyledBrandItem color="primary">{children}</StyledBrandItem>;
};

export default BrandItem;
