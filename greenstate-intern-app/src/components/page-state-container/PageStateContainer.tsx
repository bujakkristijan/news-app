import { ReactNode } from "react";
import { LoadingSpinner } from "../../components/loading-spinner/LoadingSpinner";
import { StyledPageStateContainer } from "./PageStateContainer.styles";
import { DataStatus } from "../data-status/DataStatus";
import { ErrorFetchIcon } from "../../assets/icons/ErrorFetchIcon";

type PageStateContainerProps = {
  isLoading: boolean;
  isError: boolean;
  children: ReactNode;
  onClick: () => void;
  title: string;
  description: string;
};

export const PageStateContainer = ({
  isLoading,
  isError,
  children,
  onClick,
  title,
  description,
}: PageStateContainerProps) => {
  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <StyledPageStateContainer>
        <DataStatus
          icon={ErrorFetchIcon}
          onClick={onClick}
          title={title}
          description={description}
        />
      </StyledPageStateContainer>
    );
  return <>{children}</>;
};
