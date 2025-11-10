import { useEffect, useState } from "react"
import APIGetWebsite from "./components/APIGetWebsite"

export default function App() {
  const [search, setSearch] = useState('')

  useEffect(() => {
    setSearch(window.location.search)
  }, [])

  const urlParams = new URLSearchParams(search)
  const website = urlParams.get('website')

  return (
    <div>
      {website && <APIGetWebsite website={website} />}
    </div>
  )
}