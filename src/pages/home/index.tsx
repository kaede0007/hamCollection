import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center p-4 text-gray-800">

            {/* タイトルエリア　*/}
            <div className="text-center mb-10">
                <div className="inline-block bg-yellow-300 border-2 border-black px-4 py-1 rounded-full text-xs font-bold mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
                    ✨ 毎日のエールをお届け ✨
                </div>

                <h1 className="text-4xl font-extrabold text-amber-900 mb-3 tracking-wider">
                    🐹 HamCollection
                </h1>

                <div className="bg-white border-2 border-amber-200 p-3.5 rounded-2xl max-w-xs mx-auto shadow-sm">
                    <p className="text-amber-800 text-sm font-medium leading-relaxed">
                        お疲れ気味のあなたへ。<br />
                        全64匹のハムたちが、全力で応援＆癒やします！
                    </p>
                </div>
            </div>

            {/* ボタンエリア */}
            <div className="flex flex-col gap-4 w-full max-w-xs">
                <Link
                    to="/gacha"
                    className="border-2 border-black bg-yellow-400 hover:bg-yellow-300 font-bold py-3.5 px-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center transition-all text-black"
                >
                    ✨ ガチャをひく
                </Link>

                <Link
                    to="/collection"
                    className="border-2 border-black bg-white hover:bg-amber-50 font-bold py-3.5 px-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-center transition-all text-black"
                >
                    📖 ハム図鑑を見る
                </Link>
            </div>
        </div>
    );
}