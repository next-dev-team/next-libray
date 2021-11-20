import { Select1 } from '..';
import { DemoLayout } from '../../utils/layout';

export default () => {
  const selData = [
    {
      value: 1,
    },
    {
      value: 2,
    },
  ];

  const data = [
    {
      title: 'Select1',
      component: <Select1 className="w-2/4" options={selData} />,
    },
    {
      title: 'Select1 with  clear',
      component: <Select1 className="w-2/4" options={selData} allowClear />,
    },
    {
      title: 'Select1 with search',
      component: <Select1 className="w-2/4" options={selData} showSearch />,
    },
  ];

  return <DemoLayout data={data} />;
};
