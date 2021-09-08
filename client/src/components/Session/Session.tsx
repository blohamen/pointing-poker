import Button from "../Button/Button";

export default function Session(): JSX.Element {
    return(
        <>
            <div className="session">
                <div className="session__create">
                    <h1>Start your planning:</h1>
                    <span>Create session:</span>
                    <Button
                        value = "Start new game"
                        subClassName = "start"
                    />
                </div>
                <div className="session__join">
                    <h1>OR:</h1>
                    <span>Connect to lobby by URL:</span>
                    <Button
                        value = "Connect"
                        subClassName = "connect"
                    />
                </div>
            </div>
        </>
    )
}