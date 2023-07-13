var videoLink = [
	"https://www.bilibili.com/video/BV1k5411a714",
	"https://www.bilibili.com/video/BV1vT4y1y7NN"
];
function search() {
	var keyword = document.getElementById("title-t").value;
	location.href = "https://www.bilibili.com/search?keyword=" + keyword;
}
function playVideo(input) {
	location.href = videoLink[input - 1];
}