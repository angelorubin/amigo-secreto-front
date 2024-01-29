export const CustomCheckbox = (props) => {
  const { checked, width = 4, height = 4 } = props
  return (
    checked ?
      <label for="meuCheckbox" class="cursor-pointer" >
        <div className={`w-${width} h-${height} border border-gray-400 rounded flex items-center justify-center`}>
          <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
          </svg>
        </div>
      </label >
      :
      <label for="meuCheckbox" class="cursor-pointer">
        <div className={`w-${width} h-${height} border border-gray-400 rounded flex items-center justify-center`}></div>
      </label>
  )
}
