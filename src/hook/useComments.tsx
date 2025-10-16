import { useEffect, useState } from "react";

export const useComments = () => {
    
    const [comments, setComments] = useState<Comment[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((res) => res.json())
    .then((datos) => setComments(datos))
    .catch((error) => setError(error))
    .finally(() => setLoading(false) )
    
  },[])

  return {comments, error, loading }
}

export default useComments;