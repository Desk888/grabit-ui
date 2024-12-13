import React, { useState } from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { InputField } from './InputField';

interface RegistrationFormProps {
  onSubmit: (data: {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
  }) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <InputField
          icon={<User className="w-5 h-5 text-gray-500" />}
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange('fullName')}
          required
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
        )}
      </div>

      <div>
        <InputField
          icon={<Mail className="w-5 h-5 text-gray-500" />}
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange('email')}
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <InputField
          icon={<Lock className="w-5 h-5 text-gray-500" />}
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange('password')}
          required
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-600">{errors.password}</p>
        )}
      </div>

      <div>
        <InputField
          icon={<Lock className="w-5 h-5 text-gray-500" />}
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange('confirmPassword')}
          required
        />
        {errors.confirmPassword && (
          <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
        )}
      </div>

      <div>
        <InputField
          icon={<Phone className="w-5 h-5 text-gray-500" />}
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange('phone')}
          required
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-[#2E882C] text-white py-2.5 px-4 rounded-md hover:bg-[#247022] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2E882C] focus:ring-offset-2"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};