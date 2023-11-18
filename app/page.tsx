'use client'
import Image from 'next/image';
import Button from '@/components/Button/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button text='Login' className='py-2 px-4 bg-navy text-white rounded border-0' />
    </main>
  )
}
