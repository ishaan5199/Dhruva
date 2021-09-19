import styles from '../../styles/attendees.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Attendes = () => {
    useEffect(() => {
        AOS.init({})
    }, [])

    return (
        <div className={styles.back}>
            <div className={styles.inner1}>
                <h1 className={styles.h1}>
                    A first-rate virtual experience for all
                </h1>
            </div>
            <div className={styles.grid}>
                <div className={styles.text}>
                    <h4 className={styles.h4}>Events</h4>
                    <p className={styles.bl}>
                        Experience Adrenaline packed fun events that get your
                        mental juices flowing! Show us the synergy of your team,
                        or prove that you are the best lone wolf around; we have
                        an event for everyone!
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://assets-global.website-files.com/5f8f45cead04af2f54abc938/611fc7ce31ecb97d9ed140ab_use_attendee.jpg"
                        className={styles.hi}
                    />
                </div>

                <div className={styles.text}>
                    <h4 className={styles.h4}>Workshops</h4>
                    <p className={styles.bl}>
                        No one comes up with the technique of tying a shoelace;
                        the “2 egg reference” is taught to us while we do it
                        ourselves. This hands-on experience saves a lot of
                        initial time-consuming steps of learning a topic and is
                        the basis for a strong foundation. Experience quality,
                        fun-packed, interactive workshops ranging from x to y!
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://assets-global.website-files.com/5f8f45cead04af2f54abc938/611fcb7cd572cbda6aa2b3b2_use_speaker.jpg"
                        className={styles.hi2}
                    />
                </div>

                <div className={styles.text}>
                    <h4 className={styles.h4}>Seminars (speaking sessions)</h4>
                    <p className={styles.bl}>
                        The need for a good old sensei is undeniable in a world
                        of endless possibilities. Get guidance on various topics
                        ranging from x to y; you may discover something that
                        gets you up from your bed each day, or avoid going down
                        the next rabbit hole.
                    </p>
                </div>
                <div data-aos="fade-left" className={styles.img}>
                    <img
                        data-aos="rotate-c"
                        src="https://assets-global.website-files.com/5f8f45cead04af2f54abc938/611fcb7cd572cbda6aa2b3b2_use_speaker.jpg"
                        className={styles.hi3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Attendes
