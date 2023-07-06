import React from 'react'

const AllBooking = ({booking}) => {
    return (
        <>
            <tbody>
                <tr>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <div className='flex items-center'>
                            <div className='flex-shrink-0'>
                                <div className='block relative'>
                                    <img
                                        alt='profile'
                                        src='https://www.tailwind-kit.com/images/person/6.jpg'
                                        className='mx-auto object-cover rounded h-10 w-15 '
                                    />
                                </div>
                            </div>
                            <div className='ml-3'>
                                <p className='text-gray-900 whitespace-no-wrap'>
                                    Jean marc
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>
                            Dhaka, Bangladesh
                        </p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>$95</p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>12/09/2020</p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <p className='text-gray-900 whitespace-no-wrap'>15/09/2020</p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                        <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                            <span
                                aria-hidden='true'
                                className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                            ></span>
                            <span className='relative'>Cancel</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default AllBooking