import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-4">

            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-amber-800 mb-2">
                    🐹 HamCollection
                </h1>
                <p className="text-amber-700 text-lg">
                    幻(?)のシークレットハムを狙え！あなただけの図鑑を完成させよう。
                </p>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-xs">
                <Link
                    to="/gacha"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-2xl shadow-md text-center transition-transform active:scale-95"
                >
                    ✨ ガチャをひく
                </Link>

                <Link
                    to="/collection"
                    className="bg-white hover:bg-amber-100 text-amber-800 border-2 border-amber-300 font-bold py-3 px-6 rounded-2xl shadow-sm text-center transition-transform active:scale-95"
                >
                    📖 ハム図鑑を見る
                </Link>
            </div>
        </div>
    );
}