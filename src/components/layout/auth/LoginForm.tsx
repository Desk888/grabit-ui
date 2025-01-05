'use client';
import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { InputField } from './InputField';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        icon={<Mail className="w-5 h-5 text-gray-500" />}
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputField
        icon={<Lock className="w-5 h-5 text-gray-500" />}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 rounded border-gray-300 text-[#2E882C] focus:ring-[#2E882C]"
          />
          <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <a href="/forgot_password" className="text-sm text-[#2E882C] hover:text-[#247022]">
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-[#2E882C] text-white py-2.5 px-4 rounded-md hover:bg-[#247022] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E882C] focus:ring-offset-2"
      >
        Sign in
      </button>
    </form>
  );
};