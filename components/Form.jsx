'use client'

import { useState } from 'react'
import { ArrowRightIcon, MailIcon, MessageSquare, User } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { profile } from '@/data/profile'

// No backend: the form opens the visitor's mail client with the message
// pre-filled, so nothing is stored or sent by this site.
const Form = () => {
  const [opened, setOpened] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name')).trim()
    const email = String(data.get('email')).trim()
    const message = String(data.get('message')).trim()

    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setOpened(true)
  }

  return (
    <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-y-2'>
        <Label className='pl-4 text-base' htmlFor='name'>Name</Label>
        <div className='relative flex items-center'>
          <Input className='pr-14' id='name' name='name' autoComplete='name' required maxLength={100} />
          <User className='absolute right-6 text-muted-foreground' size={20} aria-hidden='true' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <Label className='pl-4 text-base' htmlFor='email'>Email</Label>
        <div className='relative flex items-center'>
          <Input className='pr-14' id='email' name='email' type='email' autoComplete='email' required maxLength={200} />
          <MailIcon className='absolute right-6 text-muted-foreground' size={20} aria-hidden='true' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2'>
        <Label className='pl-4 text-base' htmlFor='message'>Message</Label>
        <div className='relative flex items-center'>
          <Textarea className='py-4 pr-14' id='message' name='message' required minLength={10} maxLength={3000} />
          <MessageSquare className='absolute right-6 top-4 text-muted-foreground' size={20} aria-hidden='true' />
        </div>
      </div>
      <Button type='submit' className='flex max-w-max items-center gap-x-1'>
        Send message
        <ArrowRightIcon className='ml-2' size={20} aria-hidden='true' />
      </Button>
      <p className='text-sm text-muted-foreground' role='status'>
        {opened
          ? `Your mail app should open with the message ready. If it didn't, write to ${profile.email}.`
          : 'This opens your mail app with the message filled in.'}
      </p>
    </form>
  )
}

export default Form
