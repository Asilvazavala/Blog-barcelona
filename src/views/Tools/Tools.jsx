import styles from './Tools.module.css'
import { useState } from 'react'

export const Tools = () => {
  const [input, setInput] = useState({
    initialDeposit: 0,
    rateAnnualInterest: 7,
    yearsInvest: 10,
    frequencyAnnualInterest: 'Annually',
    additionalContributions: 0
  })

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name] : e.target.value})
  }

  return (
    <section className={styles.main}>
      <div className={styles.title}>
        <span>Compound interest calculator</span>
      </div>
      <div className={styles.leftContainer}>
        <label>Initial deposit<br></br>
          <span className={styles.icon}><i className='bx bx-dollar'></i></span>
          <input type='number' name='initialDeposit' onChange={(e) => handleChange(e)} value={input.initialDeposit}></input>
        </label> 
        
        <label>Annual interest rate<br></br>
          <span className={styles.icon}>%</span>
          <input type='number' name='rateAnnualInterest' onChange={(e) => handleChange(e)} value={input.rateAnnualInterest}></input>
        </label>
        
        
        <label>Years to invest<br></br>
          <span className={styles.icon}><i className='bx bx-timer'></i></span>
          <input type='number' name='yearsInvest' onChange={(e) => handleChange(e)} value={input.yearsInvest}></input>
        </label>

        <label>Annual interest frequency</label>
        <select name='frequencyAnnualInterest' onChange={(e) => handleChange(e)}>
          <option>Annually</option>
          <option>Montly</option>
          <option>Fortnightly</option>
          <option>Weekly</option>
          <option>Daily</option>
        </select>
        
        <label>Additional contributions<br></br>
          <span className={styles.icon}><i className='bx bx-dollar'></i></span>
          <input type='number' name='additionalContributions' onChange={(e) => handleChange(e)} value={input.additionalContributions}></input>
        </label>

      </div>
      <div className={styles.rightContainer}>
      </div>
    </section>
  )
}
