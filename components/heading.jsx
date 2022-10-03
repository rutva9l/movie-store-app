const Heading = ({heading}) => {
    return <div className="flex items-center mb-2">
        <span className="w-[10px] h-full bg-[#060606] relative mr-3 rounded-[3px]">.</span>
        <span className="font-bold text-lg">{heading}</span>
    </div>
}

export default Heading