import StarInactive from '../../assets/star-inactive.svg'
import Star from '../../assets/star.svg'
import '../../assets/style.scss'

function Rating({ rating }) {
  const note = Number(rating);
  return (
    <div>
      {Array(note).fill(1).map((el, index) => (<img src={Star} key={index} alt="Etoile" />) )}
      {Array(5 - note).fill(1).map((el, index) => (<img src={StarInactive} key={index} alt="Etoile" />) )}
    </div>
  )
}

export default Rating