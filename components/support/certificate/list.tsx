import { useLocale } from '@libs/client/useLocale';

export const useList = () => {
  const { text } = useLocale();
  return [
    // 문항 3
    {
      id: 0,
      title: text.certificate['27'],
      list: [
        {
          id: 0,
          question: text.certificate['29'],
          num: 'Q3_1' as 'Q3_1',
        },
        {
          id: 1,
          question: text.certificate['30'],
          num: 'Q3_2' as 'Q3_2',
        },
        {
          id: 2,
          question: text.certificate['31'],
          num: 'Q3_3' as 'Q3_3',
        },
        {
          id: 3,
          question: text.certificate['32'],
          num: 'Q3_4' as 'Q3_4',
        },
        {
          id: 4,
          question: text.certificate['33'],
          num: 'Q3_5' as 'Q3_5',
        },
        {
          id: 5,
          question: text.certificate['34'],
          num: 'Q3_6' as 'Q3_6',
        },
        {
          id: 6,
          question: text.certificate['35'],
          num: 'Q3_7' as 'Q3_7',
        },
        {
          id: 7,
          question: text.certificate['36'],
          num: 'Q3_8' as 'Q3_8',
        },
      ],
    },
    // 문항 4
    {
      id: 1,
      title: text.certificate['37'],
      list: [
        {
          id: 0,
          question: text.certificate['39'],
          num: 'Q4_1' as 'Q4_1',
        },
        {
          id: 1,
          question: text.certificate['40'],
          num: 'Q4_2' as 'Q4_2',
        },
        {
          id: 2,
          question: text.certificate['41'],
          num: 'Q4_3' as 'Q4_3',
        },
        {
          id: 3,
          question: text.certificate['42'],
          num: 'Q4_4' as 'Q4_4',
        },
        {
          id: 4,
          question: text.certificate['43'],
          num: 'Q4_5' as 'Q4_5',
        },
      ],
    },
    // 문항 5
    {
      id: 2,
      title: text.certificate['44'],
      list: [
        {
          id: 0,
          question: text.certificate['46'],
          num: 'Q5_1' as 'Q5_1',
        },
        {
          id: 1,
          question: text.certificate['47'],
          num: 'Q5_2' as 'Q5_2',
        },
        {
          id: 2,
          question: text.certificate['48'],
          num: 'Q5_3' as 'Q5_3',
        },
        {
          id: 3,
          question: text.certificate['49'],
          num: 'Q5_4' as 'Q5_4',
        },
      ],
    },
    // 문항 6
    {
      id: 3,
      title: text.certificate['50'],
      list: [
        {
          id: 0,
          question: text.certificate['52'],
          num: 'Q6_1' as 'Q6_1',
        },
        {
          id: 1,
          question: text.certificate['53'],
          num: 'Q6_2' as 'Q6_2',
        },
        {
          id: 2,
          question: text.certificate['54'],
          num: 'Q6_3' as 'Q6_3',
        },
        {
          id: 3,
          question: text.certificate['55'],
          num: 'Q6_4' as 'Q6_4',
        },
        {
          id: 4,
          question: text.certificate['56'],
          num: 'Q6_5' as 'Q6_5',
        },
      ],
    },
    // 문항 7
    {
      id: 4,
      title: text.certificate['57'],
      list: [
        {
          id: 0,
          question: text.certificate['59'],
          num: 'Q7_1' as 'Q7_1',
        },
        {
          id: 1,
          question: text.certificate['60'],
          num: 'Q7_2' as 'Q7_2',
        },
        {
          id: 2,
          question: text.certificate['61'],
          num: 'Q7_3' as 'Q7_3',
        },
        {
          id: 3,
          question: text.certificate['62'],
          num: 'Q7_4' as 'Q7_4',
        },
      ],
    },
    // 문항 8
    {
      id: 5,
      title: text.certificate['63'],
      list: [
        {
          id: 0,
          question: text.certificate['65'],
          num: 'Q8_1' as 'Q8_1',
        },
        {
          id: 1,
          question: text.certificate['66'],
          num: 'Q8_2' as 'Q8_2',
        },
        {
          id: 2,
          question: text.certificate['67'],
          num: 'Q8_3' as 'Q8_3',
        },
        {
          id: 3,
          question: text.certificate['68'],
          num: 'Q8_4' as 'Q8_4',
        },
        {
          id: 4,
          question: text.certificate['69'],
          num: 'Q8_5' as 'Q8_5',
        },
      ],
    },
    // 문항 9
    {
      id: 6,
      title: text.certificate['70'],
      list: [
        {
          id: 0,
          question: text.certificate['72'],
          num: 'Q9_1' as 'Q9_1',
        },
        {
          id: 1,
          question: text.certificate['73'],
          num: 'Q9_2' as 'Q9_2',
        },
        {
          id: 2,
          question: text.certificate['74'],
          num: 'Q9_3' as 'Q9_3',
        },
        {
          id: 3,
          question: text.certificate['75'],
          num: 'Q9_4' as 'Q9_4',
        },
        {
          id: 4,
          question: text.certificate['76'],
          num: 'Q9_5' as 'Q9_5',
        },
        {
          id: 5,
          question: text.certificate['77'],
          num: 'Q9_6' as 'Q9_6',
        },
        {
          id: 6,
          question: text.certificate['78'],
          num: 'Q9_7' as 'Q9_7',
        },
      ],
    },
  ];
};
