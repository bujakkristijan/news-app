import { IStyledComponent } from "styled-components";
import { FastOmit } from "styled-components/dist/types";
import { HTMLAttributes } from "react";
import { DetailedHTMLProps } from "react";
export type ContainerType =
  | keyof JSX.IntrinsicElements
  | IStyledComponent<
      "web",
      FastOmit<
        DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
        never
      >
    >;
