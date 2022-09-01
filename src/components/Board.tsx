import  React  from "react";
import Desk from "./Desk";
import Cards from "./Cards"

const Board:React.FC = () => {

    return (
        <section className="board">
            <Cards></Cards>
        </section>
    )
}

export default Board