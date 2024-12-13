import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({ icon, ...props }) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
      )}
      <input
        {...props}
        className={`w-full px-4 py-2.5 ${
          icon ? 'pl-10' : 'pl-4'
        } border border-gray-300 rounded-md focus:ring-2 focus:ring-[#2E882C] focus:border-transparent placeholder-gray-400`}
      />
    </div>
  );
};