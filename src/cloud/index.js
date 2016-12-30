const keywords = [
  "顾必成", "斗皇", "曹老师", "诚波", "学姐", "王鑫",
  "陈硕", "琨神", "曹燕", "邢子悦","管登荣"];

var color = d3.scale.linear()
          .domain([0,1,2,3,4,5,6,7,8,9,10])
          .range(["rgb(12, 215, 69)", "rgb(212, 99, 18)", "rgb(254, 90, 128)", "rgb(210, 236, 14)", "rgb(31, 212, 82)", "rgb(85, 20, 222)", "rgb(31, 209, 250)", "rgb(128, 235, 12)", "rgb(22, 244, 237)", "rgb(238, 95, 80)", "rgb(12, 215, 69)"]);

var layout = cloud()
    .size([500, 500])
    .spiral("archimedean")
    .words(keywords.map(function(word, index) {
      return {text: word, size: 9 * index + 10, test: "haha"};
    }))
    .padding(5)
    .rotate(function() { return (~~(Math.random() * 6) - 3) * 30; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

layout.start();

function draw(words) {
  d3.select("body").append("svg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("fill", function(d, i) { return color(i); })
      .style("font-family", "Impact")
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}
