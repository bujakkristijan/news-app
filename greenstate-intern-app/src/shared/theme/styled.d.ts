import 'styled-components';
import { Theme } from './ThemeTypeProps';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
  }
}