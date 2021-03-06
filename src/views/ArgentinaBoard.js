import React, { useEffect, useState } from "react";
import ThreadForm from "../components/ThreadForm";
import ThreadComp from "../components/ThreadComp";


function ArgentinaBoard() {

    const idBoard = 2
    const [threads, setThreads] = useState([])

    useEffect(() => {
        getThreads()
    })

    const url = 'http://127.0.0.1:8000/api/threads'

    const getThreads = async () => {

        const response = await fetch(url)
        const data = await response.json()
        setThreads(data)

    }

    return (
        <div className={"container"}>

            <h1>WELCOME TO THE ARGENTINIAN BOARD</h1>
            <ThreadForm board={idBoard} />

            <div className={"threads-list"}>
                {
                    threads.map((thread, index) => {
                        if (thread.board === idBoard) {
                            return(
                                <ThreadComp key={index} thread={thread} />
                            )
                        }
                    }
                )}
            </div>

        </div>
    )

}

export default ArgentinaBoard;
