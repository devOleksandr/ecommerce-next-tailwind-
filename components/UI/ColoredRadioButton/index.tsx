interface RadioButtonProps {
  title: string,
  data: Array<{
    colorVariable: string,
    label: string,
  }>
}

export const ColoredRadioButton = ({title, data}: RadioButtonProps) => {
  return(
    <div>
      <p className="text-sm mb-2 text-gray-light-2">{title}</p>
      <div className="flex flex-wrap">
        {
          data.map((item, index) => {
            return (
              <div key={index} className={`mr-4 mb-2 w-[30px] h-[30px] rounded flex justify-center items-center  cursor-pointer ${item.colorVariable}`}>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}