type SvgComponentType = {
  type: string
}
const ArrowLeft = () => {
  return (
    <svg className='arrow-left' width="43" height="15" viewBox="0 0 43 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.85303 0.235999L0.561364 7.52767L7.85303 14.8193L9.32594 13.3464L4.54886 8.56933L42.228 8.56934L42.228 6.486L4.54886 6.486L9.32594 1.70891L7.85303 0.235999Z" fill="white" />
    </svg>
  )
}
const ArrowRight = () => {
  return (
    <svg className='arrow-right' width="43" height="15" viewBox="0 0 43 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.936 14.8187L42.2277 7.52703L34.936 0.235358L33.4631 1.70827L38.2402 6.48536L0.561034 6.48535L0.561034 8.56869L38.2402 8.56869L33.4631 13.3458L34.936 14.8187Z" fill="white" />
    </svg>
  )
}
const ArrowDown = () => {
  return (
    <svg className='arrow-down' width="13" height="58" viewBox="0 0 13 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.96967 57.5303C6.26256 57.8232 6.73744 57.8232 7.03033 57.5303L11.8033 52.7574C12.0962 52.4645 12.0962 51.9896 11.8033 51.6967C11.5104 51.4038 11.0355 51.4038 10.7426 51.6967L6.5 55.9393L2.25736 51.6967C1.96447 51.4038 1.48959 51.4038 1.1967 51.6967C0.903806 51.9896 0.903806 52.4645 1.1967 52.7574L5.96967 57.5303ZM5.75 -3.84748e-06L5.75 57L7.25 57L7.25 -3.78191e-06L5.75 -3.84748e-06Z" fill="white" />
    </svg>
  )
}

const SvgComponent = ({ type }: SvgComponentType) => {
  switch (type) {
    case 'arrow-left':
      return <ArrowLeft />
    case 'arrow-right':
      return <ArrowRight />
    case 'arrow-down':
      return <ArrowDown />
    default:
      return null
  }
}

export default SvgComponent