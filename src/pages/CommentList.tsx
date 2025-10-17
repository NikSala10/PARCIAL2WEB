import useComments from "../hook/useComments";
import type { RootState } from "../redux/store";
import CommentCard from "../components/commentCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CommentList = () => {
    const {loading, error} = useComments()
    
    const commentsLocal = useSelector((state: RootState) => state.comments.comments);
    const navigate = useNavigate()


  return (
    <>
      <h1>Lista de Comentarios</h1>
      <button  onClick={() => navigate("/add")} >Agregar comentario</button>
      <button  onClick={() => navigate("/favorites")} >Ver favoritos</button>
      {loading && <p>Cargando datos</p>}
      {error && <p>{error}</p>}
      {!loading && !error && commentsLocal.length === 0 && <p>No hay comentarios disponibles</p>}
      {commentsLocal.map((comment:any) => (
        <CommentCard key={comment.id} id={comment.id} name={comment.name} email={comment.email} body={comment.body} favorite={false}/>
      ))}
    </>
  );
};

export default CommentList;
