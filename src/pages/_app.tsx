import Login from '@/lib/hook/Context/login';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Login>
            <div className="bg-gray-900">
                <Component {...pageProps} />;
            </div>
        </Login>
    );
}
