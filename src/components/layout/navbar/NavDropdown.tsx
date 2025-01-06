'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { User, Settings, HelpCircle, LogOut, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const menuItems = [
  { icon: <User className="h-4 w-4" />, label: 'Profile', href: '/profile' },
  { icon: <Settings className="h-4 w-4" />, label: 'Settings', href: '/settings' },
  { icon: <HelpCircle className="h-4 w-4" />, label: 'Help', href: '/help' },
  { icon: <LogOut className="h-4 w-4" />, label: 'Sign Out', href: '/signin' },
];

const ProfileDropdown = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="nav-button text-white hover:bg-[#246B22] flex flex-col items-center" title="Profile">
        <User className="h-5 w-5" />
        <span className="text-xs mt-0.5">You</span>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          {menuItems.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <Link
                  href={item.href}
                  className={cn(
                    'flex w-full items-center px-4 py-2 text-sm text-gray-700',
                    active && 'bg-gray-100'
                  )}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropdown;