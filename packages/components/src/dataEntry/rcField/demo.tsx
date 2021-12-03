import { RcField, RcForm } from '../';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const data = [
    {
      title: 'Input validation',
      component: (
        <>
          <RcForm
            className="w-full"
            onFinish={(values) => {
              // alert(JSON.stringify(values));
              console.log('values', values);
            }}
          >
            <div>
              <div>
                <RcField
                  type="text"
                  label="Username"
                  name="username"
                  rules={[{ required: true }]}
                />
                <RcField
                  type="number"
                  label="Username"
                  name="username1"
                  rules={[{ required: true }]}
                />
              </div>
            </div>
          </RcForm>
        </>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};
