import Portfolio from '../components/Portfolio'
import { items } from '../data'

export default function Home() {
  console.log(items)
  return (
    <Portfolio items={items} />
  )
}
