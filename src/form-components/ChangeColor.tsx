import React, { useState } from "react";
import { Form } from "react-bootstrap";

const colors: string[] = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "magenta",
];

export function ChangeColor(): React.JSX.Element {
    const [ourColor, setOurColor] = useState<string>(colors[0]);

    function updateOurColor(event: React.ChangeEvent<HTMLInputElement>) {
        setOurColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {colors.map((color) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        label={color}
                        name="color-options"
                        value={color}
                        checked={ourColor === color}
                        onChange={updateOurColor}
                    />
                ))}
            </Form>
            You have chosen
            <div
                data-testid="colored-box"
                style={{ backgroundColor: ourColor }}
            >
                {ourColor}
            </div>
            .
        </div>
    );
}
