import {useEffect, useState} from "react";
import {Entry} from "./Entry.tsx";

export function AccountEntry(){

    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        fetch("/api/entries", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }) .then(response => response.json())
            .then(data => setEntries(data));
    }, []);

    return (
        <div>
            <h1>Entries</h1>
            <main>
                <div>
                    <label>Year</label>
                    <label>Month</label>
                    <label>Value</label>
                </div>
                {entries.map((entry) => {
                    return (
                        <div key={entry.id}>
                            <input type="number" value={entry.year}/>
                            <input type="number" value={entry.month}/>
                            <input type="number" value={entry.value}/>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}

export default AccountEntry