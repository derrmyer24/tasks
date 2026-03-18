import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function updateRequestedAttempts(
        event: React.ChangeEvent<HTMLInputElement>,
    ) {
        let value = event.target.value;
        setRequestedAttempts(value === "" ? 0 : Number(event.target.value));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts left: {attemptsLeft}
            <Form.Group controlId="requestAttemptsTextBox">
                <Form.Label>Request Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequestedAttempts}
                />
            </Form.Group>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft <= 0}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + requestedAttempts);
                }}
            >
                gain
            </Button>
        </div>
    );
}
