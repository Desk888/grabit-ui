"use client"

import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ResetPasswordConfirmationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <CheckCircle className="h-12 w-12 text-[#2F892C]" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Password Reset Successful
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Your password has been successfully reset. You can now log in with your new password.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <Link href="/signin" passHref>
              <Button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#246B22] hover:bg-[#2F892C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Return to Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

