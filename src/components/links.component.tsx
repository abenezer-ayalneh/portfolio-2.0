
const titles = [
  "01 --- Work",
  "02 --- Projects",
  "03 --- Education",
]

export const Links = ({active = false}:{active?: boolean}) => {
  return <div className="flex justify-between w-[30.5625rem]">
    {
      titles.map((title, index) => <p className={`text-[1.25rem] leading-[123.99%] ${active ? 'text-[#7ED957]': 'text-white'}`} key={index}>{title}</p>)
    }
  </div>
}