import { CloseCircleOutlined } from '@ant-design/icons';
import Noti from 'rc-notification';
import { clx } from '../../utils';

type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export type INotifications = {
  placement?: NotificationPlacement | 'center';
};

const notifications = (props: INotifications = {}) => {
  const { placement = 'topRight' } = props;

  const renderPlacement = () => {
    const placements: Partial<Record<INotifications['placement'], string>> = {
      topLeft: 'top-0 left-6',
      topRight: 'top-0 right-6',
      bottomLeft: 'bottom-0 left-6',
      bottomRight: 'bottom-0 right-6',
      center: 'inset-x-44% top-1',
    };
    return placements?.[placement];
  };

  Noti.newInstance({ className: clx('w-76', renderPlacement()), style: {} }, (notification) => {
    notification.notice({
      content: (
        <div className="flex flex-col p-4 bg-white hover:shodow-lg rounded-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none">Delete Your Acccount ?</div>
                <p className="text-sm text-gray-600 leading-none mt-1">
                  By deleting your account you will lose your all data
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      closable: true,
      closeIcon: <CloseCircleOutlined />,
      duration: 5000,
    });
  });
};

function info1() {
  Noti.newInstance({}, (notification) => {
    notification.notice({
      content: 'content',
      closable: true,
      duration: 4,
    });
  });
}

export default Object.assign(notifications, { info1 });
