import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="예배당" invert={invert}>
          서울 강남구 영동대로 229
          <br />
          6층 DLab
        </Office>
      </li>
      <li>
        <Office name="목사님 사무실" invert={invert}>
          서울 서초구 
          <br />
          7190, Billund, Denmark
        </Office>
      </li>
    </ul>
  )
}
