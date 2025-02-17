interface RadioButtonProps {
  title: string,
  data: Array<{
    label: string,
    value: string,
  }>
}

export const SizesRadioButton = ({title, data}: RadioButtonProps) => {
  return (
    <div>
      <p className="text-sm mb-2 text-gray-light-2">{title}</p>
      <div className="flex flex-wrap">
        {
          data.map((item, index) => {
            return (
              <div key={index}
                   className="mr-4 mb-2 w-[30px] h-[30px] rounded-lg flex justify-center items-center bg-white2 cursor-pointer group hover:bg-gold-hover">
                <span className="text-black-main text-xs font-medium group-hover:text-white">{item.label}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}