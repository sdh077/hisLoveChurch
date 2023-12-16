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
        'text-sm not-italic font-nanum',
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
        <div className='font-nanum'>서울 강남구 영동대로 229</div>
          <div className='font-nanum'>6층 DLAB(대치동 자연드림)</div>
        </Office>
      </li>
      <li>
        <Office name="목사님 사무실" invert={invert}>
          <div className='font-nanum'>서울 서초구 강남대로 6길 28-11</div>
          <div className='font-nanum'>남석빌딩 3층</div>
        </Office>
      </li>
    </ul>
  )
}
