import { useReactive } from 'ahooks';
import { Space } from 'antd';
//@ts-ignore
import { ITextyMode, ITextyType, Select1, TextAnimate } from 'components-next';
import animTypes from 'rc-texty/es/animTypes';
import { DemoLayout } from '../../utils/layout';

const text = 'Welcome';

const Demo = () => {
  const state = useReactive({
    show: true,
    mode: 'smooth' as ITextyMode,
    type: 'left' as ITextyType,
  });

  const onClick = () => {
    state.show = !state.show;
  };

  const onChange = (v) => {
    state.type = v;
    onClick();
  };

  const onModeChange = (value) => {
    state.mode = value;
    onClick();
  };

  return (
    <DemoLayout>
      <TextAnimate type={state.type} mode={state.mode} className="text-4xl text-green-400">
        {state.show && text}
      </TextAnimate>

      <Space size="large" className="mt-10">
        type:
        <Select1
          onChange={onChange}
          options={Object.keys(animTypes).map((key) => {
            return { value: key };
          })}
        />
        mode:
        <Select1
          onChange={onModeChange}
          options={['smooth', 'reverse', 'random', 'sync'].map((key) => {
            return { value: key };
          })}
        />
      </Space>
    </DemoLayout>
  );
};

export default Demo;
