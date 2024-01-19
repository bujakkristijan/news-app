import { IconProps } from '../../components/icon/icon-prop/iconProps';
import defaultTheme from '../../shared/theme/theme';

export const NewPostIcon = ({ color } :IconProps) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V5C21.5 3.89543 20.6046 3 19.5 3Z" 
                stroke={defaultTheme.colors[color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.5 12H16.5M12.5 8V16" stroke={defaultTheme.colors[color]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
