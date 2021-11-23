//@ts-ignore
import { Button, RcForm, useForm } from 'components-next';
import { RcField } from '../';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const [form] = useForm();
  const [form1] = useForm();

  const data = [
    {
      title: 'RcForm custom submit btn',
      component: (
        <RcForm
          form={form}
          hasSubmitBtn={false}
          onFinish={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          <RcField name="name" rules={[{ required: true }]} />
          <RcField
            various="select"
            name="test"
            rules={[{ required: true }]}
            options={[{ value: 1 }]}
          />
          <div className="flex justify-end gap-2">
            <Button onClick={() => form.resetFields()} variant="outline" color="dark">
              Reset
            </Button>
            <Button onClick={form.submit} color="dark">
              Submit
            </Button>
          </div>
        </RcForm>
      ),
    },
    {
      title: 'Form With default submit',
      component: (
        <RcForm
          form={form1}
          onFinish={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          <RcField name="name1" rules={[{ required: true }]} />
          <RcField
            various="select"
            name="test1"
            rules={[{ required: true }]}
            options={[{ value: 1 }]}
          />
        </RcForm>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};
