import React from 'react'
import { IComment } from '../types'
import Comment from './Comment'
import SendComment from './SendComment'

interface CommentsProps {
    comments : Array<IComment>
}


function Comments({ comments }: CommentsProps) {
    
    return (
        <div className="w-full max-w-[700px] space-y-4">
            {comments.map(comment => (
                <Comment comment={comment} key={comment.id} />
            ))}
            <SendComment />
        </div>
    )
}

export default Comments
