webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    The Laser-Cut Maze Designer was created by Aaron Rodriguez.\n</p>\n<p>\n    The source code can be found on\n    <a href=\"https://github.com/adashrod/LaserCutMazesAngular\" target=\"_blank\" appTrackClick category=\"About\" label=\"githubProject\">GitHub</a>.\n    If you find a bug and would like to submit a report (or a feature request), you can do so\n    <a href=\"https://github.com/adashrod/LaserCutMazesAngular/issues\" target=\"_blank\" appTrackClick category=\"About\" label=\"githubProjectIssues\">here</a>.\n</p>\n<p>\n    Aaron's other projects can also be found on <a href=\"https://github.com/adashrod\" target=\"_blank\" appTrackClick category=\"About\" label=\"githubHome\">GitHub</a>.\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-about",
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/depth-first-search-algorithm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_algorithms_maze_generator__ = __webpack_require__("./src/app/algorithms/maze-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_direction__ = __webpack_require__("./src/app/direction.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var DepthFirstSearchAlgorithm = /** @class */ (function (_super) {
    __extends(DepthFirstSearchAlgorithm, _super);
    function DepthFirstSearchAlgorithm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.explored = new Map(); // using a map with stringified keys as a HashSet
        _this.deltas = [new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](0, -1), new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](1, 0),
            new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](0, 1), new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](-1, 0)];
        return _this;
    }
    Object.defineProperty(DepthFirstSearchAlgorithm.prototype, "name", {
        get: function () {
            return "Depth-First Search";
        },
        enumerable: true,
        configurable: true
    });
    DepthFirstSearchAlgorithm.prototype.buildPaths = function (maze) {
        this.maze = maze;
        this.explored.clear();
        var stack = [];
        var current = new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](this.rng(maze.numCols), this.rng(maze.numRows));
        this.explored.set(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](current.x, current.y).toString(), true);
        var numSpaces = maze.numRows * maze.numCols;
        while (this.explored.size < numSpaces) {
            var neighbors = this.findUnexploredNeighbors(current.x, current.y);
            if (neighbors.length > 0) {
                var randomNeighbor = neighbors[this.rng(neighbors.length)];
                stack.push(current);
                var direction = __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].determineDirection(current, randomNeighbor);
                maze.grid[current.y][current.x].openWall(direction);
                maze.grid[randomNeighbor.y][randomNeighbor.x].openWall(direction.opposite);
                current = randomNeighbor;
                this.explored.set(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](current.x, current.y).toString(), true);
            }
            else {
                if (stack.length === 0) {
                    break;
                }
                current = stack.pop();
            }
        }
    };
    DepthFirstSearchAlgorithm.prototype.findUnexploredNeighbors = function (x, y) {
        var neighbors = [];
        for (var _i = 0, _a = this.deltas; _i < _a.length; _i++) {
            var delta = _a[_i];
            if (this.maze.isInBounds(x + delta.x, y + delta.y) &&
                !this.explored.has(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x + delta.x, y + delta.y).toString())) {
                neighbors.push(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x + delta.x, y + delta.y));
            }
        }
        return neighbors;
    };
    return DepthFirstSearchAlgorithm;
}(__WEBPACK_IMPORTED_MODULE_0_app_algorithms_maze_generator__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (DepthFirstSearchAlgorithm);


/***/ }),

/***/ "./src/app/algorithms/empty-algorithm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_algorithms_maze_generator__ = __webpack_require__("./src/app/algorithms/maze-generator.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var EmptyAlgorithm = /** @class */ (function (_super) {
    __extends(EmptyAlgorithm, _super);
    function EmptyAlgorithm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Do-It-Yourself";
        return _this;
    }
    EmptyAlgorithm.prototype.buildPaths = function (maze) { };
    return EmptyAlgorithm;
}(__WEBPACK_IMPORTED_MODULE_0_app_algorithms_maze_generator__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (EmptyAlgorithm);


/***/ }),

/***/ "./src/app/algorithms/kruskals-algorithm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_algorithms_maze_generator__ = __webpack_require__("./src/app/algorithms/maze-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_direction__ = __webpack_require__("./src/app/direction.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * Simple unidirectional tree for implementing a disjoint set
 */
var Tree = /** @class */ (function () {
    function Tree() {
        this.parent = this;
    }
    Object.defineProperty(Tree.prototype, "root", {
        get: function () {
            return this.parent === this ? this.parent : this.parent.root;
        },
        enumerable: true,
        configurable: true
    });
    Tree.prototype.isConnectedTo = function (otherTree) {
        return this.root === otherTree.root;
    };
    Tree.prototype.merge = function (otherTree) {
        otherTree.root.parent = this;
    };
    return Tree;
}());
/**
 * An edge is determined by the coordinates of the two spaces that it separates
 */
var Edge = /** @class */ (function () {
    function Edge(a, b) {
        this.a = a;
        this.b = b;
    }
    return Edge;
}());
/**
 * An implementation of https://en.wikipedia.org/wiki/Kruskal%27s_algorithm for generating random 2D mazes with square
 * spaces
 * @author adashrod@gmail.com
 */
var KruskalsAlgorithm = /** @class */ (function (_super) {
    __extends(KruskalsAlgorithm, _super);
    function KruskalsAlgorithm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.parallelMatrix = [];
        _this.edges = [];
        return _this;
    }
    Object.defineProperty(KruskalsAlgorithm.prototype, "name", {
        get: function () {
            return "Kruskal's";
        },
        enumerable: true,
        configurable: true
    });
    KruskalsAlgorithm.prototype.buildPaths = function (maze) {
        this.parallelMatrix = [];
        this.edges = [];
        for (var y = 0; y < maze.numRows; y++) {
            this.parallelMatrix.push([]);
            for (var x = 0; x < maze.numCols; x++) {
                this.parallelMatrix[y].push(new Tree());
                if (x + 1 < maze.numCols) {
                    this.edges.push(new Edge(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x, y), new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x + 1, y)));
                }
                if (y + 1 < maze.numRows) {
                    this.edges.push(new Edge(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x, y), new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x, y + 1)));
                }
            }
        }
        this.shuffleEdges();
        for (var _i = 0, _a = this.edges; _i < _a.length; _i++) {
            var e = _a[_i];
            var s1 = e.a;
            var s2 = e.b;
            var tree1 = this.parallelMatrix[s1.y][s1.x];
            var tree2 = this.parallelMatrix[s2.y][s2.x];
            if (!tree1.isConnectedTo(tree2)) {
                tree1.merge(tree2);
                var oneToTwo = __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].determineDirection(s1, s2);
                maze.grid[s1.y][s1.x].openWall(oneToTwo);
                maze.grid[s2.y][s2.x].openWall(oneToTwo.opposite);
            }
        }
    };
    KruskalsAlgorithm.prototype.shuffleEdges = function () {
        for (var i = 0; i < this.edges.length - 1; i++) {
            var randIndex = this.rng(this.edges.length - i) + i;
            var temp = this.edges[i];
            this.edges[i] = this.edges[randIndex];
            this.edges[randIndex] = temp;
        }
    };
    return KruskalsAlgorithm;
}(__WEBPACK_IMPORTED_MODULE_0_app_algorithms_maze_generator__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (KruskalsAlgorithm);


/***/ }),

/***/ "./src/app/algorithms/maze-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_seed__ = __webpack_require__("./node_modules/random-seed/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_random_seed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_random_seed__);

/**
 * Subclasses can use any maze-generation algorithm to build the paths of a maze
 * @author adashrod@gmail.com
 */
var MazeGenerator = /** @class */ (function () {
    function MazeGenerator() {
        this.rng = Object(__WEBPACK_IMPORTED_MODULE_0_random_seed__["create"])();
    }
    Object.defineProperty(MazeGenerator.prototype, "seed", {
        get: function () {
            return this._seed;
        },
        set: function (seed) {
            this._seed = seed.toString();
            this.rng = Object(__WEBPACK_IMPORTED_MODULE_0_random_seed__["create"])(this._seed);
        },
        enumerable: true,
        configurable: true
    });
    return MazeGenerator;
}());
/* harmony default export */ __webpack_exports__["a"] = (MazeGenerator);


/***/ }),

/***/ "./src/app/algorithms/prims-algorithm.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_algorithms_maze_generator__ = __webpack_require__("./src/app/algorithms/maze-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_direction__ = __webpack_require__("./src/app/direction.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * An implementation of https://en.wikipedia.org/wiki/Prim%27s_algorithm for generating random 2D mazes with square
 * spaces
 * @author adashrod@gmail.com
 */
var PrimsAlgorithm = /** @class */ (function (_super) {
    __extends(PrimsAlgorithm, _super);
    function PrimsAlgorithm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nextSpaces = [];
        // for onPath and exploringNext, using a map with stringified keys as a HashSet
        _this.onPath = new Map();
        _this.exploringNext = new Map();
        _this.deltas = [new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](0, -1), new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](1, 0),
            new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](0, 1), new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](-1, 0)];
        return _this;
    }
    Object.defineProperty(PrimsAlgorithm.prototype, "name", {
        get: function () {
            return "Prim's";
        },
        enumerable: true,
        configurable: true
    });
    PrimsAlgorithm.prototype.buildPaths = function (maze) {
        this.maze = maze;
        this.onPath.clear();
        this.exploringNext.clear();
        this.markOnPathAndAddUnexploredNeighborsToNext(this.rng(maze.numCols), this.rng(maze.numRows));
        while (this.nextSpaces.length > 0) {
            var removed = this.nextSpaces.splice(this.rng(this.nextSpaces.length), 1)[0];
            var neighbors = this.findOnPathNeighbors(removed.x, removed.y);
            var randNeighbor = neighbors[this.rng(neighbors.length)];
            var direction = __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].determineDirection(removed, randNeighbor);
            maze.grid[removed.y][removed.x].openWall(direction);
            maze.grid[randNeighbor.y][randNeighbor.x].openWall(direction.opposite);
            this.markOnPathAndAddUnexploredNeighborsToNext(removed.x, removed.y);
        }
    };
    PrimsAlgorithm.prototype.addToNextIfUnexplored = function (x, y) {
        if (this.maze.isInBounds(x, y) && this.isUnexplored(x, y)) {
            this.exploringNext.set(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x, y).toString(), true);
            this.nextSpaces.push(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x, y));
        }
    };
    PrimsAlgorithm.prototype.markOnPathAndAddUnexploredNeighborsToNext = function (x, y) {
        this.onPath.set(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x, y).toString(), true);
        for (var _i = 0, _a = this.deltas; _i < _a.length; _i++) {
            var delta = _a[_i];
            this.addToNextIfUnexplored(x + delta.x, y + delta.y);
        }
    };
    PrimsAlgorithm.prototype.findOnPathNeighbors = function (x, y) {
        var n = [];
        for (var _i = 0, _a = this.deltas; _i < _a.length; _i++) {
            var delta = _a[_i];
            if (this.maze.isInBounds(x + delta.x, y + delta.y) &&
                this.onPath.has(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x + delta.x, y + delta.y).toString())) {
                n.push(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x + delta.x, y + delta.y));
            }
        }
        return n;
    };
    PrimsAlgorithm.prototype.isUnexplored = function (x, y) {
        var space = this.maze.grid[y][x];
        return !space.isOpen(__WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].NORTH) && !space.isOpen(__WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].EAST) &&
            !space.isOpen(__WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].SOUTH) && !space.isOpen(__WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].WEST) &&
            !this.exploringNext.has(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](x, y).toString());
    };
    return PrimsAlgorithm;
}(__WEBPACK_IMPORTED_MODULE_0_app_algorithms_maze_generator__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (PrimsAlgorithm);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".end-container {\n    width: 100%;\n    height: 170px;\n    background: #5c2018;\n}\n\nheader, footer {\n    width: 800px;\n    height: 100%;\n    background: #5c2018 url(\"https://adashrod.github.io/LaserCutMazes/assets/logo1.png\") no-repeat 0 0;\n    margin: 0 auto;\n    color: #bc4639;\n    font-size: 34px;\n}\n\n.page-title, .copyright {\n    padding-left: 180px;\n}\n\n.copyright {\n    font-size: 16px;\n    padding-top: 10px;\n}\n\nheader nav {\n    padding: 75px 0 0 500px;\n}\n\nfooter nav {\n    padding: 75px 0 0 200px;\n}\n\nnav a {\n    color: #4285f4;\n    font-size: 16px;\n}\n\nnav a.active {\n    font-style: italic;\n}\n\n.main-body {\n    border-top: 1px solid #bc4639;\n    margin: 0 auto;\n    padding: 5px;\n    width: 800px;\n    background: #bc4639;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"end-container\">\n    <header>\n        <div class=\"page-title\">Laser-Cut Maze Designer</div>\n        <nav>\n            <a routerLink=\"/LaserCutMazes/welcome\" routerLinkActive=\"active\">Home</a>\n            <a routerLink=\"/LaserCutMazes/designer\" routerLinkActive=\"active\">Maze Designer</a>\n            <a routerLink=\"/LaserCutMazes/help\" routerLinkActive=\"active\">Help</a>\n            <a routerLink=\"/LaserCutMazes/about\" routerLinkActive=\"active\">About</a>\n        </nav>\n    </header>\n</div>\n<div class=\"main-body\">\n    <router-outlet></router-outlet>\n</div>\n<div class=\"end-container\">\n    <footer>\n        <div class=\"copyright\">&copy; 2018 Aaron Rodriguez</div>\n        <nav>\n            <a routerLink=\"/LaserCutMazes/welcome\" routerLinkActive=\"active\">Home</a>\n            <a routerLink=\"/LaserCutMazes/designer\" routerLinkActive=\"active\">Maze Designer</a>\n            <a routerLink=\"/LaserCutMazes/help\" routerLinkActive=\"active\">Help</a>\n            <a routerLink=\"/LaserCutMazes/about\" routerLinkActive=\"active\">About</a>\n        </nav>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */] && typeof window.ga === "function") {
                window.ga("set", "page", event.urlAfterRedirects);
                window.ga("send", "pageview");
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_maze_builder_maze_builder_component__ = __webpack_require__("./src/app/maze-builder/maze-builder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_help_help_component__ = __webpack_require__("./src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_help_modal_help_modal_component__ = __webpack_require__("./src/app/help-modal/help-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_lightbox_thumbnail_lightbox_thumbnail_component__ = __webpack_require__("./src/app/lightbox-thumbnail/lightbox-thumbnail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_track_click_directive__ = __webpack_require__("./src/app/track-click.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [{
        path: "LaserCutMazes/welcome",
        component: __WEBPACK_IMPORTED_MODULE_8_app_welcome_welcome_component__["a" /* WelcomeComponent */]
    }, {
        path: "LaserCutMazes/designer",
        component: __WEBPACK_IMPORTED_MODULE_4_app_maze_builder_maze_builder_component__["a" /* MazeBuilderComponent */]
    }, {
        path: "LaserCutMazes/help",
        component: __WEBPACK_IMPORTED_MODULE_6_app_help_help_component__["a" /* HelpComponent */]
    }, {
        path: "LaserCutMazes/about",
        component: __WEBPACK_IMPORTED_MODULE_10_app_about_about_component__["a" /* AboutComponent */]
    }, {
        path: "LaserCutMazes",
        redirectTo: "LaserCutMazes/welcome",
        pathMatch: "prefix"
    }];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10_app_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_5_app_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6_app_help_help_component__["a" /* HelpComponent */],
                __WEBPACK_IMPORTED_MODULE_7_app_help_modal_help_modal_component__["a" /* HelpModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9_app_lightbox_thumbnail_lightbox_thumbnail_component__["a" /* LightboxThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_4_app_maze_builder_maze_builder_component__["a" /* MazeBuilderComponent */],
                __WEBPACK_IMPORTED_MODULE_8_app_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11_app_track_click_directive__["a" /* TrackClickDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5_app_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/ordered-pair.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js__ = __webpack_require__("./node_modules/big.js/big.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_big_js__);

/**
 * A container for two numeric coordinates
 * @author adashrod@gmail.com
 */
var OrderedPair = /** @class */ (function () {
    function OrderedPair(x, y) {
        this.x = x;
        this.y = y;
    }
    OrderedPair.prototype.equals = function (aPair) {
        if (this.x instanceof __WEBPACK_IMPORTED_MODULE_0_big_js___default.a && this.y instanceof __WEBPACK_IMPORTED_MODULE_0_big_js___default.a && aPair.x instanceof __WEBPACK_IMPORTED_MODULE_0_big_js___default.a && aPair.y instanceof __WEBPACK_IMPORTED_MODULE_0_big_js___default.a) {
            return this.x.eq(aPair.x) && this.y.eq(aPair.y);
        }
        return this.x === aPair.x && this.y === aPair.y;
    };
    OrderedPair.prototype.toString = function () {
        return "OrderedPair(" + this.x.toString() + ", " + this.y.toString() + ")";
    };
    return OrderedPair;
}());
/* harmony default export */ __webpack_exports__["a"] = (OrderedPair);


/***/ }),

/***/ "./src/app/common/unit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js__ = __webpack_require__("./node_modules/big.js/big.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_big_js__);

