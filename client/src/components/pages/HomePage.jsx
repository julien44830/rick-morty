import { useState, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";
import Card from "../Card";

export default function HomePage() {
    const theme = useContext(ThemeContext);

    const data = useLoaderData();
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
    }

    const filteredResults = data.results.filter((character) =>
        character.name.toLowerCase().includes(text.toLowerCase())
    );

    console.log(filteredResults.length);

    return (
        <main className={`main-${theme.theme}`}>
            <section>
                <input
                    type="text"
                    placeholder="Trouve ton personnage"
                    onChange={handleChange}
                />
                {text.length === 0 ? (
                    " "
                ) : (
                    <p>{`nombre de personnages trouvé ${filteredResults.length}`}</p>
                )}
            </section>

            {filteredResults.length > 0 ? (
                filteredResults.map((e) => (
                    <Card
                        key={e.name}
                        name={e.name}
                        img={e.image}
                        id={e.id}
                    />
                ))
            ) : (
                <section className="section-no-personnage">
                    <p>tu ne connais pas le nom des personnages ?</p>
                    <img
                        src="../../src/assets/rick_sanchez.png"
                        alt="pas de personnage trouvé"
                    />
                    <p className="no-personnages">aucun personnage trouvé</p>
                </section>
            )}
        </main>
    );
}
