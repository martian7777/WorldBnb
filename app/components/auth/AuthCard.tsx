// Reusable card wrapper for auth forms
interface AuthCardProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

export default function AuthCard({ title, subtitle, children }: AuthCardProps) {
    return (
        <div className="w-full max-w-md">
            <div className="bg-white rounded-3xl shadow-2xl shadow-rose-100/50 border border-gray-100 p-8 sm:p-10">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-black text-gray-900 mb-2">{title}</h1>
                    <p className="text-gray-500 text-sm">{subtitle}</p>
                </div>
                {children}
            </div>
        </div>
    );
}
