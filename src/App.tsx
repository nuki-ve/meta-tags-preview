import { useEffect, useState } from "react"

export default function App() {
  const [search, setSearch] = useState('')

  useEffect(() => {
    setSearch(window.location.search)
  }, [])

  const urlParams = new URLSearchParams(search)
  const website = urlParams.get('website')

  return (
    <div>
      website: {website}
    </div>
  )
}