import Dialog, { DialogProps } from 'rc-dialog';
import 'rc-dialog/assets/index.css';

export type IModal = DialogProps;

const Modal = (props: IModal = {}) => {
  const { children, ...rest } = props;
  return <Dialog {...rest}>{children}</Dialog>;
};

export default Modal;
