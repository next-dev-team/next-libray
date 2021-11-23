import { DownCircleFilled, UpCircleFilled } from '@ant-design/icons';
import RcCollapse, { Panel } from 'rc-collapse';
import { CollapseProps } from 'rc-collapse/es/interface';
import { ReactNode } from 'react';
import { collapseMotion, twColors } from '../..';

export { Panel };

export type ICollapse = CollapseProps & {
  children: ReactNode;
};

const Collapse = (props: ICollapse) => {
  const { children, ...rest } = props;

  return (
    <RcCollapse
      expandIcon={(param: any) => {
        return (
          <div className="mr-3">
            {param?.isActive ? (
              <UpCircleFilled style={{ fontSize: 20, color: twColors.blue['400'] }} />
            ) : (
              <DownCircleFilled style={{ fontSize: 20, color: twColors.blue['400'] }} />
            )}
          </div>
        );
      }}
      openMotion={collapseMotion}
      {...rest}
    >
      {children}
    </RcCollapse>
  );
};

export default Collapse;
