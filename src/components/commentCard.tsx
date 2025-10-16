import { useNavigate } from "react-router-dom";
import type { Comment } from "../types/commentsType";

const CommentCard = ({id ,name, email, body} : Comment) => {

    const navigate = useNavigate()


    const handleEdit = () => {
        navigate(`edit/${id}`)
    }

    return(
        <>
           <p>Name: {name}</p>
           <p>Email: {email}</p>
           <p>Body: {body}</p>
           <button onClick={handleEdit}>Edit</button>
           <button>Añadir favorito</button>
        </>
    )
}

export default CommentCard 