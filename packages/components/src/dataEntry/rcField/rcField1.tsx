import { Field } from 'rc-field-form';
import { FieldProps } from 'rc-field-form/lib/Field';
import { cloneElement, HTMLInputTypeAttribute, ReactElement, ReactNode } from 'react';
import { IInput, Input } from '..';
import { clx, TextArea } from '../..';
import { Select1 } from '../select';
import { ISelect } from '../select/select1';
import { Switch } from '../switch';
import { SwitchProps } from '../switch/switch';
import { ITextArea } from '../textArea/textArea';

type IVarious = 'input' | 'select' | 'textArea' | 'switch';

export type IField = {
  /**
   * container clx
   */
  className?: string;
  various?: IVarious;
  label?: string;
  themeColor?: IInput['theme'];
  name?: any;
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
  switchProps?: SwitchProps;
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
    type,
    themeColor = 'default',
    switchProps,
    ...rest
  } = props;

  /**
   * isListField will remove init
   * for select init undefined to show placeholder
   */
  const initField = {
    initialValue: various === 'select' ? undefined : '',
  };
  const newName = inputProps?.name || name;

  return (
    <Field name={newName} {...initField} {...rest}>
      {(control, meta, form) => {
        const isErr = meta?.errors.length > 0;
        const isSuccess = (!isErr && control?.value) || typeof control?.value === 'number';
        //@ts-ignore
        const checkRule = props?.rules?.find?.((i) => i?.required);
        const renderTheme = isErr ? 'error' : isSuccess ? 'success' : themeColor;

        /**
         * renderVarious
         */
        const renderVarious = () => {
          const placements: Partial<Record<IField['various'], ReactNode>> = {
            input: (
              //@ts-ignore
              <Input
                {...{
                  id: name,
                  type,
                  theme: renderTheme,
                  ...inputProps,
                }}
              />
            ),
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
            textArea: (
              <TextArea
                {...{
                  id: name,
                  placeholder,
                  name,
                  ...textAreaProps,
                }}
              />
            ),
            switch: (
              <Switch
                {...{
                  id: name,
                  ...switchProps,
                }}
              />
            ),
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

export default RcField;