var Unit = /** @class */ (function () {
    function Unit(singularName, pluralSuffix, perInch) {
        this.singularName = singularName;
        this.pluralName = singularName + pluralSuffix;
        this.perInch = perInch;
    }
    Unit.INCHES = new Unit("inch", "es", new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1));
    Unit.CENTIMETERS = new Unit("centimeter", "s", new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a("2.54"));
    Unit.MILLIMETERS = new Unit("millimeter", "s", new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a("25.4"));
    return Unit;
}());
/* harmony default export */ __webpack_exports__["a"] = (Unit);


/***/ }),

/***/ "./src/app/direction.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * four directions for relating Spaces to each other
 */
var Direction = /** @class */ (function () {
    function Direction(name) {
        this.name = name;
    }
    /**
     * Determines the direction that relates "from" to "to", e.g. if "to" is to the EAST of "from", EAST is returned
     */
    Direction.determineDirection = function (from, to) {
        var xComp = from.x - to.x;
        if (xComp < 0) {
            return Direction.EAST;
        }
        if (xComp > 0) {
            return Direction.WEST;
        }
        var yComp = from.y - to.y;
        if (yComp < 0) {
            return Direction.SOUTH;
        }
        if (yComp > 0) {
            return Direction.NORTH;
        }
        throw new Error("Indeterminate: the 2 OrderedPairs couldn't be compared: " + from.toString() + ", " + to.toString());
    };
    Object.defineProperty(Direction.prototype, "opposite", {
        get: function () {
            if (this === Direction.NORTH) {
                return Direction.SOUTH;
            }
            if (this === Direction.EAST) {
                return Direction.WEST;
            }
            if (this === Direction.SOUTH) {
                return Direction.NORTH;
            }
            if (this === Direction.WEST) {
                return Direction.EAST;
            }
            throw new Error("invalid direction");
        },
        enumerable: true,
        configurable: true
    });
    Direction.prototype.toString = function () {
        return this.name;
    };
    Direction.NORTH = new Direction("NORTH");
    Direction.EAST = new Direction("EAST");
    Direction.SOUTH = new Direction("SOUTH");
    Direction.WEST = new Direction("WEST");
    return Direction;
}());
/* harmony default export */ __webpack_exports__["a"] = (Direction);


/***/ }),

/***/ "./src/app/factories/linear-wall-model-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_linear_wall_model__ = __webpack_require__("./src/app/models/linear-wall-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_direction__ = __webpack_require__("./src/app/direction.ts");



var LinearWallModelGenerator = /** @class */ (function () {
    function LinearWallModelGenerator(maze) {
        this.maze = maze;
    }
    LinearWallModelGenerator.prototype.generate = function () {
        var width = this.maze.numCols;
        var height = this.maze.numRows;
        var lastCol = width - 1;
        var lastRow = height - 1;
        var linearWallModel = new __WEBPACK_IMPORTED_MODULE_1_app_models_linear_wall_model__["b" /* default */](width, height, this.favorEwWalls);
        if (this.favorEwWalls) {
            // make north walls of the rows
            for (var y = 0; y < height; y++) {
                this.makeWallsForLane(linearWallModel, y, width, false, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].NORTH, null, false);
            }
            // south wall of row
            this.makeWallsForLane(linearWallModel, lastRow, width, false, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].SOUTH, null, true);
            // make west walls of columns
            for (var x = 0; x < width; x++) {
                this.makeWallsForLane(linearWallModel, x, height, true, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].WEST, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].SOUTH, false);
            }
            // east wall of column
            this.makeWallsForLane(linearWallModel, lastCol, height, true, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].EAST, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].SOUTH, true);
        }
        else {
            // make west walls of columns
            for (var x = 0; x < width; x++) {
                this.makeWallsForLane(linearWallModel, x, height, true, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].WEST, null, false);
            }
            // east wall of column
            this.makeWallsForLane(linearWallModel, lastCol, height, true, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].EAST, null, true);
            // make north walls of the rows
            for (var y = 0; y < height; y++) {
                this.makeWallsForLane(linearWallModel, y, width, false, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].NORTH, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].EAST, false);
            }
            // south wall of row
            this.makeWallsForLane(linearWallModel, lastRow, width, false, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].SOUTH, __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].EAST, true);
        }
        return linearWallModel;
    };
    /**
     * traverses a lane (row or column) of the maze, making as many walls that are needed for that lane, consolidating
     * adjacent walls when possible.
     * e.g. a row like ___ __ (3 spaces with walls, 1 empty, 2 more with walls)
     * This would make two walls; one 3 spaces long and the other 2 spaces long
     * e.g. when an overlapCheckDirection is used: ___|_
     *                                                |
     *     There's a wall 4 spaces long, and a perpendicular wall. If building vertical walls first, this horizontal
     *     wall would be split into 2 separate horizontal walls: one length 3, and one length 1, end-to-end, but separate
     *     so that the perpendicular wall doesn't overlap. If doing horizontal walls first, this would result in one
     *     horizontal wall 4 spaces long and two separate vertical walls.
     * @param linearWallModel            the model walls are being added to
     * @param majorTraversalIndex        the index of the lane being traversed
     * @param minorTraversalMax          number of spaces in the lane
     * @param xMajor                     true if doing an x-major (column-major) traversal
     * @param continuationCheckDirection direction to check that the wall continues, e.g. if doing a row-major traversal
     *                                   (moving east), one should check that there are walls on the north or south sides
     *                                   of the spaces to see how far they continue
     * @param overlapCheckDirection      direction to check for perpendicular walls, e.g. if doing a row-major traversal
     *                                   (moving east), one should check that there are perpendicular walls to the east
     *                                   which would determine the end of the current wall
     * @param isFinalWall                true if this is the last row/column being checked, used for determining
     *                                   coordinates since n rows means n+1 rows of horizontal walls
     */
    LinearWallModelGenerator.prototype.makeWallsForLane = function (linearWallModel, majorTraversalIndex, minorTraversalMax, xMajor, continuationCheckDirection, overlapCheckDirection, isFinalWall) {
        for (var i = 0; i < minorTraversalMax; i++) {
            var y = xMajor ? i : majorTraversalIndex;
            var x = xMajor ? majorTraversalIndex : i;
            var currentSpace = this.maze.grid[y][x];
            if (!currentSpace.isOpen(continuationCheckDirection)) {
                var lengthAndAdditive = this.calculateWallLength(xMajor, continuationCheckDirection, overlapCheckDirection, isFinalWall, x, y);
                var length_1 = lengthAndAdditive.x;
                var additive = lengthAndAdditive.y;
                linearWallModel.addWall(this.createWallHelper(xMajor, isFinalWall, x, y, length_1));
                i += length_1 + additive;
            }
        }
    };
    LinearWallModelGenerator.prototype.calculateWallLength = function (xMajor, continuationCheckDirection, overlapCheckDirection, isFinalWall, x, y) {
        var length, additive = 0;
        for (length = 1; this.maze.isInBounds(xMajor ? x : x + length, xMajor ? y + length : y); length++) {
            // wall continuation check
            var nextSpace = this.findNextSpace(xMajor, x, y, length);
            if (nextSpace.isOpen(continuationCheckDirection)) {
                break;
            }
            // wall overlap check
            if (overlapCheckDirection != null) {
                var sameLaneX = this.findSameLaneX(xMajor, x, length), sameLaneY = this.findSameLaneY(xMajor, y, length);
                var prevLaneX = this.findPrevLaneX(xMajor, x, length), prevLaneY = this.findPrevLaneY(xMajor, y, length);
                var spaceInSameLane = this.maze.grid[sameLaneY][sameLaneX];
                var spaceInPrevLane = this.findSpaceInPrevLane(prevLaneX, prevLaneY);
                // 1st condition: check for perpendicular wall in same lane; 2nd: check for perpendicular wall
                // in prev lane, but not for row because we don't care about prev lane when doing the outer
                // check
                if (!spaceInSameLane.isOpen(overlapCheckDirection) ||
                    (!isFinalWall && spaceInPrevLane != null && !spaceInPrevLane.isOpen(overlapCheckDirection))) {
                    // i += length puts i just past the wall that's blocked by a perpendicular one; -1 is needed
                    // so that the next loop iter still checks that space after i++ happens
                    additive = -1;
                    break;
                }
            }
        }
        return new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](length, additive);
    };
    LinearWallModelGenerator.prototype.findNextSpace = function (xMajor, x, y, length) {
        return this.maze.grid[xMajor ? y + length : y][xMajor ? x : x + length];
    };
    LinearWallModelGenerator.prototype.findSameLaneX = function (xMajor, x, length) {
        return xMajor ? x : x + length - 1;
    };
    LinearWallModelGenerator.prototype.findSameLaneY = function (xMajor, y, length) {
        return xMajor ? y + length - 1 : y;
    };
    LinearWallModelGenerator.prototype.findPrevLaneX = function (xMajor, x, length) {
        return xMajor ? x - 1 : x + length - 1;
    };
    LinearWallModelGenerator.prototype.findPrevLaneY = function (xMajor, y, length) {
        return xMajor ? y + length - 1 : y - 1;
    };
    LinearWallModelGenerator.prototype.findSpaceInPrevLane = function (prevLaneX, prevLaneY) {
        return this.maze.isInBounds(prevLaneX, prevLaneY) ? this.maze.grid[prevLaneY][prevLaneX] : null;
    };
    LinearWallModelGenerator.prototype.createWallHelper = function (xMajor, isFinalWall, x, y, length) {
        var startX, startY, endX, endY;
        if (xMajor) {
            startY = y;
            endY = y + length;
            if (isFinalWall) {
                startX = x + 1;
                endX = x + 1;
            }
            else {
                startX = x;
                endX = x;
            }
        }
        else {
            startX = x;
            endX = x + length;
            if (isFinalWall) {
                startY = y + 1;
                endY = y + 1;
            }
            else {
                startY = y;
                endY = y;
            }
        }
        var start = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](startX, startY), end = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](endX, endY);
        return new __WEBPACK_IMPORTED_MODULE_1_app_models_linear_wall_model__["a" /* Wall */](start, end);
    };
    return LinearWallModelGenerator;
}());
/* harmony default export */ __webpack_exports__["a"] = (LinearWallModelGenerator);


/***/ }),

/***/ "./src/app/factories/rectangular-wall-model-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_rectangular_wall_model__ = __webpack_require__("./src/app/models/rectangular-wall-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_direction__ = __webpack_require__("./src/app/direction.ts");



/**
 * An instance of RectangularWallModelGenerator can be used to create a {@link RectangularWallModel} from
 * a {@link LinearWallModel}
 * @author adashrod@gmail.com
 */
var RectangularWallModelGenerator = /** @class */ (function () {
    function RectangularWallModelGenerator(model) {
        this.isWall = [];
        this.model = model;
        var r = 2 * model.height + 1, c = 2 * model.width + 1;
        for (var y = 0; y < r; y++) {
            this.isWall.push([]);
            for (var x = 0; x < c; x++) {
                this.isWall[y].push(false);
            }
        }
    }
    RectangularWallModelGenerator.prototype.generate = function () {
        var rectangularWallModel = new __WEBPACK_IMPORTED_MODULE_1_app_models_rectangular_wall_model__["b" /* default */](this.isWall[0].length, this.isWall.length);
        var verticalWalls = [], horizontalWalls = [];
        for (var _i = 0, _a = this.model.walls; _i < _a.length; _i++) {
            var wall = _a[_i];
            var wallDirection = __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].determineDirection(wall.start, wall.end);
            if (wallDirection === __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].NORTH || wallDirection === __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].WEST) {
                throw new Error("wall direction should only be EAST or SOUTH (start-to-end should be left-to-right or top-to-bottom): " +
                    wall.toString());
            }
            var isVertical = wallDirection === __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].SOUTH;
            if (isVertical) {
                verticalWalls.push(wall);
            }
            else {
                horizontalWalls.push(wall);
            }
        }
        if (this.model.favorEwWalls) {
            this.createWallSpacesFromLinearWalls(rectangularWallModel, horizontalWalls, false, true);
            this.createWallSpacesFromLinearWalls(rectangularWallModel, verticalWalls, true, false);
        }
        else {
            this.createWallSpacesFromLinearWalls(rectangularWallModel, verticalWalls, true, true);
            this.createWallSpacesFromLinearWalls(rectangularWallModel, horizontalWalls, false, false);
        }
        return rectangularWallModel;
    };
    RectangularWallModelGenerator.prototype.createWallSpacesFromLinearWalls = function (rectangularWallModel, walls, wallsAreVertical, isFirstSetOfWalls) {
        var endDirection = wallsAreVertical ? __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].SOUTH : __WEBPACK_IMPORTED_MODULE_2_app_direction__["a" /* default */].EAST;
        for (var _i = 0, walls_1 = walls; _i < walls_1.length; _i++) {
            var wall = walls_1[_i];
            var wsx = wall.start.x * 2, wex = wall.end.x * 2, wsy = wall.start.y * 2, wey = wall.end.y * 2;
            if (!isFirstSetOfWalls) {
                if (wallsAreVertical) {
                    if (this.isWall[wsy][wsx]) {
                        wsy++;
                    }
                    if (this.isWall[wey][wex]) {
                        wey--;
                    }
                }
                else {
                    if (this.isWall[wsy][wsx]) {
                        wsx++;
                    }
                    if (this.isWall[wey][wex]) {
                        wex--;
                    }
                }
            }
            var rectWall = new __WEBPACK_IMPORTED_MODULE_1_app_models_rectangular_wall_model__["a" /* Wall */](new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](wsx, wsy), new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](wex, wey), endDirection);
            rectangularWallModel.addWall(rectWall);
            this.fillOutWallSpaces(wallsAreVertical, wsx, wsy, wex, wey);
        }
    };
    RectangularWallModelGenerator.prototype.fillOutWallSpaces = function (wallsAreVertical, wsx, wsy, wex, wey) {
        if (wallsAreVertical) {
            for (var y = wsy; y <= wey; y++) {
                this.isWall[y][wsx] = true;
            }
        }
        else {
            for (var x = wsx; x <= wex; x++) {
                this.isWall[wsy][x] = true;
            }
        }
    };
    return RectangularWallModelGenerator;
}());
/* harmony default export */ __webpack_exports__["a"] = (RectangularWallModelGenerator);


/***/ }),

