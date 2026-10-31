import { Link } from "react-router-dom";
import { useState } from "react";
import { HAMSTER_DATA } from "../../data/hamsters";
import type { Hamster } from "../../data/hamsters";


export default function GachaPage() {
    const [result, setResult] = useState<Hamster | null>(null);

    const handleGacha = () => {
        const randomIndex = Math.floor(Math.random() * HAMSTER_DATA.length);
        const selected = HAMSTER_DATA[randomIndex];
        setResult(selected);
    }


    return (
        <div>
            <p>
                <Link to="/">ホーム</Link>
            </p>
            <h1>ハムガチャ</h1>

            <button onClick={handleGacha}>回す</button>

            {result ? (
                <div>
                    <h2>結果</h2>
                    <img
                        src={result.image}
                        alt={result.name}
                        width="200"
                    />
                    <p>なまえ：{result.name}</p>
                    <p>レアリティ：{result.rarity}</p>
                    <p>せつめい：{result.description}</p>
                </div>
            ) : (
                <p>まだガチャを引いていません。「回す」を押してね。</p>
            )}

        </div>
    )
}