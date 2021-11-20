import { FormProps, FormProvider } from 'rc-field-form';
import { ValidateMessages } from 'rc-field-form/es/interface';
import { ReactNode } from 'react';

export type IRcFormProvider = FormProps & {
  /**
   * container clx
   */
  className?: string;
  children: ReactNode;
  isDebug?: boolean;
};

const defaultMessages: ValidateMessages = {
  required: '${name} is required!',
};

const RcProvider = (props: IRcFormProvider) => {
  const { isDebug, children } = props;

  return (
    <FormProvider
      validateMessages={defaultMessages}
      onFormChange={(name, { changedFields, forms }) => {
        if (isDebug) {
          console.log('change from:', name, changedFields, forms);
        }
      }}
      {...props}
    >
      {children}
    </FormProvider>
  );
};

export default Object.assign(RcProvider, {});
