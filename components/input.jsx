const Input = ({id, title, type, value, onChange}) => {
    return <div className="flex flex-col">
        <label htmlFor={id} className='text-[#323335]'>{title}</label>
        <input type={type} id={id} name={id} className="border-[1px] border-zinc-200 px-2 py-1 rounded-md" value={value} onChange={onChange}  />
    </div>
}

export default Input