import Image from "next/image";
import Bg1 from "@public/training-introduction/bg1.png";
import Sign1 from "@public/training-introduction/sign1.png";
import Bg2 from "@public/training-introduction/bg2.png";
import Sign2 from "@public/training-introduction/sign2.png";

export default function Online() {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-full w-full">
            <Image
              src={Bg1}
              alt="Background Image1"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex w-[61.25rem] justify-end">
            <div className="w-[32rem] pt-[13.125rem] pb-[18.625rem]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 28V2H28" stroke="#F8F8F8" stroke-width="4" />
              </svg>

              <div className="ml-[1.625rem]">
                <div className="text-xl font-bold text-white">
                  2022 재외동포 대학생 온라인연수
                </div>
                <div className="mt-[15px] text-[2.5rem] leading-[55px] text-white">
                  온라인연수에 참여한 여러분,
                  <br />
                  <span className="font-bold text-[#2fb6bc]">
                    진심으로 환영합니다.
                  </span>
                </div>
              </div>

              <div className="flex translate-y-[-20] justify-end">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 0L26 26L0 26"
                    stroke="#F8F8F8"
                    stroke-width="4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-[-5.687rem] h-[35.875rem] w-[61.25rem] bg-slate-400" />
      </div>

      <div className="flex flex-col items-center pb-20">
        <div className="mt-10 w-[61.25rem] text-[1.875rem] font-bold leading-6 text-[#01111e]">
          2022 재외동포 대학생 온라인연수에 참여한 여러분, 진심으로 환영합니다.
        </div>
        <div className="mt-[1.813rem] w-[61.25rem] text-[1.125rem] font-normal leading-[1.65rem] text-[#6b6b6b]">
          코로나19 팬데믹으로 인하여 올해는 온라인을 통해 여러분들을 만나게
          되었습니다.
          <br />
          금년도 대회는 ‘온라인 연수’를 시작으로 재외동포 대학생 여러분들이 모국
          대한민국의 역사와 문화, 전통과 현대를 두루 체험할 수 있도록 다양한
          교육 콘텐츠로 구성하였습니다.
          <br />
          <br />
          재외동포 대학생 여러분!
          <br />
          세계가 하나로 연결된 ‘글로벌 시대’ 속 재외동포 대학생 여러분들은
          한민족 정체성을 지닌 ‘세계 한인’이자 널리 인간세계를 이롭게 하는
          홍익인간의 가치를 실현할 수 있는 ‘세계시민’입니다. 이번 모국연수
          참여를 통해 좋은 친구들 많이 만나시고 앞으로 세계 무대에서 활약할
          여러분들의 모습도 마음껏 그려보시기를 바랍니다.
          <div className="mt-[2.375rem] text-right">
            <Image
              src={Sign1}
              alt="Sign Image1"
              objectFit="cover"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-1/2 z-[-1] h-full w-full -translate-x-1/2 -translate-y-1/2">
          <div className="relative h-full w-full">
            <Image
              src={Bg2}
              alt="Background Image2"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex w-[61.25rem] justify-end">
            <div className="w-[450px] pt-[13.125rem] pb-[18.625rem]">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 28V2H28" stroke="#F8F8F8" stroke-width="4" />
              </svg>

              <div className="ml-[1.625rem]">
                <div className="text-xl font-bold text-white">
                  재외동포 대학생 온라인연수에 참여한
                </div>
                <div className="mt-[15px] text-[2.5rem] leading-[55px] text-white">
                  재외동포 대학생 여러분,
                  <br />
                  <span className="font-bold text-[#2fb6bc]">
                    진심으로 반갑습니다.
                  </span>
                </div>
              </div>

              <div className="flex translate-y-[-20px] justify-end">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 0L26 26L0 26"
                    stroke="#F8F8F8"
                    stroke-width="4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-[-5.687rem] h-[35.875rem] w-[61.25rem] bg-slate-400" />
      </div>

      <div className="flex flex-col items-center pb-[3.921rem]">
        <div className="mt-10 w-[61.25rem] text-[1.875rem] font-bold leading-[2.813rem] text-[#01111e]">
          재외동포 대학생 온라인연수에 참여한 재외동포 대학생 여러분,
          반갑습니다.
        </div>
        <div className="mt-[2.188rem] w-[61.25rem] text-[1.125rem] font-normal leading-[1.856rem] text-[#9e9e9e]">
          코로나19가 우리 삶의 많은 부분들을 바꾸고 있습니다.
          <br />
          매년 여름이 되면, 세계 곳곳에서 자랑스런 세계한인 청년들이 모국
          대한민국에 모여 열정 넘치는 연수 활동을 펼쳐 왔습니다.
          <br />
          하지만 코로나19로 인해 우리는 한 공간에 모이는 것은 잠시 뒤로
          <br />
          미루고 온라인을 통해 만나게 되었습니다.
          <br />
          <br />
          환경은 다르지만, 우리의 마음은 같습니다. 온라인을 통해 세계한인
          청년들은 대한민국의 문화와 역사를 배우고, 각자의 거주국가에서 배운
          것을 실천하게 될 것입니다. 그리고 코로나19가 끝나고 다시 만나는 그
          시간에 우리는 각자의 소중한 경험을 나누고 하나의 민족, 세계를 향하는
          청년들의 열정을 공유하게 될 것입니다.
          <br />
          <br />
          여러분의 열정 어린 참여가 2021 재외동포 대학생 온라인연수를 더욱
          빛나게 할 것입니다.
          <br />
          온라인 컨텐츠를 통해 제공되는 소중한 자료들을 통해 여러분은 모국
          대한민국의 여러 가지를 배우게 될 것입니다.
          <br />그 배움 속에서 함께 공유하고, 나누는 모든 가치와 생각들은 새로운
          나를 발견하는 소중한 경험의 시작이 될 것입니다.
          <br />
          <br />
          모쪼록 2021 온라인 연수를 통해 여러분의 삶에 새로운 경험이 더해지고,
          한민족 공동체의 일원이자 세계한인의 리더로 성장하는 기회가 되기를
          바랍니다. 감사합니다.
          <div className="mt-[2.375rem] text-right">
            <Image
              src={Sign2}
              alt="Sign Image2"
              objectFit="cover"
              placeholder="blur"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
