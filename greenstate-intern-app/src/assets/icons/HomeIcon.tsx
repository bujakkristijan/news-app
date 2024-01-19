import { IconProps } from '../../components/icon/icon-prop/iconProps';
import defaultTheme from '../../shared/theme/theme';

export const HomeIcon = ({ color } :IconProps) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2999 21.6L9.2999 14.2964C9.2999 13.6241 9.87298 13.0791 10.5799 13.0791H14.4199C15.1268 13.0791 15.6999 13.6241 15.6999 14.2964L15.6999 21.6M11.7581 2.62527L3.43811 8.25179C3.10045 8.48014 2.8999 8.84979 2.8999 9.24381L2.8999 19.7741C2.8999 20.7825 3.75952 21.6 4.8199 21.6L20.1799 21.6C21.2403 21.6 22.0999 20.7825 22.0999 19.7741L22.0999 9.24381C22.0999 8.84979 21.8994 8.48014 21.5617 8.25179L13.2417 2.62527C12.7976 2.32494 12.2022 2.32494 11.7581 2.62527Z" stroke={defaultTheme.colors[color]} strokeWidth="2" strokeLinecap="round"/>
        </svg>

      );
}
