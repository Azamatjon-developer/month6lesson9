import React, { useContext, useState } from 'react'
import {
  ModeICon,
  SaveIcon,
  GifIcon,
  StatsIcon,
  SmileIcon,
  ScheduleIcon,
  SearchIcon,
  SettingsIcon,
} from '../../assets/images/icons'

import Avatar from '../../assets/images/BobirAVa.svg'
import DesignstaImg from '../../assets/images/Designsta.svg'
import Button from '../../components/Button'
import PostItem from '../../components/PostItem'
import Trends from '../../components/Trends'
import Mushtariy from '../../assets/images/Mushtariy.png'
import Shuxratbek from '../../assets/images/Shuxratbek.png'
import { Context } from '../../Context/Context'
function Home() {
  const {postList, setPostList} = useContext(Context)
  const token = JSON.parse(localStorage.getItem('token'))
  const [postValue, setPostValue] = useState('')
  const [postImage, setPostImage] = useState('')

  window.localStorage.setItem("postsList", JSON.stringify(postList))


  function handleSubmitPost(e) {
    e.preventDefault()
    const data = {
      id: postList.length ? postList[postList.length - 1].id + 1 : 1,
      name: token?.login,
      imgUrl: DesignstaImg,
      email: '@inner · 25m',
      description: postValue,
      commentCount: null,
      replyCount: null,
      likeCount: null,
      uploadCount: null,
      statisticCount: null,
      postImage: postImage,
    }
    setPostList([data, ...postList])
    setPostValue('')
    setPostImage('')
  }

  return (
    <>
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
              value={postValue}
              name="postValue"
            />
            <img src={postImage} alt="postimage" />

            <div className="flex space-x-[22px]">
              <label>
                <input
                  onChange={(e) =>
                    setPostImage(URL.createObjectURL(e.target.files[0]))
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
      <div className="w-[30%] h-screen overflow-y-auto">
        <div className="flex p-[25px] gap-[20px] bg-[#EFF3F4] rounded-[31px] m-[20px]">
          <SearchIcon />
          <input
            className="border-none outline-none bg-inherit"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
        <div className="flex justify-between items-center p-[12px]">
          <h3 className="text-[24px] font-bold">Trends for you</h3>
          <SettingsIcon />
        </div>
        <Trends />
        <Trends />
        <Trends />
        <p className="p-[15px] text-[18px] text-[#1DA1F2] mt-[30px]">
          Show more
        </p>
        <div className="mt-[40px] p-[20px]">
          <h3 className="text-[#000000] text-[24px] font-bold text-start">
            You might like
          </h3>
          <div className="flex justify-around items-center mt-[25px]">
            <img src={Mushtariy} alt="mushtariyIcon" />
            <p className="font-semibold">
              Mushtariy <br />{' '}
              <span className="text-slate-400">@Mushtar565266</span>{' '}
            </p>
            <button className="pt-[10px] pl-[18px] pb-[10px] pr-[18px] bg-[#000000] rounded-[50px] text-white text-[18px]">
              Follow
            </button>
          </div>
          <div className="flex justify-around items-center mt-[25px]">
            <img src={Shuxratbek} alt="mushtariyIcon" />
            <p className="font-semibold">
              Shuhratbek <br />{' '}
              <span className="text-slate-400">@mrshukhrat</span>{' '}
            </p>
            <button className="pt-[10px] pl-[18px] pb-[10px] pr-[18px] bg-[#000000] rounded-[50px] text-white text-[18px]">
              Follow
            </button>
          </div>
          <p className="p-[15px] text-[18px] text-[#1DA1F2] mt-[30px]">
            Show more
          </p>
          <p className='text-[#536471] mt-[30px]'>
            Terms of Service Privacy Policy Cookie Policy Imprint Ads Info More
            ··· © 2021 Twitter, Inc.
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
