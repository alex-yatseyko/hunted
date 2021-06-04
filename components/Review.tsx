import React from 'react'
import styles from '../styles/index.module.sass'
import { Data } from '../types/types'
import Rating from '../components/Rating'

import Trustpilot from '../assets/img/trustpilot.svg'
import Glassdoor from '../assets/img/glassdoor.svg'
import Sourcr from '../assets/img/sourcr.svg'

type ReviewProps = {
    key: React.Key,
    data: Data
}

type LogosType = {
    [key: string]: {
        img: JSX.Element,
        color: string,
    },
  }

const logos: LogosType = {
    'Glassdoor': {
        img: <Glassdoor />,
        color: '#31af40'
    },
    'sourcr': {
        img: <Sourcr />,
        color: '#E94878'
    },
    'Trustpilot': {
        img: <Trustpilot />,
        color: '#00B67A'
    },
}

const Review:React.FC<ReviewProps> = ({ data }) => {
    return (
        <a target="_blank" href={data.url}>
            <div className={styles.reviewWrapper}>
                {logos[`${data.name}`].img}

                <div>
                    <Rating stars={data.stars} color={logos[`${data.name}`].color}/>
                    <p>{data.stars && data.reviews ? `${data?.stars} from ${data?.reviews} reviews` : 'No reviews'}</p>
                </div>
            </div>
        </a>
    )
}

export default Review
