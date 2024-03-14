import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.6rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 0.6rem;
  justify-content: flex-end;
  align-items: center;
`;
function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
