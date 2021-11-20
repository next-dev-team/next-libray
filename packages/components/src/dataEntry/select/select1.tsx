import { CloseCircleFilled, DownOutlined } from '@ant-design/icons';
import Select, { SelectProps } from 'rc-select';
import { clx } from '../../utils';
import './select.css';

type ITheme = 'warning' | 'success' | 'error' | 'default';

export type ISelect = SelectProps & { theme?: ITheme };

const Select1 = (props: ISelect) => {
  const { className, theme = 'default' } = props;

  return (
    <div className={clx('w-full', theme, className)}>
      <Select
        placeholder="Please Select"
        inputIcon={<DownOutlined />}
        clearIcon={<CloseCircleFilled />}
        {...props}
      />
    </div>
  );
};

export default Select1;