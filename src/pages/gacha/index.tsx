import { Link } from "react-router-dom";
import { useState } from "react";
import { HAMSTER_DATA } from "../../data/hamsters";
import type { Hamster } from "../../data/hamsters";

export default function GachaPage() {
    // 画面の状態管理: "idle"（通常） | "playing"（動画再生中） | "result"（結果表示）
    const [gachaState, setGachaState] = useState<"idle" | "playing" | "result">("idle");
    const [gachaResult, setGachaResult] = useState<Hamster | null>(null);

    const saveToCollection = (hamster: Hamster) => {
        const saved = localStorage.getItem("collectedHamsters");
        const collection: number[] = saved ? JSON.parse(saved) : [];

        const targetKey = hamster.id;

        if (!collection.includes(targetKey)) {
            collection.push(targetKey);
            localStorage.setItem("collectedHamsters", JSON.stringify(collection));
        }
    }

    const handleGacha = () => {
        const randomIndex = Math.floor(Math.random() * HAMSTER_DATA.length);
        const selected = HAMSTER_DATA[randomIndex];
        setGachaResult(selected);
        saveToCollection(selected);
        setGachaState("playing");
    };

    const handleVideoEnded = () => {
        setGachaState("result");
    };

    const getRarityStyle = (rarity: string) => {
        switch (rarity) {
            case 'SECRET':
                return 'text-purple-600 bg-purple-100 border-purple-300 animate-pulse';
            case 'SSR':
                return 'text-yellow-500 font-extrabold drop-shadow-md';
            case 'SR':
                return 'text-blue-600 font-bold';
            case 'R':
            default:
                return 'text-amber-700';
        }
    };

    return (
        <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-gray-800">
            <div className="w-full max-w-md mb-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="inline-block text-amber-700 hover:text-amber-900 font-medium transition-colors"
                >
                    ← ホームに戻る
                </Link>

                <Link
                    to="/collection"
                    className="inline-block text-amber-700 hover:text-amber-900 font-medium transition-colors"
                >
                    図鑑へ →
                </Link>
            </div>

            {/* メインコンテンツボックス */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center border-4 border-amber-200">
                <h1 className="text-3xl font-bold text-amber-800 mb-6 tracking-wide">
                    🐹 ハムガチャ 🐹
                </h1>

                {/* 通常画面 */}
                {gachaState === "idle" && (
                    <>
                        <button
                            onClick={handleGacha}
                            className="border-2 border-black bg-white px-5 py-3 mb-6 font-semibold text-black ring-2 ring-black ring-offset-2 ring-offset-yellow-300 hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0 cursor-pointer"
                        >
                            ✨ 回す ✨
                        </button>

                        <div className="py-12 text-gray-400 border-2 border-dashed border-amber-200 rounded-2xl">
                            <p>まだガチャを引いていません。</p>
                            <p className="text-sm mt-1">「回す」を押してね！</p>
                        </div>
                    </>
                )}

                {/* 結果発表エリア */}
                {gachaState === "result" && gachaResult && (
                    <>
                        <button
                            onClick={() => setGachaState("idle")}
                            className="border-2 border-black bg-white px-5 py-3 mb-6 font-semibold text-black ring-2 ring-black ring-offset-2 ring-offset-yellow-300 hover:bg-yellow-200 focus:ring-2 focus:ring-yellow-300 focus:outline-0 cursor-pointer"
                        >
                            ✨ もう一度回す ✨
                        </button>

                        <div className="bg-amber-50/50 rounded-2xl p-6 border-2 border-amber-100 animate-fade-in">
                            <h2 className={`text-xl font-bold mb-4 ${getRarityStyle(gachaResult.rarity)}`}>
                                {gachaResult.rarity}
                            </h2>

                            <div className="flex justify-center mb-4">
                                <img
                                    src={gachaResult.image}
                                    alt={gachaResult.name}
                                    className="w-48 h-48 object-cover rounded-2xl shadow-md border-2 border-white"
                                />
                            </div>

                            <div className="space-y-2 text-left bg-white p-4 rounded-xl shadow-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-gray-400">なまえ</span>
                                    <span className="text-lg font-bold text-gray-800">{gachaResult.name}</span>
                                </div>

                                <div className="pt-2 border-t border-gray-100">
                                    <span className="text-xs font-bold text-gray-400 block mb-1">きみへのエール</span>
                                    <p className="text-sm text-gray-600 leading-relaxed">{gachaResult.description}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* 動画再生中の画面 */}
            {gachaState === "playing" && (
                <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                    <video
                        src="/videos/gacha-effect.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnded}
                        className="w-full h-full object-cover"
                    />
                    {/* 動画スキップボタン */}
                    <button
                        onClick={() => setGachaState("result")}
                        className="absolute top-6 right-6 bg-black/50 hover:bg-black/80 text-white px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm transition-colors cursor-pointer z-10"
                    >
                        スキップ ≫
                    </button>
                </div>
            )}
        </div>
    );
}