/***/ "./src/app/factories/sheet-wall-model-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_factories_sheet_wall_tiling_optimizer__ = __webpack_require__("./src/app/factories/sheet-wall-tiling-optimizer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__ = __webpack_require__("./src/app/misc/big-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_models_path__ = __webpack_require__("./src/app/models/path.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_models_shape__ = __webpack_require__("./src/app/models/shape.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_models_sheet_wall_model__ = __webpack_require__("./src/app/models/sheet-wall-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_models_vector_number__ = __webpack_require__("./src/app/models/vector-number.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_direction__ = __webpack_require__("./src/app/direction.ts");








var NotchPosInfo = /** @class */ (function () {
    function NotchPosInfo(direction, isCorner) {
        this.direction = direction;
        this.isCorner = isCorner;
    }
    return NotchPosInfo;
}());
var NotchConnection = /** @class */ (function () {
    function NotchConnection(firstPoint, cornerPoint, secondPoint) {
        this.firstPoint = firstPoint;
        this.cornerPoint = cornerPoint;
        this.secondPoint = secondPoint;
    }
    return NotchConnection;
}());
var SheetWallModelGenerator = /** @class */ (function () {
    // cache and keys are recalculated on every get; call toString() on them for cache hits
    function SheetWallModelGenerator(model) {
        var _this = this;
        this.notchEdgeMap = new Map(); // reference equality is ok because there won't be any duplicate keys
        this.wallTypeLabelsByLength = new Map(); // reference equality won't work because this map is being used as a
        /**
         * sorts notches on the edge of the floor in a clockwise fashion: N,E,S,W so that the top left corner is the "lowest"
         * and a notch directly below that is the highest
         * e.g.
         * 1234
         * C  5
         * B  6
         * A987
         */
        this.edgeNotchComparator = function (p1, p2) {
            var p1Info = _this.notchEdgeMap.get(p1), p2Info = _this.notchEdgeMap.get(p2);
            var p1Dir = p1Info.direction, p2Dir = p2Info.direction;
            var dirCmp = SheetWallModelGenerator.directionRank[p1Dir.name] - SheetWallModelGenerator.directionRank[p2Dir.name];
            if (dirCmp !== 0) {
                return dirCmp;
            }
            // p1Dir === p2Dir
            if (p1Dir === __WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].NORTH) {
                return p1.points[0].x.cmp(p2.points[0].x);
            }
            else if (p1Dir === __WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].EAST) {
                return p1.points[0].y.cmp(p2.points[0].y);
            }
            else if (p1Dir === __WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].SOUTH) {
                return p2.points[0].x.cmp(p1.points[0].x);
            }
            else if (p1Dir === __WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].WEST) {
                return p2.points[0].y.cmp(p1.points[0].y);
            }
            else {
                throw new Error("notch is not in edge map, but is on edge");
            }
        };
        this.model = model;
    }
    SheetWallModelGenerator.prototype.generate = function () {
        var sheetWallModel = new __WEBPACK_IMPORTED_MODULE_5_app_models_sheet_wall_model__["a" /* default */]();
        // for now, all walls and the floor will be positioned at (0,0). They'll be translated and tiled on the
        // print sheet later
        var sortedWalls = this.model.walls.slice(0);
        sortedWalls.sort(function (a, b) { return a.length - b.length; });
        for (var _i = 0, sortedWalls_1 = sortedWalls; _i < sortedWalls_1.length; _i++) {
            var wall = sortedWalls_1[_i];
            var wallLength = this.createNotchesForWall(wall, sheetWallModel);
            var wallPath = new __WEBPACK_IMPORTED_MODULE_3_app_models_path__["a" /* default */]()
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["b" /* ZERO */], __WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["b" /* ZERO */]))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](wallLength, __WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["b" /* ZERO */]))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](wallLength, this.wallHeight.add(this.materialThickness)))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](wallLength.sub(this.notchHeight), this.wallHeight.add(this.materialThickness)))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](wallLength.sub(this.notchHeight), this.wallHeight))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](this.notchHeight, this.wallHeight))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](this.notchHeight, this.wallHeight.add(this.materialThickness)))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["b" /* ZERO */], this.wallHeight.add(this.materialThickness)));
            var wallShape = new __WEBPACK_IMPORTED_MODULE_4_app_models_shape__["a" /* default */](wallPath);
            sheetWallModel.addShape(wallShape);
            var wallTypeLabel = this.findWallTypeLabel(wallLength);
            var vnHeight = this.wallHeight.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */]), vnWidth = vnHeight.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */]).mul(this.numDigits(wallTypeLabel));
            sheetWallModel.wallLabels.set(wallShape, new __WEBPACK_IMPORTED_MODULE_6_app_models_vector_number__["c" /* default */](wallTypeLabel, Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["c" /* min */])(vnWidth, wallLength), vnHeight, new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["b" /* ZERO */], __WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["b" /* ZERO */]))); // translate in optimizer
        }
        this.createOutline(sheetWallModel);
        new __WEBPACK_IMPORTED_MODULE_1_app_factories_sheet_wall_tiling_optimizer__["a" /* default */](sheetWallModel, this.separationSpace, this.maxWidth, this.maxHeight, this.wallHeight).optimize();
        return sheetWallModel;
    };
    /**
     * given an index of a grid cell, calculates the physical distance to the start (left or top) of that cell from the
     * beginning of the floor
     * @param index   the grid index of the start/end cap of the wall
     * @return the left x displacement of the notch for horizontal displacements or the top y displacement for vertical
     * displacements
     */
    SheetWallModelGenerator.prototype.calcDisplacement = function (index) {
        var mtFactor = Math.floor((index + 1) / 2), hwFactor = Math.floor(index / 2);
        return this.materialThickness.mul(mtFactor).add(this.hallWidth.mul(hwFactor));
    };
    SheetWallModelGenerator.prototype.createNotchesForWall = function (wall, sheetWallModel) {
        // notches in the floor for the wall tabs to fit into
        var firstNotch = new __WEBPACK_IMPORTED_MODULE_3_app_models_path__["a" /* default */](), secondNotch = new __WEBPACK_IMPORTED_MODULE_3_app_models_path__["a" /* default */]();
        var wallLength;
        var vectorNumber;
        if (wall.wallDirection === __WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].EAST) {
            wallLength = this.calcDisplacement(wall.end.x + 1).sub(this.calcDisplacement(wall.start.x));
            var wallTypeLabel = this.findWallTypeLabel(wallLength);
            var startDisplacementX = this.calcDisplacement(wall.start.x), endDisplacementX = this.calcDisplacement(wall.end.x + 1).sub(this.notchHeight), displacementY = this.calcDisplacement(wall.start.y);
            var spaceBetweenNotches = endDisplacementX.sub(startDisplacementX).sub(this.notchHeight);
            var vnWidth = this.materialThickness.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */]).mul(this.numDigits(wallTypeLabel));
            vnWidth = Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["c" /* min */])(vnWidth, spaceBetweenNotches);
            vectorNumber = new __WEBPACK_IMPORTED_MODULE_6_app_models_vector_number__["c" /* default */](wallTypeLabel, vnWidth, this.materialThickness, new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](startDisplacementX.add(this.notchHeight).add(spaceBetweenNotches.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */])).sub(vnWidth.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */])), displacementY));
            sheetWallModel.floorNumbers.push(vectorNumber);
            firstNotch.addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](startDisplacementX, displacementY))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](startDisplacementX.add(this.notchHeight), displacementY))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](startDisplacementX.add(this.notchHeight), displacementY.add(this.materialThickness)))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](startDisplacementX, displacementY.add(this.materialThickness)));
            secondNotch.addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](endDisplacementX, displacementY))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](endDisplacementX.add(this.notchHeight), displacementY))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](endDisplacementX.add(this.notchHeight), displacementY.add(this.materialThickness)))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](endDisplacementX, displacementY.add(this.materialThickness)));
        }
        else {
            wallLength = this.calcDisplacement(wall.end.y + 1).sub(this.calcDisplacement(wall.start.y));
            var wallTypeLabel = this.findWallTypeLabel(wallLength);
            var startDisplacementY = this.calcDisplacement(wall.start.y), endDisplacementY = this.calcDisplacement(wall.end.y + 1).sub(this.notchHeight), displacementX = this.calcDisplacement(wall.start.x);
            var spaceBetweenNotches = endDisplacementY.sub(startDisplacementY).sub(this.notchHeight);
            var vnWidth = this.materialThickness.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */]).mul(this.numDigits(wallTypeLabel));
            vnWidth = Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["c" /* min */])(vnWidth, this.materialThickness);
            vectorNumber = new __WEBPACK_IMPORTED_MODULE_6_app_models_vector_number__["c" /* default */](wallTypeLabel, vnWidth, this.materialThickness, new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](displacementX.add(this.materialThickness.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */])).sub(vnWidth.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */])), startDisplacementY.add(this.notchHeight).add(spaceBetweenNotches.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */])).sub(this.materialThickness.mul(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["a" /* HALF */]))));
            sheetWallModel.floorNumbers.push(vectorNumber);
            firstNotch.addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](displacementX, startDisplacementY))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](displacementX.add(this.materialThickness), startDisplacementY))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](displacementX.add(this.materialThickness), startDisplacementY.add(this.notchHeight)))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](displacementX, startDisplacementY.add(this.notchHeight)));
            secondNotch.addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](displacementX, endDisplacementY))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](displacementX.add(this.materialThickness), endDisplacementY))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](displacementX.add(this.materialThickness), endDisplacementY.add(this.notchHeight)))
                .addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](displacementX, endDisplacementY.add(this.notchHeight)));
        }
        this.addNotchToEdgeMap(wall.start, firstNotch);
        this.addNotchToEdgeMap(wall.end, secondNotch);
        sheetWallModel.floorNotches.addPath(firstNotch).addPath(secondNotch);
        return wallLength;
    };
    /**
     * Each notch that touches the edge of the floor is kept in notchEdgeMap to keep track of which edge it's touching.
     * For notches that are on corner squares, they are only considered part of one edge; it is the edge that is further
     * clockwise.
     * @param wallEndCapCoords the grid-based coordinates of the notch
     * @param notch            the Path object for the notch
     */
    SheetWallModelGenerator.prototype.addNotchToEdgeMap = function (wallEndCapCoords, notch) {
        var lastRow = this.model.height - 1, lastCol = this.model.width - 1;
        if (wallEndCapCoords.y === 0 && wallEndCapCoords.x !== lastCol) {
            this.notchEdgeMap.set(notch, new NotchPosInfo(__WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].NORTH, wallEndCapCoords.x === 0));
        }
        else if (wallEndCapCoords.x === lastCol && wallEndCapCoords.y !== lastRow) {
            this.notchEdgeMap.set(notch, new NotchPosInfo(__WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].EAST, wallEndCapCoords.y === 0));
        }
        else if (wallEndCapCoords.y === lastRow && wallEndCapCoords.x !== 0) {
            this.notchEdgeMap.set(notch, new NotchPosInfo(__WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].SOUTH, wallEndCapCoords.x === lastCol));
        }
        else if (wallEndCapCoords.x === 0 && wallEndCapCoords.y !== 0) {
            this.notchEdgeMap.set(notch, new NotchPosInfo(__WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].WEST, wallEndCapCoords.y === lastRow));
        }
    };
    /**
     * Iterates over the edge notches and creates paths connecting them to create the vaguely rectangular outline of the
     * floor
     * @param sheetWallModel model to add paths to
     */
    SheetWallModelGenerator.prototype.createOutline = function (sheetWallModel) {
        var paths = [];
        var keyIter = this.notchEdgeMap.keys();
        var kObj;
        while (!(kObj = keyIter.next()).done) {
            paths.push(kObj.value);
        }
        paths.sort(this.edgeNotchComparator);
        for (var i = 0; i < paths.length; i++) {
            var notch = paths[i];
            var nextNotch = i < paths.length - 1 ? paths[i + 1] : paths[0];
            var notchInfo = this.notchEdgeMap.get(notch), nextNotchInfo = this.notchEdgeMap.get(nextNotch);
            if (notchInfo.direction === nextNotchInfo.direction || nextNotchInfo.isCorner) {
                var points = this.findNotchConnectionPoints(notchInfo, notch, nextNotch, false);
                var firstPoint = points.firstPoint, secondPoint = points.secondPoint;
                if (!firstPoint.equals(secondPoint)) {
                    sheetWallModel.floorOutline.addPath(new __WEBPACK_IMPORTED_MODULE_3_app_models_path__["a" /* default */](firstPoint, secondPoint).setClosed(false));
                }
                else {
                    console.debug("skipping connecting floor outer path because it's length 0: " + firstPoint.toString());
                }
            }
            else {
                // notches are on different sides and neither is a corner (unusual case of both parts of a corner of the maze being open)
                var points = this.findNotchConnectionPoints(notchInfo, notch, nextNotch, true);
                sheetWallModel.floorOutline.addPath(new __WEBPACK_IMPORTED_MODULE_3_app_models_path__["a" /* default */](points.firstPoint, points.cornerPoint).setClosed(false));
                sheetWallModel.floorOutline.addPath(new __WEBPACK_IMPORTED_MODULE_3_app_models_path__["a" /* default */](points.cornerPoint, points.secondPoint).setClosed(false));
            }
        }
    };
    SheetWallModelGenerator.prototype.findNotchConnectionPoints = function (notchInfo, notch, nextNotch, includeCorner) {
        var nextNotchAdditive = includeCorner ? 1 : 0;
        var firstPoint, floorCornerPoint, secondPoint;
        if (notchInfo.direction === __WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].NORTH) {
            firstPoint = notch.points[1];
            secondPoint = nextNotch.points[nextNotchAdditive];
            floorCornerPoint = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](secondPoint.x, firstPoint.y);
        }
        else if (notchInfo.direction === __WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].EAST) {
            firstPoint = notch.points[2];
            secondPoint = nextNotch.points[1 + nextNotchAdditive];
            floorCornerPoint = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](firstPoint.x, secondPoint.y);
        }
        else if (notchInfo.direction === __WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].SOUTH) {
            firstPoint = notch.points[3];
            secondPoint = nextNotch.points[2 + nextNotchAdditive];
            floorCornerPoint = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](secondPoint.x, firstPoint.y);
        }
        else if (notchInfo.direction === __WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].WEST) {
            firstPoint = notch.points[0];
            secondPoint = nextNotch.points[3 + nextNotchAdditive % 4];
            floorCornerPoint = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](firstPoint.x, secondPoint.y);
        }
        else {
            throw new Error("notch is not in edge map, but is on edge");
        }
        return new NotchConnection(firstPoint, floorCornerPoint, secondPoint);
    };
    SheetWallModelGenerator.prototype.numDigits = function (number) {
        var n = number < 0 ? -1 * number : number;
        var exp = 1;
        var powerOfTen = 10;
        while (true) {
            if (n < powerOfTen) {
                return exp;
            }
            powerOfTen *= 10;
            exp++;
        }
    };
    SheetWallModelGenerator.prototype.findWallTypeLabel = function (wallLength) {
        var label = this.wallTypeLabelsByLength.get(wallLength.toString());
        if (typeof label !== "undefined") {
            return label;
        }
        label = this.wallTypeLabelsByLength.size;
        this.wallTypeLabelsByLength.set(wallLength.toString(), label);
        return label;
    };
    SheetWallModelGenerator.directionRank = createDirectionRankMap();
    return SheetWallModelGenerator;
}());
/* harmony default export */ __webpack_exports__["a"] = (SheetWallModelGenerator);
function createDirectionRankMap() {
    var map = {};
    map[__WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].NORTH.name] = 0;
    map[__WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].EAST.name] = 1;
    map[__WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].SOUTH.name] = 2;
    map[__WEBPACK_IMPORTED_MODULE_7_app_direction__["a" /* default */].WEST.name] = 3;
    return map;
}


/***/ }),

/***/ "./src/app/factories/sheet-wall-tiling-optimizer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__ = __webpack_require__("./src/app/misc/big-util.ts");


/**
 * This class has an optimization function that tiles the walls in the sheet so that they're
 * - tiled in a way that fits within the max width and max height
 * - tiled in a way that wastes a minimal amount of space
 * @author adashrod@gmail.com
 */
var SheetWallTilingOptimizer = /** @class */ (function () {
    function SheetWallTilingOptimizer(sheetWallModel, separationSpace, maxWidth, maxHeight, wallHeight) {
        this.cursor = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */], __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */]);
        this.sheetWallModel = sheetWallModel;
        this.separationSpace = separationSpace;
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this.wallHeight = wallHeight;
    }
    // todo: could make this even more efficient by doing rows instead of columns after the first column
    SheetWallTilingOptimizer.prototype.optimize = function () {
        var floorWidth = this.sheetWallModel.floorOutline.width, floorHeight = this.sheetWallModel.floorOutline.height, wallHeight = this.sheetWallModel.walls[0].height;
        this.cursor = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */], floorHeight);
        var shapesDeque = this.sheetWallModel.walls.slice();
        while (this.sheetWallModel.walls.length > 0) {
            this.sheetWallModel.walls.pop();
        }
        shapesDeque.sort(function (s1, s2) { return s2.width.cmp(s1.width); });
        this.beginningOfLineX = __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */];
        this.currentMaxRowWidth = floorWidth;
        this.cursor.y = this.sheetWallModel.floorOutline.height.add(this.separationSpace);
        while (shapesDeque.length > 0) {
            if (this.fitsInNewRow(wallHeight)) {
                // add to new row in current column
                var longWall = shapesDeque.shift();
                if (this.currentMaxRowWidth !== null && longWall.width.gt(this.currentMaxRowWidth)) {
                    // simple fix for potential tiling overlap when numRows > numCols, not ideal because it wastes a bit of material space
                    this.currentMaxRowWidth = longWall.width;
                }
                this.addToCurrentRow(longWall);
                // so that we don't overwrite cmrw when it's already been set to the floor width on the first iteration
                if (this.currentMaxRowWidth == null) {
                    this.currentMaxRowWidth = longWall.width;
                }
            }
            else {
                // end of column reached, move right to new column
                this.cursor = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](this.cursor.x.add(this.currentMaxRowWidth || 0).add(this.separationSpace), __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */]);
                this.beginningOfLineX = this.cursor.x;
                this.currentMaxRowWidth = null;
                continue;
            }
            while (shapesDeque.length > 0) {
                var shortWall = shapesDeque[shapesDeque.length - 1];
                if (this.fitsInCurrentRow(shortWall)) {
                    this.addToCurrentRow(shapesDeque.pop());
                }
                else {
                    this.cursor = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](this.beginningOfLineX, this.cursor.y.add(wallHeight).add(this.separationSpace));
                    break;
                }
            }
        }
    };
    SheetWallTilingOptimizer.prototype.addToCurrentRow = function (wall) {
        wall.translate(this.cursor);
        var wallLabel = this.sheetWallModel.wallLabels.get(wall);
        if (typeof wallLabel === "undefined") {
            throw new Error("You forgot to add a shape to the wallLabels map: " + wall.toString());
        }
        wallLabel.translate(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](this.cursor.x.add(wall.width.mul(__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["a" /* HALF */])).sub(wallLabel.width.mul(__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["a" /* HALF */])), this.cursor.y.add(this.wallHeight.mul(__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["a" /* HALF */])).sub(wallLabel.height.mul(__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["a" /* HALF */]))));
        this.sheetWallModel.walls.push(wall);
        this.cursor.x = this.cursor.x.add(wall.width.add(this.separationSpace));
        if (this.cursor.x.gt(this.maxWidth)) {
            this.sheetWallModel.outOfBounds = true;
        }
    };
    SheetWallTilingOptimizer.prototype.fitsInNewRow = function (wallHeight) {
        return this.cursor.y.add(wallHeight).lte(this.maxHeight);
    };
    SheetWallTilingOptimizer.prototype.fitsInCurrentRow = function (wall) {
        if (this.currentMaxRowWidth === null) {
            throw new Error("you shouldn't call fitsInCurrentRow when currentMaxRowWidth is null");
        }
        return this.cursor.x.sub(this.beginningOfLineX).add(wall.width).lte(this.currentMaxRowWidth);
    };
    return SheetWallTilingOptimizer;
}());
/* harmony default export */ __webpack_exports__["a"] = (SheetWallTilingOptimizer);


