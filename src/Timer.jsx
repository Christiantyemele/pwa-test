import {useEffect, useState} from "react";
import {findReturnStatement} from "eslint-plugin-react/lib/util/ast.js";
import Card from "./Card.jsx";

function Timer() {
    const [seconds, updateseconds] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [hours, sethours] = useState(0);


    useEffect(() => {

        const interval = setInterval(() => {
            updateseconds(seconds => seconds < 59 ? seconds + 1 : 0)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [seconds])

    return (
        <html data-theme="valentine">
        <div className="flex">
            <div className="flex-none w-14">
            {seconds}
        </div>
        </div>
</html>

    )
}

export default Timer

