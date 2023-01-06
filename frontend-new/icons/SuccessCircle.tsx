import { FC } from 'react'

export const SuccessCircle: FC = () => {
  return (
    <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='16' cy='16' r='16' fill='white' />
      <path
        d='M23.1884 9.4025L13.6697 22.5314L8.28208 17.5008'
        stroke='#2885FF'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
