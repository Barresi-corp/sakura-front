import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@utils/utils'
import { buttonVariants } from '../variants/variants'
import { icons, type Icon } from './button-icons/button-icons'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: Icon
  iconPos?: 'left' | 'right'
}

const renderIcon = <T, P>(icon?: T, icons?: P): JSX.Element | undefined => {
  const result = icons![icon as keyof typeof icons]

  if (typeof result === 'string') {
    return <img src={result} alt="" />
  } else if (typeof result === 'object') {
    return result
  }
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      iconPos = 'right',
      asChild = false,
      children,
      icon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button'
    const iconToRender = renderIcon<Icon, typeof icons>(icon, icons)

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconPos === 'left' && iconToRender}
        {children}
        {iconPos === 'right' && iconToRender}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export default Button
