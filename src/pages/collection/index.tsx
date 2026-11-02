import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { HAMSTER_DATA } from "../../data/hamsters";

export default function CollectionPage() {
    const [collectedIds, setCollectedIds] = useState<number[]>([]);
    // 選択中のハムスターのIDを管理
    const [activeId, setActiveId] = useState<number | null>(null);

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
                        const isCollected = collectedIds.includes(hamster.id);
                        const isActive = activeId === hamster.id;

                        return (
                            <div
                                key={hamster.id}
                                // 👈 クリックで吹き出しの表示/非表示を切り替え
                                onClick={() => isCollected && setActiveId(isActive ? null : hamster.id)}
                                className={`relative rounded-2xl p-4 border-2 flex flex-col items-center text-center transition-all ${isCollected
                                    ? "bg-white border-amber-200 shadow-sm cursor-pointer hover:shadow-md hover:border-amber-400"
                                    : "bg-gray-100 border-gray-300 opacity-70 cursor-not-allowed"
                                    }`}
                            >
                                {isCollected ? (
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

                                {/* クリックしたカードの真上に現れる吹き出し */}
                                {isCollected && isActive && (
                                    <>
                                        {/* 外側をクリックしたら閉じるための透明背景 */}
                                        <div
                                            className="fixed inset-0 z-40"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveId(null);
                                            }}
                                        />

                                        {/* 吹き出し本体 */}
                                        <div
                                            onClick={(e) => e.stopPropagation()}
                                            className="absolute z-50 bottom-full mb-3 left-1/2 -translate-x-1/2 w-64 sm:w-72 bg-white rounded-2xl p-4 shadow-2xl border-4 border-amber-200 text-left pointer-events-auto"
                                        >
                                            {/* 吹き出しのしっぽ（下向きの三角） */}
                                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-[12px] border-t-amber-200"></div>
                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-6 border-x-transparent border-t-[10px] border-t-white"></div>

                                            <p className="text-xs font-bold text-amber-700 mb-1 flex items-center gap-1">
                                                <span>💬</span> きみへのエール
                                            </p>
                                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                                                {hamster.description}
                                            </p>
                                        </div>
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