import { notification } from 'antd';

export const clickNotification = (
    type = 'success',
    message = 'Success',
    description = ''
  ) => {
    return notification[type]({ message, description, placement: 'top' });
  };