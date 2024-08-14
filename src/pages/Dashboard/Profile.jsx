import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { ModeICon, SearchIcon, SettingsIcon } from '../../assets/images/icons'
import ProfileHero from '../../assets/images/ProfileHero.png'
import BoburAvatar from '../../assets/images/BobirAVa.svg'
import Button from '../../components/Button'
import { Context } from '../../Context/Context'
import PostItem from '../../components/PostItem'
import Mushtariy from '../../assets/images/Mushtariy.png'
import Shuxratbek from '../../assets/images/Shuxratbek.png'
import ProfileRigth from "../../assets/images/ProfileRigth.png"
import Trends from '../../components/Trends'
function Profile() {
  const token = JSON.parse(window.localStorage.getItem('token'))
  const { postList, setPostList } = useContext(Context)

  return (
    <>
      <div className="w-[70%] border-r-[1px] border-slate-500 h-[100vh] overflow-y-auto">
        <div className="p-[20px]  border-b-[1px] sticky top-0 z-50 bg-white border-slate-500 flex items-center justify-between">
          <h2 className="text-[#000000] text-[24px]  font-bold"> Profile </h2>
          <button>
            <ModeICon />
          </button>
        </div>

        <div className="">
          <div className="flex items-center gap-[40px] pt-[22px] pl-[31px]">
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            <h2 className="text-[20px] font-semibold">Bobur</h2>
          </div>
          <p className="pt-[4px] pl-[31px]">1,070 Tweets </p>
          <div className="h-[280px] relative">
            <img src={ProfileHero} alt="ProfileHero" width={910} height={280} />
            <div className="flex justify-between items-end px-[25px] -translate-y-[80px]">
              <img
                src={BoburAvatar}
                alt="avatar image"
                width={150}
                height={150}
              />
              <Button
                title={'Edit profile'}
                extraStyle={`py-[10px] bg-transparent !text-black  !border-[2px] border-slate-500 !w-[120px]`}
              />
            </div>
            <div className="mt-[10px] pl-[25px]">
              <h2 className="text-[#000000] text-[24px] font-semibold">
                Bobur
              </h2>
              <h3 className="text-[16px]">@bobur_mavlonov</h3>
              <h3>
                UX&UI designer at{' '}
                <span className="text-[#1DA1F2]"> @abutechuz </span>{' '}
              </h3>
              <div className="flex justify-around items-center mt-[15px]">
                <div className="flex items-center gap-[5px]">
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                  <h3 className="text-slate-500">Mashag’daman</h3>
                </div>
                <div className="flex items-center gap-[5px]">
                  <FontAwesomeIcon icon="fa-solid fa-link" />
                  <p className="text-[#1DA1F2]"> t.me/boburjon_mavlonov</p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <FontAwesomeIcon icon="fa-solid fa-golf-ball-tee" />
                  <p className="text-slate-500"> Born November 24, 2000 </p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <FontAwesomeIcon icon="fa-solid fa-calendar" />
                  <p className="text-slate-500">Joined May 2020 </p>
                </div>
              </div>
              <div className="flex items-center gap-[35px] mt-[15px]">
                <div className="flex items-center gap-[5px]">
                  <h3>67</h3>
                  <p>Following </p>
                </div>
                <div className="flex items-center gap-[5px]">
                  <h3>47</h3>
                  <p>Followers</p>
                </div>
              </div>
              <div className="flex items-center gap-[167px] mt-[40px]">
                <h3>Tweets</h3>
                <h3>Tweets & replies</h3>
                <h3>Media</h3>
                <h3>Likes</h3>
              </div>
              <div className="flex items-center gap-[15px] mt-[15px]">
                <FontAwesomeIcon icon="fa-solid fa-thumbtack" />
                <h3>Pinned Tweet</h3>
              </div>
              <div className="mt-[25px]">
                {postList
                  .filter((list) => list.name == token.login)
                  .map((item) => (
                    <PostItem key={item.id} item={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
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
       <div className='mt-[11px] p-[20px]'>
        <img src={ProfileRigth} alt="profileRight" />
       </div>
     
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
      </div>
    </>
  )
}

export default Profile
