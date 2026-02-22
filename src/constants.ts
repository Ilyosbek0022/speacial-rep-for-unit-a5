import { Section } from './types';

export const TEST_DATA: Section[] = [
  {
    id: 'grammar-1',
    title: 'Grammar',
    instruction: '1 Choose the correct alternatives.',
    questions: [
      { id: 'g1-1', type: 'choice', instruction: '1 I go to work at / on 9 o’clock.', options: ['at', 'on'], correctAnswers: ['at'], isExample: true },
      { id: 'g1-2', type: 'choice', instruction: '2 They no / don’t have lunch in the restaurant.', options: ['no', 'don’t'], correctAnswers: ['don’t'] },
      { id: 'g1-3', type: 'choice', instruction: '3 We work from 9 a.m.at / to 6 p.m.', options: ['at', 'to'], correctAnswers: ['to'] },
      { id: 'g1-4', type: 'choice', instruction: '4 I work on / to Mondays and Tuesdays.', options: ['on', 'to'], correctAnswers: ['on'] },
      { id: 'g1-5', type: 'choice', instruction: '5 They have not / don’t have dinner at home.', options: ['have not', 'don’t'], correctAnswers: ['don’t'] },
      { id: 'g1-6', type: 'choice', instruction: '6 We don’t no work / work on Sundays.', options: ['don’t no work', 'work'], correctAnswers: ['work'] },
      { id: 'g1-7', type: 'choice', instruction: '7 I study from / at 7 to 8.30.', options: ['from', 'at'], correctAnswers: ['from'] },
    ]
  },
  {
    id: 'grammar-2',
    title: 'Grammar',
    instruction: '2 Complete the conversations with the words in the box.',
    options: ['arrive', 'cycle', 'do', 'Do', 'don’t', 'How', 'leave', 'train', 'travel', 'What'],
    questions: [
      { id: 'g2-1', type: 'fill', instruction: '', text: 'A: 1 [blank] they go to work by 2 [blank]?', correctAnswers: ['Do', 'train'], isExample: true },
      { id: 'g2-2', type: 'fill', instruction: '', text: 'B: No, they 3 [blank].', correctAnswers: ['don’t'] },
      { id: 'g2-3', type: 'fill', instruction: '', text: 'A: 4 [blank] do you travel to university?', correctAnswers: ['How'] },
      { id: 'g2-4', type: 'fill', instruction: '', text: 'B: I 5 [blank].', correctAnswers: ['cycle'] },
      { id: 'g2-5', type: 'fill', instruction: '', text: 'A: Do you 6 [blank] by bus with your friends?', correctAnswers: ['travel'] },
      { id: 'g2-6', type: 'fill', instruction: '', text: 'B: Yes, I 7 [blank].', correctAnswers: ['do'] },
      { id: 'g2-7', type: 'fill', instruction: '', text: 'A: 8 [blank] time do you go to class?', correctAnswers: ['What'] },
      { id: 'g2-8', type: 'fill', instruction: '', text: 'B: I 9 [blank] home at 8.15. I 10 [blank] at 8.45.', correctAnswers: ['leave', 'arrive'] },
    ]
  },
  {
    id: 'grammar-3',
    title: 'Grammar',
    instruction: '3 Put the words in the correct order to make sentences and questions.',
    questions: [
      { id: 'g3-1', type: 'order', instruction: '1 you / often / for / class / How / are / late', words: ['you', 'often', 'for', 'class', 'How', 'are', 'late'], correctAnswers: ['How often are you late for class?'], isExample: true },
      { id: 'g3-2', type: 'order', instruction: '2 work / sometimes / on / I / Saturdays', words: ['work', 'sometimes', 'on', 'I', 'Saturdays'], correctAnswers: ['I sometimes work on Saturdays.'] },
      { id: 'g3-3', type: 'order', instruction: '3 late / always / brother / My / and sister / get up', words: ['late', 'always', 'brother', 'My', 'and sister', 'get up'], correctAnswers: ['My brother and sister always get up late.'] },
      { id: 'g3-4', type: 'order', instruction: '4 often / you / How / drink / do / coffee', words: ['often', 'you', 'How', 'drink', 'do', 'coffee'], correctAnswers: ['How often do you drink coffee?'] },
      { id: 'g3-5', type: 'order', instruction: '5 have / never / at / home / lunch / They', words: ['have', 'never', 'at', 'home', 'lunch', 'They'], correctAnswers: ['They never have lunch at home.'] },
      { id: 'g3-6', type: 'order', instruction: '6 for / are / early / How / they / often/ work', words: ['for', 'are', 'early', 'How', 'they', 'often', 'work'], correctAnswers: ['How often are they early for work?'] },
    ]
  },
  {
    id: 'vocabulary-4',
    title: 'Vocabulary',
    instruction: '4 Complete the text with the correct words. The first letters are given.',
    questions: [
      { id: 'v4-1', type: 'fill', instruction: '', text: 'I’m a teacher at university. On 1 [blank],', correctAnswers: ['Mondays'], isExample: true },
      { id: 'v4-2', type: 'fill', instruction: '', text: 'I 2 [blank] at 6 o’clock.', correctAnswers: ['get up'], isExample: true },
      { id: 'v4-3', type: 'fill', instruction: '', text: 'I have 3 b[blank] at 6.30', correctAnswers: ['reakfast'] },
      { id: 'v4-4', type: 'fill', instruction: '', text: 'and I go to work at 8 o’clock. I have 4 l[blank] at 12.30', correctAnswers: ['unch'] },
      { id: 'v4-5', type: 'fill', instruction: '', text: 'and I go home at 4.45. I have 5 d[blank] with my family at 7 o’clock.', correctAnswers: ['inner'] },
      { id: 'v4-6', type: 'fill', instruction: '', text: 'I 6 w[blank] TV', correctAnswers: ['atch'] },
      { id: 'v4-7', type: 'fill', instruction: '', text: 'and 7 g[blank] to bed at 11.', correctAnswers: ['o'] },
      { id: 'v4-8', type: 'fill', instruction: '', text: 'On 8 F[blank], I go to a class', correctAnswers: ['ridays'] },
      { id: 'v4-9', type: 'fill', instruction: '', text: 'and I 9 s[blank] Japanese.', correctAnswers: ['tudy'] },
    ]
  },
  {
    id: 'vocabulary-5',
    title: 'Vocabulary',
    instruction: '5 Match the sentence halves.',
    questions: [
      { id: 'v5-1', type: 'fill', instruction: '', text: '1 My brother and I [blank] (d)', correctAnswers: ['d'], isExample: true },
      { id: 'v5-2', type: 'fill', instruction: '', text: '2 We drive to work [blank]', correctAnswers: ['e'] },
      { id: 'v5-3', type: 'fill', instruction: '', text: '3 They arrive at [blank]', correctAnswers: ['c'] },
      { id: 'v5-4', type: 'fill', instruction: '', text: '4 On Saturdays and Sundays, I [blank]', correctAnswers: ['a'] },
      { id: 'v5-5', type: 'fill', instruction: '', text: '5 I travel by [blank]', correctAnswers: ['b'] },
      { id: 'v5-6', type: 'fill', instruction: '', text: '6 At 7.30 I go to the station and take [blank]', correctAnswers: ['f'] },
    ]
  },
  {
    id: 'vocabulary-6',
    title: 'Vocabulary',
    instruction: '6 Complete the food and drink words.',
    questions: [
      { id: 'v6-1', type: 'fill', instruction: '', text: '1 c h ee s e', correctAnswers: ['cheese'], isExample: true },
      { id: 'v6-2', type: 'fill', instruction: '', text: '2 s [blank] g [blank] r', correctAnswers: ['u', 'a'], points: 1 },
      { id: 'v6-3', type: 'fill', instruction: '', text: '3 [blank] [blank] ndw [blank] [blank] h [blank] [blank]', correctAnswers: ['s', 'a', 'i', 'c', 'e', 's'], points: 1 },
      { id: 'v6-4', type: 'fill', instruction: '', text: '4 ch[blank] [blank] [blank] l [blank] [blank] [blank]', correctAnswers: ['o', 'c', 'o', 'a', 't', 'e'], points: 1 },
      { id: 'v6-5', type: 'fill', instruction: '', text: '5 b [blank] e [blank] d', correctAnswers: ['r', 'a'], points: 1 },
      { id: 'v6-6', type: 'fill', instruction: '', text: '6 s [blank] [blank] [blank] d', correctAnswers: ['a', 'l', 'a'], points: 1 },
      { id: 'v6-7', type: 'fill', instruction: '', text: '7 c [blank] ff [blank] [blank]', correctAnswers: ['o', 'e', 'e'], points: 1 },
      { id: 'v6-8', type: 'fill', instruction: '', text: '8 ch [blank] [blank] k [blank] [blank]', correctAnswers: ['i', 'c', 'e', 'n'], points: 1 },
      { id: 'v6-9', type: 'fill', instruction: '', text: '9 f [blank] [blank] h', correctAnswers: ['i', 's'], points: 1 },
    ]
  },
  {
    id: 'function-7',
    title: 'Function',
    instruction: '7 Complete the conversation in a café with the words in the box.',
    options: ['bottle', 'cup', 'drink', 'I’d', 'like', 'much', 'please', 'sugar', 'thank you', 'That’s', 'would'],
    questions: [
      { id: 'f7-1', type: 'fill', instruction: '', text: 'A: What 1 [blank] you like?', correctAnswers: ['would'], isExample: true },
      { id: 'f7-2', type: 'fill', instruction: '', text: 'B: 2 [blank] 3 [blank] like a salad, please.', correctAnswers: ['I’d', 'like'] },
      { id: 'f7-3', type: 'fill', instruction: '', text: 'A: Would you like a 4 [blank]?', correctAnswers: ['drink'] },
      { id: 'f7-4', type: 'fill', instruction: '', text: 'B: Yes, 5 [blank]. I’d like a 6 [blank] of coffee and a 7 [blank] of water.', correctAnswers: ['please', 'cup', 'bottle'] },
      { id: 'f7-5', type: 'fill', instruction: '', text: 'A: Would you 8 [blank] black or white coffee?', correctAnswers: ['like'] },
      { id: 'f7-6', type: 'fill', instruction: '', text: 'A: Would you like 9 [blank]?', correctAnswers: ['sugar'] },
      { id: 'f7-7', type: 'fill', instruction: '', text: 'B: No, 10 [blank]. How 11 [blank] is that?', correctAnswers: ['thank you', 'much'] },
      { id: 'f7-8', type: 'fill', instruction: '', text: 'A: 12 [blank] £7.25, please.', correctAnswers: ['That’s'] },
    ]
  }
];
