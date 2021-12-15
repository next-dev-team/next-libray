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

  const com = [
    {
      folder: 'dataEntry',
      com: ['button/button', 'test'],
    },
  ];

  const customName = (libComName: string) => {
    let folder = ' ';
    let comName;
    let libCom;
    com?.map?.((i, k) => {
      folder = i.folder;
      comName = i.com.find((cm) => {
        // console.log('dd', cm === libComName || cm.includes(libComName));
        return cm === libComName || cm.includes(libComName);
      });
      libCom = comName ? folder + '/' + comName : '';
    });

    const name = libCom;

    const sign = name.lastIndexOf('-');
    const libName = name.substring(0, sign);
    const fullLibName = name.substring(sign + 1, name.length);
    const getLibNum = fullLibName.replace(/\D/g, '');
    const libFolder = fullLibName.substring(0, fullLibName.lastIndexOf(getLibNum));
    const customName = `components-next/lib/${libFolder}`;
    return customName;
  };

  return <DemoLayout data={data} />;
};

export default ButtonDemo;
