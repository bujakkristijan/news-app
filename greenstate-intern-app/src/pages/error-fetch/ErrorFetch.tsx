import { DataStatus } from "../../components/data-status/DataStatus";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { ErrorFetchIcon } from "../../assets/icons/ErrorFetchIcon";
import { StyledErrorFetchWrapper } from "./ErrorFetch.styles";

export const ErrorFetch = () => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate(routes.root);
  };

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
};