/***/ }),

/***/ "./src/app/help-modal/help-modal.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    position: relative;\n}\n\n.fade-slide {\n    -webkit-animation: fade-in 500ms, slide 500ms;\n            animation: fade-in 500ms, slide 500ms;\n}\n\n.fade-slide-pop-left {\n    -webkit-animation: fade-in 500ms, slide-pop-left 500ms;\n            animation: fade-in 500ms, slide-pop-left 500ms;\n}\n\n.glow {\n    -webkit-animation: 750ms glow 1s 3;\n            animation: 750ms glow 1s 3;\n}\n\n.toggle-button, .close {\n    cursor: pointer;\n}\n\n.close {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n\n.modal {\n    -webkit-box-shadow: 2px 2px 5px 5px rgba(64, 80, 96, .25);\n            box-shadow: 2px 2px 5px 5px rgba(64, 80, 96, .25);\n    position: absolute;\n    left: 0;\n    padding: 5px;\n    background: #f3e0dc;\n    color: #bc4639;\n    width: 300px;\n    z-index: 1;\n}\n\n.modal.pop-left {\n    left: auto;\n    right: 0;\n}\n\n:host /deep/ .title {\n    font-style: italic;\n}\n\n:host /deep/ .body {\n    max-height: 400px;\n    overflow-y: auto;\n}\n\n:host /deep/ .title, :host /deep/ .body {\n    text-align: left;\n}\n\n@-webkit-keyframes glow {\n    0% {\n        color: #000;\n        background-color: #fff;\n    }\n    50% {\n        color: #888;\n        background-color: #0ff;\n    }\n    100% {\n        color: #000;\n        background-color: #fff;\n    }\n}\n\n@keyframes glow {\n    0% {\n        color: #000;\n        background-color: #fff;\n    }\n    50% {\n        color: #888;\n        background-color: #0ff;\n    }\n    100% {\n        color: #000;\n        background-color: #fff;\n    }\n}\n\n@-webkit-keyframes fade-in {\n    0% { opacity: 0.0; }\n    100% { opacity: 1.0; }\n}\n\n@keyframes fade-in {\n    0% { opacity: 0.0; }\n    100% { opacity: 1.0; }\n}\n\n@-webkit-keyframes slide {\n    0% { left: 10px; }\n    100% { left: 0; }\n}\n\n@keyframes slide {\n    0% { left: 10px; }\n    100% { left: 0; }\n}\n\n@-webkit-keyframes slide-pop-left {\n    0% { right: -10px; }\n    100% { right: 0; }\n}\n\n@keyframes slide-pop-left {\n    0% { right: -10px; }\n    100% { right: 0; }\n}\n"

/***/ }),

/***/ "./src/app/help-modal/help-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"container\">\n    <span (click)=\"toggle()\" class=\"toggle-button\" [ngClass]=\"{'glow': glow}\">[?]</span>\n    <div *ngIf=\"showHelpModal\" class=\"modal\" [ngClass]=\"{'pop-left': popLeft, 'fade-slide': !popLeft, 'fade-slide-pop-left': popLeft}\">\n        <span class=\"close\" (click)=\"close()\">&times;</span>\n        <ng-content select=\".title\"></ng-content>\n        <ng-content select=\".body\"></ng-content>\n    </div>\n</span>\n"

/***/ }),

