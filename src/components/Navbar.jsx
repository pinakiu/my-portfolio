import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden": "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg" style={{ backgroundColor: "#000000"}}>
            <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="flex items-center space-x-4">
                    {/* <div className="relative flex-shrink-0 ml-10">
                    <img
                        src="professional-headshot.jpg"
                        alt="Professional HeadShot"
                        className="w-12 h-12 rounded-full object-cover border-1 border-[#A0ECD0]"
                    />
                    </div> */}
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#experience" className="text-[#A0ECD0] hove:text-white transition-colors"> Experience </a>
                    <a href="#personalprojects" className="text-[#A0ECD0] hove:text-white transition-colors"> Personal Projects </a>
                    <a href="#groupprojects" className="text-[#A0ECD0] hove:text-white transition-colors"> Group Projects </a>
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