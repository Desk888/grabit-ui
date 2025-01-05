import React, { useState } from 'react';
import { Mail, Lock, User, Phone, Eye, EyeOff } from 'lucide-react';
import { InputField } from './InputField';

interface RegistrationFormProps {
  onSubmit: (data: {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
  }) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstname) newErrors.firstname = 'First name is required';
    if (!formData.lastname) newErrors.lastname = 'Last name is required';
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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // implement registration logic here

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <InputField
          icon={<User className="w-5 h-5 text-gray-500" />}
          type="text"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange('firstname')}
          required
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.firstname}</p>
        )}
      </div>

      <div>
        <InputField
          icon={<User className="w-5 h-5 text-gray-500" />}
          type="text"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange('lastname')}
          required
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.lastname}</p>
        )}
      </div>

      <div>
        <InputField
          icon={<User className="w-5 h-5 text-gray-500" />}
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange('username')}
          required
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.username}</p>
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

      <div className="relative">
        <InputField
          icon={<Lock className="w-5 h-5 text-gray-500" />}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={formData.password}
          onChange={handleChange('password')}
          required
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 flex items-center pr-3"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5 text-gray-500" />
          ) : (
            <Eye className="w-5 h-5 text-gray-500" />
          )}
        </button>
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