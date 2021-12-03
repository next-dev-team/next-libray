import InputNumber, { InputNumberProps } from 'rc-input-number';
import { clx, tw } from '../../utils';

type ITheme = 'warning' | 'success' | 'error' | 'default';

export type IInput = {
  /**
   * container clx
   */
  className?: string;
  theme?: ITheme;
  label?: string;
  name?: string;
  errText?: string;
  requiredSign?: boolean;
  placeholder?: string;
  type?: InputNumberProps['type'];
} & InputNumberProps &
  React.HTMLProps<HTMLInputElement>;

const Input = (props: IInput) => {
  const {
    theme = 'default',
    name,
    className,
    placeholder = 'Please Enter',
    type = 'text',
    ...rest
  } = props;

  const renderInput = () => {
    const placements: Partial<Record<IInput['theme'], string>> = tw({
      default: 'border-gray-300  focus:ring-gray-200',
      success: 'border-green-500 text-green-600 placeholder-green-600 focus:ring-green-200',
      warning: 'border-yellow-500 text-yellow-600 placeholder-yellow-600 focus:ring-yellow-200',
      error: 'border-red-500 text-red-600 placeholder-red-600 focus:ring-red-200',
    });
    return placements?.[theme];
  };

  if (type !== 'number') {
    return (
      <input
        {...{
          type,
          id: name,
          name,
          placeholder,
          className: clx(
            'px-4 py-2 rounded-lg border focus:outline-none focus:ring-2',
            renderInput(),
            className,
          ),
          ...rest,
        }}
      />
    );
  }
  return (
    // @ts-ignore
    <InputNumber
      {...{
        type,
        id: name,
        name,
        placeholder,
        className: clx(
          'px-4 py-2 rounded-lg border focus:outline-none focus:ring-2',
          renderInput(),
          className,
        ),
        ...rest,
      }}
    />
  );
};

export default Input;
