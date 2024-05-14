
interface Props {
    hey: string,
    intro: string
}

function Introduction({hey, intro}: Props) {
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