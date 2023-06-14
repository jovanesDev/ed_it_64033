import { useState,useEffect } from 'react'
import { cards } from '../../config'
import Card from '../Card/Card';

const Feed = () => {

    const [loading,setLoading] = useState(true);
    const [feeds,setFeed] = useState([])
    const [err,setError] = useState(false)
    const [posted,setPosted] = useState(false)



    useEffect(() => {
      // manipulo el Mount!
      const result = new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(cards)
        }, 3000);
      })
      result.then((res) => {
        setFeed(res)
        setLoading(false)
      }).catch((err) => {
        console.log(err)
        setError(true)
        setLoading(false)
      })
      return () => {
        setFeed([])
        setError(false)
        setLoading(true)
        // manipulo el Dismount
      }
    }, [loading]) // manipulo el Change


    // useEffect(() => {
    //   // get/feed 
    //   // setPosted(false)
    
    //   return () => {
    //     //
    //   }
    // }, [posted])
    
    

    // const generOrden = () => {
    //         // post => api/my/fotos 
    //         //<= OK 
    //         setPosted(true)

    // }

    


    // Ciclo de vida que tiene 3 estados posbiles 
    // Cuando Carga => Mount 
    // Cuando Cambia => Change 
    // Cuando Mueres => Dismount

    // => await result = /api/instagram/feeds // en cuanto tiempo me va dar respues ?

  return (
    <div>
        {loading && <h1>Cargando...</h1>}
        {(!loading && err) &&  <h1>Opps, Algo fue mal , recarga la pagina</h1>}
        {(!loading && feeds.length > 0) && feeds.map((feed,index) => {
            return <Card {...feed} key={index} />
        } ) }
    </div>
  )
}

export default Feed