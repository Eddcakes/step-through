import { PDFDownloadLink } from '@react-pdf/renderer';

import { Download } from '../assets/icons/Download';
import { WalkthroughPDF } from './WalkthroughPDF';

export function DownloadButton({ disabled, handleClick, content }) {
  return (
    <PDFDownloadLink
      className={`
      inline-flex
      font-medium
      border
      rounded
      p-2
      hover:bg-gray-200
      disabled:opacity-50
      disabled:cursor-not-allowed
      disabled:bg-gray-200
    `}
      document={<WalkthroughPDF content={content} />}
      fileName={`${content.title}.pdf`}
    >
      {({ blob, url, loading, error }) =>
        loading ? (
          'Loading document...'
        ) : (
          <>
            <Download />
            <span>Download PDF</span>
          </>
        )
      }
    </PDFDownloadLink>
  );
}
