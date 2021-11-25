//@ts-ignore
import { Collapse, Panel } from 'components-next';
import { range } from 'lodash';
import { DemoLayout, IDemoLayout } from '../../utils/layout';

const ButtonDemo = () => {
  const data: IDemoLayout['data'] = [
    {
      title: 'Collapse',
      component: (
        <Collapse accordion defaultActiveKey={0}>
          {range(5).map((i) => {
            return (
              <Panel header={`hello ${i + 1}`} panelKey={i} key={i}>
                this is panel content Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur cumque sed, delectus architecto voluptate amet ad magnam vel excepturi
                iste, molestiae dolores soluta laudantium animi. In voluptatibus sint temporibus
                eaque. {i}
              </Panel>
            );
          })}
        </Collapse>
      ),
      span: '12',
    },
  ];

  return <DemoLayout data={data} />;
};

export default ButtonDemo;
