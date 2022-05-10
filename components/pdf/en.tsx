export default function PdfEn() {
  return (
    <div id='pdfFile' className='relative hidden h-[100rem] w-full bg-white'>
      <img src='/pdf.png' alt='PDF Image' className='object-contain' />

      <div
        id='pdfName'
        className='absolute left-1/2 top-0 translate-y-[35.6rem] -translate-x-1/2 font-sans text-4xl font-bold text-[#292E31]'
      >
        Dong Hyun Lee
      </div>
    </div>
  );
}
