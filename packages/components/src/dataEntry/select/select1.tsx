import { CloseCircleFilled, DownOutlined } from '@ant-design/icons';
import Select, { SelectProps } from 'rc-select';
import { clx } from '../../utils';

type ITheme = 'warning' | 'success' | 'error' | 'default';

export type ISelect = SelectProps & { theme?: ITheme };

const Select1 = (props: ISelect) => {
  const { className, theme = 'default', placeholder = 'Please Select', ...rest } = props;

  return (
    <div className={clx('w-full', theme, className)}>
      <Select
        placeholder={placeholder}
        inputIcon={<DownOutlined />}
        clearIcon={<CloseCircleFilled />}
        {...rest}
      />
    </div>
  );
};

export default Select1;
