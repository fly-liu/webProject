let video_id = 'player';

let videoHeader = {
	/*创建video 头菜单*/
	header:function() {
		var fragment = document.createDocumentFragment();
		
		var videoTitleHeader = document.getElementById("to-header-element");
//		var top_area = videoTitleHeader.content.querySelector('.top_area');
		var top_area = document.createElement('div');
		top_area.setAttribute('class','top_area')
		top_area.innerHTML = "<div class='top-header'><div class='video-title'>这是一个非常现实意义的短影视教育.趁一切还未发生，我们还有时间去纠正。</div><div class='video-header-btn'><button tag='50' id='full-50'>50%</button><button tag='75' id='full-75'>75%</button><button tag='100' id='full-100'>100%</button></div></div>";
		
		fragment.appendChild(top_area);

		let videoElement = document.getElementById(video_id).querySelectorAll('video');
		for(var i = 0;i < videoElement.length;i++) {
			videoElement[i].after(fragment);
		}
	},
	/*头菜单播放时隐藏控制*/
	headerVisibilty() {
		let video = document.getElementById(video_id).querySelector('video');
		/*监听视屏播放处理*/
		video.addEventListener('play',function() {
//			document.querySelector('.top_area').style.opacity = '1';
//			time_0 = setTimeout(function() {
//				document.querySelector('.top_area').style.opacity = '0';
//			},2000);
		});
		
		/*监听视频播放暂定处理*/
		video.addEventListener('pause',function() {
//			clearTimeout(time_0);
//			if(time_1) {
//				clearTimeout(time_1);
//			}
//			document.querySelector('.top_area').style.opacity = '1';
		});
		
		/*视频头菜单显示隐藏处理*/
		video.addEventListener('mousemove',function() {
//			if(!video.paused) {
//				document.querySelector('.top_area').style.opacity = '1';
//				if(!window.time_1) {
//					time_1 = setTimeout(function() {
//						document.querySelector('.top_area').style.opacity = '0';
//						clearTimeout(time_1);
//					},2000);
//					
//				}
//	
//			}
		});
	},
	/*视频播放窗口大小设置*/
	setVideoSize:function(size) {
		let video = document.getElementById(video_id).querySelector('video');
		let button = document.getElementById(video_id).querySelector('.top_area .top-header .video-header-btn').querySelectorAll('button');
		for(let i =0;i<button.length;i++) {
			button[i].addEventListener('click',function() {
				for(let j = 0;j<button.length;j++) {
					button[j].style.color = 'white';
				};
		
				let tag = button[i].getAttribute('tag');
				switch (tag){
					case '50':
						video.style.width = '50%';
						button[i].style.color = '#0699d6';
						break;
					case '75':
						video.style.width = '75%';
						button[i].style.color = '#0699d6';
						break;
					case '100':
						video.style.width = '100%';
						button[i].style.color = '#0699d6';
						break;
					default:
						break;
				}
			})
		}
	},
}

document.addEventListener('DOMContentLoaded',function(){
	videoHeader.header();
	
	videoHeader.headerVisibilty();
	
	videoHeader.setVideoSize();
});