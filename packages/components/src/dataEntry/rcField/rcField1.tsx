import { isArray } from 'lodash';
import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';
import { cloneElement, HTMLInputTypeAttribute, ReactElement, ReactNode } from 'react';
import { IInput, Input } from '..';
import { clx, TextArea } from '../..';
import { Select1 } from '../select';
import { ISelect } from '../select/select1';
import { ITextArea } from '../textArea/textArea';

type IVarious = 'input' | 'select' | 'textArea';

export type IField = {
  /**
   * container clx
   */
  className?: string;
  various?: IVarious;
  label?: string;
  themeColor?: IInput['theme'];
  name: string;
  type?: HTMLInputTypeAttribute;
  errText?: string;
  requiredSign?: boolean;
  placeholder?: string;
  selectProps?: ISelect;
  textAreaProps?: ITextArea;
  /**
   * select option
   */
  options?: ISelect['options'];
  inputProps?: React.HTMLProps<HTMLInputElement>;
} & FieldProps;

const RcField = (props: IField) => {
  const {
    name = '',
    label,
    inputProps,
    various = 'input',
    requiredSign,
    className,
    errText,
    children,
    selectProps,
    textAreaProps,
    options,
    placeholder,
    themeColor = 'default',
    ...rest
  } = props;

  // const checkType = various === 'input' ? 'Please Enter' : 'Please Select';

  return (
    <Field
      name={name}
      initialValue={isArray(name) ? {} : various === 'select' ? undefined : ''}
      {...rest}
    >
      {(control, meta, form) => {
        // console.log('control', control, meta);
        const isErr = meta?.errors.length > 0;
        const isSuccess = !isErr && control?.value;
        //@ts-ignore
        const checkRule = props?.rules?.find?.((i) => i.required);
        const renderTheme = isErr ? 'error' : isSuccess ? 'success' : themeColor;

        /**
         * renderVarious
         */
        const renderVarious = () => {
          const placements: Partial<Record<IField['various'], ReactNode>> = {
            input: <Input {...{ name, theme: renderTheme }} />,
            select: (
              <Select1
                {...{
                  id: name,
                  theme: renderTheme,
                  options,
                  ...selectProps,
                }}
              />
            ),
            textArea: <TextArea {...{ placeholder, name, ...textAreaProps }} />,
          };
          return placements[various];
        };

        const childNode =
          typeof children === 'function'
            ? children(control, meta, form)
            : cloneElement(children || (renderVarious() as ReactElement), {
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