/***/ "./src/app/help-modal/help-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpModalComponent = /** @class */ (function () {
    function HelpModalComponent() {
        this.showHelpModal = false;
    }
    HelpModalComponent_1 = HelpModalComponent;
    HelpModalComponent.prototype.ngOnInit = function () {
        HelpModalComponent_1.instances.push(this);
    };
    HelpModalComponent.prototype.toggle = function () {
        for (var _i = 0, _a = HelpModalComponent_1.instances; _i < _a.length; _i++) {
            var comp = _a[_i];
            if (comp !== this) {
                comp.close();
            }
        }
        this.showHelpModal = !this.showHelpModal;
    };
    HelpModalComponent.prototype.close = function () {
        this.showHelpModal = false;
    };
    HelpModalComponent.instances = [];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HelpModalComponent.prototype, "popLeft", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], HelpModalComponent.prototype, "glow", void 0);
    HelpModalComponent = HelpModalComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-help-modal",
            template: __webpack_require__("./src/app/help-modal/help-modal.component.html"),
            styles: [__webpack_require__("./src/app/help-modal/help-modal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpModalComponent);
    return HelpModalComponent;
    var HelpModalComponent_1;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/***/ (function(module, exports) {

module.exports = ".cut-intro, .numbering-text {\n    max-width: 550px;\n    margin: 0 20px 0;\n}\n\n.right {\n    float: right;\n}\n"

/***/ }),

/***/ "./src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<p>You can click on any of the thumbnails in this page to see full-size versions.</p>\n<div class=\"help-section\">\n    <h1>Printing</h1>\n    <div class=\"group\">\n        <app-lightbox-thumbnail title=\"Example SVG\" image=\"LaserCutMazes/assets/blueprint.png\" thumbnailHeight=\"100\"></app-lightbox-thumbnail>\n        <div class=\"cut-intro\">\n            The different parts of the maze are grouped together and given different colors to facilitate printing (see example on left).\n            The order that the groups are printed matters and an ideal order is:\n        </div>\n    </div>\n    <ol>\n        <li>score/engrave wall numbers and floor numbers (blue)</li>\n        <li>cut walls and cut notches (black)</li>\n        <li>cut floor outline (red)</li>\n        <li>DO NOT cut, score, or engrave the calibration rectangle (green)</li>\n        <li>DO NOT cut, score, or engrave the bounding box rectangle (purple)</li>\n    </ol>\n    <ul>\n        <li>\n            The numbers can be scored, or left out entirely. They're only there as a guide for assembly, though assembling a large maze without them could be\n            tedious.\n        </li>\n        <li>\n            The floor outline should be cut last. Since this is the cut that cuts the floor out of the material, cutting this before the notches could lead to\n            the notch cuts being misaligned.\n        </li>\n        <li>\n            The calibration rectangle serves as a guide for setting up the print job in your printer software and should not be cut, engraved, or scored at\n            all. See the next section for more details.\n        </li>\n    </ul>\n</div>\n<div class=\"help-section\">\n    <h1>Assembly</h1>\n    <div class=\"group\">\n        <app-lightbox-thumbnail title=\"Floor Notches\" image=\"LaserCutMazes/assets/notches.png\" thumbnailHeight=\"80\"></app-lightbox-thumbnail>\n        <div class=\"numbering-text\">\n            The floor piece has rectangular notches cut into it (left); the walls have stubs that fit into these notches (right).\n            Each pair of notches has a number printed between them, and a wall piece that fits into those notches has the same number printed on it.\n        </div>\n        <app-lightbox-thumbnail class=\"right\" title=\"Numbered Wall Pieces\" image=\"LaserCutMazes/assets/wallPieces.png\" thumbnailHeight=\"80\"></app-lightbox-thumbnail>\n    </div>\n    <p>\n        If the pieces fit somewhat snugly, you might only need to glue the walls along the outer edge to the floor. If they fit very tightly, you might not need\n        to glue them at all.\n    </p>\n</div>\n<div class=\"help-section\">\n    <h1>Out of Bounds</h1>\n    <p>\n        If the maze is too big, the pieces won't fit in a single printing area, and you'll get the out-of-bounds warning when the SVG is generated.\n        The tool currently doesn't break up the blueprint into multiple SVGs in this case. One solution would be to change any of the maze dimensions to use\n        less printing material; if that isn't preferred, you'll need to manually edit the SVG in the SVG editor of your choice to split the print into two or\n        more print jobs.\n    </p>\n    <p>\n        When the out-of-bounds situation occurs, the printer's max width and max height values will be used to generate a rectangular bounding box in the SVG\n        as a guide. It is displayed as a purple rectangle and anything outside of it will be outside of the printing area.\n    </p>\n</div>\n<div class=\"help-section\">\n    <h1>Calibration Rectangle</h1>\n    <h3>A need for Calibration</h3>\n    <div>\n        <p>\n            If your laser cutter software doesn't respect the pixel density settings (dots/pixels per inch, DPI, etc) then your image won't be the proper size,\n            i.e. it will be scaled down or up. The problem with this is that scaling everything down makes the floor notches smaller, (and scaling up makes the\n            floor notches bigger), but the material thickness doesn't change, so printing a scaled image would result in wall pieces that wouldn't fit in the\n            notches. More specifically, the width of the notches has to be exactly the same size as the material thickness for the pieces to fit together, and\n            scaling breaks that. See the following image for an example of this auto-scaling.\n        </p>\n        <app-lightbox-thumbnail title=\"Scaled Down\" image=\"LaserCutMazes/assets/improperScale.png\" thumbnailWidth=\"600\"></app-lightbox-thumbnail>\n        <p>\n            The above example maze was created with an 8-inch wide calibration rectangle (highlighted in green), but the image has been scaled down to about\n            7.5 inches. In order to fix this, the entire image should be selected and scaled up (stretched) until the calibration rectangle is lined up with\n            the 8-inch mark on the ruler.\n        </p>\n        <app-lightbox-thumbnail title=\"Corrected Scale\" image=\"LaserCutMazes/assets/correctedScale.png\" thumbnailWidth=\"600\"></app-lightbox-thumbnail>\n        <p>\n            In the second image, the entire blueprint has been scaled back up to make the calibration rectangle the correct size (8 inches wide here),\n            ensuring that all pieces are the correct size.\n        </p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () { };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-help",
            template: __webpack_require__("./src/app/help/help.component.html"),
            styles: [__webpack_require__("./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/lightbox-thumbnail/lightbox-thumbnail.component.css":
/***/ (function(module, exports) {

module.exports = ".thumbnail {\n    cursor: pointer;\n}\n\n.modal {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    top: 0;\n    left: 0;\n    background-color: rgba(32, 32, 32, .6);\n}\n\n.lightbox, .title {\n    text-align: center;\n}\n\n.close {\n    background: #5c2018;\n    font-size: 48px;\n    text-decoration: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n    padding: 0 10px 0;\n    border-radius: 15px;\n}\n"

/***/ }),

/***/ "./src/app/lightbox-thumbnail/lightbox-thumbnail.component.html":
/***/ (function(module, exports) {

module.exports = "<img #thumbnail class=\"thumbnail\" [src]=\"image\" (click)=\"showLightbox()\"/>\n<div class=\"modal\" *ngIf=\"shown\" (click)=\"hideLightbox()\">\n    <div class=\"lightbox\">\n        <a class=\"close\" (click)=\"hideLightbox()\">&times;</a>\n        <div class=\"title\">{{title}}</div>\n        <img [src]=\"image\"/>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/lightbox-thumbnail/lightbox-thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightboxThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LightboxThumbnailComponent = /** @class */ (function () {
    function LightboxThumbnailComponent() {
        this.shown = false;
    }
    LightboxThumbnailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.thumbnail.nativeElement.onload = function () {
            var aspectRatio = _this.thumbnail.nativeElement.width / _this.thumbnail.nativeElement.height;
            if (_this.thumbnailWidth) {
                _this.thumbnail.nativeElement.setAttribute("width", _this.thumbnailWidth);
                _this.thumbnail.nativeElement.setAttribute("height", Math.round(_this.thumbnailWidth / aspectRatio));
            }
            else if (_this.thumbnailHeight) {
                _this.thumbnail.nativeElement.setAttribute("width", Math.round(_this.thumbnailHeight * aspectRatio));
                _this.thumbnail.nativeElement.setAttribute("height", _this.thumbnailHeight);
            }
        };
    };
    LightboxThumbnailComponent.prototype.showLightbox = function () {
        this.shown = true;
    };
    LightboxThumbnailComponent.prototype.hideLightbox = function () {
        this.shown = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightboxThumbnailComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], LightboxThumbnailComponent.prototype, "image", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], LightboxThumbnailComponent.prototype, "thumbnailWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], LightboxThumbnailComponent.prototype, "thumbnailHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("thumbnail"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], LightboxThumbnailComponent.prototype, "thumbnail", void 0);
    LightboxThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-lightbox-thumbnail",
            template: __webpack_require__("./src/app/lightbox-thumbnail/lightbox-thumbnail.component.html"),
            styles: [__webpack_require__("./src/app/lightbox-thumbnail/lightbox-thumbnail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LightboxThumbnailComponent);
    return LightboxThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/maze-builder/maze-builder.component.css":
/***/ (function(module, exports) {

module.exports = ".conversions {\n    margin-bottom: 5px;\n}\n\n.section-title {\n    text-align: center;\n    margin: 2px 0;\n}\n\n.inputs {\n    width: 385px;\n    border-width: 2px;\n    border-style: outset;\n    border-color: #f3e0dc #d4a59a #d4a59a #f3e0dc;\n    padding: 5px;\n    background: #d4a59a;\n    color: #5c2018;\n}\n\n.row {\n    display: table-row;\n}\n\n.row > span, .row > div {\n    display: table-cell;\n}\n\n.row > span {\n    padding: 2px 5px;\n}\n\n.row input, .row select, .row label {\n    margin: 2px 5px;\n}\n\n.row input[type=\"number\"], .row input[type=\"text\"] {\n    width: 60px;\n}\n\ntable.maze {\n    border-collapse: collapse;\n    background: #f3e0dc;\n}\n\ntd {\n    padding: 0;\n    width: 25px;\n    height: 25px;\n    border: 2px solid rgba(0, 0, 0, 0);\n}\n\n.northWall {\n    border-top: 2px solid black;\n}\n\n.eastWall {\n    border-right: 2px solid black;\n}\n\n.southWall {\n    border-bottom: 2px solid black;\n}\n\n.westWall {\n    border-left: 2px solid black;\n}\n\n.try-clicking {\n    padding-left: 10px;\n}\n\n.svg-preview {\n    background: #d4a59a;\n    overflow: scroll;\n}\n\n.blueprint {\n    width: 100%;\n    height: 1000px;\n}\n\n.out-of-bounds {\n    background: #4285f4;\n    border: 1px solid #5c2018;\n    padding: 2px 5px;\n}\n"

/***/ }),

/***/ "./src/app/maze-builder/maze-builder.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <p>To get started, enter some values for the maze dimensions (rows and columns). Once you do that the algorithm will automatically generate a maze.\n        Choose your material measurements and you'll be ready to click \"Export SVG Blueprint\", which will let you download an SVG file to send to your\n        laser cutter.\n    </p>\n    <p>Each input has a [?] help button with more information on what that input means.</p>\n</div>\n<div class=\"conversions\">\n    <span>Some common measurements and conversions</span>\n    <app-help-modal>\n        <div class=\"title\">Common conversions</div>\n        <div class=\"body\">\n            <div class=\"conversion-table-title\">Material Thickness</div>\n            <table>\n                <thead>\n                    <tr>\n                        <th>Millimeters (mm)</th>\n                        <th>Centimeters (cm)</th>\n                        <th>Inches (in)</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>1</td>\n                        <td>.1</td>\n                        <td>.039</td>\n                    </tr>\n                    <tr>\n                        <td>2</td>\n                        <td>.2</td>\n                        <td>.079</td>\n                    </tr>\n                    <tr>\n                        <td>3</td>\n                        <td>.3</td>\n                        <td>.118</td>\n                    </tr>\n                    <tr>\n                        <td>4</td>\n                        <td>.4</td>\n                        <td>.158</td>\n                    </tr>\n                    <tr>\n                        <td>5</td>\n                        <td>.5</td>\n                        <td>.197</td>\n                    </tr>\n                    <tr>\n                        <td>3.18</td>\n                        <td>.318</td>\n                        <td>1/8</td>\n                    </tr>\n                    <tr>\n                        <td>6.35</td>\n                        <td>.635</td>\n                        <td>1/4</td>\n                    </tr>\n                </tbody>\n            </table>\n            <div class=\"conversion-table-title\">Print Area Dimensions</div>\n            <table>\n                <thead>\n                    <tr>\n                        <th>Millimeters (mm)</th>\n                        <th>Centimeters (cm)</th>\n                        <th>Inches (in)</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>279.4</td>\n                        <td>27.94</td>\n                        <td>11</td>\n                    </tr>\n                    <tr>\n                        <td>304.8</td>\n                        <td>30.48</td>\n                        <td>12</td>\n                    </tr>\n                    <tr>\n                        <td>495.3</td>\n                        <td>49.53</td>\n                        <td>19.5</td>\n                    </tr>\n                    <tr>\n                        <td>508</td>\n                        <td>50.8</td>\n                        <td>20</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </app-help-modal>\n</div>\n<form>\n    <div class=\"group\">\n        <div class=\"maze-inputs inputs\">\n            <div class=\"section-title\">\n                <span>Maze Configuration</span>\n                <app-help-modal>\n                    <div class=\"title\">Maze Configuration Parameters</div>\n                    <div class=\"body\">These parameters determine the shape, structure and dimensions of the maze. Enter values for rows and columns to get started.</div>\n                </app-help-modal>\n            </div>\n            <div class=\"row\">\n                <label for=\"numRowsInput\">number of rows</label>\n                <div>\n                    <input id=\"numRowsInput\" [type]=\"numericInputType\" min=\"1\" step=\"1\" [(ngModel)]=\"mazeConfig.numRows\" name=\"numRowsInput\"/>\n                    <app-help-modal>\n                        <div class=\"title\">number of maze rows</div>\n                        <div class=\"body\">Number of rows, aka height. This is the number of horizontal lanes in the maze (positive integers only).</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"numColsInput\">number of columns</label>\n                <div>\n                    <input id=\"numColsInput\" [type]=\"numericInputType\" min=\"1\" step=\"1\" [(ngModel)]=\"mazeConfig.numCols\" name=\"numColsInput\"/>\n                    <app-help-modal>\n                        <div class=\"title\">number of maze columns</div>\n                        <div class=\"body\">Number of columns, aka width. This is the number of vertical lanes in the maze (positive integers only).</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"mazeUnitInput\">units</label>\n                <div>\n                    <select id=\"mazeUnitInput\" [(ngModel)]=\"mazeConfig.unit\" (change)=\"buildMaze()\" name=\"mazeUnitInput\">\n                        <option *ngFor=\"let u of mazeUnits\" [ngValue]=\"u\">{{u.pluralName}}</option>\n                    </select>\n                    <app-help-modal>\n                        <div class=\"title\">Maze Measurement Units</div>\n                        <div class=\"body\">These are the units used for the measurements below.</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"wallHeightInput\">wall height</label>\n                <div>\n                    <input id=\"wallHeightInput\" [type]=\"numericInputType\" min=\".01\" step=\".25\" [(ngModel)]=\"mazeConfig.wallHeight\" (change)=\"buildMaze()\" name=\"wallHeightInput\"/>\n                    <app-help-modal>\n                        <div class=\"title\">Wall Height</div>\n                        <div class=\"body\">\n                            The height of the walls from the floor of the maze. This should be tall enough so that a marble rolling through the maze won't bounce over the walls.\n                            <img src=\"LaserCutMazes/assets/wallHeight.png\"/>\n                        </div>\n                    </app-help-modal>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"materialThicknessInput\">material thickness</label>\n                <div>\n                    <input id=\"materialThicknessInput\" [type]=\"numericInputType\" min=\".01\" step=\".01\" [(ngModel)]=\"mazeConfig.materialThickness\" (change)=\"buildMaze()\" name=\"materialThicknessInput\"/>\n                    <app-help-modal>\n                        <div class=\"title\">Material Thickness</div>\n                        <div class=\"body\">\n                            The thickness of the material being used to cut out the maze pieces. Note: this will also be the width of the walls once assembled.\n                            <img src=\"LaserCutMazes/assets/materialThickness.png\"/>\n                        </div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"hallWidthInput\">hall width</label>\n                <div>\n                    <input id=\"hallWidthInput\" [type]=\"numericInputType\" min=\".1\" step=\".1\" [(ngModel)]=\"mazeConfig.hallWidth\" (change)=\"buildMaze()\" name=\"hallWidthInput\"/>\n                    <app-help-modal>\n                        <div class=\"title\">Hall width</div>\n                        <div class=\"body\">\n                            Hall width, or space between walls. This should be at least as big as the diameter of a marble that would be rolling through the maze.\n                            <img src=\"LaserCutMazes/assets/hallWidth.png\"/>\n                        </div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"separationSpaceInput\">separation space</label>\n                <div>\n                    <input id=\"separationSpaceInput\" [type]=\"numericInputType\" min=\"0\" step=\".01\" [(ngModel)]=\"mazeConfig.separationSpace\" (change)=\"buildMaze()\" name=\"separationSpaceInput\"/>\n                    <app-help-modal>\n                        <div class=\"title\">Separation Space</div>\n                        <div class=\"body\">\n                            The minimum space between separate pieces on the blueprint for laser cutting. If set to 0, no material will be wasted between pieces, but if the kerf of the laser is high, the pieces might end up too narrow/short.\n                            <img src=\"LaserCutMazes/assets/separationSpace.png\"/>\n                        </div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"algorithmInput\">algorithm</label>\n                <div>\n                    <select id=\"algorithmInput\" [(ngModel)]=\"currentAlgorithm\" (change)=\"buildMaze()\" name=\"algorithmInput\">\n                        <option *ngFor=\"let a of algorithms\" [ngValue]=\"a\">{{a.name}}</option>\n                    </select>\n                    <app-help-modal>\n                        <div class=\"title\">Maze Generation Algorithm</div>\n                        <div class=\"body\">\n                            <span>This is the algorithm that is used to randomly generate the maze.</span>\n                            <dl>\n                                <dt>Prim's Algorithm</dt>\n                                <dd>Method: start with all spaces having all walls closed. Randomly pick a space and add it to the maze path. Add all of its neighboring spaces to a list. While there are spaces in the list, remove a random one, pick a random neighbor, connect the two (remove the wall), and add the removed space's unexplored neighbors to the list. Repeat until all spaces have been visited. <a href=\"https://en.wikipedia.org/wiki/Prim%27s_algorithm\" target=\"_blank\">Prim's Algorithm on Wikipedia</a></dd>\n                                <dt>Kruskal's Algorithm</dt>\n                                <dd>Method: start with all spaces having all walls closed. Go over every wall that separates two spaces (outer walls not included). Randomly pick a wall. If the two spaces separated by the wall are not already connected by a path, remove the wall between them. Repeat until all spaces are on the same path. <a href=\"https://en.wikipedia.org/wiki/Kruskal%27s_algorithm\" target=\"_blank\">Kruskal's Algorithm on Wikipedia</a></dd>\n                                <dt>Depth-First Search</dt>\n                                <dd>Method: start with all spaces having all walls closed. Randomly pick a space and add it to the maze path. Move in a random direction and add that to the path. Continue until a dead end is reached, then backtrack until reaching a space where a fork is possible and pick a new direction. Continue until all spaces have been visited. This method tends to make mazes with long paths, dead ends, and not a lot of forks. <a href=\"https://en.wikipedia.org/wiki/Depth-first_search\" target=\"_blank\">Depth-First Search Algorithm on Wikipedia</a></dd>\n                                <dt>Do-It-Yourself</dt>\n                                <dd>This \"algorithm\" does nothing. You start out with a maze with all walls closed and click on walls to toggle them on/off and design your own maze.</dd>\n                            </dl>\n                        </div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"randomSeedInput\">random seed</label>\n                <div>\n                    <input id=\"randomSeedInput\" type=\"text\" [(ngModel)]=\"randomSeed\" (change)=\"buildMaze()\" (keyup)=\"buildMaze()\" name=\"randomSeedInput\"/>\n                    <app-help-modal>\n                        <div class=\"title\">Random Seed</div>\n                        <div class=\"body\">\n                            <p>The random seed is where the random number generator \"starts\" generating random numbers. It can be any string of numbers/letters/etc. If you enter a random seed, then the randomly generated maze will always be the same randomly generated maze as long as you use that seed.</p>\n                            <p>For example: if you use Prim's algorithm, enter a seed of \"rand12\", and choose 4 rows and 4 columns, you should see a maze that has a path from the top-left corner, to the top-right corner, to the bottom-right corner. You should be able to generate that same maze using the same row, column, and seed parameters at any time, in any browser, even if you refresh the page.</p>\n                        </div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <span>last seed used:</span>\n                <span>{{lastSeedUsed}}</span>\n            </div>\n        </div>\n        <div class=\"printer-inputs inputs\">\n            <div class=\"section-title\">\n                <span>Printer Configuration</span>\n                <app-help-modal [popLeft]=\"true\">\n                    <div class=\"title\">Printer Configuration</div>\n                    <div class=\"body\">These are configurations specific to the model of the printer that are needed by this tool.</div>\n                </app-help-modal>\n            </div>\n            <div class=\"row\">\n                <label for=\"maxPrinterUnits\">units</label>\n                <div>\n                    <select id=\"maxPrinterUnits\" [(ngModel)]=\"maxPrinterUnits\" (change)=\"buildMaze()\" name=\"maxPrinterUnits\">\n                        <option *ngFor=\"let u of mazeUnits\" [ngValue]=\"u\">{{u.pluralName}}</option>\n                    </select>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Printer Dimension Units</div>\n                        <div class=\"body\">These are the units used for the measurements below.</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"printerPpu\">pixels per {{maxPrinterUnits.singularName}}</label>\n                <div>\n                    <input [type]=\"numericInputType\" min=\"1\" step=\"1\" [(ngModel)]=\"ppu\" (change)=\"buildMaze()\" name=\"printerPpu\"/>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Pixels per Unit</div>\n                        <div class=\"body\">\n                            The number of pixels that the laser cutter interprets as being the length of the selected unit. E.g. Choosing inches and 96 would mean\n                            96 pixels per inch, aka 96 dots per inch (DPI).\n                        </div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"maxWidthInput\">max printer width</label>\n                <div>\n                    <input id=\"maxWidthInput\" [type]=\"numericInputType\" min=\"1\" [(ngModel)]=\"maxWidth\" (change)=\"buildMaze()\" name=\"maxWidthInput\"/>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Max Printer Width</div>\n                        <div class=\"body\">The width of the laser cutter's printable area</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"maxHeightInput\">max printer height</label>\n                <div>\n                    <input id=\"maxHeightInput\" [type]=\"numericInputType\" min=\"1\" [(ngModel)]=\"maxHeight\" (change)=\"buildMaze()\" name=\"maxHeightInput\"/>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Max Printer Height</div>\n                        <div class=\"body\">The height of the laser cutter's printable area</div>\n                    </app-help-modal>\n                </div>\n            </div>\n        </div>\n        <div class=\"calibration-inputs inputs\">\n            <div class=\"section-title\">\n                <span>Calibration Rectangle Configuration</span>\n                <app-help-modal [popLeft]=\"true\">\n                    <div class=\"title\">Calibration Rectangle</div>\n                    <div class=\"body\">\n                        <p>All measurement inputs are used to calculate pixel-perfect-sized cutouts in the SVG, however some laser cutter software might scale images down or up. Since the pieces are interlocking, scaling the image will make them not fit together properly.</p>\n                        <p>If your laser cutter software scales the image, you can use the calibration rectangle as a guide to restore the correct scale. For Example: if your laser cutter has a ruler on the edge of the canvas with inch measurements, you can create a calibration rectangle 6 inches wide and scale the image back up/down until the rectangle is 6 inches according to that ruler, then the pieces should be cut at the correct size.</p>\n                        <p>IMPORTANT NOTE: Once you've used the rectangle to calibrate the scale, make sure not to cut or engrave it on the material.</p>\n                    </div>\n                </app-help-modal>\n            </div>\n            <div class=\"row\">\n                <label for=\"includeCalibrationRectangleInput\">include in SVG</label>\n                <div>\n                    <input id=\"includeCalibrationRectangleInput\" type=\"checkbox\" [(ngModel)]=\"includeCalibrationRectangle\" (change)=\"buildMaze()\" name=\"includeCalibrationRectangleInput\"/>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Include Calibration Rectangle</div>\n                        <div class=\"body\">Check this box to include the calibration rectangle in the exported SVG.</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"calibrationRectangleUnitInput\">units</label>\n                <div>\n                    <select id=\"calibrationRectangleUnitInput\" [(ngModel)]=\"calibrationRectangleConfig.unit\" (change)=\"buildMaze()\" name=\"calibrationRectangleUnitInput\">\n                        <option *ngFor=\"let u of rectangleUnits\" [ngValue]=\"u\">{{u.pluralName}}</option>\n                    </select>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Calibration Rectangle Units</div>\n                        <div class=\"body\">These are the units used for the measurements below.</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"calibrationRectangleWidthInput\">rectangle width</label>\n                <div>\n                    <input id=\"calibrationRectangleWidthInput\" [type]=\"numericInputType\" min=\"1\" step=\"1\" [(ngModel)]=\"calibrationRectangleConfig.width\" (change)=\"buildMaze()\" name=\"calibrationRectangleWidthInput\"/>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Rectangle Width</div>\n                        <div class=\"body\">The width of the rectangle in the specified units (positive integers only).</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <label for=\"calibrationRectangleHeightInput\">rectangle height</label>\n                <div>\n                    <input id=\"calibrationRectangleHeightInput\" [type]=\"numericInputType\" min=\"1\" step=\"1\" [(ngModel)]=\"calibrationRectangleConfig.height\" (change)=\"buildMaze()\" name=\"calibrationRectangleHeightInput\"/>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Rectangle Height</div>\n                        <div class=\"body\">The height of the rectangle in the specified units (positive integers only).</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <span>horizontal alignment</span>\n                <div>\n                    <label for=\"calibrationRectangleLeftInput\">left</label>\n                    <input id=\"calibrationRectangleLeftInput\" type=\"radio\" [value]=\"true\" [(ngModel)]=\"calibrationRectangleConfig.leftAligned\" (change)=\"buildMaze()\" name=\"horizontalRadio\"/>\n                    <label for=\"calibrationRectangleRightInput\">right</label>\n                    <input id=\"calibrationRectangleRightInput\" type=\"radio\" [value]=\"false\" [(ngModel)]=\"calibrationRectangleConfig.leftAligned\" (change)=\"buildMaze()\" name=\"horizontalRadio\"/>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Rectangle Horizontal Alignment</div>\n                        <div class=\"body\">The rectangle can be aligned to the left or right side of the printing area.</div>\n                    </app-help-modal>\n                </div>\n            </div>\n            <div class=\"row\">\n                <span>vertical alignment</span>\n                <div>\n                    <label for=\"calibrationRectangleTopInput\">top</label>\n                    <input id=\"calibrationRectangleTopInput\" type=\"radio\" [value]=\"true\" [(ngModel)]=\"calibrationRectangleConfig.topAligned\" (change)=\"buildMaze()\" name=\"verticalRadio\"/>\n                    <label for=\"calibrationRectangleBottomInput\">bottom</label>\n                    <input id=\"calibrationRectangleBottomInput\" type=\"radio\" [value]=\"false\" [(ngModel)]=\"calibrationRectangleConfig.topAligned\" (change)=\"buildMaze()\" name=\"verticalRadio\"/>\n                    <app-help-modal [popLeft]=\"true\">\n                        <div class=\"title\">Rectangle Vertical Alignment</div>\n                        <div class=\"body\">The rectangle can be aligned to the top or bottom of the printing area.</div>\n                    </app-help-modal>\n                </div>\n            </div>\n        </div>\n    </div>\n    <input type=\"button\" (click)=\"buildMaze()\" value=\"Regenerate\" [disabled]=\"!mazeConfig.numRows || !mazeConfig.numCols\"/>\n    <app-help-modal>\n        <div class=\"title\">Generate a New Random Maze</div>\n        <div class=\"body\">The maze is automatically rebuilt when you change any of the inputs. You can use this to manually generate a different random maze, but only if you don't set a random seed.</div>\n    </app-help-modal>\n    <div *ngIf=\"maze\" class=\"group\">\n        <table class=\"maze\">\n            <tr *ngFor=\"let row of maze.grid; let r = index\">\n                <td *ngFor=\"let elem of row; let c = index\" [ngClass]=\"{'northWall': !elem.northOpen, 'eastWall': !elem.eastOpen, 'southWall': !elem.southOpen, 'westWall': !elem.westOpen}\" (click)=\"onClickMazeCell($event, r, c)\"></td>\n            </tr>\n        </table>\n        <div class=\"try-clicking\">&lt;- Try clicking on the walls of the maze to toggle them</div>\n    </div>\n    <input type=\"button\" (click)=\"exportSvg()\" value=\"Export SVG Blueprint\" [disabled]=\"!maze\"/>\n    <app-help-modal>\n        <div class=\"title\">Export Maze Design to an SVG Blueprint</div>\n        <div class=\"body\">Once you've created a maze that you like with the above settings, click here to create the SVG file for download.</div>\n    </app-help-modal>\n    <label for=\"auto-svg\">Automatic SVG generation is {{autoGenerateSvg ? \"on\" : \"off\"}}</label><input id=\"auto-svg\" type=\"checkbox\" [(ngModel)]=\"autoGenerateSvg\" name=\"autoSvgCheckbox\"/>\n</form>\n<input type=\"button\" (click)=\"downloadSvg()\" value=\"Download\" [disabled]=\"!rawSvgSrc\"/>\n<label for=\"svg-preview\">SVG preview is {{showSvgPreview ? \"on\" : \"off\"}}</label><input id=\"svg-preview\" type=\"checkbox\" [(ngModel)]=\"showSvgPreview\" name=\"svgPreviewCheckbox\"/>\n<app-help-modal>\n    <div class=\"title\">Toggle SVG Preview</div>\n    <div class=\"body\">Click here to toggle the SVG preview. If an SVG has been generated, this will show the blueprint here in the page.</div>\n</app-help-modal>\n<span *ngIf=\"outOfBounds\">\n    <span class=\"out-of-bounds\">Warning: SVG is out of bounds of print area</span>\n    <app-help-modal [popLeft]=\"true\">\n        <div class=\"title\">Out of Bounds</div>\n        <div class=\"body\">\n            The maze is big enough that the pieces don't fit within the printing area.\n            See the help page for more info on what to do in this situation.\n        </div>\n    </app-help-modal>\n</span>\n<div class=\"svg-preview\" *ngIf=\"showSvgPreview\" [innerHTML]=\"safeSvgSrc || ''\"></div>\n"

/***/ }),

/***/ "./src/app/maze-builder/maze-builder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeBuilderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_big_js__ = __webpack_require__("./node_modules/big.js/big.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_big_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_big_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_algorithms_depth_first_search_algorithm__ = __webpack_require__("./src/app/algorithms/depth-first-search-algorithm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_algorithms_empty_algorithm__ = __webpack_require__("./src/app/algorithms/empty-algorithm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_algorithms_kruskals_algorithm__ = __webpack_require__("./src/app/algorithms/kruskals-algorithm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_algorithms_prims_algorithm__ = __webpack_require__("./src/app/algorithms/prims-algorithm.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_common_unit__ = __webpack_require__("./src/app/common/unit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_factories_linear_wall_model_generator__ = __webpack_require__("./src/app/factories/linear-wall-model-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_factories_rectangular_wall_model_generator__ = __webpack_require__("./src/app/factories/rectangular-wall-model-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_factories_sheet_wall_model_generator__ = __webpack_require__("./src/app/factories/sheet-wall-model-generator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_misc_big_util__ = __webpack_require__("./src/app/misc/big-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_models_calibration_rectangle__ = __webpack_require__("./src/app/models/calibration-rectangle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_models_maze__ = __webpack_require__("./src/app/models/maze.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_models_maze_config__ = __webpack_require__("./src/app/models/maze-config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_direction__ = __webpack_require__("./src/app/direction.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_maze_printer__ = __webpack_require__("./src/app/maze-printer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var MazeBuilderComponent = /** @class */ (function () {
    function MazeBuilderComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.mazeUnits = [__WEBPACK_IMPORTED_MODULE_9_app_common_unit__["a" /* default */].INCHES, __WEBPACK_IMPORTED_MODULE_9_app_common_unit__["a" /* default */].CENTIMETERS, __WEBPACK_IMPORTED_MODULE_9_app_common_unit__["a" /* default */].MILLIMETERS];
        this.rectangleUnits = [__WEBPACK_IMPORTED_MODULE_9_app_common_unit__["a" /* default */].INCHES, __WEBPACK_IMPORTED_MODULE_9_app_common_unit__["a" /* default */].CENTIMETERS];
        this.mazeConfig = new __WEBPACK_IMPORTED_MODULE_16_app_models_maze_config__["a" /* default */]();
        this.randomSeed = "";
        this.maxWidth = 19.5;
        this.maxHeight = 11;
        this.maxPrinterUnits = __WEBPACK_IMPORTED_MODULE_9_app_common_unit__["a" /* default */].INCHES;
        this.ppu = 96;
        this.includeCalibrationRectangle = false;
        this.calibrationRectangleConfig = new __WEBPACK_IMPORTED_MODULE_14_app_models_calibration_rectangle__["a" /* default */]();
        this.algorithms = [new __WEBPACK_IMPORTED_MODULE_4_app_algorithms_depth_first_search_algorithm__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_7_app_algorithms_prims_algorithm__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_6_app_algorithms_kruskals_algorithm__["a" /* default */](), new __WEBPACK_IMPORTED_MODULE_5_app_algorithms_empty_algorithm__["a" /* default */]()];
        this.currentAlgorithm = this.algorithms[0];
        this._showSvgPreview = false;
        this.outOfBounds = false;
        this.trackEvents = true;
        this.numericInputType = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent) ? "text" : "number";
    }
    MazeBuilderComponent_1 = MazeBuilderComponent;
    Object.defineProperty(MazeBuilderComponent.prototype, "showSvgPreview", {
        get: function () {
            return this._showSvgPreview;
        },
        set: function (show) {
            this._showSvgPreview = show;
            if (show) {
                window.ga("send", {
                    hitType: "event",
                    eventCategory: "Designer",
                    eventAction: "showSvg"
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    MazeBuilderComponent.prototype.consolidateConfigs = function () {
        var configs = [];
        var mc = this.mazeConfig;
        configs.push(["numMazeRows", mc.numRows.toString()]);
        configs.push(["numMazeCols", mc.numCols.toString()]);
        configs.push(["mazeUnits", mc.unit.pluralName]);
        configs.push(["wallHeight", mc.wallHeight.toString()]);
        configs.push(["materialThickness", mc.materialThickness.toString()]);
        configs.push(["hallWidth", mc.hallWidth.toString()]);
        configs.push(["separationSpace", mc.separationSpace.toString()]);
        configs.push(["algorithm", this.currentAlgorithm.name]);
        configs.push(["randomSeed", this.lastSeedUsed]);
        configs.push(["printerConfigUnits", this.maxPrinterUnits.pluralName]);
        configs.push(["printerConfigPixelsPerUnit", this.ppu.toString()]);
        configs.push(["maxPrinterWidth", this.maxWidth.toString()]);
        configs.push(["maxPrinterHeight", this.maxHeight.toString()]);
        configs.push(["calibrationRectangle", this.includeCalibrationRectangle ? "yes" : "no"]);
        if (this.includeCalibrationRectangle) {
            configs.push(["calibrationRectangleUnits", this.calibrationRectangleConfig.unit.pluralName]);
            configs.push(["calibrationRectangleWidth", this.calibrationRectangleConfig.width.toString()]);
            configs.push(["calibrationRectangleHeight", this.calibrationRectangleConfig.height.toString()]);
            configs.push(["calibrationRectangleHorizontal", this.calibrationRectangleConfig.leftAligned ? "left" : "right"]);
            configs.push(["calibrationRectangleVertical", this.calibrationRectangleConfig.topAligned ? "top" : "bottom"]);
        }
        return configs;
    };
    MazeBuilderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mazeConfig.addChangeListener(function (oldVal, newVal) {
            _this.buildMaze();
        });
        this.trackEvents = false;
        this.autoGenerateSvg = this.benchmark() < MazeBuilderComponent_1.AUTO_SVG_THRESHOLD_MS;
        this.trackEvents = true;
    };
    MazeBuilderComponent.prototype.buildMaze = function () {
        this.safeSvgSrc = null;
        this.rawSvgSrc = "";
        if (typeof this.mazeConfig.numRows !== "number" || typeof this.mazeConfig.numCols !== "number" ||
            this.mazeConfig.numRows <= 0 || this.mazeConfig.numCols <= 0) {
            return;
        }
        var start = new Date().getTime();
        var maze = new __WEBPACK_IMPORTED_MODULE_15_app_models_maze__["a" /* default */](this.mazeConfig.numCols, this.mazeConfig.numRows);
        this.currentAlgorithm.seed = this.randomSeed.toString().length > 0 ? this.randomSeed : new Date().getTime();
        this.lastSeedUsed = this.currentAlgorithm.seed.toString();
        maze.build(this.currentAlgorithm);
        console.log("seed used: " + this.currentAlgorithm.seed);
        this.maze = maze;
        console.log("maze build time: " + (new Date().getTime() - start) + " ms");
        if (this.trackEvents) {
            window.ga("send", {
                hitType: "event",
                eventCategory: "Designer",
                eventAction: "build",
                eventLabel: this.currentAlgorithm.name
            });
        }
        this.afterBuild();
    };
    MazeBuilderComponent.prototype.afterBuild = function () {
        if (this.autoGenerateSvg) {
            this.exportSvg();
        }
    };
    MazeBuilderComponent.prototype.onClickMazeCell = function (event, row, column) {
        var elem = event.target;
        var x = event.offsetX, y = event.offsetY;
        var edge = this.getEdge(x / elem.offsetWidth, y / elem.offsetHeight);
        if (edge !== null) {
            if (this.maze === null) {
                return;
            }
            var close_1 = this.maze.grid[row][column].isOpen(edge);
            var otherCellDelta = this.getAdjacentCellDelta(edge);
            if (close_1) {
                this.maze.grid[row][column].closeWall(edge);
                if (this.maze.isInBounds(column + otherCellDelta.x, row + otherCellDelta.y)) {
                    this.maze.grid[row + otherCellDelta.y][column + otherCellDelta.x].closeWall(edge.opposite);
                }
            }
            else {
                this.maze.grid[row][column].openWall(edge);
                if (this.maze.isInBounds(column + otherCellDelta.x, row + otherCellDelta.y)) {
                    this.maze.grid[row + otherCellDelta.y][column + otherCellDelta.x].openWall(edge.opposite);
                }
            }
            this.afterBuild();
        }
    };
    MazeBuilderComponent.prototype.getAdjacentCellDelta = function (direction) {
        if (direction === __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].NORTH) {
            return new __WEBPACK_IMPORTED_MODULE_8_app_common_ordered_pair__["a" /* default */](0, -1);
        }
        else if (direction === __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].EAST) {
            return new __WEBPACK_IMPORTED_MODULE_8_app_common_ordered_pair__["a" /* default */](1, 0);
        }
        else if (direction === __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].SOUTH) {
            return new __WEBPACK_IMPORTED_MODULE_8_app_common_ordered_pair__["a" /* default */](0, 1);
        }
        else if (direction === __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].WEST) {
            return new __WEBPACK_IMPORTED_MODULE_8_app_common_ordered_pair__["a" /* default */](-1, 0);
        }
        throw new Error("invalid direction");
    };
    MazeBuilderComponent.prototype.exportSvg = function () {
        if (this.maze === null) {
            return;
        }
        var multiplier = this.maxPrinterUnits.perInch.mul(this.ppu).div(this.mazeConfig.unit.perInch);
        var start = new Date().getTime();
        var linearWallModelGenerator = new __WEBPACK_IMPORTED_MODULE_10_app_factories_linear_wall_model_generator__["a" /* default */](this.maze);
        var linearWallModel = linearWallModelGenerator.generate();
        var rectangularWallModelGenerator = new __WEBPACK_IMPORTED_MODULE_11_app_factories_rectangular_wall_model_generator__["a" /* default */](linearWallModel);
        var rectangularWallModel = rectangularWallModelGenerator.generate();
        var sheetWallModelGenerator = new __WEBPACK_IMPORTED_MODULE_12_app_factories_sheet_wall_model_generator__["a" /* default */](rectangularWallModel);
        sheetWallModelGenerator.hallWidth = new __WEBPACK_IMPORTED_MODULE_2_big_js___default.a(this.mazeConfig.hallWidth).mul(multiplier);
        sheetWallModelGenerator.materialThickness = new __WEBPACK_IMPORTED_MODULE_2_big_js___default.a(this.mazeConfig.materialThickness).mul(multiplier);
        sheetWallModelGenerator.maxHeight = new __WEBPACK_IMPORTED_MODULE_2_big_js___default.a(this.maxHeight).mul(this.ppu);
        sheetWallModelGenerator.maxWidth = new __WEBPACK_IMPORTED_MODULE_2_big_js___default.a(this.maxWidth).mul(this.ppu);
        sheetWallModelGenerator.notchHeight = Object(__WEBPACK_IMPORTED_MODULE_13_app_misc_big_util__["c" /* min */])(this.maxPrinterUnits.perInch.mul(this.ppu).div(__WEBPACK_IMPORTED_MODULE_9_app_common_unit__["a" /* default */].MILLIMETERS.perInch).mul(4), new __WEBPACK_IMPORTED_MODULE_2_big_js___default.a(this.mazeConfig.hallWidth).mul(multiplier).mul(".33"));
        sheetWallModelGenerator.separationSpace = new __WEBPACK_IMPORTED_MODULE_2_big_js___default.a(this.mazeConfig.separationSpace).mul(multiplier);
        sheetWallModelGenerator.wallHeight = new __WEBPACK_IMPORTED_MODULE_2_big_js___default.a(this.mazeConfig.wallHeight).mul(multiplier);
        var sheetWallModel = sheetWallModelGenerator.generate();
        var mazePrinter = new __WEBPACK_IMPORTED_MODULE_18_app_maze_printer__["a" /* default */](sheetWallModel, new __WEBPACK_IMPORTED_MODULE_2_big_js___default.a(this.maxWidth).mul(this.ppu), new __WEBPACK_IMPORTED_MODULE_2_big_js___default.a(this.maxHeight).mul(this.ppu), this.maxPrinterUnits, this.ppu);
        if (this.includeCalibrationRectangle) {
            this.rawSvgSrc = mazePrinter.printSvg(this.consolidateConfigs(), this.calibrationRectangleConfig);
        }
        else {
            this.rawSvgSrc = mazePrinter.printSvg(this.consolidateConfigs());
        }
        this.safeSvgSrc = this.sanitizer.bypassSecurityTrustHtml(this.rawSvgSrc);
        this.outOfBounds = sheetWallModel.outOfBounds;
        console.info("svg export time: " + (new Date().getTime() - start) + " ms");
        if (!this.autoGenerateSvg && this.trackEvents) {
            window.ga("send", {
                hitType: "event",
                eventCategory: "Designer",
                eventAction: "export",
                eventLabel: this.currentAlgorithm.name
            });
        }
    };
    MazeBuilderComponent.prototype.downloadSvg = function () {
        var blob = new Blob([this.rawSvgSrc], { type: "image/svg+xml;charset=utf-8" });
        Object(__WEBPACK_IMPORTED_MODULE_3_file_saver__["saveAs"])(blob, "maze.svg");
        window.ga("send", {
            hitType: "event",
            eventCategory: "Designer",
            eventAction: "download",
            eventLabel: this.currentAlgorithm.name
        });
    };
    MazeBuilderComponent.prototype.benchmark = function () {
        var start = new Date().getTime();
        this.mazeConfig.numCols = 8;
        this.mazeConfig.numRows = 8;
        this.buildMaze();
        this.exportSvg();
        var end = new Date().getTime();
        this.mazeConfig.numCols = 0;
        this.mazeConfig.numRows = 0;
        this.maze = null;
        this.lastSeedUsed = "";
        return end - start;
    };
    MazeBuilderComponent.prototype.getEdge = function (x, y) {
        var threshold = .3;
        if (x < threshold) {
            if (y < threshold) {
                return __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].NORTH;
            }
            else if (y > 1 - threshold) {
                return __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].SOUTH;
            }
            return __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].WEST;
        }
        else if (x > 1 - threshold) {
            if (y < threshold) {
                return __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].NORTH;
            }
            else if (y > 1 - threshold) {
                return __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].SOUTH;
            }
            return __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].EAST;
        }
        if (y < threshold) {
            return __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].NORTH;
        }
        if (y > 1 - threshold) {
            return __WEBPACK_IMPORTED_MODULE_17_app_direction__["a" /* default */].SOUTH;
        }
        return null;
    };
    MazeBuilderComponent.AUTO_SVG_THRESHOLD_MS = 500;
    MazeBuilderComponent = MazeBuilderComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-maze-builder",
            template: __webpack_require__("./src/app/maze-builder/maze-builder.component.html"),
            styles: [__webpack_require__("./src/app/maze-builder/maze-builder.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], MazeBuilderComponent);
    return MazeBuilderComponent;
    var MazeBuilderComponent_1;
}());



/***/ }),

/***/ "./src/app/maze-printer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__ = __webpack_require__("./src/app/misc/big-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_misc_svg_header__ = __webpack_require__("./src/app/misc/svg-header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_svg_path__ = __webpack_require__("./src/app/svg/path.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_svg_svg_element_generator__ = __webpack_require__("./src/app/svg/svg-element-generator.ts");





var MazePrinter = /** @class */ (function () {
    function MazePrinter(sheetWallModel, maxWidth, maxHeight, printerUnits, ppu) {
        this.precision = 5;
        this.sheetWallModel = sheetWallModel;
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
        this.printerUnits = printerUnits;
        this.ppu = ppu;
    }
    /**
     * Prints an SVG with shapes representing cut-out sections that will be the walls and floor of a maze
     * @param configs              array of 2-tuple arrays, each containing a name and value
     * @param calibrationRectangle optional configuration for a calibration rectangle to print in the SVG
     */
    MazePrinter.prototype.printSvg = function (configs, calibrationRectangle) {
        var result = __WEBPACK_IMPORTED_MODULE_2_app_misc_svg_header__["a" /* default */];
        result = result.replace("{width}", this.sheetWallModel.maxHorizontalDisplacement.plus(5).toString())
            .replace("{height}", this.sheetWallModel.maxVerticalDisplacement.plus(5).toString());
        result += this.createConfigComment(configs);
        var svgElementGenerator = new __WEBPACK_IMPORTED_MODULE_4_app_svg_svg_element_generator__["a" /* default */]();
        result += "<g id=\"floor-notches\">";
        for (var _i = 0, _a = this.sheetWallModel.floorNotches.paths; _i < _a.length; _i++) {
            var notch = _a[_i];
            var svgPath = svgElementGenerator.modelPathToSvgPath(notch);
            result += svgElementGenerator.pathToSvgText(svgPath, this.precision);
        }
        result += "</g>\n";
        result += "<g id=\"floor-numbers\">";
        for (var _b = 0, _c = this.sheetWallModel.floorNumbers; _b < _c.length; _b++) {
            var floorNumber = _c[_b];
            result += svgElementGenerator.vectorNumberToSvgText(floorNumber, this.precision);
        }
        result += "</g>\n";
        result += "<g id=\"wall-numbers\">";
        var wallLabelValues = [];
        var valIter = this.sheetWallModel.wallLabels.values();
        var vObj;
        while (!(vObj = valIter.next()).done) {
            wallLabelValues.push(vObj.value);
        }
        for (var _d = 0, wallLabelValues_1 = wallLabelValues; _d < wallLabelValues_1.length; _d++) {
            var wallNumber = wallLabelValues_1[_d];
            result += svgElementGenerator.vectorNumberToSvgText(wallNumber, this.precision);
        }
        result += "</g>\n";
        result += "<g id=\"walls\">";
        for (var _e = 0, _f = this.sheetWallModel.walls; _e < _f.length; _e++) {
            var shape = _f[_e];
            for (var _g = 0, _h = shape.paths; _g < _h.length; _g++) {
                var wall = _h[_g];
                var svgPath = svgElementGenerator.modelPathToSvgPath(wall);
                result += svgElementGenerator.pathToSvgText(svgPath, this.precision);
            }
        }
        result += "</g>\n";
        result += "<g id=\"floor-outline\">";
        for (var _j = 0, _k = this.sheetWallModel.floorOutline.paths; _j < _k.length; _j++) {
            var outlinePath = _k[_j];
            var svgPath = svgElementGenerator.modelPathToSvgPath(outlinePath);
            svgPath.style = svgPath.style.replace("#000000", "#ff0000");
            result += svgElementGenerator.pathToSvgText(svgPath, this.precision);
        }
        result += "</g>\n";
        if (calibrationRectangle != null) {
            result += "<g id=\"calibration-rectangle\">";
            for (var _l = 0, _m = this.buildCalibrationRectangle(calibrationRectangle); _l < _m.length; _l++) {
                var rectSide = _m[_l];
                rectSide.style = rectSide.style.replace("000000", "00ff00");
                result += svgElementGenerator.pathToSvgText(rectSide, this.precision);
            }
            result += "</g>\n";
        }
        if (this.sheetWallModel.outOfBounds) {
            result += "<g id=\"bounding-box\">";
            for (var _o = 0, _p = this.buildBoundingBoxRectangle(); _o < _p.length; _o++) {
                var rectSide = _p[_o];
                rectSide.style = rectSide.style.replace("000000", "ff00ff");
                result += svgElementGenerator.pathToSvgText(rectSide, this.precision);
            }
            result += "</g>\n";
        }
        result += "</svg>\n";
        return result;
    };
    MazePrinter.prototype.createConfigComment = function (configs) {
        var comment = "<!--\n\tGenerated by Laser-Cut Mazes http://adashrod.github.io/LaserCutMazes on " + new Date().toISOString() + "\n";
        for (var _i = 0, configs_1 = configs; _i < configs_1.length; _i++) {
            var config = configs_1[_i];
            comment += "\t" + config[0] + ": " + config[1] + "\n";
        }
        comment += "-->\n";
        return comment;
    };
    MazePrinter.prototype.buildCalibrationRectangle = function (calibrationRectangle) {
        var multiplier = this.printerUnits.perInch.mul(this.ppu).div(calibrationRectangle.unit.perInch), width = multiplier.mul(calibrationRectangle.width), height = multiplier.mul(calibrationRectangle.height);
        var topLeft = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */], __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */]);
        if (!calibrationRectangle.leftAligned) {
            topLeft.x = this.maxWidth.sub(width);
        }
        if (!calibrationRectangle.topAligned) {
            topLeft.y = this.maxHeight.sub(height);
        }
        var topRight = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](topLeft.x.add(width), topLeft.y), bottomRight = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](topRight.x, topLeft.y.add(height)), bottomLeft = new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](topLeft.x, bottomRight.y);
        var top = new __WEBPACK_IMPORTED_MODULE_3_app_svg_path__["a" /* default */](topLeft, topRight), right = new __WEBPACK_IMPORTED_MODULE_3_app_svg_path__["a" /* default */](topRight, bottomRight), bottom = new __WEBPACK_IMPORTED_MODULE_3_app_svg_path__["a" /* default */](bottomRight, bottomLeft), left = new __WEBPACK_IMPORTED_MODULE_3_app_svg_path__["a" /* default */](bottomLeft, topLeft);
        return [top, right, bottom, left];
    };
    MazePrinter.prototype.buildBoundingBoxRectangle = function () {
        var top = new __WEBPACK_IMPORTED_MODULE_3_app_svg_path__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */], __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */]), new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](this.maxWidth, __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */])), right = new __WEBPACK_IMPORTED_MODULE_3_app_svg_path__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](this.maxWidth, __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */]), new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](this.maxWidth, this.maxHeight)), bottom = new __WEBPACK_IMPORTED_MODULE_3_app_svg_path__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](this.maxWidth, this.maxHeight), new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */], this.maxHeight)), left = new __WEBPACK_IMPORTED_MODULE_3_app_svg_path__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */], this.maxHeight), new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */], __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */]));
        return [top, right, bottom, left];
    };
    return MazePrinter;
}());
/* harmony default export */ __webpack_exports__["a"] = (MazePrinter);


