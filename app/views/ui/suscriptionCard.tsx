import * as React from 'react'
import '@/styles/globals.css';

import { cn } from '@/lib/utils'

function SuscriptionCard({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="suscription-card" className={cn('bg-checkbox text-card-foreground flex flex-col gap-6 rounded-[40px]  py-6 shadow-sm w-2xl', className)} {...props} />


  )
} 

function SuscriptionCardHeader({className, ...props}: React.ComponentProps<'div'>){
return
(
  <div
  data-slot ="card-title"
  className={cn('font-bold')}
  />
)
}



export {SuscriptionCard, SuscriptionCardHeader}

