import styles from './FAQ.module.css'
import { useState } from 'react'

export const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: '1. Is your emergency fund sufficient?',
      answer: 'Experts recommend that you keep enough money in your emergency fund to cover at least three to six months worth of living expenses. This may vary based on a number of factors, including: your lifestyle, cost of living in your area, income and the long-range security of your job, whether or not you have affordable health insurance.'
    },
    {
      id: 2,
      question: '2. Are you ever done saving?',
      answer: 'In a word, no. Your savings account should stretch to cover periodic but not unexpected expenses such as routine home and vehicle maintenance, vacations, and gifts for special occasions. You should also have enough regular savings to pay for acute emergencies like replacing your car´s tires or paying off credit card debt. .'
    },
    {
      id: 3,
      question: '3. How do I make a budget?',
      answer: 'First, sit down and track all of your income and spending over the next few months. Once you have a full picture of your budget, you can start making changes. You´ll get an idea of what expenses you can cut and where you can save a little extra or pay toward any debt you have. A budget isn´t static, so make a plan to revisit it once or twice a year, especially if you´ve had any big changes to your income or expenses.'
    },
    {
      id: 4,
      question: '4. How much should I save each month for retirement?',
      answer: 'Here´s another question where a financial professional can help you make a plan that aligns with your budget. Generally speaking, you want to look at your current budget, when you plan to retire and your retirement goals to come up with a savings strategy. You´ll want to think about the expenses you´ll need to consider in retirement, plus consider costs such as health insurance and long-term care.'
    },
    {
      id: 5,
      question: '5. How do I save for my children´s education?',
      answer: 'There´s no doubt education is expensive — that´s why many parents start planning to save for college costs early. It´s something else you can make space for in your budget. One popular option with parents is a 529 College Savings Plan. It allows you to start saving for educational costs even if your kids are still young.'
    }
  ]

  const [selectedFAQ, setSelectedFAQ] = useState(null)

  const toggle = i => {
    if (selectedFAQ === i) {
      return setSelectedFAQ(null)
    }
    setSelectedFAQ(i)
  }

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerTitle}>
        <span className={styles.spanTitle}>Frequently Asked Questions</span>
      </div>
      <section className={styles.wrapper}>
       <div className={styles.accordion}>
        {questions && questions.map((el, i) => {
          return (
            <ul key={el.id}>
              <li className={selectedFAQ === i ? styles.itemSelected : styles.item}>
                <div className={styles.title} onClick={() => toggle(i)}>
                  <h2>{el.question}</h2>
                  <span>{selectedFAQ === i ? '-' : '+'}</span>
                </div>
                <div className={selectedFAQ === i ? styles.show : styles.content}>
                  <p>{el.answer}</p>
                </div>
              </li>
            </ul>
          )
        })}
       </div>
      </section>
    </div>
  )
}
