import { MainContent } from "./MainContent";


export function Header({children}) {

    return(
        <section className="min-h-screen px-10 md:px-20 lg:px-40">
          {children}

          <MainContent />
        </section>
    );
}