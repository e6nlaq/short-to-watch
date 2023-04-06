
// (C) 2023 e6nlaq

function main() {
	const URL = location.href;
	if (URL.substring(0, 31) == "https://www.youtube.com/shorts/") {
		window.location.href = `https://www.youtube.com/watch?v=${URL.substring(31)}`;
	} else {
		alert("Short動画ではありません。");
	}
}
main();
