import React from 'react'
import BaseLayout from './BaseLayout'

const Layout = (props) => {
    // p => props.children
  return (
    <BaseLayout className='bg-warning text-light fs-1'>
        {props.children}
        <div>
        {props.posts.map((post) => (
                <div className='text-dark' key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    </BaseLayout>
  )
}

export default Layout