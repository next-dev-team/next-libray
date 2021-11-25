import { HeartOutlined } from '@ant-design/icons';
import { useReactive, useToggle } from 'ahooks';
import { Button, Space } from 'antd';
import { range } from 'lodash';
import { Item as MenuItem } from 'rc-menu';
import { Drawer } from '.';
import { Menus } from '..';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const [modal1, { toggle: toggle1 }] = useToggle(false);
  const state = useReactive({ openKeys: ['0'], selectedKeys: ['0'] });

  const data = [
    {
      title: 'Simple Modal',
      component: (
        <Space direction="vertical">
          <Button onClick={toggle1} type="primary">
            Open Simple Drawer
          </Button>
        </Space>
      ),
    },
  ];
  const renderMenu = (
    <Menus
      mode={modal1 ? 'inline' : 'horizontal'}
      onOpenChange={(openKeys) => {
        state.openKeys = openKeys;
      }}
      onSelect={({ selectedKeys }) => {
        state.selectedKeys = selectedKeys;
      }}
      openKeys={state.openKeys}
      selectedKeys={state.selectedKeys}
    >
      {range(5).map((_, i) => {
        return (
          <MenuItem key={i} className="w-40">
            <div className="flex items-center justify-center">
              <HeartOutlined className="mr-3" /> Item {i}
            </div>
          </MenuItem>
        );
      })}
    </Menus>
  );
  return (
    <>
      <DemoLayout data={data} />
      <Drawer open={modal1} onClose={toggle1} onHandleClick={toggle1}>
        {renderMenu}
      </Drawer>
      {!modal1 && renderMenu}
    </>
  );
};
