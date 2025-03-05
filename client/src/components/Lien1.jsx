import { useState } from "react"
import { Link } from "react-router-dom"

const Lien1 = () => {

    const {isOpen , setIsOpen} = useState(false)
    return (
        <div>
            <div className='lien-home'>
            <Link to={'/Table1'}>Commencer</Link>
            
            </div>
            <div>
                <button onClick={() => setIsOpen()}>clique</button>
            </div>
        </div>
        
    )
}
export default Lien1