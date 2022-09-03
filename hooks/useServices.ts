import { useState, useEffect } from 'react'

export default function useServices<D>(service: (rest: any) => Promise<any>, param: {}, key: any[] = []): [D, boolean] {
  const [data, setData] = useState<D>([] as any)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const controller = new AbortController();
    const call = service({ signal: controller.signal, ...param })

    async function getData() {
      setLoading(true)
      const newData = await call.catch(() => [])
      setData(newData)
      setLoading(false)
    }
    
    getData()

    return () => {
      controller.abort()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [service, ...key])
  
  return [data as D, loading]
}