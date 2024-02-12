import { ReactNode } from "react";
import { LoadingSpinner } from "../../components/loading-spinner/LoadingSpinner";
import { StyledErrorFetchWrapper } from "./PageStateContainer.styles";
import { DataStatus } from "../data-status/DataStatus";
import { ErrorFetchIcon } from "../../assets/icons/ErrorFetchIcon";
import { routes } from "../../router/routes";
import { useNavigate } from "react-router-dom";

type PageStateContainerProps = {
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
};

export const PageStateContainer = ({
  isLoading,
  isError,
  children,
}: PageStateContainerProps) => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate(routes.root);
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <StyledErrorFetchWrapper>
        <DataStatus
          icon={ErrorFetchIcon}
          onClick={handleGoBackClick}
          title="Something went wrong!"
          description="An error occurred while attempting to retrieve data from the server."
        />
      </StyledErrorFetchWrapper>
    );
  return <>{children}</>;
};
