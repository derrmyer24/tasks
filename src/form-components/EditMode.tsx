import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    function updateuserName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                type="switch"
                id="is-editMode-check"
                label="Edit?"
                checked={isEditMode}
                onChange={updateEditMode}
            />
            {!isEditMode &&
                (isStudent ?
                    <div>{userName} is a student.</div>
                :   <div>{userName} is not a student.</div>)}
            {isEditMode && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                    <Form.Group controlId="userName-textbox">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={userName}
                            onChange={updateuserName}
                        />
                    </Form.Group>
                </div>
            )}
        </div>
    );
}
