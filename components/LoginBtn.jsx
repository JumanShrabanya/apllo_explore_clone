import React from 'react'

const LoginBtn = ({otherStyles,btnText,icon}) => {
  return (
    <button className={`${otherStyles} flex items-center justify-center gap-2 rounded-lg border-[1px] border-greeenborder text-greeenborder px-4 py-2 cursor-pointer overflow-hidden`}>
        {btnText}
        {icon}
    </button>
  )
}

export default LoginBtn