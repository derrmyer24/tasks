import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, changeType] = useState<QuestionType>("short_answer_question");

    return (
        <div>
            <Button
                onClick={() => {
                    type === "short_answer_question" ?
                        changeType("multiple_choice_question")
                    :   changeType("short_answer_question");
                }}
            >
                Change Type
            </Button>
            {type === "short_answer_question" ?
                <div>Short Answer</div>
            :   <div>Multiple Choice </div>}
        </div>
    );
}
