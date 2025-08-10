type Paragraph = {
    text: string, 
    image: string, 
    alt: string
  } | {
    text: string, 
    image?: undefined, 
    alt?: undefined
  }

export type ReportType = Paragraph[];