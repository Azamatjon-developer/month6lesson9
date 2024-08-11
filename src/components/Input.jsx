function Input( {name, placeholder, type,ExtraClass,isRequired}) {
  console.log(placeholder)

  return (
    <div>
      <input required = {isRequired}
        className={`w-full focus:shadow-2xl duration-300 py-[23px] pl-[20px] border-[1px] border-slate-500 rounded-[6px] text-18px text-slate-500  outline-none  ${ExtraClass}`}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      
    </div>
    
  )
}

export default Input
