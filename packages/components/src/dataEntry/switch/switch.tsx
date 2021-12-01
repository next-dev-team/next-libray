import useMergedState from 'rc-util/lib/hooks/useMergedState';
import KeyCode from 'rc-util/lib/KeyCode';
import * as React from 'react';
import { clx } from '../../utils';

export type SwitchChangeEventHandler = (
  checked: boolean,
  event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
) => void;
export type SwitchClickEventHandler = SwitchChangeEventHandler;

export interface SwitchProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange' | 'onClick'> {
  className?: string;
  prefixCls?: string;
  disabled?: boolean;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  onChange?: SwitchChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;
  onClick?: SwitchClickEventHandler;
  tabIndex?: number;
  checked?: boolean;
  defaultChecked?: boolean;
  loadingIcon?: React.ReactNode;
  style?: React.CSSProperties;
  title?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      checked,
      defaultChecked,
      disabled,
      loadingIcon,
      checkedChildren,
      unCheckedChildren,
      onClick,
      onChange,
      onKeyDown,
      ...rest
    },
    ref,
  ) => {
    const [innerChecked, setInnerChecked] = useMergedState<boolean>(false, {
      value: checked,
      defaultValue: defaultChecked,
    });

    function triggerChange(
      newChecked: boolean,
      event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
    ) {
      let mergedChecked = innerChecked;

      if (!disabled) {
        mergedChecked = newChecked;
        setInnerChecked(mergedChecked);
        onChange?.(mergedChecked, event);
      }

      return mergedChecked;
    }

    function onInternalKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
      if (e.which === KeyCode.LEFT) {
        triggerChange(false, e);
      } else if (e.which === KeyCode.RIGHT) {
        triggerChange(true, e);
      }
      onKeyDown?.(e);
    }

    function onInternalClick(e: React.MouseEvent<HTMLButtonElement>) {
      const ret = triggerChange(!innerChecked, e);
      // [Legacy] trigger onClick with value
      onClick?.(ret, e);
    }

    // const switchClassName = classNames(prefixCls, className, {
    //   [`${prefixCls}-checked`]: innerChecked,
    //   [`${prefixCls}-disabled`]: disabled,
    // });

    return (
      <span
        role="switch"
        {...rest}
        ref={ref}
        aria-checked={innerChecked}
        onKeyDown={onInternalKeyDown}
        onClick={onInternalClick}
        className="w-16"
      >
        {loadingIcon}
        <div
          className={clx(
            'border rounded-full border-grey flex items-center cursor-pointer w-16 justify-start',
            innerChecked && 'bg-green-400 justify-end text-white',
          )}
        >
          {innerChecked && <span className="px-1 uppercase">{checkedChildren}</span>}
          <span className={'rounded-full border w-6 h-6 border-grey shadow-inner bg-white'} />
          {!innerChecked && <span className="px-1 uppercase">{unCheckedChildren}</span>}
        </div>
      </span>
    );
  },
);

export default Switch;
