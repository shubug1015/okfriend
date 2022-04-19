interface IProps {
  pageName: string;
}

export default function MenuBar({ pageName }: IProps) {
  return (
    <div className="flex items-center justify-center border-b border-[#ebebeb] bg-white text-[1.375rem] text-[#9e9e9e]">
      {pageName === "인사말" && (
        <div>
          <button className="h-[4.188rem] w-[12.5rem] cursor-default border-b-4 border-[#2fb6bc] font-bold text-[#01111e]">
            인사말
          </button>
          <button className="h-[4.188rem] w-[12.5rem] font-bold">
            <a href="/summary">개요</a>
          </button>
          <button className="h-[4.188rem] w-[12.5rem] font-bold">
            <a href="/training-schedule">연수 편성표</a>
          </button>
        </div>
      )}

      {pageName === "개요" && (
        <div>
          <button className="font-bol h-[4.188rem] w-[12.5rem]">
            <a href="/greeting">인사말</a>
          </button>
          <button className="h-[4.188rem] w-[12.5rem] cursor-default border-b-4 border-[#2fb6bc] font-bold text-[#01111e]">
            개요
          </button>
          <button className="h-[4.188rem] w-[12.5rem] font-bold">
            <a href="/training-schedule">연수 편성표</a>
          </button>
        </div>
      )}

      {pageName === "연수 편성표" && (
        <div>
          <button className="h-[4.188rem] w-[12.5rem] font-bold">
            <a href="/greeting">인사말</a>
          </button>
          <button className="h-[4.188rem] w-[12.5rem] font-bold">
            <a href="/summary">개요</a>
          </button>
          <button className="h-[4.188rem] w-[12.5rem] cursor-default border-b-4 border-[#2fb6bc] font-bold text-[#01111e]">
            연수 편성표
          </button>
        </div>
      )}
    </div>
  );
}
