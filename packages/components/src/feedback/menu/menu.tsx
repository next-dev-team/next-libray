import RcMenu, { MenuProps } from 'rc-menu';

export type IMenu = MenuProps;

const Menus = (props: IMenu) => {
  const { children, ...rest } = props;
  return <RcMenu {...rest}>{children}</RcMenu>;
};

export default Menus;
