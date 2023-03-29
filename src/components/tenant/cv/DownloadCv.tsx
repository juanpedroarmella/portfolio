import { useMemo, useState } from 'react'
import { Button } from '@mui/material'
import { saveAs } from 'file-saver'
import { ToastContainer, toast } from 'react-toastify'
import useTranslation from 'next-translate/useTranslation'
import { Download } from '@mui/icons-material'

const DownloadCV: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState<boolean>(false)

  const { t, lang } = useTranslation('cv')

  const { pdfName, pdfUrl } = useMemo(() => {
    const pdfName =
      lang === 'en'
        ? 'CV Juan Pedro Armella (English)'
        : 'CV Juan Pedro Armella (Español)'

    const pdfUrl = `/${pdfName}.pdf`

    return { pdfName, pdfUrl }
  }, [lang])

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response: Response = await fetch(pdfUrl)
      const blob: Blob = await response.blob()
      saveAs(blob, pdfName)
    } catch (error: unknown) {
      if (error instanceof Error) {
        const textError: string = t('error-downloading')
        toast.error(textError, {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      }
    }
    setIsDownloading(false)
  }

  return (
    <>
      <Button
        data-testid='download-cv-button'
        aria-label='Download my cv'
        variant='contained'
        onClick={handleDownload}
        disabled={isDownloading}
        startIcon={<Download />}>
        {isDownloading ? t('downloading') : t('download')}
      </Button>
      <ToastContainer />
    </>
  )
}

export default DownloadCV
