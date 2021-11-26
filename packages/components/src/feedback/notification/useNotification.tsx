import {
  HolderReadyCallback as RCHolderReadyCallback,
  NoticeContent as RCNoticeContent,
  NotificationInstance as RCNotificationInstance,
} from 'rc-notification/lib/Notification';
import useRCNotification from 'rc-notification/lib/useNotification';
import * as React from 'react';
import { ArgsProps, NotificationInstance } from './notification1';

export default function createUseNotification(
  getNotificationInstance: (
    args: ArgsProps,
    callback: (info: { prefixCls: string; instance: RCNotificationInstance }) => void,
  ) => void,
  getRCNoticeProps: (args: ArgsProps, prefixCls: string) => RCNoticeContent,
) {
  const useNotification = (): [NotificationInstance] => {
    // We create a proxy to handle delay created instance
    let innerInstance: RCNotificationInstance | null = null;
    const proxy = {
      add: (noticeProps: RCNoticeContent, holderCallback?: RCHolderReadyCallback) => {
        innerInstance?.component.add(noticeProps, holderCallback);
      },
    } as any;

    const [hookNotify] = useRCNotification(proxy);

    function notify(args: ArgsProps) {
      const mergedPrefixCls = 'notification';

      getNotificationInstance(
        {
          ...args,
          prefixCls: mergedPrefixCls,
        },
        ({ prefixCls, instance }) => {
          innerInstance = instance;
          hookNotify(getRCNoticeProps(args, prefixCls));
        },
      );
    }

    // Fill functions
    const hookApiRef = React.useRef<any>({});

    hookApiRef.current.open = notify;

    ['success', 'info', 'warning', 'error'].forEach((type) => {
      hookApiRef.current[type] = (args: ArgsProps) =>
        hookApiRef.current.open({
          ...args,
          type,
        });
    });

    return [hookApiRef.current];
  };

  return useNotification;
}
