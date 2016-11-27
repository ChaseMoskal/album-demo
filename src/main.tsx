
import * as React from "react"
import * as ReactDOM from "react-dom"

import Album from "./components/Album"
import Track from "./components/Track"

const main =
  <section>
    <Album title="Outer Edges"
      artist="Colin Stetson & Sarah Neufeld"
      art="images/outer-edges.jpg"
      release="2016"
      buy="https://store.visionrecordings.nl/product/vsn025-digital/"
      notes="Recorded live in the studio without the use of overdubs or loops at the End of the World studio in Vermont."
      label="Vision Recordings"
      genre="Drum and Bass">
        <Track title="The Approach" duration="1:29" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-01-The-Approach.mp3"/>
        <Track title="Anomaly" duration="4:03" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-02-Anomaly.mp3"/>
        <Track title="Collider" duration="4:47" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-03-Collider.mp3"/>
        <Track title="Vigilantes" duration="2:48" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-04-Vigilantes.mp3"/>
        <Track title="Tentacles" duration="3:11" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-05-Tentacles.mp3"/>
        <Track title="Voodoo" duration="3:16" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-06-Voodoo.mp3"/>
        <Track title="Mantra" duration="3:49" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-07-Mantra.mp3"/>
        <Track title="Surfaceless" duration="1:40" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-08-Surfaceless.mp3"/>
        <Track title="Straight Hook" duration="3:23" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-09-Straight-Hook.mp3"/>
        <Track title="Stonewalled" duration="3:38" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-10-Stonewalled.mp3"/>
        <Track title="Motion Blur" duration="3:24" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-11-Motion-Blur.mp3"/>
        <Track title="The Entangled" duration="3:15" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-12-The-Entangled.mp3"/>
        <Track title="Exavolt" duration="3:02" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-13-Exavolt.mp3"/>
        <Track title="Into Dust" duration="4:20" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-14-Into-Dust.mp3"/>
        <Track title="Miniatures" duration="2:53" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-15-Miniatures.mp3"/>
        <Track title="Sinkhole" duration="3:29" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-16-Sinkhole.mp3"/>
        <Track title="Get Deaded" duration="3:57" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-17-Get-Deaded.mp3"/>
        <Track title="The Approach (Reprise)" duration="2:00" sample="https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-18-The-Approach-Reprise.mp3"/>
    </Album>

    <Album title="Never Were the Way She Was"
      artist="Colin Stetson & Sarah Neufeld"
      art="images/never-were-the-way-she-was.jpg"
      release="April 2015"
      buy={null}
      notes="Recorded live in the studio without the use of overdubs or loops at the End of the World studio in Vermont."
      label="Constellation Records"
      genre="Avant-garde">
        <Track title="The Sun Roars Into View" duration="7:37"/>
        <Track title="Won't Be a Thing to Become" duration="7:37"/>
        <Track title="In the Vespers" duration="6:02"/>
        <Track title="And Still They Move" duration="2:57"/>
        <Track title="With the Dark Hug of Time" duration="6:34"/>
        <Track title="The Rest of Us" duration="6:31"/>
        <Track title="Never Were the Way She Was" duration="8:13"/>
        <Track title="Flight" duration="1:38"/>
    </Album>
  </section>

ReactDOM.render(main, document.querySelector("main"))
