import { useToggle } from 'ahooks';
import { useState } from 'react';
import { DemoLayout } from '../../utils/layout';
export default () => {
  const [modal1, { toggle: toggle1 }] = useToggle(false);
  const [openKeys, setOpenKey] = useState([]);

  const data = [
    {
      title: 'Simple Modal',
      component: null,
    },
  ];

  return (
    <>
      <DemoLayout data={data} />
    </>
  );
};
