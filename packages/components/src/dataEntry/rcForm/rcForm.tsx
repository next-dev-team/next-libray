import { omit } from 'lodash';
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
  const { className, children, hasSubmitBtn, form, ...rest } = props;

  return (
    <Form className={clx('w-full', className)} {...omit(rest, 'hasSubmitBtn')}>
      {children}

      {/* has submit button */}
      {hasSubmitBtn && form && (
        <div className="flex justify-end gap-2">
          <button type="button" onClick={() => form.resetFields()}>
            Clear
          </button>
          <button onClick={form.submit} type="button">
            Submit
          </button>
        </div>
      )}
    </Form>
  );
};

export default Object.assign(RcForm, {});
