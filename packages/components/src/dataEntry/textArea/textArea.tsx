import RcTextArea, { TextAreaProps } from 'rc-textarea';
import { clx } from '../..';

export type ITextArea = TextAreaProps;

const TextArea = (props: ITextArea) => {
  const { name, className, placeholder = 'Please Enter', ...rest } = props;

  return (
    <RcTextArea
      {...{
        id: name,
        rows: 3,
        name,
        className: clx(
          'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2',
        ),
        placeholder,
        ...rest,
      }}
    />
  );
};

export default TextArea;
