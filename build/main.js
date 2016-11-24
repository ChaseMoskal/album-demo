"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Album_1 = require("./components/Album");
var Track_1 = require("./components/Track");
var main = React.createElement("section", null,
    React.createElement("header", { className: "preamble" },
        React.createElement("h1", null, "Album Demo \u2014 Tech Experiment"),
        React.createElement("p", null, "Hi. I'm Chase Moskal, and I'm a JavaScript developer."),
        React.createElement("p", null,
            React.createElement("strong", null, "This page is a sample"),
            " React web application, written in TypeScript and Sass, which I created as a frontend experiment to play with these technologies."),
        React.createElement("p", null,
            "Take a look at this page's ",
            React.createElement("a", { href: "https://github.com/ChaseMoskal/album-demo" }, "source code on GitHub!"),
            " I'm proud of it."),
        React.createElement("p", null, "Developed for Google Chrome. This page loads in less then one megabyte. Fits well for all viewing sizes."),
        React.createElement("p", null, "I'm afraid I couldn't find sample audio clips for the second album \u00AF\\_(\u30C4)_/\u00AF")),
    React.createElement(Album_1.default, { id: "outer-edges", title: "Outer Edges", artist: "Noisia", art: "images/outer-edges.jpg", genre: "Drum and Bass", label: "Vision Recordings", release: "2016", buy: "https://store.visionrecordings.nl/product/vsn025-digital/" },
        React.createElement(Track_1.default, { title: "The Approach", duration: "1:29", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-01-The-Approach.mp3" }),
        React.createElement(Track_1.default, { title: "Anomaly", duration: "4:03", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-02-Anomaly.mp3" }),
        React.createElement(Track_1.default, { title: "Collider", duration: "4:47", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-03-Collider.mp3" }),
        React.createElement(Track_1.default, { title: "Vigilantes", duration: "2:48", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-04-Vigilantes.mp3" }),
        React.createElement(Track_1.default, { title: "Tentacles", duration: "3:11", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-05-Tentacles.mp3" }),
        React.createElement(Track_1.default, { title: "Voodoo", duration: "3:16", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-06-Voodoo.mp3" }),
        React.createElement(Track_1.default, { title: "Mantra", duration: "3:49", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-07-Mantra.mp3" }),
        React.createElement(Track_1.default, { title: "Surfaceless", duration: "1:40", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-08-Surfaceless.mp3" }),
        React.createElement(Track_1.default, { title: "Straight Hook", duration: "3:23", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-09-Straight-Hook.mp3" }),
        React.createElement(Track_1.default, { title: "Stonewalled", duration: "3:38", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-10-Stonewalled.mp3" }),
        React.createElement(Track_1.default, { title: "Motion Blur", duration: "3:24", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-11-Motion-Blur.mp3" }),
        React.createElement(Track_1.default, { title: "The Entangled", duration: "3:15", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-12-The-Entangled.mp3" }),
        React.createElement(Track_1.default, { title: "Exavolt", duration: "3:02", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-13-Exavolt.mp3" }),
        React.createElement(Track_1.default, { title: "Into Dust", duration: "4:20", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-14-Into-Dust.mp3" }),
        React.createElement(Track_1.default, { title: "Miniatures", duration: "2:53", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-15-Miniatures.mp3" }),
        React.createElement(Track_1.default, { title: "Sinkhole", duration: "3:29", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-16-Sinkhole.mp3" }),
        React.createElement(Track_1.default, { title: "Get Deaded", duration: "3:57", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-17-Get-Deaded.mp3" }),
        React.createElement(Track_1.default, { title: "The Approach (Reprise)", duration: "2:00", sample: "https://store.visionrecordings.nl/wp-content/uploads/2016/08/Audioclips-Audio-18-The-Approach-Reprise.mp3" })),
    React.createElement(Album_1.default, { id: "never-were-the-way-she-was", title: "Never Were the Way She Was", artist: "Colin Stetson & Sarah Neufeld", art: "images/never-were-the-way-she-was.jpg", genre: "Avant-garde", label: "Constellation Records", release: "April 2015", notes: "Recorded live in the studio without the use of overdubs or loops at the End of the World studio in Vermont.", buy: "https://itunes.apple.com/album/never-were-the-way-she-was/id977805758" },
        React.createElement(Track_1.default, { title: "The Sun Roars Into View", duration: "7:37" }),
        React.createElement(Track_1.default, { title: "Won't Be a Thing to Become", duration: "3:24" }),
        React.createElement(Track_1.default, { title: "In the Vespers", duration: "6:02" }),
        React.createElement(Track_1.default, { title: "And Still They Move", duration: "2:57" }),
        React.createElement(Track_1.default, { title: "With the Dark Hug of Time", duration: "6:34" }),
        React.createElement(Track_1.default, { title: "The Rest of Us", duration: "6:31" }),
        React.createElement(Track_1.default, { title: "Never Were the Way She Was", duration: "8:13" }),
        React.createElement(Track_1.default, { title: "Flight", duration: "1:38" })));
ReactDOM.render(main, document.querySelector("main"));
//# sourceMappingURL=main.js.map