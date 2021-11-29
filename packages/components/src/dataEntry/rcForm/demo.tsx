//@ts-ignore
import { Button, RcForm, useForm } from 'components-next';
import { RcField } from '../';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

export default () => {
  const [form] = useForm();
  const [form1] = useForm();
  const [formDynamic] = useForm();

  const data: IDemoLayout['data'] = [
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
    {
      title: 'Form With Dynamic Field',
      span: '24',
      component: (
        <RcForm
          form={formDynamic}
          onFinish={(values) => {
            alert(JSON.stringify(values));
          }}
        >
          <RcForm.List name="users" initialValue={[{}]}>
            {(fields, { add, remove }) => {
              console.log('Demo Fields:', fields);
              return (
                <div>
                  {fields.map((field, index) => (
                    <div className="relative">
                      <div className="grid  md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-2">
                        <RcField
                          {...field}
                          {...{
                            label: 'Package Type',
                            rules: [{ required: true }],
                          }}
                        />

                        <div className="absolute right-0 top-0">
                          {index > 0 && (
                            <Button
                              variant="outline"
                              className="px-2 py-px bg-red-400 text-white"
                              onClick={() => {
                                remove(index);
                              }}
                              title="X"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button
                    onClick={() => {
                      add();
                    }}
                    className="w-full"
                  >
                    New Field
                  </Button>
                </div>
              );
            }}
          </RcForm.List>
        </RcForm>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};
