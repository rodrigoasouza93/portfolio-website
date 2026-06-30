interface LogoMarkProps {
  className?: string
}

export default function LogoMark({ className }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Logo Rodrigo Souza"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="4"
        width="40"
        height="40"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M12 33V15h10.7c4.5 0 7.1 2.4 7.1 6 0 2.6-1.4 4.6-3.8 5.5l4.6 6.5h-6.2l-4-5.8h-3.1V33H12Zm5.3-10.1h5c1.4 0 2.2-.7 2.2-1.8s-.8-1.8-2.2-1.8h-5v3.6Z"
        fill="currentColor"
      />
      <path
        d="M30.8 32.8v-4.6h6.6c1.3 0 2-.5 2-1.4 0-.9-.7-1.4-2-1.4h-2.2c-3.1 0-5.1-1.9-5.1-5 0-3.3 2.4-5.4 6.5-5.4h6.2v4.6h-6.1c-1.2 0-1.8.5-1.8 1.3 0 .9.6 1.3 1.8 1.3h2.2c3.4 0 5.4 2 5.4 5.2 0 3.3-2.5 5.4-6.7 5.4h-6.8Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path
        d="M8 13h7M33 40v-7M40 15h-7"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        opacity="0.35"
      />
    </svg>
  )
}
