import { useCreation } from 'ahooks';
import { ButtonHTMLAttributes } from 'react';
import { cl, cls, clx, tw, tw1 } from '../..';

type IVariant = 'outline' | 'ghost' | 'disabled' | 'primary';
type IType = 'primary' | 'warning' | 'success' | 'error' | 'dark';

export type IButton = {
  /**
   * container clx
   */
  ngClass?: string;
  variant?: IVariant;
  title?: string;
  color?: IType;
} & Omit<ButtonHTMLAttributes<any>, 'color'>;

const Button = (props: IButton) => {
  const {
    className,
    variant = 'primary',
    title = 'button',
    color = 'primary',
    children,
    ...rest
  } = props;

  /**
   * renderBtnClx base on variant
   */
  const renderVariant = useCreation(() => {
    //------- primaryColor ----------
    const primaryColor = tw({
      primary: 'bg-blue-700 hover:bg-blue-800  focus:ring-blue-300',
      dark: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-300',
      success: 'bg-green-700 hover:bg-green-800 focus:ring-green-300',
    } as Record<IButton['color'], string>);

    //------- outlineColor ----------
    const outlineBase = cls(
      primaryColor[color],
      'text-blue-700 hover:text-white border border-blue-700 bg-transparent',
    );
    const outlineColor = tw1({
      primary: outlineBase,
      dark: cl(outlineBase, 'border-gray-900 hover:bg-gray-900 text-gray-900'),
    } as Record<IButton['color'], string>);

    /**
     * render variantType
     */
    const variantType = {
      primary: primaryColor[color],
      outline: outlineColor[color],
    } as Record<IButton['variant'], string>;

    return variantType?.[variant];
  }, []);

  return (
    <button
      type="button"
      {...rest}
      className={clx(
        'text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
        renderVariant,
        className,
      )}
    >
      {children || title}
    </button>
  );
};

export default Button;
