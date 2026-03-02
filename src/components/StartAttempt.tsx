import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setNumAttempts(numAttempts - 1);
    }

    function endQuiz(): void {
        setInProgress(false);
    }

    return (
        <div>
            <Button
                disabled={inProgress || numAttempts === 0}
                onClick={startQuiz}
            >
                Start Quiz
            </Button>
            <Button disabled={!inProgress} onClick={endQuiz}>
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => {
                    setNumAttempts(numAttempts + 1);
                }}
            >
                Mulligan
            </Button>
            <div>number of attempts {numAttempts}</div>
        </div>
    );
}
