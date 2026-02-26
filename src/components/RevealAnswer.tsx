import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function flipVisbility(): void {
        setVisible(!visible);
    }

    return (
        <div>
            <button onClick={flipVisbility}>Reveal Answer</button>
            {visible && <div>42</div>}
        </div>
    );
}
