import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden": "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg" style={{ backgroundColor: "#000000"}}>
            <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white"> 
                    Pinaki<span className="text-[#A0ECD0]">.Tech</span> 
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-[#A0ECD0] hove:text-white transition-colors"> Home </a>
                    <a href="#about" className="text-[#A0ECD0] hove:text-white transition-colors"> About </a>
                    <a href="#projects" className="text-[#A0ECD0] hove:text-white transition-colors"> Projects </a>
                    <a href="#contact" className="text-[#A0ECD0] hove:text-white transition-colors"> Contact </a>
                    <a href="public\resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-[#008080] text-white py-2 px-4 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0, 128, 128, 0.4)]">
                    Resume
                    </a>
                </div>

            </div>
            </div>
        </nav>
    )

}