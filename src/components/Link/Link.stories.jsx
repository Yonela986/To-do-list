import Global from '../Global/Global';
import Link from './Link';

const config = {
    title: 'components/Link'
}

export default config;

const Default = () =><Global> <Link url="/test">Click Me!</Link></Global>;

const Full = () => <Global><Link url="/test" fullWidth>Click Me!</Link></Global>;

const Disabled = () => <Global><Link disabled url="/test">Click Me!</Link></Global>;

export {
    Default, Full, Disabled
}