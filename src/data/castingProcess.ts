import { CastingProcessData } from 'modules/CastingProcess/CastingProcess';

export const castingProcess: CastingProcessData = {
  title: 'Процес відбору',
  castingCards: [
    {
      key: 'test',
      title: 'Онлайн тест',
      textContent: {
        idle: 'Пройдіть онлайн тест за напрямом стажування, котрий ви обрали на початку. У вас є тільки одна спроба, тому рекомендуємо підготуватися заздалегідь.',
        active:
          'Пройдіть онлайн тест за напрямом стажування, котрий ви обрали на початку. У вас є тільки одна спроба, тому рекомендуємо підготуватися заздалегідь.',
        success:
          'Вітаємо вас з успішним проходженням тесту в рамках нашого відбору. Раді повідомити вам, що ви пройшли на наступний етап - тестове завдання.',
        failed:
          'На жаль, результати вашого тесту не відповідають вимогам для переходу на наступний етап. Ви можете спробувати свої сили у наступному відборі.',
      },
      linkContent: 'testing',
      buttonText: 'Перейти',
      subText: 'Вірні відповіді - ',
    },
    {
      key: 'task',
      title: 'Тестове завдання',
      textContent: {
        idle: 'У разі успішного проходження тесту вам відкриється можливість пройти тестове завдання та отримати фідбек. Цей етап дозволить нам оцінити ваші практичні знання.',
        active:
          "Здайте тестове завдання та очікуйте на фідбек. У разі успішного проходження цього етапу ми запросимо вас на інтерв'ю. Завдання можна здати тільки один раз.",
        success: 'Тестове завдання складено успішно',
        failed: 'Тестове завдання не складено',
      },
      linkContent: 'test',
      buttonText: 'Перейти',
      subText: '',
    },
    {
      key: 'interview',
      title: "Онлайн інтерв'ю",
      textContent: {
        idle: 'На цьому етапі ми матимемо можливість познайомитися ближче, обговорити ваші навички та відповісти на ваші запитання. Це також є важливим етапом в процесі відбору.',
        active: "Інтерв'ю заплановано на ___ ______ 2023 року.",
        success: "Інтерв'ю пройдено успішно",
        failed: "Інтерв'ю не пройдено",
      },
      linkContent: 'interview',
      buttonText: 'Перейти',
      subText: '',
    },
    {
      key: 'offer',
      title: 'Оффер і матеріали',
      textContent: {
        idle: 'У разі отримання офферу вам відкриються матеріали для ознайомлення з технологіями, котрі будуть використовуватися на стажуванні, та вас буде додано у канал для комунікації.',
        active:
          'У разі отримання офферу вам відкриються матеріали для ознайомлення з технологіями, котрі будуть використовуватися на стажуванні, та вас буде додано у канал для комунікації.',
        success: 'Оффер отримано',
        failed: 'Оффер не отримано',
      },
      linkContent: 'materials',
      buttonText: 'Перейти',
      subText: '',
    },
  ],
};
