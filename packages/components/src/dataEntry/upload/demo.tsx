//@ts-ignore
import { DragUpload, RcField, RcForm, useForm } from 'components-next';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

export default () => {
  const [form] = useForm();

  const data: IDemoLayout['data'] = [
    {
      title: 'Upload with Form',
      component: (
        <>
          <RcForm
            form={form}
            onFinish={(values) => {
              console.log('values', values);
            }}
          >
            <RcField name="test" rules={[{ required: true }]}>
              <DragUpload
                onSuccess={(res, file) => {
                  form.setFieldsValue({ test: file.name });
                }}
              />
            </RcField>
          </RcForm>
        </>
      ),
    },
    {
      title: 'Drag Upload or Browse',
      component: <DragUpload />,
    },
  ];

  return <DemoLayout data={data} />;
};
