export default function Footer({ className }: { className?: string }) {
    return (
        <footer className={className || "flex py-4 items-center max-w-5xl mx-auto"}>
            <p>&#169; 2025 André Melo</p>
        </footer>
    );
}
