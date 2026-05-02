export interface Certificate {
  id: string;
  number: string;
  title: string;
  type: string;
  viewUrl?: string;
  downloadUrl?: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 'wadhwani',
    number: '01',
    title: 'WADHWANI',
    type: 'ENTREPRENEURSHIP CERTIFICATE',
    viewUrl: '/certificates/wadhwani.pdf',
    downloadUrl: '/certificates/wadhwani.pdf',
  },
  {
    id: 'data-analysis',
    number: '02',
    title: 'DATA ANALYSIS',
    type: 'CERTIFICATION',
    viewUrl: '/certificates/data-analysis.pdf',
    downloadUrl: '/certificates/data-analysis.pdf',
  },
  {
    id: 'hackathon',
    number: '03',
    title: 'LATEST HACKATHON',
    type: 'VICTORY CERTIFICATE',
    viewUrl: '/certificates/hackathon-victory.pdf',
    downloadUrl: '/certificates/hackathon-victory.pdf',
  },
];
