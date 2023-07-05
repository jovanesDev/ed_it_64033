import React from 'react'
import withPosts from '../WithPosts/withPosts'

const PostsContainer = (props) => {
  return (
    <div>
        <h1>{props.titulo}</h1>
        <div>
            {props.posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PostsContainer