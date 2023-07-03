export const Divider = ({ height = 1 }: { height?: number }) => {
  // const x = `h-[${height}rem]`
  return <div className={`w-full h-[${height}rem] flex`}></div>
}