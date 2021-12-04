import { useMemoizedFn } from 'ahooks';
//@ts-ignore
import { FormInstance } from 'components-next';
import { isArray } from 'lodash';

const useFormUtil = (props: { children: any; form: FormInstance<any> }) => {
  const { children, form = {} as FormInstance } = props || {};

  /**
   * convert input="number" become number value
   */
  const onClickFormSubmit = useMemoizedFn(() => {
    if (typeof children === 'object' && children?.props?.type === 'number') {
      const fieldVal = form.getFieldValue(children?.props?.name);
      form.setFieldsValue({
        [children?.props?.name]: !!fieldVal ? Number(fieldVal) : '',
      });
    } else if (isArray(children)) {
      children.map((i) => {
        const fieldArrVal = form.getFieldValue(i?.props?.name);
        if (i?.props.type === 'number') {
          form.setFieldsValue({
            [i?.props.name]: !!fieldArrVal ? Number(fieldArrVal) : '',
          });
        }
      });
    }
    form.submit();
  });

  return {
    onClickFormSubmit,
  };
};
export default useFormUtil;
