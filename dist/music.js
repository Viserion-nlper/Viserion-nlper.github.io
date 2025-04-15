const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "罗生门",
        artist: '梨冻紧 / Wiz_H张子豪',
        url: 'https://music.163.com/song/media/outer/url?id=1456890009.mp3',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
	  {
        name: '把回忆拼好给你',
        artist: '王贰浪',
        url: 'https://music.163.com/song/media/outer/url?id=1403318151.mp3',
        cover: 'http://p2.music.126.net/Wx5GNJEpay2JbfVUJc4Aew==/109951163094853876.jpg?param=130y130',
      },
      {
        name: '如果当时',
        artist: '杜文涛',
        url: 'https://music.163.com/song/media/outer/url?id=2137025749.mp3',
        cover: 'http://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg?param=130y130',
      },
	  {
        name: '小秋',
        artist: '马良',
        url: 'https://music.163.com/song/media/outer/url?id=1413787688.mp3',
        cover: 'http://p2.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg?param=130y130',
      },
      {
        name: '我们的时光',
        artist: '赵雷',
        url: 'https://music.163.com/song/media/outer/url?id=29567193.mp3',
        cover: 'http://p1.music.126.net/c5NVKUIAUcyN4BQUDbGnEg==/109951163221157827.jpg?param=130y130',
      }
    ]
});