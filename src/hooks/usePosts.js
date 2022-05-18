import { useEffect, useState } from "react"

const usePosts = () =>{
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch('https://powerful-reef-30073.herokuapp.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    return [posts, setPosts];
}

export default usePosts;