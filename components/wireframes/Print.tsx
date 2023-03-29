import clsx from 'clsx'
import Image from 'next/image'

interface PrintWireframeProps {
  srcImage: string
}

function PrintWireframe({ srcImage }: PrintWireframeProps) {
  return (
    <div
      className={clsx(
        'h-full w-full bg-white p-4 text-sm text-slate-600',
        'relative dark:bg-slate-900 dark:text-slate-400'
      )}
    >
      <Image src={srcImage} alt="Print do site" fill priority sizes="(min-width: 1024px) 598px" />
    </div>
  )
}

export default PrintWireframe
