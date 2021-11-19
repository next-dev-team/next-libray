import 'rc-notification/assets/index.css';
import { clx, _isEmpty } from '../../utils';
import { Field } from 'rc-field-form';
import { Meta } from 'rc-field-form/lib/interface';
import { FieldProps } from 'rc-field-form/lib/Field';
import { useDebounceFn } from 'ahooks';
import { useMemo, useState } from 'react';

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
} & FieldProps;

const RcField = (props: IInput) => {
  const {
    various = 'default',
    name,
    label,
    inputProps,
    requiredSign,
    className,
    errText,
    placeholder,
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
      wait: 200,
    },
  );

  const { run: setValue } = useDebounceFn(
    (v) => {
      setFormVal(v);
    },
    {
      wait: 200,
    },
  );

  const renderInput = () => {
    const placements: Partial<Record<IInput['various'], string>> = {
      default: 'border-gray-300  focus:ring-gray-200',
      success: 'border-green-500 text-green-600 placeholder-green-600 focus:ring-green-200',
      warning: 'border-yellow-500 text-yellow-600 placeholder-yellow-600 focus:ring-yellow-200',
      error: 'border-red-500 text-red-600 placeholder-red-600 focus:ring-red-200',
    };
    return placements?.[isRequired && isErr ? 'error' : _isEmpty(formVal) ? various : 'success'];
  };

  return (
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
      <div className={clx('flex flex-col w-full mb-4', className)}>
        {label && (
          <label htmlFor={name} className="text-gray-700 select-none font-medium mb-3 capitalize">
            {(requiredSign || checkRule) && (
              <sup className="text-red-500 text-sm relative top-0 mr-1">*</sup>
            )}
            {label}
          </label>
        )}

        <input
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          {...inputProps}
          className={clx(
            'px-4 py-2 rounded-lg border focus:outline-none focus:ring-2',
            renderInput(),
          )}
        />

        {(errText || isErr) && (
          <p className="text-red-500 text-sm relative top-2 ">
            {errText ||
              errorField.map((er) => {
                return er;
              })}
          </p>
        )}
      </div>
    </Field>
  );
};

export default Object.assign(RcField, {});
