import React from 'react'
const withPosts = (BaseComponent) => {
    
    const posts = [
        {
            id: 1,
            title: 'Post 1',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nisl. Sed vitae nunc molestie, vitae luctus nec, scelerisque quam. Donec vulputate nisl. Sed vitae nunc molestie, vitae luctus nec, scelerisque quam.'
        },
        {
            id: 2,
            title: 'Post 2',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nisl. Sed vitae nunc molestie, vitae luctus nec, scelerisque quam. Donec vulputate nisl. Sed vitae nunc molestie, vitae luctus nec, scelerisque quam.'
        },
        {
            id: 3,
            title: 'Post 3',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate nisl. Sed vitae nunc molestie, vitae luctus nec, scelerisque quam. Donec vulputate nisl. Sed vitae nunc molestie, vitae luctus nec, scelerisque quam.'
        }
    ]


  return function (props) {
    return <BaseComponent posts={posts} {...props} />
  }
}

export default withPosts