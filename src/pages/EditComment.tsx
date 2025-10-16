import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editComment } from "../redux/slices/commentsSlice";
import type { Comment } from "../types/commentsType";

const EditComment = () => {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [bodyValue, setBodyValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams()

    const comments = useSelector((state: RootState) => state.comments.comments);
    const commentEdit =comments.find((c) => c.id ===id)

     useEffect(() => {
            if (commentEdit) {
                setNameValue(commentEdit.name)
                setEmailValue(commentEdit.email)
                setBodyValue(commentEdit.body)
            }
        },[commentEdit])

    const handleSave = () =>{

        if(!commentEdit) return

        const updateComment: Comment= {
            ...commentEdit,
            name: nameValue || "",
            email: emailValue,
            body: bodyValue
        }

        dispatch(editComment(updateComment));

        alert("Comentario actualizado correctamente")
        navigate("/")
    }

    if (!commentEdit) {
        return <p>No se encuentra el comentario</p>
    }

  return (
    <>
      <h1>Edita un comentario</h1>
      <input
        type="text"
        value={nameValue}
        placeholder="Name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNameValue(e.target.value)
        }
      />
       <input
        type="text"
        value={emailValue}
        placeholder="Email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmailValue(e.target.value)
        }
      />
       <input
        type="text"
        value={bodyValue}
        placeholder="Body"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setBodyValue(e.target.value)
        }
      />
      <button onClick={handleSave}>Guardar</button>
    </>
  );
};

export default EditComment;
