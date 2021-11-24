import Form, { FormProps } from 'rc-field-form';
import { ReactNode } from 'react';
import { Button, clx } from '../../';

export type IInput = FormProps & {
  /**
   * container clx
   */
  className?: string;
  children: ReactNode;
  hasSubmitBtn?: boolean;
};

const RcForm = (props: IInput) => {
  const { className, children, hasSubmitBtn = true, form, ...rest } = props;

  return (
    <Form className={clx('w-full', className)} form={form} {...rest}>
      {children}
      {/* has submit button */}
      {hasSubmitBtn && form && (
        <div className="flex justify-end gap-2 mt-6">
          <Button onClick={() => form.resetFields()} variant="outline">
            Reset
          </Button>
          <Button onClick={form.submit}>Submit</Button>
        </div>
      )}
    </Form>
  );
};

export default RcForm;
