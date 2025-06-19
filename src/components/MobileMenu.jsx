import { useEffect } from "react";

const MenuItem = ({ href, label, setMenuOpen, menuOpen, delay }) => (
    <a 
        href={href} 
        onClick={() => setMenuOpen(false)} 
        className={`text-2xl font-semibold my-3 px-8 py-3 rounded-xl shadow-md bg-gradient-to-r from-[#202A25]/80 to-[#479c7e]/30 text-[#A0ECD0] hover:from-[#008080]/80 hover:to-[#A0ECD0]/30 hover:text-white transition-all duration-300 transform backdrop-blur-lg border border-[#A0ECD0]/20 drop-shadow-lg
            ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        style={{ transitionDelay: menuOpen ? `${delay}ms` : "0ms" }}
    >
        {label}
    </a>
);

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === "Escape") {
                setMenuOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscapeKey);
        return () => {
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [setMenuOpen]);

    return (
        <div className={`fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center
                        transition-all duration-300 ease-in-out
                        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                        bg-gradient-to-br from-[#202A25]/95 via-[#008080]/80 to-[#A0ECD0]/60 backdrop-blur-2xl border-2 border-[#A0ECD0]/20 rounded-3xl m-2 shadow-2xl`}
            style={{boxShadow: menuOpen ? '0 8px 32px 0 rgba(160,236,208,0.25)' : 'none'}}
        >
            {/* Profile image/logo at the top */}
            <img src="professional-headshot.jpg" alt="Profile" className="w-20 h-20 rounded-full border-4 border-[#A0ECD0] shadow-lg mb-6 mt-8" />
            <button onClick={() => setMenuOpen(false)} 
                className="absolute top-6 right-6 text-[#A0ECD0] text-4xl focus:outline-none cursor-pointer bg-[#202A25]/80 rounded-full p-2 border border-[#A0ECD0]/30 hover:bg-[#008080]/80 hover:text-white transition"
                aria-label="Close Menu">
                &times;
            </button>

            <MenuItem href="#experience" label="Experience" setMenuOpen={setMenuOpen} menuOpen={menuOpen} delay={100} />
            <MenuItem href="#personalprojects" label="Personal Projects" setMenuOpen={setMenuOpen} menuOpen={menuOpen} delay={200} />
            <MenuItem href="#groupprojects" label="Group Projects" setMenuOpen={setMenuOpen} menuOpen={menuOpen} delay={300} />

            <div className="flex gap-6 mt-10 mb-8">
                <a href="https://www.linkedin.com/in/pinaki-upadhyay/" target="_blank" rel="noopener noreferrer" className="text-[#A0ECD0] hover:text-white text-3xl transition drop-shadow-lg">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/pinakiu" target="_blank" rel="noopener noreferrer" className="text-[#A0ECD0] hover:text-white text-3xl transition drop-shadow-lg">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    );
};
