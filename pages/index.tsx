import React from 'react'
import Layout from '../components/Layout'
import Review from '../components/Review'
import {useHttp} from '../hooks/http.hook'
import styles from '../styles/index.module.sass'
import { Data } from '../types/types'

const Index: React.FunctionComponent = () => {
    const [reviews, setReviews] = React.useState<Data[]>([])

    const {loading, error, request} = useHttp()

    const getReviews = async (error: null | string) => {
        try {
            const data = await request('https://6076f0d51ed0ae0017d6a1e3.mockapi.io/reviews', 'GET')
            setReviews(data)
        } catch (e) {
            console.error(e, error)
        }
    } 

    React.useEffect(() => {
        getReviews(error)
    }, [])

  return (
    <Layout title="Home">
        <section>
            <div className={styles.aboutWrapper}>
                <h1 className={styles.aboutTitle}>about us</h1>
                <div className={styles.aboutReviews}>
                    {loading ? 'Loading...' : null}
                    {reviews ? 
                        reviews.map(r => {
                            return(
                                <Review 
                                    key={r.id}
                                    data={r}
                                />
                            )
                        }) : null} 
                </div>
            </div>
        </section>
      
    </Layout>
  )
}
export default Index