/***/ }),

/***/ "./src/app/misc/big-util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = min;
/* unused harmony export max */
/* harmony export (immutable) */ __webpack_exports__["d"] = roundAndStrip;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HALF; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js__ = __webpack_require__("./node_modules/big.js/big.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_big_js__);

function min(a, b) {
    return a.lt(b) ? a : b;
}
function max(a, b) {
    return a.gt(b) ? a : b;
}
function roundAndStrip(num, precision) {
    var s = num.toFixed(precision);
    var dot = s.indexOf(".");
    if (dot === -1) {
        return s;
    }
    var i;
    for (i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) !== "0") {
            break;
        }
    }
    if (s.charAt(i) === ".") {
        return s.substring(0, i);
    }
    return s.substring(0, i + 1);
}
var ZERO = new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(0);
var HALF = new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(".5");


/***/ }),

/***/ "./src/app/misc/svg-header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var SVG_HEADER = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg xmlns:svg=\"http://www.w3.org/2000/svg\"\n    xmlns=\"http://www.w3.org/2000/svg\" id=\"svg2\" version=\"1.1\"\n    width=\"{width}\" height=\"{height}\">\n<metadata id=\"metadata4933\"/>\n<defs id=\"defs4\"/>\n";
/* harmony default export */ __webpack_exports__["a"] = (SVG_HEADER);


