import { Link } from "react-router-dom";

export default function CollectionPage() {
    return (
        <div className="min-h-screen bg-amber-50/30 p-6 flex flex-col items-center">
            {/* ヘッダータイトル */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">🐹 ハムスター図鑑</h1>

            {/* まだゲットしたハムスターがいない場合の仮表示、またはグリッド一覧 */}
            <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-sm border-2 border-amber-100 text-center">
                <p className="text-gray-400 py-8">ここにゲットしたハムスターが並びます！</p>
            </div>

            {/* ガチャ画面に戻るボタン */}
            <div className="mt-6">
                <Link to="/" className="text-sm font-bold text-amber-600 hover:underline">
                    ← ホームに戻る
                </Link>
            </div>
        </div>
    )
}