import { FaEnvelope } from 'react-icons/fa6'

function EmailInput() {
  return (
    <label className="flex min-h-12 flex-1 items-center gap-2.5 rounded-full bg-white px-4 text-agrone-green sm:min-w-0">
      <FaEnvelope aria-hidden="true" className="size-4 shrink-0" />
      <input
        aria-label="Email address"
        autoComplete="email"
        className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-agrone-green/60"
        name="email"
        placeholder="Enter Email Address"
        required
        type="email"
      />
    </label>
  )
}

export default EmailInput
