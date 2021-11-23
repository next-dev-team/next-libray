import RcDrawer from 'rc-drawer';
import { IDrawerProps } from 'rc-drawer/es/IDrawerPropTypes';
import { clx } from '../..';

export type IDrawer = IDrawerProps & {
  clxContent?: string;
};

const Drawer = (props: IDrawer) => {
  const { children, className, clxContent, ...rest } = props;
  return (
    <RcDrawer level={null} {...rest}>
      <div className={clx('w-72', clxContent)}>{children} </div>
    </RcDrawer>
  );
};

export default Drawer;
