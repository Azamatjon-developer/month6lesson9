import React, { useContext, useState } from 'react'
import {
  DotsIcon,
  CommentIcon,
  ReplyIcon,
  LikeIcon,
  UploadIcon,
  StatisticIcon,
} from '../assets/images/icons'
import { Context } from '../Context/Context'

function PostItem({ item }) {
  const {postList,setPostList} = useContext(Context)

  function handleCommentClickBtn (params) {
    params.isCommented = !params.isCommented
    params.commentCount = params.isCommented ? ++params.commentCount : --params.commentCount
    if(params.commentCount == 0) {
      params.commentCount = null
      setPostList([...postList])
    } 
  }

  return (
    <li className="flex items-start space-x-[15px] pt-[10px] pb-[21px] px-[25px] border-b-[1px] border-slate-500  relative">
      <img src={item.imgUrl} alt="avatarImage" width={60} height={60} />

      <div className="">
        <div>
          <div className="flex space-x-[5px]">
            <strong> {item.name} </strong>
            <span> {item.email} </span>
          </div>
          <p> {item.description} </p>
        </div>
        {item.postImage ? (
          <img
            className="mt-[15px]"
            src={item.postImage}
            alt="postImage"
            width={679}
            height={453}
          />
        ) : (
          ''
        )}
        <div className="flex items-center justify-between mt-[22px]">
          <button onClick={() => handleCommentClickBtn(item) } className={`${item.isCommented ? 'text-blue-500' : "text-slate-[#536471]"}  flex items-center space-x-[10px]`}>
            <CommentIcon />
            <span> {item.commentCount} </span>
          </button>

          <button className="text-slate-[#536471] flex items-center space-x-[10px]">
            <ReplyIcon />
            <span> {item.replyCount} </span>
          </button>

          <button className="text-slate-[#536471] flex items-center space-x-[10px]">
            <LikeIcon />
            <span> {item.likeCount} </span>
          </button>

          <button className="text-slate-[#536471] flex items-center space-x-[10px]">
            <UploadIcon />
            <span> {item.uploadCount} </span>
          </button>

          <button className="text-slate-[#536471] flex items-center space-x-[10px]">
            <StatisticIcon />
            <span> {item.statisticCount} </span>
          </button>
        </div>
      </div>
      <button className="absolute top-[21px] right-[25px]">
        <DotsIcon />
      </button>
    </li>
  )
}

export default PostItem
