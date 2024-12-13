'use client';

import React from 'react';
import { GoogleButton } from '../../components/auth/GoogleButton';
import { Divider } from '../../components/auth/Divider';
import { RegistrationForm } from '../../components/auth/RegistrationForm';

const Signup: React.FC = () => {
  const handleRegistration = (data: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
  }) => {
    console.log('Registration attempt:', data);
    // Implement registration logic here
  };

  const handleGoogleRegistration = () => {
    console.log('Google registration clicked');
    // Implement Google registration logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-[#2E882C] rounded-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              />
            </svg>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-[#2E882C] hover:text-[#247022]">
            Sign in here
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <GoogleButton onClick={handleGoogleRegistration} />
          <Divider />
          <RegistrationForm onSubmit={handleRegistration} />
        </div>
      </div>
    </div>
  );
};

export default Signup;