import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    const [Holiday, setHoliday] = useState<string>("🐇");
    const alphabetically: Record<string, string> = {
        "🎂": "🎄",
        "🎄": "🐇",
        "🐇": "🎃",
        "🎃": "🦃",
        "🦃": "🎂",
    };
    const yearly: Record<string, string> = {
        "🐇": "🎂",
        "🎂": "🦃",
        "🦃": "🎃",
        "🎃": "🎄",
        "🎄": "🐇",
    };
    return (
        <div>
            <p>
                🐇 = Easter <br />
                🎂 = Birthday (August 25th) <br />
                🦃 = Thanksgiving <br />
                🎃 = Halloween <br />
                🎄 = Christmas <br />
            </p>
            Holiday: {Holiday} <br />
            <Button
                onClick={() => {
                    setHoliday(alphabetically[Holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(yearly[Holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
