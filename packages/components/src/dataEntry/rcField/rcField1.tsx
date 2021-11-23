import { isArray } from 'lodash';
import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';
import React, { HTMLInputTypeAttribute, ReactNode } from 'react';
import { clx } from '../..';
import Select1, { ISelect } from '../select/select1';

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
  selectProps?: ISelect;
  /**
   * select option
   */
  options?: ISelect['options'];
  inputProps?: React.HTMLProps<HTMLInputElement>;
} & FieldProps;

const RcField = (props: IInput) => {
  const {
    theme = 'default',
    name = '',
    label,
    inputProps,
    various = 'input',
    requiredSign,
    className,
    errText,
    children,
    selectProps,
    options,
    type = 'text',
    ...rest
  } = props;

  const checkType = various === 'input' ? 'Enter' : 'Select';
  const placeholder = props.placeholder || `${checkType} ${name}`;

  return (
    <Field name={name} initialValue={isArray(name) ? {} : ''} {...rest}>
      {(control, meta, form) => {
        // console.log('control', control, meta);
        const isErr = meta?.errors.length > 0;
        const isSuccess = !isErr && control?.value;
        //@ts-ignore
        const checkRule = props?.rules?.find?.((i) => i.required);
        const renderTheme = isErr ? 'error' : isSuccess ? 'success' : theme;

        const renderInput = () => {
          const placements: Partial<Record<IInput['theme'], string>> = {
            default: 'border-gray-300  focus:ring-gray-200',
            success: 'border-green-500 text-green-600 placeholder-green-600 focus:ring-green-200',
            warning:
              'border-yellow-500 text-yellow-600 placeholder-yellow-600 focus:ring-yellow-200',
            error: 'border-red-500 text-red-600 placeholder-red-600 focus:ring-red-200',
          };
          return placements?.[renderTheme];
        };

        /**
         * renderVarious
         */
        const renderVarious = () => {
          const placements: Partial<Record<IInput['various'], ReactNode>> = {
            input: (
              <input
                {...{
                  placeholder,
                  type,
                  id: name,
                  name,
                  ...inputProps,
                  className: clx(
                    'px-4 py-2 rounded-lg border focus:outline-none focus:ring-2',
                    renderInput(),
                  ),
                }}
              />
            ),
            select: (
              <Select1
                {...{
                  id: name,
                  placeholder,
                  theme: renderTheme,
                  options,

                  ...selectProps,
                }}
              />
            ),
          };
          return placements[various];
        };

        const childNode =
          children && typeof children === 'function'
            ? children(control, meta, form)
            : React.cloneElement(renderVarious() as React.ReactElement, {
                ...control,
              });

        return (
          <div className={clx('flex flex-col w-full mb-4', className)}>
            {(label || name) && (
              <label
                htmlFor={name}
                className="text-gray-700 select-none font-medium mb-3 capitalize"
              >
                {(requiredSign || checkRule) && (
                  <sup className="text-red-500 text-sm relative top-0 mr-1">*</sup>
                )}
                {label || name}
              </label>
            )}

            {childNode}

            {(errText || isErr) && (
              <p className="text-red-500 text-sm relative top-2 ">
                {errText ||
                  meta?.errors?.map?.((er) => {
                    return er;
                  })}
              </p>
            )}
          </div>
        );
      }}
    </Field>
  );
};

export default Object.assign(RcField, {});
