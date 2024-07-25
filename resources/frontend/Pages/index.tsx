import React, { memo } from 'react'

import { Button } from '@ui/button';
import { Head } from '@inertiajs/react';

const Index: React.FC = memo(() => {
  return (
    <>
      <Head title='Inertia + React + Laravel' />
      <Button>Click me</Button>
    </>
  )
})

export default Index
