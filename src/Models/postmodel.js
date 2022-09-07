import { useEffect , useState} from "react";


const Postmodel = (url) => {
    const [posts, setPosts] = useState(null);
    const [iswating, setiswating] = useState(true);
    const [servererror, setservererro] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw Error("Can not connect to Server!..")
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    setPosts(data);
                    setiswating(false);
                }).catch(e => {
                    setservererro(e.message);
                    setiswating(false);
                })
        }, 2000);

    }, url)
    return{iswating , servererror,posts}
}

export default Postmodel;