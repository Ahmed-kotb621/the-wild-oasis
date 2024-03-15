import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const StyledPage = styled.div`
  height: 100vh;
  display: flex;
  background-color: var(--color-grey-50);
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. load user data
  const { isLoading, user, isAuthonicated } = useUser();

  // 2. if no authonicated , navigate login
  useEffect(
    function () {
      if (!isAuthonicated && !isLoading) navigate("/login");
    },
    [isAuthonicated, isLoading, user]
  );

  // 3. loading spinner
  if (isLoading)
    return (
      <StyledPage>
        <Spinner />;
      </StyledPage>
    );
  // 4. if user exist
  if (isAuthonicated) return children;
}

export default ProtectedRoute;
