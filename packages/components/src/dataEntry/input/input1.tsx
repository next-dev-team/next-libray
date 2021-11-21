import { HTMLInputTypeAttribute } from 'react';
import { clx } from '../../utils';

type IVarious = 'warning' | 'success' | 'error' | 'default';

export type IInput = {
  /**
   * container clx
   */
  className?: string;
  various?: IVarious;
  label?: string;
  name?: string;
  errText?: string;
  requiredSign?: boolean;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

const Input = (props: IInput) => {
  const { various = 'default', name, inputProps, className, placeholder, type = 'text' } = props;

  const renderInput = () => {
    const placements: Partial<Record<IInput['various'], string>> = {
      default: 'border-gray-300  focus:ring-gray-200',
      success: 'border-green-500 text-green-600 placeholder-green-600 focus:ring-green-200',
      warning: 'border-yellow-500 text-yellow-600 placeholder-yellow-600 focus:ring-yellow-200',
      error: 'border-red-500 text-red-600 placeholder-red-600 focus:ring-red-200',
    };
    return placements?.[various];
  };

  return (
    <div className={clx('flex flex-col w-full mb-4', className)}>
      <input
        {...{
          type,
          id: name,
          name,
          placeholder,
          ...inputProps,
          className: clx(
            'px-4 py-2 rounded-lg border focus:outline-none focus:ring-2',
            renderInput(),
          ),
        }}
      />
    </div>
  );
};

export default Input;
