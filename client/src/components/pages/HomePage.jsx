import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Card from "../Card";

export default function HomePage() {
    const data = useLoaderData();
    console.log('%c⧭', 'color: #e50000', data.results[0].id);
    const [text, setText] = useState("");

    function handleChange(e) {
      setText(e.target.value);
    }

    const filteredResults = data.results.filter((character) =>
      character.name.toLowerCase().includes(text.toLowerCase())
    );

    return (
        <>
            <input
                type="text"
                placeholder="Trouve ton personnage"
                onChange={handleChange}
            />
            {filteredResults.map((e) => (
                <Card
                    key={e.name}
                    name={e.name}
                    img={e.image}
                    id={e.id}
                />
            ))}
        </>
    );
}
