'use client'

import Button from '@/components/ui/Button'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import Navbar from '@/components/NavBar'

const Page: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function loginWithGoogle() {
    setIsLoading(true)
    try {
      await signIn('google')
    } catch (error) {
      toast.error('Something went wrong with your login.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
    <Navbar/>
    
    <div>
    <div className='bg-purple-300 h-96 flex flex-row items-center justify-center'>
    <h1 className='leading-tight text-4xl font-bold text-white whitespace-pre-line'>Secure Connections,{'\n'} Confident Conversations</h1>
    <div className="mt-4">
      <img
        className="rounded-md shadow-md object-cover h-52 w-full"
        src="https://assets.materialup.com/uploads/aa245a68-c462-49eb-b56e-e2cceca86455/chatmessagesiosandroiduikittemplate.jpg"
        alt="Description of the image"
      />
    </div>
  </div>
  <div className='flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 '>
    <div className='w-full flex flex-col items-center max-w-md space-y-8 bg-purple-300 p-4'>
      <div className='flex flex-col items-center gap-8'>
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
          </div>
          <Button
            isLoading={isLoading}
            type='button'
            className='block bg-purple-600 text-white  leading-tight py-2 px-4 w-full rounded-md mt-6 flex items-center justify-center'
            onClick={loginWithGoogle}>
            {isLoading ? null : (
              <svg
                className='mr-2 h-4 w-4'
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='github'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'>
                <path
                  d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  fill='#4285F4'
                />
                <path
                  d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  fill='#34A853'
                />
                <path
                  d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  fill='#FBBC05'
                />
                <path
                  d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  fill='#EA4335'
                />
                <path d='M1 1h22v22H1z' fill='none' />
              </svg>
            )}
            Google
          </Button>
        </div>
        
      </div>
      <div className='flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8'>
    <h2 className='text-2xl font-bold mb-4'>App Previews</h2>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        <img
          className="w-full h-full object-cover"
          src="https://s3-alpha.figma.com/hub/file/1630463834/71cd3eb9-a0c1-4d7f-9701-76de6b1d7cb5-cover.png"
          alt="Description of the image"
        />
      </div>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        <img
          className="w-full h-full object-cover"
          src="https://s3-alpha.figma.com/hub/file/1630463834/71cd3eb9-a0c1-4d7f-9701-76de6b1d7cb5-cover.png"
          alt="Description of the image"
        />
      </div>
      <div className='bg-white p-4 rounded-lg shadow-md'>
        <img
          className="w-full h-full object-cover"
          src="https://s3-alpha.figma.com/hub/file/1630463834/71cd3eb9-a0c1-4d7f-9701-76de6b1d7cb5-cover.png"
          alt="Description of the image"
        />
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Page