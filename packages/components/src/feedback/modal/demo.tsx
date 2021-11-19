import { useToggle } from 'ahooks';
import { Button, Space } from 'antd';
import { Modal1, ModalUI1, Modal } from '../';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const [modal1, { toggle: toggle1 }] = useToggle(false);
  const [modal, { toggle }] = useToggle();

  const data = [
    {
      title: 'Simple Modal',
      component: (
        <Space direction="vertical">
          <Button onClick={toggle} type="primary">
            Simple Modal
          </Button>
        </Space>
      ),
    },
    {
      title: 'Delete Modal',
      component: (
        <Space direction="vertical">
          <ModalUI1 />
          <Button onClick={toggle1} type="primary">
            Delete Modal
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <DemoLayout data={data} />

      <Modal visible={modal} onClose={toggle} title="Title">
        <h1 className="text-red-600">Simple Modal</h1>
      </Modal>

      <Modal1 visible={modal1} onClose={toggle1} />
    </>
  );
};
