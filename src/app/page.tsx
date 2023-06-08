import Form from '@/components/Form'

export default function Home() {
  return (
    <div className='h-screen w-screen grid sm:grid-cols-[60%_minmax(40%,_1fr)]'>
      <div>
        <img
          src='/relics.png'
          alt='img'
          className='sm:h-screen sm:w-full sm:object-cover'
        />
      </div>
      <div className='text-white'>
        <div className='px-12 pt-16 ml-12'>
          <h1 className='text-3xl leading-10 font-semibold'>
            Welcome to{' '}
            <span className='font-extrabold border-b-[#D0A920] border-b-[8px]'>NFT</span>{' '}
            marketplace
          </h1>

          <Form />

          <p className='text-xs mt-6 text-center'>
            Already have an account? <span className='text-[#D0A920]'>Sign in</span>
          </p>
        </div>
      </div>

      <div className='invisible sm:visible absolute bottom-40 left-36 text-white bg-[rgba(255, 255, 255, 0.09)] backdrop-blur-xl flex items-center gap-8 px-8 py-4 rounded-md'>
        <div>
          <p className='font-semibold text-[17px]'>Golden human statue</p>
          <div className='flex items-center gap-2 mt-2'>
            <img src='/user.jpeg' alt='img' className='h-[40px]  rounded-full' />
            <p className='text-sm'>George Schmidt</p>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <p className='text-[#D0A920]'>4.10 ETH</p>
          <p className='text-sm text-gray-300'>$8.625,61</p>
        </div>
      </div>
    </div>
  )
}
