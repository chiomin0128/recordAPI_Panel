
import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
            존재하지 않는 페이지입니다.
            </p>
            <Link
            to="/chat"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
            Go to Home
            </Link>
        </div>
    );
    }
