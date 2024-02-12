import { Puff } from "react-loader-spinner";
import { StyledSpinnerWrapper } from "./LoadingSpinner.styles";

export const LoadingSpinner = () => {
  return (
    <StyledSpinnerWrapper>
      <Puff
        visible={true}
        height="64"
        width="64"
        color="#3381ff"
        ariaLabel="puff-loading"
      />
    </StyledSpinnerWrapper>
  );
};
