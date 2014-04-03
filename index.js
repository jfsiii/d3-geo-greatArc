(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        function d3_source(d) {
            return d.source;
        }
        function d3_target(d) {
            return d.target;
        }
        d3.geo = {};
        var π = Math.PI, τ = 2 * π, halfπ = π / 2, ε = 1e-6, ε2 = ε * ε, d3_radians = π / 180, d3_degrees = 180 / π;
        function d3_sgn(x) {
            return x > 0 ? 1 : x < 0 ? -1 : 0;
        }
        function d3_cross2d(a, b, c) {
            return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
        }
        function d3_acos(x) {
            return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
        }
        function d3_asin(x) {
            return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
        }
        function d3_sinh(x) {
            return ((x = Math.exp(x)) - 1 / x) / 2;
        }
        function d3_cosh(x) {
            return ((x = Math.exp(x)) + 1 / x) / 2;
        }
        function d3_tanh(x) {
            return ((x = Math.exp(2 * x)) - 1) / (x + 1);
        }
        function d3_haversin(x) {
            return (x = Math.sin(x / 2)) * x;
        }
        d3.geo.distance = function(a, b) {
            var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
            return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
        };
        d3.geo.greatArc = function() {
            var source = d3_source, source_, target = d3_target, target_;
            function greatArc() {
                return {
                    type: "LineString",
                    coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
                };
            }
            greatArc.distance = function() {
                return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
            };
            greatArc.source = function(_) {
                if (!arguments.length) return source;
                source = _, source_ = typeof _ === "function" ? null : _;
                return greatArc;
            };
            greatArc.target = function(_) {
                if (!arguments.length) return target;
                target = _, target_ = typeof _ === "function" ? null : _;
                return greatArc;
            };
            greatArc.precision = function() {
                return arguments.length ? greatArc : 0;
            };
            return greatArc;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();