//@ts-ignore
import { DragUpload, RcField, RcForm, useForm } from 'components-next';
import { useState } from 'react';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

const UploadDemo = () => {
  const [form] = useForm();
  const [upload, setUpload] = useState('');

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
            <RcField name="test">
              <DragUpload
                onSuccess={(res, file) => {
                  setUpload(file.name);
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

export default UploadDemo;
