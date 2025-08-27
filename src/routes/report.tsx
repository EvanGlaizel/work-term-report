import type { ReportType } from '../types/report.tsx'

type ReportProps = 
{
    title: string;
    content?: ReportType;
}

const Report: React.FC<ReportProps> = ({ title, content}) => 
{
    return (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700">
            <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>

            {content && content.map((paragraph, idx) => (
                <div key={idx} className="mb-8 last:mb-0 bg-gray-900 p-4 rounded-lg shadow-sm border border-gray-700">
                    <p className="text-gray-300 mb-4 leading-relaxed">{paragraph.text}</p>
                    {paragraph.image && paragraph.alt && <img src={paragraph.image} alt={paragraph.alt} className="block mx-auto w-[75%] self-center rounded-lg border border-gray-600 shadow-md hover:scale-105 transition-transform duration-300 brightness-85"/>}
                </div>
            )
            )}
        </div>
    )
}

export default Report;