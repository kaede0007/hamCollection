import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HAMSTER_DATA } from "../../data/hamsters";

export default function CollectionPage() {
    const [collectedIds, setCollectedIds] = useState<number[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem("collectedHamsters");
        if (saved) {
            setCollectedIds(JSON.parse(saved));
        }
    }, []);

    const totalCount = HAMSTER_DATA.length;
    const collectedCount = collectedIds.length;

    return (
        <div className="min-h-screen bg-amber-50 flex flex-col items-center p-6 text-gray-800">
            <div className="w-full max-w-2xl mb-4 flex justify-between items-center">
                <Link
                    to="/gacha"
                    className="inline-block text-amber-700 hover:text-amber-900 font-medium transition-colors"
                >
                    ← ガチャに戻る
                </Link>

                <Link
                    to="/"
                    className="inline-block text-amber-700 hover:text-amber-900 font-medium transition-colors"
                >
                    ホームへ →
                </Link>
            </div>

            {/* メインの図鑑ボックス */}
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 border-4 border-amber-200">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
                    <h1 className="text-xl sm:text-3xl font-bold text-amber-800 tracking-wide whitespace-nowrap">
                        📖 ハムスター図鑑 📖
                    </h1>
                    <div className="text-sm font-bold text-amber-700 bg-amber-100 px-4 py-2 rounded-full">
                        コンプリート: {collectedCount} / {totalCount}
                    </div>
                </div>

                {/* 図鑑のグリッド一覧 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {HAMSTER_DATA.map((hamster) => {
                        // このハムスターのIDが、取得済みリストに含まれているか判定
                        const isCollected = collectedIds.includes(hamster.id);

                        return (
                            <div
                                key={hamster.id}
                                className={`rounded-2xl p-4 border-2 flex flex-col items-center text-center transition-all ${isCollected
                                    ? "bg-white border-amber-200 shadow-sm"
                                    : "bg-gray-100 border-gray-300 opacity-70"
                                    }`}
                            >
                                {isCollected ? (
                                    /* --- ゲット済みの表示 --- */
                                    <>
                                        <img
                                            src={hamster.image}
                                            alt={hamster.name}
                                            className="w-24 h-24 object-cover rounded-xl mb-2 shadow-sm border border-amber-100"
                                        />
                                        <span className="text-xs font-bold text-amber-600 mb-1">
                                            {hamster.rarity}
                                        </span>
                                        <span className="font-bold text-gray-800 text-sm">
                                            {hamster.name}
                                        </span>
                                    </>
                                ) : (
                                    /* --- 未取得（シルエット風）の表示 --- */
                                    <>
                                        <div className="w-24 h-24 bg-gray-300 rounded-xl mb-2 flex items-center justify-center text-gray-500 font-bold text-2xl">
                                            ？
                                        </div>
                                        <span className="text-xs font-bold text-gray-400 mb-1">
                                            ???
                                        </span>
                                        <span className="font-bold text-gray-400 text-sm">
                                            ？？？？
                                        </span>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}