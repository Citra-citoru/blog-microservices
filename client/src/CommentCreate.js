import React, {useState} from 'react';
import axios from 'axios';


const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        await axios.post(`http://posts.test/comments/${postId}/comments`, {
            content
        })
        setContent('');
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input value={content} className="form-control" onChange={e => setContent(e.target.value)}/>
                </div>
                <br />
                <button className="btn btn-primary">Comment</button>
            </form>
        </div>
    )
}

export default CommentCreate;