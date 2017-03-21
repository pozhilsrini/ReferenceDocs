// Create data array of values to visualize
var dataArray =[
  {
    "value": 23
  },
  {
    "value": 13
  },
  {
    "value": 21
  },
  {
    "value": 14
  },
  {
    "value": 37
  },
  {
    "value": 15
  },
  {
    "value": 18
  },
  {
    "value": 34
  },
  {
    "value": 30
  }
]

// Create variable for the SVG
var svg = d3.select("body").append("svg")
          .attr("height","100%")
          .attr("width","100%");

// Select, append to SVG, and add attributes to rectangles for bar chart
svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
          .attr("class", "bar")
          .attr("height", function(d, i) {return (d.value * 10)})
          .attr("width","40")
          .attr("x", function(d, i) {return (i * 60) + 25})
          .attr("y", function(d, i) {return 400 - (d.value * 10)});

// Select, append to SVG, and add attributes to text
svg.selectAll("text")
    .data(dataArray)
    .enter().append("text")
    .text(function(d) {return d.value})
           .attr("class", "text")
           .attr("x", function(d, i) {return (i * 60) + 36})
           .attr("y", function(d, i) {return 415 - (d.value * 10)});
