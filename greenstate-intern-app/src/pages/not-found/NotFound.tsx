import { DataStatus } from "../../components/data-status/DataStatus";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { Error404Icon } from "../../assets/icons/Error404Icon";

export const NotFound = () => {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate(routes.root);
  };

  return (
    <DataStatus
      icon={Error404Icon}
      onClick={goBackToHome}
      title="Page not found"
      description="We apologize for the inconvenience, but it appears that the page you
        are attempting to access is currently unavailable. This might be due
        to a temporary technical issue or an outdated link."
    />
  );
};
