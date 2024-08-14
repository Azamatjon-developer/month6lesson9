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
  const { postList, setPostList } = useContext(Context)

  function handleCommentClickBtn(value) {
    const updatedPostList = postList.map((post) => {
      if (post.id === value.id) {
        post.isCommented = !post.isCommented
        post.commentCount = post.isCommented ? (post.commentCount || 0) + 1 : (post.commentCount || 0) - 1
        if (post.commentCount === 0) {
          post.commentCount = null
        }
      }
      return post
    })
    setPostList([...updatedPostList])
  }

  function handleReplyClickBtn(value) {
    const updatedPostList = postList.map((post) => {
      if (post.id === value.id) {
        post.isReplyed = !post.isReplyed
        post.replyCount = post.isReplyed ? (post.replyCount || 0) + 1 : (post.replyCount || 0) - 1
        if (post.replyCount === 0) {
          post.replyCount = null
        }
      }
      return post
    })
    setPostList([...updatedPostList])
  }

  return (
    <li className="flex items-start space-x-[15px] pt-[10px] pb-[21px] px-[25px] border-b-[1px] border-slate-500 relative">
      <img src={item.imgUrl} alt="avatarImage" width={60} height={60} />

      <div>
        <div>
          <div className="flex space-x-[5px]">
            <strong>{item.name}</strong>
            <span>{item.email}</span>
          </div>
          <p>{item.description}</p>
        </div>
        {item.postImage && (
          <img
            className="mt-[15px]"
            src={item.postImage}
            alt="postImage"
            width={679}
            height={453}
          />
        )}
        <div className="flex items-center justify-between mt-[22px]">
          <button
            onClick={() => handleCommentClickBtn(item)}
            className={`${item.isCommented ? 'text-blue-500' : 'text-[#536471]'} flex items-center space-x-[10px]`}
          >
            <CommentIcon />
            <span>{item.commentCount !== null ? item.commentCount : ''}</span>
          </button>

          <button  onClick={() => handleReplyClickBtn(item)} className={`${item.isReplyed ? 'text-green-500' : 'text-[#536471]'} flex items-center space-x-[10px]`}>
            <ReplyIcon />
            <span>{item.replyCount}</span>
          </button>

          <button className="text-[#536471] flex items-center space-x-[10px]">
            <LikeIcon />
            <span>{item.likeCount}</span>
          </button>

          <button className="text-[#536471] flex items-center space-x-[10px]">
            <UploadIcon />
            <span>{item.uploadCount}</span>
          </button>

          <button className="text-[#536471] flex items-center space-x-[10px]">
            <StatisticIcon />
            <span>{item.statisticCount}</span>
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
