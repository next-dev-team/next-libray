import 'rc-notification/assets/index.css';
import { clx } from '../../utils';

type IVarious = 'warning' | 'success' | 'error' | 'default';

export type IInput = {
  /**
   * container clx
   */
  className?: string;
  various?: IVarious;
  label?: string;
  name: string;
  errText?: string;
  requiredSign?: boolean;
  inputProps?: React.HTMLProps<HTMLInputElement>;
  placeholder?: string;
};

const Input = (props: IInput) => {
  const {
    various = 'default',
    name,
    label,
    inputProps,
    requiredSign,
    className,
    errText,
    placeholder,
  } = props;

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
      {label && (
        <label
          htmlFor={name || inputProps?.name}
          className="text-gray-700 select-none font-medium mb-3 capitalize"
        >
          {requiredSign && <sup className="text-red-500 text-sm relative top-0 mr-1">*</sup>}
          {label}
        </label>
      )}

      {/* --------------- input --------------- */}
      <input
        type="text"
        id={name}
        name={name || inputProps?.name}
        placeholder={placeholder}
        {...inputProps}
        className={clx(
          'px-4 py-2 rounded-lg border focus:outline-none focus:ring-2',
          renderInput(),
        )}
      />
      {errText && <p className="text-red-500 text-sm relative top-2 ">{errText}</p>}
    </div>
  );
};

export default Input;
