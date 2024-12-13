import React from 'react';

interface GoogleButtonProps {
  onClick: () => void;
}

export const GoogleButton: React.FC<GoogleButtonProps> = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#2E882C] focus:ring-offset-2"
    >
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
          fill="#4285F4"
        />
        <path
          d="M12.24 24.0008C15.4764 24.0008 18.2058 22.9382 20.1944 21.1039L16.3274 18.1055C15.2516 18.8375 13.8626 19.252 12.24 19.252C9.0792 19.252 6.3686 17.1399 5.3648 14.3003H1.3926V17.3912C3.4136 21.4434 7.5318 24.0008 12.24 24.0008Z"
          fill="#34A853"
        />
        <path
          d="M5.3646 14.3003C5.1356 13.5591 5.0076 12.7732 5.0076 11.9999C5.0076 11.2266 5.1356 10.4407 5.3646 9.69946V6.60857H1.3926C0.513 8.22057 0 10.0648 0 11.9999C0 13.935 0.513 15.7792 1.3926 17.3912L5.3646 14.3003Z"
          fill="#FBBC05"
        />
        <path
          d="M12.24 4.74966C14.0291 4.74966 15.6265 5.36845 16.8791 6.54989L20.2663 3.12268C18.2001 1.18968 15.4764 0 12.24 0C7.5318 0 3.4136 2.55733 1.3926 6.60856L5.3646 9.69945C6.3686 6.85985 9.0792 4.74966 12.24 4.74966Z"
          fill="#EA4335"
        />
      </svg>
      <span className="text-gray-700">Continue with Google</span>
    </button>
  );
};