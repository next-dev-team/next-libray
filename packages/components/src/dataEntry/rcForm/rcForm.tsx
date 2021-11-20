import { Button } from 'antd';
import Form, { FormProps } from 'rc-field-form';
import { ReactNode } from 'react';
import { clx } from '../../';

export type IInput = FormProps & {
  /**
   * container clx
   */
  className?: string;
  children: ReactNode;
  hasSubmitBtn?: boolean;
};

const RcForm = (props: IInput) => {
  const { className, children, hasSubmitBtn = true, form } = props;

  return (
    <Form className={clx('w-full', className)} {...props}>
      {children}

      {/* has submit button */}
      {hasSubmitBtn && (
        <div className="flex justify-end gap-2">
          <Button onClick={() => form.resetFields()}>Clear</Button>
          <Button type="primary" onClick={form.submit}>
            Submit
          </Button>
        </div>
      )}
    </Form>
  );
};

export default Object.assign(RcForm, {});
