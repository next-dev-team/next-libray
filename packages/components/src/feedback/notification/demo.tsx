import { Button, Space } from 'antd';
import { notifications } from 'components-next';
import { DemoLayout } from '../../utils/layout';

const Demo = () => {
  const data = [
    {
      title: 'ecommerce card4',
      component: (
        <Space>
          <Button
            onClick={() => {
              notifications();
            }}
          >
            topRight
          </Button>
          <Button
            onClick={() => {
              notifications({ placement: 'topLeft' });
            }}
          >
            topLeft
          </Button>
          <Button
            onClick={() => {
              notifications({ placement: 'center' });
            }}
          >
            Center
          </Button>
          <Button
            onClick={() => {
              notifications({ placement: 'bottomLeft' });
            }}
          >
            bottomLeft
          </Button>
          <Button
            onClick={() => {
              notifications({ placement: 'bottomRight' });
            }}
          >
            bottomRight
          </Button>
        </Space>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};

export default Demo;