/***/ }),

/***/ "./src/app/models/calibration-rectangle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_unit__ = __webpack_require__("./src/app/common/unit.ts");

/**
 * A model for a single rectangle with integral width and height values in inches or cm. This can be printed on an SVG
 * to help calibrate the scale of the SVG on printing software.
 * @author adashrod@gmail.com
 */
var CalibrationRectangle = /** @class */ (function () {
    function CalibrationRectangle() {
        this._width = 6;
        this._height = 6;
        this._unit = __WEBPACK_IMPORTED_MODULE_0_app_common_unit__["a" /* default */].INCHES;
        this.leftAligned = true;
        this.topAligned = true;
    }
    Object.defineProperty(CalibrationRectangle.prototype, "width", {
        /**
         * the integral number of units wide the rectangle is
         */
        get: function () {
            return this._width;
        },
        set: function (w) {
            var val;
            if (typeof w === "string") {
                val = parseInt(w, 10);
            }
            else {
                val = w;
            }
            this._width = Math.max(1, Math.floor(val));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalibrationRectangle.prototype, "height", {
        /**
         * the integral number of units high the rectangle is
         */
        get: function () {
            return this._height;
        },
        set: function (h) {
            var val;
            if (typeof h === "string") {
                val = parseInt(h, 10);
            }
            else {
                val = h;
            }
            this._height = Math.max(1, Math.floor(val));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalibrationRectangle.prototype, "unit", {
        get: function () {
            return this._unit;
        },
        set: function (u) {
            if (u === __WEBPACK_IMPORTED_MODULE_0_app_common_unit__["a" /* default */].INCHES || u === __WEBPACK_IMPORTED_MODULE_0_app_common_unit__["a" /* default */].CENTIMETERS) {
                this._unit = u;
            }
            else {
                this._unit = __WEBPACK_IMPORTED_MODULE_0_app_common_unit__["a" /* default */].INCHES;
            }
        },
        enumerable: true,
        configurable: true
    });
    return CalibrationRectangle;
}());
/* harmony default export */ __webpack_exports__["a"] = (CalibrationRectangle);


/***/ }),

/***/ "./src/app/models/linear-wall-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wall; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_direction__ = __webpack_require__("./src/app/direction.ts");

var Wall = /** @class */ (function () {
    function Wall(a, b) {
        var direction = __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].determineDirection(a, b);
        if (direction === __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].NORTH || direction === __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].WEST) {
            this.start = b;
            this.end = a;
        }
        else {
            this.start = a;
            this.end = b;
        }
    }
    Wall.prototype.toString = function () {
        return "Wall[" + this.start.toString() + " to " + this.end.toString() + "]";
    };
    return Wall;
}());

var LinearWallModel = /** @class */ (function () {
    function LinearWallModel(width, height, favorEwWalls) {
        this.walls = [];
        this.width = width;
        this.height = height;
        this.favorEwWalls = favorEwWalls;
    }
    LinearWallModel.prototype.addWall = function (wall) {
        this.walls.push(wall);
    };
    return LinearWallModel;
}());
/* harmony default export */ __webpack_exports__["b"] = (LinearWallModel);


/***/ }),

/***/ "./src/app/models/maze-config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_unit__ = __webpack_require__("./src/app/common/unit.ts");

/**
 * a class for encapsulating all of the config needed for building a maze
 */
var MazeConfig = /** @class */ (function () {
    function MazeConfig() {
        this.unit = __WEBPACK_IMPORTED_MODULE_0_app_common_unit__["a" /* default */].INCHES;
        this.wallHeight = .5;
        this.materialThickness = .118;
        this.hallWidth = .5;
        this.separationSpace = .05;
        // algorithm: MazeGenerator;
        this.listeners = [];
    }
    Object.defineProperty(MazeConfig.prototype, "numRows", {
        get: function () {
            return this._numRows;
        },
        set: function (newVal) {
            var oldVal = this.numRows;
            if (typeof newVal === "string") {
                this._numRows = parseInt(newVal, 10);
            }
            else {
                this._numRows = newVal;
            }
            if (oldVal !== newVal) {
                for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                    var l = _a[_i];
                    l(oldVal, newVal);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MazeConfig.prototype, "numCols", {
        get: function () {
            return this._numCols;
        },
        set: function (newVal) {
            var oldVal = this.numCols;
            if (typeof newVal === "string") {
                this._numCols = parseInt(newVal, 10);
            }
            else {
                this._numCols = newVal;
            }
            if (oldVal !== newVal) {
                for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
                    var l = _a[_i];
                    l(oldVal, newVal);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    MazeConfig.prototype.addChangeListener = function (listener) {
        this.listeners.push(listener);
    };
    return MazeConfig;
}());
/* harmony default export */ __webpack_exports__["a"] = (MazeConfig);


/***/ }),

/***/ "./src/app/models/maze.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_models_space__ = __webpack_require__("./src/app/models/space.ts");

/**
 * This maze class is a representation of a maze based on a grid of squares. Each square knows about the four walls
 * surrounding it.
 * @author adashrod@gmail.com
 */
var Maze = /** @class */ (function () {
    function Maze(numCols, numRows) {
        this.grid = [];
        this.numCols = numCols;
        this.numRows = numRows;
        this.grid = [];
        this.initGrid();
    }
    Maze.prototype.initGrid = function () {
        for (var y = 0; y < this.numRows; y++) {
            this.grid.push([]);
            for (var x = 0; x < this.numCols; x++) {
                this.grid[y].push(new __WEBPACK_IMPORTED_MODULE_0_app_models_space__["a" /* default */]());
            }
        }
    };
    Maze.prototype.resetGrid = function () {
        for (var y = 0; y < this.numRows; y++) {
            for (var x = 0; x < this.numCols; x++) {
                this.grid[y][x] = new __WEBPACK_IMPORTED_MODULE_0_app_models_space__["a" /* default */]();
            }
        }
    };
    /**
     * check if a space determined by the coordinates is inside the maze boundary
     */
    Maze.prototype.isInBounds = function (x, y) {
        return x >= 0 && x < this.numCols && y >= 0 && y < this.numRows;
    };
    /**
     * Randomizes this maze using the supplied algorithm
     * @param generatorAlgorithm which algorithm to use
     */
    Maze.prototype.build = function (generatorAlgorithm) {
        this.resetGrid();
        generatorAlgorithm.buildPaths(this);
    };
    return Maze;
}());
/* harmony default export */ __webpack_exports__["a"] = (Maze);


/***/ }),

/***/ "./src/app/models/path.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Path = /** @class */ (function () {
    /**
     * if passed two arguments, creates an unclosed path from the first to the second
     * otherwise creates a closed path with no points to start
     * @param from start of path
     * @param to end of path
     */
    function Path(from, to) {
        this.points = [];
        this.isClosed = true;
        if (typeof from !== "undefined" && typeof to !== "undefined") {
            this.points.push(from);
            this.points.push(to);
            this.isClosed = false;
        }
    }
    Path.prototype.addPoint = function (point) {
        this.points.push(point);
        return this;
    };
    Path.prototype.setClosed = function (closed) {
        this.isClosed = closed;
        return this;
    };
    Path.prototype.translate = function (delta) {
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var point = _a[_i];
            point.x = point.x.add(delta.x);
            point.y = point.y.add(delta.y);
        }
        return this;
    };
    Path.prototype.toString = function () {
        var builder = "";
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var point = _a[_i];
            builder += "(" + point.x + ", " + point.y + ") -> ";
        }
        if (builder.length > 0) {
            builder = builder.substring(0, builder.length - 4);
        }
        return builder;
    };
    return Path;
}());
/* harmony default export */ __webpack_exports__["a"] = (Path);


/***/ }),

/***/ "./src/app/models/rectangular-wall-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wall; });
var RectangularWallModel = /** @class */ (function () {
    function RectangularWallModel(width, height) {
        this.walls = [];
        this.width = width;
        this.height = height;
    }
    RectangularWallModel.prototype.addWall = function (wall) {
        this.walls.push(wall);
        return this;
    };
    return RectangularWallModel;
}());
/* harmony default export */ __webpack_exports__["b"] = (RectangularWallModel);
var Wall = /** @class */ (function () {
    function Wall(start, end, wallDirection) {
        this.start = start;
        this.end = end;
        this.length = Math.max(end.y - start.y + 1, end.x - start.x + 1);
        this.wallDirection = wallDirection;
    }
    return Wall;
}());



/***/ }),

/***/ "./src/app/models/shape.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__ = __webpack_require__("./src/app/misc/big-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_path__ = __webpack_require__("./src/app/models/path.ts");



