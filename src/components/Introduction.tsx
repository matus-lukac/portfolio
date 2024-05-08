import { useEffect } from "react"

interface Props {
    hey: string,
    intro: string
}

function Introduction({hey, intro}: Props) {
    const [post, setPost] = useState()

    useEffect(() => {
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    return (
        <>
            <div className="hey-block">
                <h1 className="hey">{hey}</h1>
                <span className="hire">Available for hire</span>
            </div>
            <p className="intro">{intro}</p>
        </>
    )
}

export default Introduction