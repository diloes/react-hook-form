'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

// Validaciones con yup
const schema = yup
  .object({
    full_name: yup.string().required('Full name is required'),
    email: yup.string().email().required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirm_password: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
  })
  .required()

const Form = () => {
  // Utilizamos useForm() para manejar el formulario y el resolver de yup para validar los campos
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      confirm_password: '',
      terms_conditions: true
    }
  })

  const onSubmit = (data: any) => {
    // Enviaríamos los datos al servidor
    console.log(data)
  }

  return (
    <form className='mt-12 max-w-lg' onSubmit={handleSubmit(onSubmit)}>
      <p className='leading-6'>Create your account</p>
      <div className='grid grid-cols-1 mt-4'>
        <label htmlFor='full_name' className='text-gray-400'>
          Full name
        </label>
        <input
          type='text'
          id='full_name'
          {...register('full_name')}
          placeholder='Diego López'
        />
        <p className='text-red-500 text-xs mt-1'>{errors.full_name?.message}</p>
      </div>

      <div className='grid grid-cols-1 mt-4'>
        <label htmlFor='full_name' className='text-gray-400'>
          Email
        </label>
        <input
          type='email'
          id='email'
          {...register('email')}
          placeholder='diloesdev@gmail.com'
        />
        <p className='text-red-500 text-xs mt-1'>{errors.email?.message}</p>
      </div>

      <div className='grid grid-cols-1 mt-4'>
        <label htmlFor='password' className='text-gray-400'>
          Password
        </label>
        <input
          type='password'
          id='password'
          {...register('password')}
          placeholder='8+ characters'
        />
        <p className='text-red-500 text-xs mt-1'>{errors.password?.message}</p>
      </div>

      <div className='grid grid-cols-1 mt-4'>
        <label htmlFor='password' className='text-gray-400'>
          Repeat password
        </label>
        <input
          type='password'
          id='repeat_password'
          {...register('confirm_password')}
          placeholder='8+ characters'
        />
        <p className='text-red-500 text-xs mt-1'>{errors.confirm_password?.message}</p>
      </div>

      <div className='mt-8 flex text-gray-400 items-center'>
        <input
          type='checkbox'
          id='agree'
          {...register('terms_conditions')}
          checked
          className='text-xs w-[3%] m-0 p-0 accent-[#D0A920]'
        />
        <p className='ml-2'>I agree terms & conditions</p>
        <p className='text-red-500 text-xs mt-1'>{errors.terms_conditions?.message}</p>
      </div>

      <button className='mt-8  bg-[#27395B] p-3 rounded-lg text-[#D0A920] w-full h-16 text-xs'>
        Create an account
      </button>
    </form>
  )
}

export default Form
