import { Space } from 'antd';
//@ts-ignore
import { Button } from 'components-next';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

const ButtonDemo = () => {
  const data: IDemoLayout['data'] = [
    {
      title: 'Button Primary',
      component: (
        <Space>
          <Button title="primary" />
          <Button title="dark" variant="primary" color="dark" />
          <Button title="success" variant="primary" color="success" />
        </Space>
      ),
      span: '12',
    },
    {
      title: 'Button Outline',
      component: (
        <Space>
          <Button title="light" variant="outline" color="light" />
          <Button title="Primary" variant="outline" />
          <Button title="dark" variant="outline" color="dark" />
        </Space>
      ),
      span: '12',
    },
  ];

  return <DemoLayout data={data} />;
};

export default ButtonDemo;
