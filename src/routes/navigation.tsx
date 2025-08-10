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
        {sections.map((section, idx) => (
            <div key={idx}>
                <Link to={section.to}>{section.link}</Link>
            </div>
        ))}

        <Outlet/>
        </>
    )
}

export default Navigation;