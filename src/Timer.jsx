import {useEffect, useState} from "react";

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
    useEffect(() => {
        const interval = setInterval(() => {
            setminutes(minutes => minutes < 60 ? minutes + 1 : 0)
        }, 1000 * 60)
        return () => {
            clearInterval(interval)
        }

    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            sethours(hours => hours < 60 ? hours + 1 : 0)
        }, 1000 * 60 * 60)
        return () => {
            clearInterval(interval)
        }

    }, []);
    return (
        <html data-theme="valentine">
        <div className="flex">
            <div className="flex-none w-14">
                {hours} : {minutes} : {seconds}
            </div>
        </div>
        </html>

    )
}

export default Timer

