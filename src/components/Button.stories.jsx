import React from 'react';

const Button = ({ children, primary }) => {
  const baseClasses = 'px-4 py-2 rounded-md font-semibold';
  const colorClasses = primary
    ? 'bg-blue-500 text-white hover:bg-blue-600'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';
  
  return (
    <button className={`${baseClasses} ${colorClasses}`}>
      {children}
    </button>
  );
};

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
};

export const Primary = {
  args: {
    primary: true,
    children: 'Primary Button',
  },
};

export const Secondary = {
  args: {
    primary: false,
    children: 'Secondary Button',
  },
};

