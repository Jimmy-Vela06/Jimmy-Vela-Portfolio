import React from 'react';

import resumepdf from '../../assets/jimmy-vela-resume.pdf';

const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    // Replace 'example.pdf' with the actual filename
    const pdfFilePath = resumepdf;

    // Create a link element
    const a = document.createElement('a');
    a.href = pdfFilePath;
    a.download = 'downloaded_file.pdf';

    // Trigger a click on the link to initiate the download
    a.click();
  };

  return (
    <a className='resumeBtn' onClick={handleDownloadPDF}>
      Download PDF
    </a>
  );
};

export default DownloadPDFButton;
