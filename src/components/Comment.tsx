import { IComment } from "../types"
import CommentBody from "./CommentBody"

interface CommentProps {
    comment: IComment
}

function Comment({ comment }: CommentProps) {
    
    return (
        <>
            <CommentBody content={comment} />
            <div className="grid grid-cols-12">
                <div className="col-span-1">
                    {/* Replies Side Lien */}
                    <div className="w-1 h-full bg-light-gray mx-auto"></div>
                </div>
                <div className="col-span-11 space-y-2">
                    {comment.replies.map(reply => (
                        <CommentBody content={reply} key={reply.id} />
                    ))}
                </div>
            </div>         
        </>
    )
}

export default Comment
