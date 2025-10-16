import { useDispatch, useSelector } from "react-redux";
import useComments from "../hook/useComments";
import type { RootState } from "../redux/store";
import { setComments } from "../redux/slices/commentsSlice";
import { useEffect } from "react";
import CommentCard from "../components/commentCard";
import { useNavigate } from "react-router-dom";

const CommentList = () => {
    const {comments,loading, error} = useComments()
    console.log(comments);
    
    const commentsLocal = useSelector((state: RootState) => state.comments.comments);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        if (comments.length > 0 && commentsLocal.length === 0 ) {
            dispatch(setComments(comments))
        }
    },[])

  return (
    <>
      <h1>Lista de Comentarios</h1>
      <button  onClick={() => navigate("/add")} >Agregar comentario</button>
      <button  onClick={() => navigate("/favorites")} >Ver favoritos</button>
      {loading && <p>Cargando datos</p>}
      {error && <p>{error}</p>}
      {!loading && !error && commentsLocal.length === 0 && <p>No hay comentarios disponibles</p>}
      {comments.map((comment:any) => (
        <CommentCard key={comment.id} id={comment.id} name={comment.name} email={comment.email} body={comment.body} favorite={false}/>
      ))}
    </>
  );
};

export default CommentList;
