"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
/**
 * Exhibits an album and its details.
 * Places children into an ordered list (<ol>).
 */
var Album = (function (_super) {
    __extends(Album, _super);
    function Album(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { playingAudioSrc: null };
        return _this;
    }
    Album.prototype.getChildContext = function () {
        var _this = this;
        return {
            playAudio: function (src) { return _this.setState({ playingAudioSrc: src }); }
        };
    };
    Album.prototype.render = function () {
        var _this = this;
        return (React.createElement("section", { className: "album", id: this.props.id },
            React.createElement("div", { className: "cover" },
                React.createElement("div", { className: "art" },
                    React.createElement("img", { src: this.props.art, alt: "" })),
                React.createElement("div", { className: "prime-info" },
                    React.createElement("h1", { className: "heading" },
                        React.createElement("span", { className: "title" }, this.props.title),
                        React.createElement("br", null),
                        React.createElement("span", { className: "artist" }, this.props.artist)))),
            this.state.playingAudioSrc
                ? React.createElement("audio", { src: this.state.playingAudioSrc, autoPlay: true, loop: true })
                : null,
            React.createElement("ol", { className: "tracklist" }, React.Children.map(this.props.children, function (child) { return React.cloneElement(child, {
                playing: child.props.sample === _this.state.playingAudioSrc
                    ? true
                    : false
            }); })),
            React.createElement("div", { className: "details" },
                React.createElement("div", null,
                    React.createElement("p", null,
                        "Genre: ",
                        this.props.genre),
                    React.createElement("p", null,
                        "\u00A9 ",
                        this.props.label)),
                React.createElement("div", null,
                    React.createElement("p", null,
                        "Released: ",
                        this.props.release),
                    this.props.buy
                        ? React.createElement("p", null,
                            React.createElement("a", { href: this.props.buy, target: "_blank" }, "Buy now"))
                        : null)),
            this.props.notes
                ? React.createElement("p", { className: "notes" }, this.props.notes)
                : null));
    };
    return Album;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Exhibits an album and its details.
 * Places children into an ordered list (<ol>).
 */
exports.default = Album;
Album.childContextTypes = {
    playAudio: React.PropTypes.func
};
//# sourceMappingURL=Album.js.map