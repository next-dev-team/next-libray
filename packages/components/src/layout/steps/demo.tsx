//@ts-nocheck
import { RcField } from 'components-next';
import { Steps } from '../';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

const LayoutDemo = () => {
  const stepsData = [
    {
      title: 'First',
      content: (
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <RcField label="Name" name="name" rules={[{ required: true }]} />
          <RcField
            various="select"
            name="gender"
            rules={[{ required: true }]}
            options={[{ value: 'MALE' }, { value: 'FEMALE' }]}
          />
          <RcField label="Address" name="address" />
          <RcField label="Email" name="email" rules={[{ required: true }, { type: 'email' }]} />
        </div>
      ),
    },
    {
      title: 'Second',
      content: (
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          <RcField label="Username2" name="username2" rules={[{ required: true }]} />
        </div>
      ),
    },
  ];
  const confirmContent = {
    title: 'Confirm',
    content: (
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        <h1>Are you sure to submit it?</h1>
      </div>
    ),
  };

  const data: IDemoLayout['data'] = [
    {
      title: 'Default',
      component: (
        <Steps
          {...{
            confirmContent,
            stepsData,
            resetAfterSubmit: true,
            onSubmitForm: async (v) => {
              console.log('v', v);
            },
          }}
        />
      ),
      span: '24',
    },
  ];

  return <DemoLayout data={data} />;
};

export default LayoutDemo;
