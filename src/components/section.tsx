import './_section.scss'

// homepage sections component
type SectionPropsType = {
  direction: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  align: 'flex-start' | 'flex-end'
  bg: string
  alt: string
  btn: string
  title: string
  text: string
  link: string
}
const Section = ({ direction, align, bg, alt, btn, title, text, link }: SectionPropsType) => {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: direction,
    alignItems: align,
  }
  return (
    <section className='homepage-section' style={style}>
      <div className='textbox'>
        <li><span></span>{btn}</li>
        <h2>{title}</h2>
        <h5>{text}</h5>
        <a href="#">{link}</a>
      </div>
      <div className='imgbox'>
        <img src={bg} alt={alt} />
      </div>
    </section>
  )
}

export default Section