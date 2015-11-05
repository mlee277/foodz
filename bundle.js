(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Zai/Desktop/codesmith/cs-curriculum/curriculum/unit-project-slack/client/main.js":[function(require,module,exports){
// The following code appends a title to the page
// document.createElement creates an element that can be altered and then inserted into the DOM
// document.body.appendChild places a node as a child under the body element
var title = document.createElement('div');
title.innerHTML = 'Social Calendar';
document.body.appendChild(title);

// Your schedule can be accessed through the global object "schedule"
console.log(schedule);


$.get('http://calendar-server.elasticbeanstalk.com/messages').then(function(data) {
  console.log('hello');
  console.log(data);
})

},{}]},{},["/Users/Zai/Desktop/codesmith/cs-curriculum/curriculum/unit-project-slack/client/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvWmFpL0Rlc2t0b3AvY29kZXNtaXRoL2NzLWN1cnJpY3VsdW0vY3VycmljdWx1bS91bml0LXByb2plY3Qtc2xhY2svY2xpZW50L21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxpREFBaUQ7QUFDakQsK0ZBQStGO0FBQy9GLDRFQUE0RTtBQUM1RSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7QUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRWpDLHFFQUFxRTtBQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RCOztBQUVBLENBQUMsQ0FBQyxHQUFHLENBQUMsc0RBQXNELENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLEVBQUU7RUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztFQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ25CIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFRoZSBmb2xsb3dpbmcgY29kZSBhcHBlbmRzIGEgdGl0bGUgdG8gdGhlIHBhZ2Vcbi8vIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgY3JlYXRlcyBhbiBlbGVtZW50IHRoYXQgY2FuIGJlIGFsdGVyZWQgYW5kIHRoZW4gaW5zZXJ0ZWQgaW50byB0aGUgRE9NXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkIHBsYWNlcyBhIG5vZGUgYXMgYSBjaGlsZCB1bmRlciB0aGUgYm9keSBlbGVtZW50XG52YXIgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRpdGxlLmlubmVySFRNTCA9ICdTb2NpYWwgQ2FsZW5kYXInO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbi8vIFlvdXIgc2NoZWR1bGUgY2FuIGJlIGFjY2Vzc2VkIHRocm91Z2ggdGhlIGdsb2JhbCBvYmplY3QgXCJzY2hlZHVsZVwiXG5jb25zb2xlLmxvZyhzY2hlZHVsZSk7XG5cblxuJC5nZXQoJ2h0dHA6Ly9jYWxlbmRhci1zZXJ2ZXIuZWxhc3RpY2JlYW5zdGFsay5jb20vbWVzc2FnZXMnKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgY29uc29sZS5sb2coJ2hlbGxvJyk7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSkiXX0=
