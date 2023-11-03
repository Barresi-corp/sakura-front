import { type FC } from 'react'
import Input, { type IInputProps } from '../input/input'

import icon from '@assets/ui/Search.svg'
import { cn } from '@utils/utils'

interface ISearchProps extends Omit<IInputProps, 'type'> {}

const Search: FC<ISearchProps> = ({ className, ...props }) => {
  return (
    <div className='flex items-center relative'>
      <Input
        className={cn('bg-search py-[10px] rounded-[10px] pr-[60px]', className)}
        placeholder='Поиск'
        type='text'
        {...props}
      />

      <img className='absolute top-[52%] right-4 translate-y-[-100%]' src={icon} alt='' />
    </div>
  )
}

export default Search
