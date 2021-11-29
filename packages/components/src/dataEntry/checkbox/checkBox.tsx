import RcCheckbox, { Props } from 'rc-checkbox';

const Checkbox = ({ ...rest }: Props) => {
  return <RcCheckbox name="my-checkbox" defaultChecked {...rest} />;
};

export default Checkbox;
