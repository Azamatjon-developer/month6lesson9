import React, { useContext } from 'react'
import { TwitterLogo } from '../../assets/images/icons'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Context } from  "../../Context/Context"


function SignIn() {
  const { setToken } = useContext(Context)
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const data = {
      login: e.target.login.value.trim(),
      password:e.target.Password.value.trim()
    }
    if (data.login == "Azamat" && data.password == '999') {
      setToken(data)
      e.target.reset()
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmitLogin}
        autoComplete="off"
        className="w-[450px] mx-auto mt-[60px]"
      >
        <Link className="mb-[36px] inline-block" to={'/'}>
          <TwitterLogo />
        </Link>
        <h1 className="font-bold text-[42px] text-[#000000] mb-[36px]">
          Log in to Twitter
        </h1>
        <Input
          isRequired={true}
          placeholder={'Phone number, email address'}
          type={'text'}
          name={'login'}
          ExtraClass={'mb-[25px]'}
        />
        <Input
          isRequired={true}
          placeholder={'Password'}
          type={'Password'}
          name={'Password'}
          ExtraClass={'mb-[25px]'}
        />
        <Button title={'Login'} type={'submit'} />
        <div className="flex items-center justify-between mt-[40px]">
          <Link
            className="text-[#1DA1F2] text-[18px] mb-[25px]"
            to={'/sign-up'}
          >
            Forgot password?
          </Link>
          <Link
            className="text-[#1DA1F2] text-[18px] mb-[25px]"
            to={'/sign-up'}
          >
            Sign up to Twitter
          </Link>
        </div>
      </form>
    </div>
  )
}

export default SignIn
