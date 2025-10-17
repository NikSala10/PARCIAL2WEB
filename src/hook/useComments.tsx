import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setComments } from "../redux/slices/commentsSlice";

export const useComments = () => {
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((res) => res.json())
    .then((datos) => dispatch(setComments(datos)))
    .catch((error) => setError(error))
    .finally(() => setLoading(false) )
    
  },[])

  return {error, loading }
}

export default useComments;