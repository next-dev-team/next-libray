import { useCreation, useDebounceFn } from 'ahooks';
import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';
import { Meta } from 'rc-field-form/lib/interface';
import { HTMLInputTypeAttribute, ReactNode, useMemo, useState } from 'react';
import { Select1 } from '../';
import { clx } from '../../utils';
import { ISelect } from '../select/select1';

type ITheme = 'warning' | 'success' | 'error' | 'default';
type IVarious = 'input' | 'select';

export type IInput = {
  /**
   * container clx
   */
  className?: string;
  theme?: ITheme;
  various?: IVarious;
  label?: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  errText?: string;
  requiredSign?: boolean;
  placeholder?: string;
  children?: ReactNode;
  selectProps?: ISelect;
  /**
   * select option
   */
  options?: ISelect['options'];
  inputProps?: React.HTMLProps<HTMLInputElement>;
} & Omit<FieldProps, 'children'>;

const RcField = (props: IInput) => {
  const {
    theme = 'default',
    name,
    label,
    inputProps,
    various,
    requiredSign,
    className,
    errText,
    placeholder,
    children,
    selectProps,
    options,
    type = 'text',
    ...rest
  } = props;

  const [err, setErr] = useState<Meta['errors']>([]);
  const [formVal, setFormVal] = useState<string>('');

  const errorField = useMemo(() => {
    return err;
  }, [err]);

  const isErr = useMemo(() => {
    return err?.length > 0;
  }, [err]);

  const checkRule = useMemo(() => {
    //@ts-ignore
    return rest?.rules?.find?.((i) => i.required);
  }, [rest?.rules]);

  const isRequired = useMemo(() => {
    return err?.find((i) => i.includes('required'));
  }, [err]);

  const { run } = useDebounceFn(
    (error) => {
      setErr(error?.errors);
    },
    {
      wait: 100,
    },
  );

  const { run: setValue } = useDebounceFn(
    (v) => {
      setFormVal(v);
    },
    {
      wait: 100,
    },
  );

  const renderDfPlaceHolder = () => {
    const checkType = various === 'input' ? 'Enter' : 'Select';
    return `${checkType} ${props.name}`;
  };
  const renderTheme = isRequired || isErr ? 'error' : formVal ? 'success' : theme;

  const renderInput = useCreation(() => {
    const placements: Partial<Record<IInput['theme'], string>> = {
      default: 'border-gray-300  focus:ring-gray-200',
      success: 'border-green-500 text-green-600 placeholder-green-600 focus:ring-green-200',
      warning: 'border-yellow-500 text-yellow-600 placeholder-yellow-600 focus:ring-yellow-200',
      error: 'border-red-500 text-red-600 placeholder-red-600 focus:ring-red-200',
    };
    return placements?.[renderTheme];
  }, [isRequired, isErr, formVal, theme, renderTheme]);

  /**
   * renderVarious
   */
  const renderVarious = (): any => {
    const placements: Partial<Record<IInput['various'], ReactNode>> = {
      input: (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder || renderDfPlaceHolder()}
          {...inputProps}
          className={clx(
            'px-4 py-2 rounded-lg border focus:outline-none focus:ring-2',
            renderInput,
          )}
        />
      ),
      select: (
        <Select1
          {...{
            theme: renderTheme,
            options,
            ...selectProps,
          }}
        />
      ),
    };
    return children || placements[various];
  };

  return (
    <div className={clx('flex flex-col w-full mb-4', className)}>
      {(label || name) && (
        <label htmlFor={name} className="text-gray-700 select-none font-medium mb-3 capitalize">
          {(requiredSign || checkRule) && (
            <sup className="text-red-500 text-sm relative top-0 mr-1">*</sup>
          )}
          {label || name}
        </label>
      )}
      <Field
        name={name}
        onMetaChange={(error) => {
          run(error);
        }}
        //@ts-ignore
        getValueProps={(v) => {
          setValue(v);
        }}
        {...rest}
      >
        {renderVarious()}
      </Field>

      {(errText || isErr) && (
        <p className="text-red-500 text-sm relative top-2 ">
          {errText ||
            errorField.map((er) => {
              return er;
            })}
        </p>
      )}
    </div>
  );
};

export default Object.assign(RcField, {});
