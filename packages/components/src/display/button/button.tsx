import { omit } from 'lodash';
import { ButtonHTMLAttributes } from 'react';
import { cl, cls, clx, tw, tw1 } from '../../utils';

type IVariant = 'outline' | 'ghost' | 'disabled' | 'primary';
type IType = 'primary' | 'warning' | 'success' | 'error' | 'dark' | 'light';

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
  const renderVariant = () => {
    //------- primaryColor ----------
    const primaryColor = tw({
      primary: 'bg-blue-500 hover:bg-blue-600  focus:ring-blue-200',
      dark: 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-300',
      success: 'bg-green-500 hover:bg-green-600 focus:ring-green-200',
    } as Record<IButton['color'], string>);

    //------- outlineColor ----------
    const outlineBase = cls(
      primaryColor[color],
      'text-blue-500 hover:text-white border border-blue-500 bg-transparent',
    );
    const outlineColor = tw1({
      light:
        'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300',
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
  };

  return (
    <button
      type="button"
      {...omit(rest, 'variant', 'color')}
      className={clx(
        'text-white focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center',
        renderVariant(),
        className,
      )}
    >
      {children || title}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
