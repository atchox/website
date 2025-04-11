const Tooltip = ({ children, text }) => (
  <span className="group relative">
    {children}
    <span className="absolute top-full left-1/2 z-10 mt-2 hidden -translate-x-1/2 transform rounded bg-gray-800 px-2 py-1 text-xs text-white group-hover:block">
      {text}
    </span>
  </span>
)

export default Tooltip
