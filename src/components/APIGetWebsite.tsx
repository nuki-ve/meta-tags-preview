import axios from "axios"
import { useEffect, useState } from "react"

export default function APIGetWebsite({ website = '' }) {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get(`https://share-tags-api.onrender.com/${website}`)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [website])

  return (
    <div>
      data: <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}