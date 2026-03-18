import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [currentChoice, setCurrentChoice] = useState<string>(options[0]);

    function updatecurrentChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setCurrentChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceQuestion-options">
                <Form.Label>What is the answer?</Form.Label>
                <Form.Select
                    value={currentChoice}
                    onChange={updatecurrentChoice}
                >
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {currentChoice === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
