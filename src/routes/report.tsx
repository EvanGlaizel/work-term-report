import type { ReportType } from '../tyoes/report.tsx'

type ReportProps = 
{
    title: string;
    content?: ReportType;
}

const Report: React.FC<ReportProps> = ({ title, content}) => 
{
    return (
        <div>
            <h1>{title}</h1>

            {content.map((paragraph, idx) => (
                <div key={idx}>
                    <p>{paragraph.text}</p>
                    <img src={paragraph.image} alt={paragraph.alt}/>
                </div>
            )
            )}
        </div>
    )
}

export default Report;