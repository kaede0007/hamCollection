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
    };

    return (
        <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-6 text-gray-800">
            {/* ホームへ戻るリンク */}
            <div className="w-full max-w-md mb-4">
                <Link
                    to="/"
                    className="inline-block text-amber-700 hover:text-amber-900 font-medium transition-colors"
                >
                    ← ホームに戻る
                </Link>
            </div>

            {/* メインコンテンツボックス */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 text-center border-4 border-amber-200">
                <h1 className="text-3xl font-bold text-amber-800 mb-6 tracking-wide">
                    🐹 ハムガチャ 🐹
                </h1>

                {/* ガチャを回すボタン */}
                <button
                    onClick={handleGacha}
                    className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xl rounded-2xl shadow-lg transform active:scale-95 transition-all mb-8 cursor-pointer"
                >
                    ✨ ガチャを回す！ ✨
                </button>

                {/* 結果発表エリア */}
                {result ? (
                    <div className="bg-amber-50/50 rounded-2xl p-6 border-2 border-amber-100 animate-fade-in">
                        <h2 className="text-xl font-bold text-amber-700 mb-4">
                            🎉 結果発表 🎉
                        </h2>

                        <div className="flex justify-center mb-4">
                            <img
                                src={result.image}
                                alt={result.name}
                                className="w-48 h-48 object-cover rounded-2xl shadow-md border-2 border-white"
                            />
                        </div>

                        <div className="space-y-2 text-left bg-white p-4 rounded-xl shadow-sm">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-gray-400">なまえ</span>
                                <span className="text-lg font-bold text-gray-800">{result.name}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-gray-400">レアリティ</span>
                                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-bold text-sm">
                                    {result.rarity}
                                </span>
                            </div>
                            <div className="pt-2 border-t border-gray-100">
                                <span className="text-xs font-bold text-gray-400 block mb-1">せつめい</span>
                                <p className="text-sm text-gray-600 leading-relaxed">{result.description}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="py-12 text-gray-400 border-2 border-dashed border-amber-200 rounded-2xl">
                        <p>まだガチャを引いていません。</p>
                        <p className="text-sm mt-1">「回す」を押してね！</p>
                    </div>
                )}
            </div>
        </div>
    );
}