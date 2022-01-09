import React from 'react'

import home_1 from '../../../../../assets/images/home/home_1.jpg'
import share from '../../../../../assets/images/home/share.png'
import like from '../../../../../assets/images/home/like.png'
import comment from '../../../../../assets/images/home/comment.png'
import promote from '../../../../../assets/images/home/promote.png'
import add from '../../../../../assets/images/home/add.png'
import VideoContainer from '../../../../../components/common/VideoContainer'
import OwlCarousel from 'react-owl-carousel';

const OfficialVideos = () => {
    return (
        <div>
            <h5>Official Videos</h5>
            <OwlCarousel items={3}
                className="owl-carousel"
                loop
                nav
                margin={18}
            >
                {/* render video containers */}

                <VideoContainer
                    profileImg={home_1}
                    title={"Flight From Shadow (fan film)..."}
                    views={"4,147,102 views"}
                    date={"Dec 2, 2021"}
                    description={"McGrew Studios"}
                    button={'Follow'}
                    likeImg={like}
                    addImg={add}
                    commentImg={comment}
                    shareImg={share}
                    promoteImg={promote}
                    url={'https://www.youtube.com/embed/ddkZevbhc5o'}
                />
                <VideoContainer
                    url={'https://www.youtube.com/embed/HeibOX7IOOM'}
                    profileImg={home_1}
                    title={"Flight From Shadow (fan film)..."}
                    views={"4,147,102 views"}
                    date={"Dec 2, 2021"}
                    description={"McGrew Studios"}
                    button={'Follow'}
                    likeImg={like}
                    addImg={add}
                    commentImg={comment}
                    shareImg={share}
                    promoteImg={promote}
                />
                <VideoContainer
                    url={'https://www.youtube.com/embed/ddkZevbhc5o'}
                    profileImg={home_1}
                    title={"Flight From Shadow (fan film)..."}
                    views={"4,147,102 views"}
                    date={"Dec 2, 2021"}
                    description={"McGrew Studios"}
                    button={'Follow'}
                    likeImg={like}
                    addImg={add}
                    commentImg={comment}
                    shareImg={share}
                    promoteImg={promote}
                />
                <VideoContainer
                    url={'https://www.youtube.com/embed/HeibOX7IOOM'}
                    profileImg={home_1}
                    title={"Flight From Shadow (fan film)..."}
                    views={"4,147,102 views"}
                    date={"Dec 2, 2021"}
                    description={"McGrew Studios"}
                    button={'Follow'}
                    likeImg={like}
                    addImg={add}
                    commentImg={comment}
                    shareImg={share}
                    promoteImg={promote}
                />
            </OwlCarousel>


        </div>
    )
}

export default OfficialVideos
