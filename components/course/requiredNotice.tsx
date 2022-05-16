import { useLocale } from '@libs/client/useLocale';
import { cls, clsFilter } from '@libs/client/utils';

export default function RequiredNotice() {
  const { locale, text } = useLocale();
  return (
    <>
      <div
        className={cls(
          clsFilter(
            locale,
            'font-nexonBold text-4xl',
            'font-notoSans text-3xl',
            'font-notoSans text-4xl'
          ),
          'flex justify-center whitespace-pre-wrap font-bold md:justify-start md:text-xl'
        )}
      >
        <span className='text-[#d60a51]'>{text.preCourseRequired['1']} </span>
        {text.preCourseRequired['2']}
      </div>

      <div className='mt-9 md:mt-6'>
        <div className='flex h-[6.875rem] items-center justify-center border-t-2 border-[#d60a51] bg-[rgba(214,10,81,0.05)] md:h-24 md:px-6'>
          <svg
            viewBox='0 0 66 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='w-[4.125rem] md:w-14'
          >
            <path
              d='M53.1659 59.9982C53.4084 59.9982 53.6468 59.9446 53.8691 59.8374L57.2641 58.2215C57.6683 58.0319 57.9714 57.6897 58.1209 57.2651C58.2745 56.8405 58.2543 56.3788 58.0644 55.9707L54.3582 47.8622L60.1337 46.8069C60.9016 46.6667 61.1158 46.1514 61.1764 45.9371C61.233 45.7227 61.3017 45.1662 60.7035 44.6509L43.3164 29.6128C42.9688 29.3118 42.6495 29.25 42.4394 29.25C42.1565 29.25 41.8897 29.3613 41.6876 29.5674C41.526 29.7323 41.332 30.0415 41.336 30.5526L41.4532 53.8024C41.4572 54.6557 42.015 55.1009 42.5687 55.1009C42.7748 55.1009 43.0941 55.0391 43.4417 54.7464L47.9481 50.9127L51.6543 59.0212C51.9291 59.6148 52.5233 59.9982 53.1659 59.9982ZM48.417 48.7856C48.3604 48.7732 48.2998 48.7649 48.2391 48.7649C48.0532 48.7649 47.8673 48.8309 47.7218 48.9546L43.0739 52.912L42.9648 31.4637L59.0061 45.3352L53.0446 46.4235C52.7981 46.4688 52.5839 46.6296 52.4707 46.8563C52.3535 47.083 52.3495 47.351 52.4546 47.586L56.6053 56.6633C56.6134 56.6839 56.6013 56.7169 56.5851 56.7251L53.1901 58.341C53.178 58.3452 53.1538 58.374 53.1295 58.3204L48.9787 49.2431C48.8656 49.0123 48.6595 48.8433 48.417 48.7856Z'
              fill='#1D1D1B'
            />
            <path
              d='M12.3013 58.833C12.3902 58.8701 12.5398 58.9195 12.7297 58.9195C12.9924 58.9195 13.3279 58.8288 13.6876 58.4908L17.0341 55.7124L17.0785 55.6712C17.1796 55.5722 17.3574 55.5763 17.4584 55.6753L20.7079 58.4661C21.3223 59.0638 21.876 58.9195 22.0861 58.8288C22.3003 58.7381 22.8015 58.429 22.8015 57.5344V46.0745C22.8015 45.621 22.4377 45.25 21.9932 45.25C21.5486 45.25 21.1848 45.621 21.1848 46.0745V56.7223L18.5659 54.4757C17.8545 53.7914 16.7148 53.779 15.9913 54.451L13.2026 56.7636V46.1528C13.2026 45.6993 12.8388 45.3283 12.3943 45.3283C11.9497 45.3283 11.5859 45.6993 11.5859 46.1528V57.5344C11.59 58.4248 12.0871 58.7381 12.3013 58.833Z'
              fill='#1D1D1B'
            />
            <path
              d='M8.84653 39.3158C8.97586 39.6291 8.99203 40.132 9.00819 40.6184C9.04053 41.5088 9.0769 42.5147 9.76398 43.2196C10.4511 43.9204 11.4413 43.9575 12.3102 43.9905C12.7871 44.0069 13.2802 44.0276 13.5874 44.1553C13.8703 44.2749 14.2138 44.6047 14.5493 44.9262C15.1959 45.5487 15.9315 46.2536 16.9419 46.2536C17.9523 46.2536 18.6879 45.5487 19.3346 44.9262C19.67 44.6047 20.0136 44.2749 20.2965 44.1553C20.6037 44.0234 21.0967 44.0069 21.5737 43.9905C22.4467 43.9575 23.4328 43.9204 24.1199 43.2196C24.807 42.5188 24.8433 41.5088 24.8757 40.6225C24.8918 40.1361 24.9121 39.6332 25.0373 39.3199C25.1546 39.0313 25.4779 38.6809 25.7931 38.3388C26.4034 37.6792 27.0945 36.929 27.0945 35.8984C27.0945 34.8678 26.4034 34.1176 25.7931 33.458C25.4779 33.1158 25.1546 32.7654 25.0373 32.4769C24.908 32.1636 24.8918 31.6607 24.8757 31.1742C24.8433 30.2838 24.807 29.278 24.1199 28.5731C23.4328 27.8723 22.4426 27.8352 21.5696 27.8022C21.0927 27.7857 20.5996 27.7651 20.2925 27.6373C20.0095 27.5178 19.666 27.188 19.3305 26.8664C18.6839 26.244 17.9483 25.5391 16.9379 25.5391C15.9275 25.5391 15.1919 26.244 14.5452 26.8664C14.2098 27.188 13.8662 27.5178 13.5833 27.6373C13.2762 27.7692 12.7831 27.7857 12.3062 27.8022C11.4332 27.8352 10.443 27.8682 9.7559 28.5731C9.06882 29.2739 9.03244 30.2838 9.00011 31.1742C8.98394 31.6607 8.96374 32.1636 8.83845 32.4769C8.72124 32.7654 8.39791 33.1158 8.08266 33.458C7.47237 34.1176 6.78125 34.8678 6.78125 35.8984C6.78125 36.929 7.47237 37.6792 8.08266 38.3388C8.40195 38.6768 8.72932 39.0313 8.84653 39.3158ZM9.26686 34.5875C9.67911 34.1382 10.1075 33.6765 10.3379 33.1076C10.5764 32.5181 10.6006 31.8668 10.6208 31.2319C10.641 30.6177 10.6653 29.9829 10.9037 29.7397C11.1422 29.4965 11.7646 29.4759 12.3668 29.4511C12.9852 29.4305 13.6278 29.4058 14.2057 29.1626C14.7635 28.9276 15.2162 28.4906 15.6567 28.066C16.1053 27.6332 16.5701 27.188 16.9419 27.188C17.3138 27.188 17.7786 27.6332 18.2272 28.066C18.6677 28.4865 19.1204 28.9235 19.6781 29.1626C20.2561 29.4058 20.8947 29.4305 21.5171 29.4511C22.1193 29.4717 22.7417 29.4965 22.9802 29.7397C23.2186 29.9829 23.2388 30.6177 23.2631 31.2319C23.2873 31.8627 23.3075 32.5181 23.55 33.1076C23.7804 33.6765 24.2088 34.1382 24.6211 34.5875C25.0454 35.0451 25.4819 35.5191 25.4819 35.8984C25.4819 36.2776 25.0454 36.7517 24.6211 37.2093C24.2048 37.6586 23.7804 38.1203 23.546 38.6892C23.3075 39.2787 23.2833 39.9341 23.259 40.5648C23.2388 41.179 23.2146 41.8139 22.9761 42.0571C22.7377 42.3003 22.1152 42.3209 21.513 42.3457C20.8947 42.3704 20.252 42.391 19.6741 42.6383C19.1163 42.8733 18.6637 43.3103 18.2231 43.7349C17.7745 44.1677 17.3097 44.6129 16.9379 44.6129C16.5661 44.6129 16.1013 44.1677 15.6527 43.7349C15.2121 43.3103 14.7595 42.8733 14.2017 42.6383C13.6237 42.3951 12.9811 42.3704 12.3628 42.3457C11.7606 42.325 11.1381 42.3003 10.8997 42.0571C10.6612 41.8139 10.641 41.179 10.6168 40.5648C10.5966 39.9341 10.5723 39.2787 10.3339 38.6892C10.1035 38.1203 9.67507 37.6586 9.25878 37.2093C8.8344 36.7517 8.39791 36.2776 8.39791 35.8984C8.40599 35.5191 8.84249 35.0451 9.26686 34.5875Z'
              fill='#1D1D1B'
            />
            <path
              d='M16.9438 40.7486C19.5547 40.7486 21.6806 38.5803 21.6806 35.9173C21.6806 33.2543 19.5547 31.0859 16.9438 31.0859C14.3329 31.0859 12.207 33.2543 12.207 35.9173C12.207 38.5803 14.3329 40.7486 16.9438 40.7486ZM16.9438 32.7349C18.6656 32.7349 20.064 34.1612 20.064 35.9173C20.064 37.6734 18.6656 39.0997 16.9438 39.0997C15.2221 39.0997 13.8237 37.6734 13.8237 35.9173C13.8237 34.1612 15.2221 32.7349 16.9438 32.7349Z'
              fill='#1D1D1B'
            />
            <path
              d='M16.3867 17.926C16.3867 18.3795 16.7505 18.7505 17.195 18.7505H47.8469C48.2914 18.7505 48.6552 18.3795 48.6552 17.926C48.6552 17.4726 48.2914 17.1016 47.8469 17.1016H17.195C16.7505 17.1016 16.3867 17.4726 16.3867 17.926Z'
              fill='#1D1D1B'
            />
            <path
              d='M21.9294 12.8047C21.4848 12.8047 21.1211 13.1757 21.1211 13.6291C21.1211 14.0826 21.4848 14.4536 21.9294 14.4536H43.1076C43.5522 14.4536 43.916 14.0826 43.916 13.6291C43.916 13.1757 43.5522 12.8047 43.1076 12.8047H21.9294V12.8047Z'
              fill='#1D1D1B'
            />
            <path
              d='M62.9243 0H3.07569C1.3782 0 0 1.4057 0 3.13707V48.0536C0 49.785 1.3782 51.1907 3.07569 51.1907H9.14623C9.59081 51.1907 9.95456 50.8196 9.95456 50.3662C9.95456 49.9127 9.59081 49.5417 9.14623 49.5417H3.07569C2.2714 49.5417 1.61666 48.8739 1.61666 48.0536V3.13707C1.61666 2.31673 2.2714 1.64892 3.07569 1.64892H62.9243C63.7286 1.64892 64.3833 2.31673 64.3833 3.13707V48.0536C64.3833 48.8739 63.7286 49.5417 62.9243 49.5417H58.6604C58.2158 49.5417 57.852 49.9127 57.852 50.3662C57.852 50.8196 58.2158 51.1907 58.6604 51.1907H62.9243C64.6218 51.1907 66 49.785 66 48.0536V3.13707C66 1.4057 64.6218 0 62.9243 0Z'
              fill='#1D1D1B'
            />
            <path
              d='M38.5367 51.188C38.9813 51.188 39.345 50.817 39.345 50.3635C39.345 49.9101 38.9813 49.5391 38.5367 49.5391H24.9568C24.5122 49.5391 24.1484 49.9101 24.1484 50.3635C24.1484 50.817 24.5122 51.188 24.9568 51.188H38.5367Z'
              fill='#1D1D1B'
            />
            <path
              d='M60.7182 36.4256V33.5276C60.7182 33.0741 60.3545 32.7031 59.9099 32.7031C59.4653 32.7031 59.1016 33.0741 59.1016 33.5276V36.4256C59.1016 36.879 59.4653 37.25 59.9099 37.25C60.3585 37.25 60.7182 36.8831 60.7182 36.4256Z'
              fill='#1D1D1B'
            />
            <path
              d='M58.3827 4.79688H19.8982C19.4536 4.79688 19.0898 5.16788 19.0898 5.62133C19.0898 6.07479 19.4536 6.44579 19.8982 6.44579H58.3827C58.7788 6.44579 59.1021 6.77558 59.1021 7.17956V28.8999C59.1021 29.3534 59.4658 29.7244 59.9104 29.7244C60.355 29.7244 60.7187 29.3534 60.7187 28.8999V7.17956C60.7187 5.86455 59.672 4.79688 58.3827 4.79688Z'
              fill='#1D1D1B'
            />
            <path
              d='M7.61732 6.44579H13.7566C14.2012 6.44579 14.5649 6.07479 14.5649 5.62133C14.5649 5.16788 14.2012 4.79688 13.7566 4.79688H7.61732C6.32804 4.79688 5.28125 5.86455 5.28125 7.17956V23.4503C5.28125 23.9037 5.645 24.2747 6.08958 24.2747C6.53416 24.2747 6.89791 23.9037 6.89791 23.4503V7.17956C6.89791 6.77558 7.22124 6.44579 7.61732 6.44579Z'
              fill='#1D1D1B'
            />
          </svg>

          <div className='ml-5 md:ml-3.5 md:text-[0.9rem]'>
            {text.preCourseRequired['3']}
            <div className='font-medium'>{text.preCourseRequired['4']}</div>
          </div>
        </div>

        {/* <div className='h-[6.875rem] bg-[rgba(214,10,81,0.05)] border-t-2 border-[#d60a51] flex justify-center items-center'>
          <svg
            width='68'
            height='53'
            viewBox='0 0 68 53'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.899 5.38281H14.2165C12.8939 5.38281 11.8203 6.46371 11.8203 7.79538V15.5303C11.8203 16.862 12.8939 17.9429 14.2165 17.9429H21.899C23.2216 17.9429 24.2952 16.862 24.2952 15.5303V7.79538C24.2952 6.46371 23.2216 5.38281 21.899 5.38281ZM22.5775 15.5303C22.5775 15.9065 22.2726 16.2134 21.899 16.2134H14.2165C13.8429 16.2134 13.538 15.9065 13.538 15.5303V7.79538C13.538 7.41923 13.8429 7.11225 14.2165 7.11225H21.899C22.2726 7.11225 22.5775 7.41923 22.5775 7.79538V15.5303Z'
              fill='#1D1D1B'
            />
            <path
              d='M19.9478 9.94043L17.5387 12.3703L16.1774 10.9997C15.8425 10.6625 15.2971 10.6625 14.9622 10.9997C14.6272 11.337 14.6272 11.8861 14.9622 12.2233L16.9289 14.2035C17.0964 14.3721 17.3154 14.4586 17.5344 14.4586C17.7534 14.4586 17.9724 14.3721 18.1399 14.2035L21.1588 11.164C21.4938 10.8268 21.4938 10.2777 21.1588 9.94043C20.8239 9.60319 20.2828 9.60319 19.9478 9.94043Z'
              fill='#1D1D1B'
            />
            <path
              d='M21.899 20.3828H14.2165C12.8939 20.3828 11.8203 21.4637 11.8203 22.7954V30.5303C11.8203 31.862 12.8939 32.9429 14.2165 32.9429H21.899C23.2216 32.9429 24.2952 31.862 24.2952 30.5303V22.7954C24.2952 21.4637 23.2216 20.3828 21.899 20.3828ZM22.5775 30.5303C22.5775 30.9065 22.2726 31.2134 21.899 31.2134H14.2165C13.8429 31.2134 13.538 30.9065 13.538 30.5303V22.7954C13.538 22.4192 13.8429 22.1123 14.2165 22.1123H21.899C22.2726 22.1123 22.5775 22.4192 22.5775 22.7954V30.5303Z'
              fill='#1D1D1B'
            />
            <path
              d='M19.9478 24.9482L17.5387 27.3781L16.1774 26.0075C15.8425 25.6703 15.2971 25.6703 14.9622 26.0075C14.6272 26.3448 14.6272 26.8939 14.9622 27.2311L16.9289 29.2113C17.0964 29.3799 17.3154 29.4664 17.5344 29.4664C17.7534 29.4664 17.9724 29.3799 18.1399 29.2113L21.1588 26.1718C21.4938 25.8346 21.4938 25.2855 21.1588 24.9482C20.8239 24.611 20.2828 24.611 19.9478 24.9482Z'
              fill='#1D1D1B'
            />
            <path
              d='M67.7982 44.1743C67.6522 43.9711 61.5156 35.5011 61.5156 35.5011V3.4978C61.5156 1.56947 59.9568 0 58.0416 0H9.36583C7.45058 0 5.89176 1.56947 5.89176 3.4978V35.5227C5.89176 35.5227 0.356426 43.9235 0.167477 44.2175C0.0644143 44.3818 0 44.6066 0 44.7753C0 44.9439 0 46.4009 0 46.4009C0 49.488 2.49498 52.0043 5.56539 52.0043H62.4346C65.5007 52.0043 68 49.4923 68 46.4009C68 46.4009 68.0043 44.9309 68 44.7709C67.9957 44.611 67.9442 44.3775 67.7982 44.1743ZM7.2101 36.6469H60.2188L65.4449 43.863H40.8515C40.5338 43.863 40.246 44.0359 40.0957 44.317L39.0308 46.3058H28.9649L27.9 44.317C27.7497 44.0359 27.4619 43.863 27.1442 43.863H2.46063L7.2101 36.6469ZM7.60947 3.4978C7.60947 2.52499 8.39533 1.72944 9.36583 1.72944H58.0458C59.0121 1.72944 59.8022 2.52066 59.8022 3.4978V34.9174H7.60947V3.4978ZM66.278 46.4009C66.278 48.5368 64.5517 50.2749 62.4303 50.2749H5.56539C3.44402 50.2749 1.71771 48.5368 1.71771 46.4009V45.5924H26.6332L27.6981 47.5813C27.8484 47.8623 28.1362 48.0353 28.4539 48.0353H39.5461C39.8638 48.0353 40.1516 47.8623 40.3019 47.5813L41.3668 45.5924H66.2823V46.4009H66.278Z'
              fill='#1D1D1B'
            />
            <path
              d='M53.5903 7.88281H31.23C30.7576 7.88281 30.3711 8.27194 30.3711 8.74753C30.3711 9.22313 30.7576 9.61225 31.23 9.61225H53.5903C54.0627 9.61225 54.4491 9.22313 54.4491 8.74753C54.4491 8.27194 54.0627 7.88281 53.5903 7.88281Z'
              fill='#1D1D1B'
            />
            <path
              d='M53.5903 12.7266H31.23C30.7576 12.7266 30.3711 13.1157 30.3711 13.5913C30.3711 14.0669 30.7576 14.456 31.23 14.456H53.5903C54.0627 14.456 54.4491 14.0669 54.4491 13.5913C54.4491 13.1157 54.0627 12.7266 53.5903 12.7266Z'
              fill='#1D1D1B'
            />
            <path
              d='M53.5903 22.2734H31.23C30.7576 22.2734 30.3711 22.6626 30.3711 23.1382C30.3711 23.6138 30.7576 24.0029 31.23 24.0029H53.5903C54.0627 24.0029 54.4491 23.6138 54.4491 23.1382C54.4491 22.6626 54.0627 22.2734 53.5903 22.2734Z'
              fill='#1D1D1B'
            />
            <path
              d='M53.5903 27.1172H31.23C30.7576 27.1172 30.3711 27.5063 30.3711 27.9819C30.3711 28.4575 30.7576 28.8466 31.23 28.8466H53.5903C54.0627 28.8466 54.4491 28.4575 54.4491 27.9819C54.4491 27.5063 54.0627 27.1172 53.5903 27.1172Z'
              fill='#1D1D1B'
            />
          </svg>

          <div className='ml-5'>
            전 차시를 이수해야
            <div className='font-medium'>
              다음 차시 프로그램 이수가 가능합니다.
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
