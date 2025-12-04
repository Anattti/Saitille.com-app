export default function Footer() {
    return (
        <footer className="bg-black text-white pt-20 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="text-xs font-bold tracking-widest uppercase opacity-60">
                        Designed in Helsinki
                    </div>

                    <div className="flex gap-8 text-xs font-bold tracking-widest uppercase">
                        <a href="#" className="hover:text-accent transition-colors">Twitter/X</a>
                        <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                        <a href="#" className="hover:text-accent transition-colors">Vimeo</a>
                    </div>
                </div>

                <div className="flex justify-between items-center text-[10px] font-medium tracking-widest uppercase opacity-40">
                    <div>© {new Date().getFullYear()} Saitille.com</div>
                    <div>All Rights Reserved</div>
                </div>
            </div>
        </footer>
    );
}
