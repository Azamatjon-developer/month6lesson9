import React, { useState } from 'react'
import {
  ModeICon,
  SaveIcon,
  GifIcon,
  StatsIcon,
  SmileIcon,
  ScheduleIcon,
} from '../../assets/images/icons'

import Avatar from '../../assets/images/BobirAVa.svg'
import DesignstaImg from '../../assets/images/Designsta.svg'
import cloutexhibitionImg from '../../assets/images/cloutexhibition.svg'
import CreativePhotoImg from '../../assets/images/CreativePhoto.svg'
import KebabImg from '../../assets/images/kebab.svg'
import Button from '../../components/Button'
import PostItem from '../../components/PostItem'
function Home() {
  const token = JSON.parse(localStorage.getItem('token'))
  const [postValue, setPostValue] = useState('')
  const [postImage, SetPostImage] = useState('')
  const [postList, setPostList] = useState([
    {
      id: 1,
      name: token?.login,
      imgUrl: Avatar,
      email: '@inner · 25m',
      description:
        "Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?",
      commentCount: null,
      replyCount: null,
      likeCount: null,
      uploadCount: null,
      statisticCount: null,
      postImage: null,
    },
    {
      id: 2,
      name: 'cloutexhibition',
      imgUrl: cloutexhibitionImg,
      email: '@RajLahoti · 22m',
      description:
        'YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.',
      commentCount: null,
      replyCount: '5',
      likeCount: '9',
      uploadCount: null,
      statisticCount: null,
      postImage: null,
    },
    {
      id: 3,
      name: 'CreativePhoto',
      imgUrl: CreativePhotoImg,
      email: '@cloutexhibition · 1h',
      description: 'Обетда .... Кечиринглар',
      commentCount: '10',
      replyCount: '1',
      likeCount: '8',
      uploadCount: null,
      statisticCount: null,
      postImage: KebabImg,
    },
  ])

  function handleSubmitPost(e) {
    e.preventDefoult()
    const data = {
      id: postList.length ? postList[postList.length - 1].id + 1 : 1,
      name: 'Designsta',
      imgUrl: DesignstaImg,
      email: '@inner · 25m',
      description: e.target.postValue.value,
      commentCount: null,
      replyCount: null,
      likeCount: null,
      uploadCount: null,
      statisticCount: null,
      postImage: postImage,
    }
    console.log(data)
  }
  return (
    <div className="w-[80%] ">
      <div className="w-[70%] border-r-[1px] border-slate-500 h-[100vh] overflow-y-auto">
        <div className="p-[20px]  border-b-[1px] sticky top-0 z-50 bg-white border-slate-500 flex items-center justify-between">
          <h2 className="text-[#000000] text-[24px]  font-bold">Home</h2>
          <button>
            <ModeICon />
          </button>
        </div>
        <form
          onSubmit={handleSubmitPost}
          autoComplete="off"
          className="pb-[46px] relative pl-[22px] flex items-start border-b-[1px] border-slate-500 space-x-[15px]"
        >
          <img src={Avatar} alt="AvatarImage" width={60} height={60} />
          <div className="flex flex-col w-full  mt-[11px]">
            <input
              onChange={(e) => setPostValue(e.target.value)}
              className="font-semibold text-[22px] mb-[53px] placeholder:text-[#828282] outline-none"
              type="text"
              placeholder="What’s happening"
              name="postValue"
            />
            <div className="flex space-x-[22px]">
              <label>
                <input
                  onChange={(e) => SetPostImage(URL.createObjectURL(e.target.files[0]))}
                  type="file"
                  className="hidden"
                />
              </label>
              <label>
                <input
                  onChange={(e) =>
                    SetPostImage(URL.createObjectURL(e.target.files[0]))
                  }
                  type="file"
                  className="hidden"
                />
                <SaveIcon />
              </label>
              <label>
                <input type="file" className="hidden" />
                <GifIcon />
              </label>
              <label>
                <input type="file" className="hidden" />
                <StatsIcon />
              </label>
              <label>
                <input type="file" className="hidden" />
                <SmileIcon />
              </label>
              <label>
                <input type="file" className="hidden" />
                <ScheduleIcon />
              </label>
            </div>
          </div>

          <Button
            extraStyle={`!w-[108px] duration-300 absolute bottom-[5px] right-[18px] ${
              postValue ? '' : 'opacity-[40%]'
            }`}
            title={'Tweet'}
            type={'submit'}
          />
        </form>
        <ul>
          {postList.length > 0 &&
            postList.map((item) => <PostItem key={item.id} item={item} />)}
        </ul>
      </div>
      <div className="w-[30%]"></div>
    </div>
  )
}

export default Home
