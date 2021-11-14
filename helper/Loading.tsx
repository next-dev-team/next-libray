import { Spin } from 'antd';
import React from 'react';

export default () => {
  return (
    <div
      style={{
        textAlign: 'center',
        background: 'rgba(0, 0, 0, 0.05)',
        borderRadius: 4,
      }}
    >
      <Spin />
    </div>
  );
};
