function updateClock() {
    const clockElement = document.getElementById('clock');
    const dayElement = document.getElementById('day');
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // 요일 배열 생성
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const day = days[now.getDay()];

    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    dayElement.textContent = day;
}

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '라이트 모드';
    } else {
        themeToggle.textContent = '다크 모드';
    }
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

setInterval(updateClock, 1000);
updateClock(); // 페이지 로드 시 시계 즉시 표시

// 초기 모드 설정
document.body.classList.add('light-mode');
