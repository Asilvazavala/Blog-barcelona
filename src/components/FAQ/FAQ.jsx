import styles from './FAQ.module.css'
import { useState } from 'react'

export const FAQ = () => {
  const questions = [
    {
      id: 1,
      question: '1. ¿Cuándo fue fundado el FC Barcelona?',
      answer: 'EL Fútbol Club Barcelona fue fundado el 29 de noviembre de 1899 por un grupo de doce aficionados al fútbol, convocados por el suizo Hans Gamper mediante un anuncio publicado en la revista Los Deportes el 22 de octubre del mismo año. Entre los doce fundadores del club había seis españoles, tres suizos, dos ingleses y un alemán.'
    },
    {
      id: 2,
      question: '2. ¿Por qué se les llama culés a los aficionados del FC Barcelona?',
      answer: 'El término "culers" o "cules"  utilizado para referirse a los aficionados del FC Barcelona se originó a partir de una vista única. Al caminar por las inmediaciones del estadio, lo primero que veían las personas eran los aficionados sentados en la pared, mostrando sus traseros. Esto llevó al apodo catalán "culers", que significa "los que muestran sus traseros". La pronunciación de "culers" es "culés", y ha permanecido como un apodo popular para los fanáticos del Barça hasta el día de hoy.'
    },
    {
      id: 3,
      question: '3. ¿Qué es el FC Barcelona a nivel institucional?',
      answer: 'A nivel institucional es uno de los cuatro clubes profesionales de fútbol del país cuya entidad jurídica no es la de sociedad anónima deportiva (S. A. D.),​ ya que su propiedad recae en sus más de 143 000 socios. Otra salvedad comparte con el Athletic Club y el Real Madrid Club de Fútbol al participar sin interrupción en la máxima categoría de la Liga Nacional de Fútbol Profesional, la Primera División de España, desde su establecimiento en 1929.​ En ella posee los honores de haber sido el primer campeón histórico de la competición'
    },
    {
      id: 4,
      question: '4. ¿Qué representa el FC Barcelona en el fútbol?',
      answer: 'Es el primer campeón histórico de la competición española, su segundo club con más títulos, y el de la máxima puntuación en una sola edición. Sumando torneos nacionales e internacionales, es el segundo club español más laureado, a nivel nacional domina el palmarés con setenta y seis campeonatos y a nivel internacional ostenta veintidós trofeos, situado en el segundo puesto europeo.'
    },
    {
      id: 5,
      question: '5. ¿Cuáles distinciones deportivas tiene el FC Barcelona?',
      answer: 'Se distingue por ser una de las instituciones polideportivas más laureadas, entre las que destacan sus secciones de fútbol, baloncesto, balonmano y hockey, todas ellas con un amplio palmarés europeo.​ Es el primer club europeo en ser campeón continental en la rama masculina y femenina, y el primero en lograr un triplete con ambas. Asimismo, los medallistas olímpicos que han representado a la entidad blaugrana han conquistado once oros, veintitrés platas y veintiocho bronces en las distintas disciplinas deportivas.'
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
        <span className={styles.spanTitle}>Conoce a nuestro club</span>
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
