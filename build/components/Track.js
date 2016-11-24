"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
/**
 * List item for an album track.
 */
var Track = (function (_super) {
    __extends(Track, _super);
    function Track(props) {
        return _super.call(this, props) || this;
    }
    Track.prototype.render = function () {
        var _this = this;
        var play = function () { return _this.context.playAudio(_this.props.sample); };
        var stop = function () { return _this.context.playAudio(null); };
        return (React.createElement("li", { className: "track" },
            this.props.sample
                ? (React.createElement("div", { className: "controls" },
                    React.createElement("button", { className: this.props.playing ? "play playing" : "play", onClick: this.props.playing ? stop : play }, this.props.playing ? React.createElement("span", null, "\u275A\u275A") : React.createElement("span", null, "\u25BA"))))
                : null,
            React.createElement("span", { className: "title" }, this.props.title),
            React.createElement("span", { className: "duration" }, this.props.duration)));
    };
    return Track;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * List item for an album track.
 */
exports.default = Track;
Track.contextTypes = { playAudio: React.PropTypes.func };
//# sourceMappingURL=Track.js.map