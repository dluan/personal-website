import clsx from 'clsx'

interface NpmWireframeProps {
  items: string[]
}

function NpmWireframe({ items }: NpmWireframeProps) {
  return (
    <div
      className={clsx(
        'flex h-full w-full flex-col space-y-4 bg-white p-4 text-sm text-slate-600',
        'dark:bg-slate-900 dark:text-slate-400'
      )}
    >
      {items.map((item, index) => (
        <div
          key={`project-${index}`}
          className={clsx(
            'border-divider-light border-l-4 bg-slate-200/40 p-2 px-4',
            'dark:border-divider-dark dark:bg-slate-100/5'
          )}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default NpmWireframe
