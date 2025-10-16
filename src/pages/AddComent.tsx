import { useState } from "react";
import { addComment } from "../redux/slices/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { Comment } from "../types/commentsType";
import type { RootState } from "../redux/store";

const AddComment = () => {
  
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [bodyValue, setBodyValue] = useState("");
    const dispatch = useDispatch();
    const commentsLocal = useSelector((state: RootState) => state.comments.comments);

    const navigate = useNavigate()

    const handleSave = () =>{
        if (!nameValue || !emailValue || !bodyValue) {
            return(alert("Todos los campos son necesarios"))
        }

        const newComment: Comment= {
            id: Date.now().toString(),
            name: nameValue,
            email: emailValue,
            body: bodyValue,
            favorite: false
        }

        dispatch(addComment(newComment));

        setNameValue("")
        setEmailValue("")
        setBodyValue("")

        alert("Comentario guardado correctamente")
        console.log(commentsLocal);
        navigate("/")
        
    }

  return (
    <>
      <h1>Añade un comentario</h1>
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

export default AddComment;
