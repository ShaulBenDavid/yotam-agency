import resolveConfig from 'tailwindcss/resolveConfig';
import myConfig from '../../tailwind.config';

const config = resolveConfig(myConfig);

const theme = config.theme.colors;

export default theme;
