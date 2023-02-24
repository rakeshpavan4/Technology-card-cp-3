// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {key, title, description, imgUrl, className} = cardDetails

  return (
    <div className="smallcard">
      <li className={className}>
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} className="image" alt={title} />
      </li>
    </div>
  )
}
export default CardItem
