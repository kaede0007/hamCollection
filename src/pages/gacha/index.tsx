import { Link } from "react-router-dom";


export default function GachaPage() {
    return (
        <div>
            <p>
                <Link to="/">ホーム</Link>
            </p>
            <h1>ハムガチャ</h1>

            <button>回す</button>
        </div>
    )
}