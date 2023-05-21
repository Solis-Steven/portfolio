
export function NavElement({text, id, darkMode, setMenuOpen, scrollY}) {
  
    const handleNavigationClick = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return(
        <li>
            <a
              href={id}
              onClick={handleNavigationClick}
              className={`ml-4 duration-300 ease-linear ${darkMode ? "text-white" : ""}
              hover:text-cyan-500 dark:hover:text-cyan-500 ${scrollY > 10 && !darkMode ? "text-white" : ""}`}
            >
              {text}
            </a>
        </li>
    );
}