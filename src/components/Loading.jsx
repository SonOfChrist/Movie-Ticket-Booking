import React from 'react'

const Loading = () => {
  
  {/* Adding a Loading Animation */}
  return (
    <div className='flex items-center justify-center h-[80vh]'>
      <div className='animate-spin rounded-full h-14 w-14 border-2  border-t-primary'></div>
    </div>
  )
}

export default Loading