var Shape = /** @class */ (function () {
    /**
     * if passed one argument, creates a new shape with that one path
     * if passed no arguments, creates an empty Shape
     * @param path optional path
     */
    function Shape(path) {
        this.paths = [];
        this.cachedWidth = null;
        this.cachedHeight = null;
        if (typeof path !== "undefined") {
            this.paths.push(path);
        }
    }
    Shape.copy = function (shape) {
        var copy = new Shape();
        for (var _i = 0, _a = shape.paths; _i < _a.length; _i++) {
            var path = _a[_i];
            var pathCopy = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
            for (var _b = 0, _c = path.points; _b < _c.length; _b++) {
                var point = _c[_b];
                pathCopy.addPoint(new __WEBPACK_IMPORTED_MODULE_0_app_common_ordered_pair__["a" /* default */](point.x, point.y));
            }
            pathCopy.setClosed(path.isClosed);
            copy.addPath(pathCopy);
        }
        return copy;
    };
    Shape.prototype.addPath = function (path) {
        this.paths.push(path);
        this.cachedWidth = null;
        this.cachedHeight = null;
        return this;
    };
    Shape.prototype.addShape = function (shape) {
        Array.prototype.push.apply(this.paths, shape.paths);
        this.cachedWidth = null;
        this.cachedHeight = null;
        return this;
    };
    Object.defineProperty(Shape.prototype, "width", {
        get: function () {
            if (this.cachedWidth !== null) {
                return this.cachedWidth;
            }
            var minimum = null, maximum = null;
            for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
                var path = _a[_i];
                for (var _b = 0, _c = path.points; _b < _c.length; _b++) {
                    var point = _c[_b];
                    if (minimum === null || point.x.lt(minimum)) {
                        minimum = point.x;
                    }
                    if (maximum === null || point.x.gt(maximum)) {
                        maximum = point.x;
                    }
                }
            }
            if (maximum === null || minimum === null) {
                return __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */];
            }
            return maximum.sub(minimum);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "height", {
        get: function () {
            if (this.cachedHeight !== null) {
                return this.cachedHeight;
            }
            var minimum = null, maximum = null;
            for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
                var path = _a[_i];
                for (var _b = 0, _c = path.points; _b < _c.length; _b++) {
                    var point = _c[_b];
                    if (minimum === null || point.y.lt(minimum)) {
                        minimum = point.y;
                    }
                    if (maximum === null || point.y.gt(maximum)) {
                        maximum = point.y;
                    }
                }
            }
            if (maximum === null || minimum === null) {
                return __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */];
            }
            return maximum.sub(minimum);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "maxHorizontalDisplacement", {
        get: function () {
            var maximum = null;
            for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
                var path = _a[_i];
                for (var _b = 0, _c = path.points; _b < _c.length; _b++) {
                    var point = _c[_b];
                    if (maximum === null || point.x.gt(maximum)) {
                        maximum = point.x;
                    }
                }
            }
            return maximum || __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "maxVerticalDisplacement", {
        get: function () {
            var maximum = null;
            for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
                var path = _a[_i];
                for (var _b = 0, _c = path.points; _b < _c.length; _b++) {
                    var point = _c[_b];
                    if (maximum === null || point.y.gt(maximum)) {
                        maximum = point.y;
                    }
                }
            }
            return maximum || __WEBPACK_IMPORTED_MODULE_1_app_misc_big_util__["b" /* ZERO */];
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.translate = function (delta) {
        for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
            var path = _a[_i];
            path.translate(delta);
        }
        return this;
    };
    /**
     * for now, at least, this assumes that the object is positioned at 0,0. If that's not the case, this will also end
     * up doing an unwanted translation
     * @param scaleFactor
     * @return
     */
    Shape.prototype.scale = function (scaleFactor) {
        for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
            var path = _a[_i];
            for (var _b = 0, _c = path.points; _b < _c.length; _b++) {
                var point = _c[_b];
                point.x = point.x.mul(scaleFactor.x);
                point.y = point.y.mul(scaleFactor.y);
            }
        }
        return this;
    };
    Shape.prototype.toString = function () {
        var result = "Shape[";
        if (this.paths.length > 0) {
            for (var _i = 0, _a = this.paths; _i < _a.length; _i++) {
                var p = _a[_i];
                result += p.toString() + ", ";
            }
            result = result.substring(0, result.length - 2);
        }
        return result + "]";
    };
    return Shape;
}());
/* harmony default export */ __webpack_exports__["a"] = (Shape);


/***/ }),

/***/ "./src/app/models/sheet-wall-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_models_shape__ = __webpack_require__("./src/app/models/shape.ts");

/**
 * This model class is a model of the walls and floor that compose a maze with the intention that each piece (wall or
 * floor) is of a constant thickness (the thickness of the physical sheet that will be used) and the walls will be
 * rotated upward and attached to the floor.
 * @author adashrod@gmail.com
 */
var SheetWallModel = /** @class */ (function () {
    function SheetWallModel() {
        this.floorNotches = new __WEBPACK_IMPORTED_MODULE_0_app_models_shape__["a" /* default */]();
        this.floorOutline = new __WEBPACK_IMPORTED_MODULE_0_app_models_shape__["a" /* default */]();
        this.walls = [];
        this.floorNumbers = [];
        this.wallLabels = new Map(); // reference equality is ok because there won't be any duplicate keys
    }
    SheetWallModel.prototype.addShape = function (shape) {
        this.walls.push(shape);
        return this;
    };
    Object.defineProperty(SheetWallModel.prototype, "maxHorizontalDisplacement", {
        get: function () {
            var max = this.floorOutline.maxHorizontalDisplacement;
            for (var _i = 0, _a = this.walls; _i < _a.length; _i++) {
                var wall = _a[_i];
                if (wall.maxHorizontalDisplacement.gt(max)) {
                    max = wall.maxHorizontalDisplacement;
                }
            }
            return max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SheetWallModel.prototype, "maxVerticalDisplacement", {
        get: function () {
            var max = this.floorOutline.maxVerticalDisplacement;
            for (var _i = 0, _a = this.walls; _i < _a.length; _i++) {
                var wall = _a[_i];
                if (wall.maxVerticalDisplacement.gt(max)) {
                    max = wall.maxVerticalDisplacement;
                }
            }
            return max;
        },
        enumerable: true,
        configurable: true
    });
    return SheetWallModel;
}());
/* harmony default export */ __webpack_exports__["a"] = (SheetWallModel);


/***/ }),

/***/ "./src/app/models/space.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_direction__ = __webpack_require__("./src/app/direction.ts");

/**
 * A Space represents an element in a 2D array representation of a maze. It knows whether it has walls on any four sides.
 * @author adashrod@gmail.com
 */
var Space = /** @class */ (function () {
    function Space() {
        this.northOpen = false;
        this.eastOpen = false;
        this.southOpen = false;
        this.westOpen = false;
    }
    /**
     * Removes a wall in the space
     * @param direction which wall to remove
     */
    Space.prototype.openWall = function (direction) {
        this.changeWall(direction, true);
    };
    /**
     * Adds a wall in the space
     * @param direction which wall to add
     */
    Space.prototype.closeWall = function (direction) {
        this.changeWall(direction, false);
    };
    Space.prototype.changeWall = function (direction, open) {
        if (direction === __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].NORTH) {
            this.northOpen = open;
        }
        else if (direction === __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].EAST) {
            this.eastOpen = open;
        }
        else if (direction === __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].SOUTH) {
            this.southOpen = open;
        }
        else if (direction === __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].WEST) {
            this.westOpen = open;
        }
    };
    /**
     * @param direction which direction to check for a wall
     * @return true if the wall in the specified direction is open (no wall)
     */
    Space.prototype.isOpen = function (direction) {
        switch (direction) {
            case __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].NORTH:
                return this.northOpen;
            case __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].EAST:
                return this.eastOpen;
            case __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].SOUTH:
                return this.southOpen;
            case __WEBPACK_IMPORTED_MODULE_0_app_direction__["a" /* default */].WEST:
                return this.westOpen;
            default:
                throw new Error("invalid direction: " + direction);
        }
    };
    Space.prototype.toString = function () {
        var str = "Space[";
        if (this.northOpen) {
            str += "^";
        }
        if (this.eastOpen) {
            str += ">";
        }
        if (this.southOpen) {
            str += "v";
        }
        if (this.westOpen) {
            str += "<";
        }
        return str + "]";
    };
    return Space;
}());
/* harmony default export */ __webpack_exports__["a"] = (Space);


/***/ }),

/***/ "./src/app/models/vector-number.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHARACTER_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHARACTER_HEIGHT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js__ = __webpack_require__("./node_modules/big.js/big.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_big_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_path__ = __webpack_require__("./src/app/models/path.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_models_shape__ = __webpack_require__("./src/app/models/shape.ts");




/**
 * A VectorNumber is a model with a numeric value, and context of width, height, and position
 * @author adashrod@gmail.com
 */
var VectorNumber = /** @class */ (function () {
    function VectorNumber(number, width, height, position) {
        this.number = number;
        this.width = width;
        this.height = height;
        this.position = position;
    }
    VectorNumber.characterToShape = function (c) {
        var shape = VectorNumber.charMap[c];
        if (typeof shape !== "undefined") {
            return __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */].copy(shape);
        }
        throw new Error("\"" + c + "\" is not a valid character for VectorNumber");
    };
    VectorNumber.prototype.translate = function (delta) {
        this.position.x = this.position.x.add(delta.x);
        this.position.y = this.position.y.add(delta.y);
        return this;
    };
    VectorNumber.charMap = buildCharMap();
    return VectorNumber;
}());
/* harmony default export */ __webpack_exports__["c"] = (VectorNumber);
function buildCharMap() {
    var map = {};
    var zero = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    var one = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    var two = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    var three = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    var four = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    var five = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    var six = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    var seven = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    var eight = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    var nine = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
    map["0"] = zero;
    map["1"] = one;
    map["2"] = two;
    map["3"] = three;
    map["4"] = four;
    map["5"] = five;
    map["6"] = six;
    map["7"] = seven;
    map["8"] = eight;
    map["9"] = nine;
    var zeroPath = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
    zeroPath.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(3)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(3)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(7)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(7)))
        .setClosed(true);
    zero.addPath(zeroPath);
    var onePathMain = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */](), onePathBase = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
    onePathMain.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(3), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(3), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .setClosed(false);
    onePathBase.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .setClosed(false);
    one.addPath(onePathMain).addPath(onePathBase);
    var twoPath = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
    twoPath.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .setClosed(false);
    two.addPath(twoPath);
    var threePathTop = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */](), threePathBottom = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
    threePathTop.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .setClosed(false);
    threePathBottom.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(6)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .setClosed(false);
    three.addPath(threePathTop).addPath(threePathBottom);
    var fourPathBent = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */](), fourPathStem = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)), new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)));
    fourPathBent.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .setClosed(false);
    four.addPath(fourPathBent).addPath(fourPathStem);
    var fivePath = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
    fivePath.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(6)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .setClosed(false);
    five.addPath(fivePath);
    var sixPath = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
    sixPath.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(6)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(6)))
        .setClosed(false);
    six.addPath(sixPath);
    var sevenPath = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
    sevenPath.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .setClosed(false);
    seven.addPath(sevenPath);
    var eightPathTop = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */](), eightPathBottom = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
    eightPathTop.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .setClosed(true);
    eightPathBottom.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(6)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(6)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .setClosed(false);
    eight.addPath(eightPathTop).addPath(eightPathBottom);
    var ninePath = new __WEBPACK_IMPORTED_MODULE_2_app_models_path__["a" /* default */]();
    ninePath.addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(5), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(4), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(2), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(9)))
        .addPoint(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(1), new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(8)))
        .setClosed(false);
    nine.addPath(ninePath);
    return map;
}
var CHARACTER_WIDTH = 6;
var CHARACTER_HEIGHT = 10;


/***/ }),

/***/ "./src/app/svg/path.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * An SVG <path/> element
 * @author adashrod@gmail.com
 */
var Path = /** @class */ (function () {
    function Path(start, end) {
        this.style = "stroke:#000000;fill:none";
        this.multiPartPath = [];
        if (typeof start !== "undefined" && typeof end !== "undefined") {
            this.start = start;
            this.end = end;
        }
    }
    Path.prototype.toString = function () {
        return "Path[(" + this.start.x + "," + this.start.y + ") -> (" + this.end.x + "," + this.end.y + "]";
    };
    return Path;
}());
/* harmony default export */ __webpack_exports__["a"] = (Path);


/***/ }),

/***/ "./src/app/svg/svg-element-generator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js__ = __webpack_require__("./node_modules/big.js/big.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_big_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_big_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__ = __webpack_require__("./src/app/common/ordered-pair.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__ = __webpack_require__("./src/app/misc/big-util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_models_shape__ = __webpack_require__("./src/app/models/shape.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_models_vector_number__ = __webpack_require__("./src/app/models/vector-number.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_svg_path__ = __webpack_require__("./src/app/svg/path.ts");






/**
 * A simple, not very flexible utility for serializing SVG elements to strings for manual SVG file construction.
 * To be replaced by an SVG library later.
 * @author adashrod@gmail.com
 */
var SvgElementGenerator = /** @class */ (function () {
    function SvgElementGenerator() {
    }
    SvgElementGenerator.prototype.modelPathToSvgPath = function (path) {
        var result = new __WEBPACK_IMPORTED_MODULE_5_app_svg_path__["a" /* default */]();
        Array.prototype.push.apply(result.multiPartPath, path.points);
        if (path.isClosed) {
            result.multiPartPath.push(path.points[0]);
        }
        return result;
    };
    SvgElementGenerator.prototype.pathToSvgText = function (path, fpPrecision) {
        var dAttrBuilder = "M";
        if (path.multiPartPath.length === 0) {
            dAttrBuilder += " " + Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(path.start.x, fpPrecision) + "," + Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(path.start.y, fpPrecision) + " " +
                (Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(path.end.x, fpPrecision) + "," + Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(path.end.y, fpPrecision));
        }
        else {
            for (var _i = 0, _a = path.multiPartPath; _i < _a.length; _i++) {
                var point = _a[_i];
                dAttrBuilder += " " + Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(point.x, fpPrecision) + "," + Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(point.y, fpPrecision);
            }
            if (path.multiPartPath[0].equals(path.multiPartPath[path.multiPartPath.length - 1])) {
                dAttrBuilder += " Z"; // closed path
            }
        }
        return "<path style=\"" + path.style + "\" d=\"" + dAttrBuilder + "\" id=\"" + (path.id || "") + "\"/>";
    };
    SvgElementGenerator.prototype.rectToSvgText = function (rect, fpPrecision) {
        return "<rect style=\"" + rect.style + "\" x=\"" + Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(rect.x, fpPrecision) + "\" y=\"" + Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(rect.y, fpPrecision) + "\" " +
            ("width=\"" + Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(rect.width, fpPrecision) + "\" height=\"" + Object(__WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["d" /* roundAndStrip */])(rect.height, fpPrecision) + "\"/>");
    };
    SvgElementGenerator.prototype.vectorNumberToSvgText = function (vectorNumber, fpPrecision) {
        var vnStr = vectorNumber.number.toString();
        var stringShape = new __WEBPACK_IMPORTED_MODULE_3_app_models_shape__["a" /* default */]();
        for (var i = 0; i < vnStr.length; i++) {
            var c = vnStr.charAt(i);
            var charShape = __WEBPACK_IMPORTED_MODULE_4_app_models_vector_number__["c" /* default */].characterToShape(c);
            var currentWidth = i * __WEBPACK_IMPORTED_MODULE_4_app_models_vector_number__["b" /* CHARACTER_WIDTH */];
            charShape.translate(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_0_big_js___default.a(currentWidth), __WEBPACK_IMPORTED_MODULE_2_app_misc_big_util__["b" /* ZERO */]));
            stringShape.addShape(charShape);
        }
        stringShape.scale(new __WEBPACK_IMPORTED_MODULE_1_app_common_ordered_pair__["a" /* default */](vectorNumber.width.div(__WEBPACK_IMPORTED_MODULE_4_app_models_vector_number__["b" /* CHARACTER_WIDTH */] * vnStr.length), vectorNumber.height.div(__WEBPACK_IMPORTED_MODULE_4_app_models_vector_number__["a" /* CHARACTER_HEIGHT */]))).translate(vectorNumber.position);
        var svgTextBuilder = "";
        for (var _i = 0, _a = stringShape.paths; _i < _a.length; _i++) {
            var path = _a[_i];
            var svgPath = this.modelPathToSvgPath(path);
            svgPath.style = svgPath.style.replace("000000", "0000ff");
            svgTextBuilder += this.pathToSvgText(svgPath, fpPrecision);
        }
        return svgTextBuilder.toString();
    };
    return SvgElementGenerator;
}());
/* harmony default export */ __webpack_exports__["a"] = (SvgElementGenerator);


/***/ }),

/***/ "./src/app/track-click.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackClickDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackClickDirective = /** @class */ (function () {
    function TrackClickDirective() {
    }
    TrackClickDirective.prototype.onClick = function () {
        window.ga("send", {
            hitType: "event",
            eventCategory: this.category,
            eventAction: "externalLink",
            eventLabel: this.label
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TrackClickDirective.prototype, "category", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TrackClickDirective.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])("click"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TrackClickDirective.prototype, "onClick", null);
    TrackClickDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[appTrackClick]"
        }),
        __metadata("design:paramtypes", [])
    ], TrackClickDirective);
    return TrackClickDirective;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <p>Welcome to the Laser-Cut Maze Designer, by Aaron Rodriguez</p>\n    <p>With this tool and a laser cutter such as a <a href=\"https://glowforge.us/IAVRVMWC\" target=\"_blank\">Glowforge</a> or an\n        <a href=\"http://epiloglaser.com\" target=\"_blank\">Epilog</a>, you can create your own wooden toy maze. You can then assemble\n        it and play with it by rolling around a small marble through the hallways.\n    </p>\n</div>\n<div>\n    <iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/4fWBe2R-6Nw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen=\"allowfullscreen\"></iframe>\n</div>\n<div>\n    <p>Get started <a routerLink=\"/LaserCutMazes/designer\">here</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-welcome",
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2_app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map