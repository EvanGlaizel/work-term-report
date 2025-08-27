import { Link, Outlet } from 'react-router-dom'

const Navigation = () => 
{
    type link = {
        link: string;
        to: string;
    }

    const sections:link[] = [{link: "Work Term 1", to: "workterm1"}, {link: "Work Term 2", to: "workterm2"}, {link: "Work Term 3", to: "workterm3"}, {link: "Work Term 4", to: "workterm4"}, {link: "Work Term 5", to: "workterm5"}];

    return (
        <>
        <nav className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 shadow-md z-50">
            <div className="flex justify-evenly space-x-6 py-4">
                {sections.map((section, idx) => (
                    <Link key={idx} to={section.to} className="text-gray-300 hover:text-white transition-colors duration-200 text-xl font-medium">{section.link}</Link>
                ))}
            </div>
        </nav>

        <div className="pt-20 px-4 max-w-5xl mx-auto">
            <Outlet/>
        </div>

        
        </>
    )
}

export default Navigation;