import { DataStatus } from "../../components/data-status/DataStatus";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { ErrorFetchIcon } from "../../assets/icons/ErrorFetchIcon";
import { NotFoundWrapper } from "../not-found/NotFound.styles";

export const ErrorFetch = () => {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate(routes.root);
  };

  return (
    <NotFoundWrapper>
      <DataStatus
        icon={ErrorFetchIcon}
        onClick={goBackToHome}
        title="Something went wrong!"
        description="An error occurred while attempting to retrieve data from the server."
      />
    </NotFoundWrapper>
  );
};
