import Outline from './../components/outline';
import Movies from './../components/movies';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <Outline component={<Movies />} />
  )
}
