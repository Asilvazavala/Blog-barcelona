import { BlogCategories } from '../../components/BlogCategories/BlogCategories'
import { BlogMostViewed } from '../../components/BlogMostViewed/BlogMostViewed'
import styles from './Blog.module.css'
import { blogJson } from './blogJson'
import { NavLink } from 'react-router-dom'

export const Blog = () => {
  // const blogs2 = [
  //   {
  //     id: 1,
  //     image: Blog1,
  //     category: 'Jugadores',
  //     date: 'Mayo 5, 2023',
  //     author: 'Antonio Silva',
  //     name: 'El emotivo adiós de Sergio Busquets',
  //     description: 'Sergio Busquets, capitán del FC Barcelona, anunció este miércoles su adiós del club azulgrana en un mensaje a través de las redes sociales, confirmando que esta será su última temporada como culé antes de emprender un nuevo reto profesional. "Hola culés. Ha llegado el momento de anunciar que esta será mi última temporada en el Barça. Ha sido un camino inolvidable. Desde pequeño, cuando venía a ver los partidos o los veía por la tele, siempre soñaba con poder jugar con esta camiseta y en este estadio. Pero la realidad ha superado todo lo que pude soñar. Quien me iba a decir cuando vine como juvenil que podría vivir 15 temporadas en el mejor club del mundo, el club de mi vida y del que he sido, soy y seré aficionado, socio, jugador, capitán y poder superar los 700 partidos. Ha sido un honor, un sueño, un orgullo. Lo ha sido todo defender poder defender y representar este escudo durante tantos años, pero todo tiene un inicio y un final. Aunque no ha sido una decisión fácil creo que ha llegado el momento. Quiero dar las gracias a todas las personas que han hecho posible vivir todo esto desde el primer día hasta el último. Trabajadores del club, fisioterapeutas, doctores, utilleros, delegados, comunicación, directivos, presidentes, entrenadores, staff, analistas, preparadores físicos y sobre todo a mis compañeros, con los que he compartido miles de horas de convivencia, bromas, charlas, entrenamientos, partidos, tristezas, celebraciones... Todo. Gracias. También quiero agradecer a los socios y aficionados de todo el mundo, que me han dado su apoyo y su cariño durante todo este tiempo. Y como no a mi familia, que siempre ha estado a mi lado en los momentos buenos y en los no tan buenos. Haciendo este camino especial y sacrificando cosas para acompañarme y verme feliz. Muchas gracias por todo y nos vemos pronto en los últimos partidos. Ser del Barça es lo mejor que hay", dijo Busquets en su mensaje de despedida.'
  //   },
  //   {
  //     id: 2,
  //     image: Blog2,
  //     category: 'Fichajes',
  //     date: 'Mayo 6, 2023',
  //     author: 'Antonio Silva',
  //     name: 'Zubimendi sigue siendo la prioridad',
  //     description: 'Se mantiene como el que más gusta a Xavi como recambio de Busquets pese a que supondría la inversión más alta a nivel de traspaso por delante de Amrabat y Guido Rodríguez en una lista que no contempla a Rúben Neves. El donostiarra no se ve ahora fuera de la Real Sociedad: "Lo mejor que puedo hacer es quedarme aquí. Ni me he planteado irme. Estoy en mi casa y contento de seguir creciendo aquí en el club". Una vez conocida ya la salida de Sergio Busquets a final de temporada, el FC Barcelona debe decidir qué futbolista quiere para ocupar el lugar de la leyenda azulgrana, ganador de 31 títulos desde la temporada 2008-09. Martín Zubimendi (24 años) sigue siendo la prioridad de los técnicos azulgrana para como recambio de 'Busi' pese a que supondría la inversión más alta a nivel de traspaso al tener una cláusula de rescisión de 60 millones de euros en el contrato renovado el año pasado con la Real Sociedad hasta 2027. No hay otro jugador que se adapte mejor en una demarcación estratégica para el cuerpo técnico dirigido por Xavi Hernández.'
  //   },
  //   {
  //     id: 3,
  //     image: Blog3,
  //     category: 'Fútbol Mundial',
  //     date: 'Mayo 7, 2023',
  //     author: 'Antonio Silva',
  //     name: 'El duelo entre Ancelotti y Guardiola',
  //     description: 'Carlo Ancelotti y Pep Guardiola protagonizaron una batalla táctica en el duelo jugado en el Bernabéu. El entrenador del Real Madrid tenía claro que su equipo debía de priorizar el sistema defensivo para frenar a Haaland y De Bruyne, pero con Camavinga realizando un papel clave a la hora de sacar el balón. Mientras Guardiola siguió fiel a su estilo de fútbol de toque, pero con un detalle, poblar el centro del campo. Ancelotti insistió a sus jugadores para que estuviesen muy atentos a los pases interiores del City y así, desactivar a Haaland. Eso, además de que Rüdiger estuviese encima del noruego con Alaba y Kroos como guardaespaldas. Valverde, por su parte, estuvo muy atento a la De Bruyne para que el belga nunca pudiese recibir con facilidad y espacios. Aunque la gran variación táctica de Ancelotti fue que Camavinga dejara el lateral izquierdo cuando el Real Madrid debía sacar el balón. El francés se situaba como tercer pivote blanco para ayudar a la salida del esférico. Algo que se vio sobre todo en la segunda parte. En ataque, la solución de Ancelotti fue fiarlo todo al tridente Rodrygo-Benzema-Vinicius que con sus combinaciones destrozaron por momentos a la defensa del City.'
  //   }
  // ]

  return (
    <section className={styles.containerBlog}>
      <main className={styles.main}>
        {blogJson && blogJson.map(el => {
          return (
            <ul key={el.id}>
              <li>
                <h1>{el.name}</h1>
                <p className={styles.mainDateAuthor}>{el.date} por {el.author} - <NavLink className={styles.mainComment} to='/blog'>Deja tu comentario</NavLink></p>
                <img src={el.image} alt={el.name} />
                <p className={styles.mainDescription}>{el.description}<NavLink style={{ textDecoration: 'none' }} to='/blog'><span>Leer más</span></NavLink></p>
              </li>
            </ul>
          )
        })}
      </main>

      {/* Menu lateral derecho */}
      <aside className={styles.rightMenu}>
        <BlogMostViewed />
        <BlogCategories />
      </aside>
    </section>
  )
}
