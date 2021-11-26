import { Button, Space } from 'antd';
import { notifications } from '../';
import { DemoLayout } from '../../utils/layout';

const Demo = () => {
  const data = [
    {
      title: 'notifications Info',
      component: (
        <Space>
          <Button
            onClick={() => {
              notifications.info({
                message: 'top right',
                description:
                  'Generates passages of lorem ipsum text suitable for use as placeholder copy in web pages, graphics, and more. Works in the browser, NodeJS, ..',
              });
            }}
          >
            topRight
          </Button>
          <Button
            onClick={() => {
              notifications.info({ message: 'topLeft', placement: 'topLeft' });
            }}
          >
            topLeft
          </Button>
          <Button
            onClick={() => {
              notifications.info({ message: 'bottomRight', placement: 'bottomRight' });
            }}
          >
            bottomRight
          </Button>
          <Button
            onClick={() => {
              notifications.info({ message: 'bottomLeft', placement: 'bottomLeft' });
            }}
          >
            bottomLeft
          </Button>
        </Space>
      ),
    },
    {
      title: 'notifications success',
      component: (
        <Space wrap>
          <Button
            onClick={() => {
              notifications.success({
                message: 'success topRight',
                description:
                  'Generates passages of lorem ipsum text suitable for use as placeholder copy in web pages, graphics, and more. Works in the browser, NodeJS, ..',
              });
            }}
          >
            success topRight
          </Button>
        </Space>
      ),
    },
  ];

  return <DemoLayout data={data} />;
};

export default Demo;
