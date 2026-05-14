import Link from 'next/link';
import React from 'react';
import { HiOutlineTicket } from 'react-icons/hi';


const EmpthyBooking = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-112.5 p-8 ">
      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
        <div className="relative bg-blue-50 p-6 rounded-full text-(--primaryBlue)">
          <HiOutlineTicket size={64} />
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        No Bookings Found
      </h3>
      <p className="text-gray-500 text-center max-w-sm mb-8 leading-relaxed">
        It looks like you haven't booked any trips yet. Start exploring our handpicked destinations to begin your journey!
      </p>

      <Link
        href="/destinations"
        className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 hover:bg-(--primaryBlue) text-white font-medium rounded-xl transition-all duration-300 ease-in-out shadow-lg hover:shadow-blue-200 active:scale-95"
      >
        Explore Destinations
      </Link>

      <p className="mt-6 text-sm text-gray-400">
        Need help? <span className="text-blue-500 cursor-pointer hover:underline">Contact Support</span>
      </p>
    </div>
  );
};

export default EmpthyBooking;