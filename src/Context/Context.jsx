import { createContext, useState } from 'react'

const Context = createContext()

const TokenContext = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(window.localStorage.getItem("token")) || false)
  window.localStorage.setItem("token", JSON.stringify(token))

  const [postList, setPostList] = useState(JSON.parse(window.localStorage.getItem("postsList")) || [
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

  window.localStorage.setItem("postsList", JSON.stringify(postList))
  
  return (
    <Context.Provider value={{ token, setToken,postList, setPostList }}>{children}</Context.Provider>
  )
}

export {Context,TokenContext}