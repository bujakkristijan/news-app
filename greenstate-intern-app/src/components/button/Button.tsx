import { StyledButton } from "./Button.styles";
import {
  TypographyButtonSize,
  TypographyFontSize,
  TypographyLineHeight,
} from "../../shared/theme/theme";
import { Text } from "../text/Text";

type FontDetails = {
  fontSize: TypographyFontSize;
  lineHeight: TypographyLineHeight;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: TypographyButtonSize;
  isDisabled?: boolean;
  children: string;
  fill?: boolean;
};

const getFontDetails = (size: TypographyButtonSize): FontDetails => {
  switch (size) {
    case "sm":
      return { fontSize: "xSm", lineHeight: "sm" };
    case "md":
      return { fontSize: "sm", lineHeight: "md" };
    case "lg":
    case "xlg":
      return { fontSize: "md", lineHeight: "lg" };
    default:
      throw new Error(`Unsupported button size: ${size}`);
  }
};

export const Button = ({
  size = "sm",
  children,
  isDisabled = false,
  fill = false,
}: ButtonProps) => {
  const { fontSize, lineHeight } = getFontDetails(size);

  return (
    <StyledButton size={size} disabled={isDisabled} $fill={fill}>
      <Text
        fontSize={fontSize}
        fontWeight="extraBold"
        lineHeight={lineHeight}
        fontFamily="inter"
        color={isDisabled ? "darkGrey" : "white"}
      >
        {children}
      </Text>
    </StyledButton>
  );
};
