// --- 1. DỮ LIỆU CÁC LOÀI CÁ ---
const FISH_DATA = {
    'caduoi': {
        file: 'MainModels/caduoi.glb',
        name: 'CÁ ĐUỐI', badge: 'RAY',
        image: 'Photos/caduoi.png',
        video: 'https://www.youtube.com/watch?v=jUxObdjZNxE',
        scale: 0.3, speed: 0.008, baseY: 0.2,
        count: 3, flockType: 'orbit', overrideRadius: 6.0,
        theme: {
            bg1: 'rgba(15, 15, 18, 0.85)', bg2: 'rgba(25, 25, 30, 0.7)',
            border: 'rgba(200, 200, 200, 0.5)', glow: 'rgba(200, 200, 200, 0.15)', text: '#e2e8f0'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, lớp Cá sụn, họ hàng với cá mập.' },
            { icon: '🦐', label: 'Thức ăn',   text: 'Sò, ốc, cua, tôm, giun biển và cá nhỏ ở tầng đáy.' },
            { icon: '🦈', label: 'Thiên địch', text: 'Cá mập lớn, cá voi sát thủ.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Vùi mình trong cát; bơi lội nhẹ nhàng như "bay" bằng vây ngực.' },
            { icon: '⚡', label: 'Đặc điểm',  text: 'Thân dẹt hình đĩa. Nhiều loài trang bị gai độc ở đuôi để tự vệ.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 10 – 25 năm ngoài tự nhiên.' }
        ]
    },
    'camapvoi': {
        file: 'MainModels/camapvoi.glb',
        name: 'CÁ MẬP VOI', badge: 'WHALE SHARK',
        image: 'Photos/camapvoi.png',
        video: 'https://www.youtube.com/watch?v=XmYfXgB9vxA',
        scale: 0.6, speed: 0.005, baseY: 6.0,
        count: 2, flockType: 'orbit',
        theme: {
            bg1: 'rgba(10, 25, 45, 0.85)', bg2: 'rgba(20, 40, 70, 0.7)',
            border: 'rgba(255, 255, 255, 0.5)', glow: 'rgba(255, 255, 255, 0.2)', text: '#e0f2fe'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, thuộc lớp Cá sụn; tên khoa học Rhincodon typus.' },
            { icon: '🦐', label: 'Thức ăn',   text: 'Sinh vật phù du, tảo, cá nhỏ, trứng cá (lọc thức ăn qua miệng lớn).' },
            { icon: '🛡️', label: 'Thiên địch', text: 'Ít có thiên địch tự nhiên; cá mập lớn có thể tấn công cá con.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Bơi chậm, hiền lành; di chuyển theo hải lưu; sống đơn độc hoặc nhóm nhỏ.' },
            { icon: '🐋', label: 'Đặc điểm',  text: 'Là loài cá lớn nhất thế giới; cơ thể đốm trắng, ăn lọc nước.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 70 – 100 năm.' }
        ]
    },
    'cangu': {
        file: 'MainModels/cangu.glb',
        name: 'CÁ NGỪ', badge: 'TUNA',
        image: 'Photos/cangu.png',
        video: 'https://www.youtube.com/watch?v=x9eReaWALCU&t=921s',
        scale: 0.2, speed: 0.004, baseY: 2.5,
        count: 5, flockType: 'orbit',
        theme: {
            bg1: 'rgba(20, 30, 50, 0.85)', bg2: 'rgba(30, 45, 75, 0.7)',
            border: 'rgba(192, 192, 192, 0.6)', glow: 'rgba(192, 192, 192, 0.25)', text: '#f8fafc'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, lớp Cá xương, họ Cá thu ngừ.' },
            { icon: '🦑', label: 'Thức ăn',   text: 'Cá nhỏ, mực, giáp xác và sinh vật phù du.' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Cá mập, cá lớn; con người là mối đe dọa do đánh bắt.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Bơi rất nhanh, di cư đường dài; săn mồi theo đàn lớn.' },
            { icon: '⚡', label: 'Đặc điểm',  text: 'Cơ thể thuôn dài, bơi tốc độ cao, giữ nhiệt tốt.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 10 – 40 năm.' }
        ]
    },
    'camapdaubua': {
        file: 'MainModels/camapdaubua.glb',
        name: 'CÁ MẬP ĐẦU BÚA', badge: 'HAMMERHEAD',
        image: 'Photos/camapdaubua.png',
        video: 'https://www.youtube.com/watch?v=YCZwTJ-AFeA',
        scale: 0.55, speed: 0.005, baseY: 3.5,
        count: 2, flockType: 'orbit',
        theme: {
            bg1: 'rgba(10, 30, 30, 0.85)', bg2: 'rgba(15, 40, 40, 0.7)',
            border: 'rgba(45, 212, 191, 0.6)', glow: 'rgba(45, 212, 191, 0.25)', text: '#5eead4'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, thuộc lớp Cá sụn, họ Sphyrnidae.' },
            { icon: '🐙', label: 'Thức ăn',   text: 'Cá nhỏ, mực, bạch tuộc, cá đuối.' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Cá mập lớn hơn; con người là mối đe dọa chính.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Bơi nhanh, hoạt động chủ yếu ban ngày; bơi theo đàn.' },
            { icon: '🔨', label: 'Đặc điểm',  text: 'Đầu dẹt hình chữ T mở rộng tầm nhìn.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 20 – 30 năm.' }
        ]
    },
    'camap': {
        file: 'MainModels/camap.glb',
        name: 'CÁ MẬP', badge: 'SHARK',
        image: 'Photos/camap.png',
        video: 'https://www.youtube.com/watch?v=YCZwTJ-AFeA',
        scale: 0.35, speed: 0.007, baseY: 3.0,
        emissiveIntensity: 0.15,
        theme: {
            bg1: 'rgba(15, 20, 35, 0.85)', bg2: 'rgba(25, 35, 55, 0.7)',
            border: 'rgba(56, 189, 248, 0.6)', glow: 'rgba(56, 189, 248, 0.25)', text: '#7dd3fc'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, thuộc lớp Cá sụn.' },
            { icon: '🦑', label: 'Thức ăn',   text: 'Cá nhỏ, mực, hải cẩu, rùa biển.' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Con người; cá mập lớn ăn cá mập nhỏ.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Bơi liên tục để hô hấp; săn mồi chạng vạng.' },
            { icon: '⚡', label: 'Đặc điểm',  text: 'Bộ xương sụn, răng sắc, giác quan cực nhạy.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 20 – 30 năm.' }
        ]
    },
    'cangua': {
        file: 'MainModels/cangua.glb',
        name: 'CÁ NGỰA', badge: 'SEAHORSE',
        image: 'Photos/cangua.png',
        video: 'https://www.youtube.com/watch?v=m7oWvPXz-9c',
        scale: 0.6, speed: 0.004, baseY: 1.5,
        count: 3, flockType: 'orbit',
        theme: {
            bg1: 'rgba(25, 30, 15, 0.85)', bg2: 'rgba(35, 45, 20, 0.7)',
            border: 'rgba(163, 230, 53, 0.6)', glow: 'rgba(163, 230, 53, 0.25)', text: '#d9f99d'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, thuộc lớp Cá xương, họ Cá chìa vôi.' },
            { icon: '🦐', label: 'Thức ăn',   text: 'Sinh vật phù du, ấu trùng, giáp xác nhỏ.' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Cá lớn, cua, loài săn mồi.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Bơi chậm, bám đuôi vào san hô; sống theo cặp.' },
            { icon: '✨', label: 'Đặc điểm',  text: 'Con đực mang thai; đổi màu ngụy trang.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 1 – 5 năm.' }
        ]
    },
    'catam': {
        file: 'MainModels/catam.glb',
        name: 'CÁ TẦM ĐẠI TÂY DƯƠNG', badge: 'ATLANTIC STURGEON',
        image: 'Photos/catam.png',
        video: 'https://www.youtube.com/watch?v=K7bC5oG9-xM',
        scale: 6.5, speed: 0.003, baseY: 0.4,
        count: 5, flockType: 'orbit',
        theme: {
            bg1: 'rgba(25, 35, 30, 0.85)', bg2: 'rgba(35, 45, 40, 0.7)',
            border: 'rgba(167, 184, 168, 0.6)', glow: 'rgba(167, 184, 168, 0.25)', text: '#d1fae5'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, lớp Cá xương, họ Cá tầm; tên khoa học Acipenser oxyrinchus.' },
            { icon: '🦐', label: 'Thức ăn',   text: 'Động vật đáy như giun, sò, ốc, giáp xác nhỏ và cá nhỏ.' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Cá mập lớn (khi còn nhỏ); con người là mối đe dọa lớn nhất do đánh bắt và ô nhiễm.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Sống vùng ven biển và cửa sông; di cư vào sông để sinh sản; thường kiếm ăn ở đáy.' },
            { icon: '🛡️', label: 'Đặc điểm',  text: 'Cơ thể dài, có các tấm giáp cứng thay vì vảy; miệng ở dưới với râu cảm giác.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 30 – 60 năm, một số cá thể có thể sống lâu hơn.' }
        ]
    },
    'cavoisatthu': {
        file: 'MainModels/cavoisatthu.glb',
        name: 'CÁ VOI SÁT THỦ', badge: 'KILLER WHALE',
        image: 'Photos/cavoisatthu.png',
        video: 'https://www.youtube.com/watch?v=yfs6ef5YcFs',
        scale: 0.003, speed: 0.005, baseY: 6.5,
        count: 2, flockType: 'orbit',
        theme: {
            bg1: 'rgba(15, 20, 25, 0.85)', bg2: 'rgba(25, 30, 35, 0.7)',
            border: 'rgba(255, 255, 255, 0.6)', glow: 'rgba(255, 255, 255, 0.25)', text: '#f1f5f9'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, thuộc lớp Thú (Mammalia), bộ Cá voi; tên khoa học Orcinus orca.' },
            { icon: '🦐', label: 'Thức ăn',   text: 'Cá, mực, hải cẩu, chim biển, thậm chí cả cá voi lớn (tùy đàn).' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Hầu như không có thiên địch tự nhiên; con người là mối đe dọa chính.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Sống theo đàn (pod) có tổ chức cao; săn mồi theo nhóm với chiến thuật thông minh.' },
            { icon: '🧠', label: 'Đặc điểm',  text: 'Thực chất là loài cá heo lớn nhất; rất thông minh, có khả năng giao tiếp và phối hợp săn mồi phức tạp.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 30 – 50 năm (con đực) và 50 – 80 năm (con cái).' }
        ]
    },
    'cavoixanh': {
        file: 'MainModels/cavoixanh.glb',
        name: 'CÁ VOI XANH', badge: 'BLUE WHALE',
        image: 'Photos/cavoixanh.png',
        video: 'https://www.youtube.com/watch?v=R42dXQOtxz0',
        scale: 0.8, speed: 0.003, baseY: 7.0,
        count: 1, flockType: 'orbit',
        theme: {
            bg1: 'rgba(5, 20, 45, 0.85)', bg2: 'rgba(15, 30, 65, 0.7)',
            border: 'rgba(125, 211, 252, 0.6)', glow: 'rgba(125, 211, 252, 0.25)', text: '#e0f2fe'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, thuộc lớp Thú (Mammalia), bộ Cá voi; tên khoa học Balaenoptera musculus.' },
            { icon: '🦐', label: 'Thức ăn',   text: 'Chủ yếu là nhuyễn thể nhỏ (krill); mỗi ngày có thể ăn hàng tấn.' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Ít có thiên địch tự nhiên; cá voi sát thủ có thể tấn công con non.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Thường lặn sâu để kiếm ăn; di cư hàng ngàn dặm khắp các đại dương.' },
            { icon: '🐋', label: 'Đặc điểm',  text: 'Là động vật lớn nhất từng tồn tại trên Trái Đất; giao tiếp bằng âm thanh tần số thấp.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 70 – 90 năm, có thể sống lâu hơn.' }
        ]
    },
    'ruabien': {
        file: 'MainModels/ruabien.glb',
        name: 'RÙA BIỂN KEMPS', badge: "KEMP'S TURTLE",
        image: 'Photos/ruabien.png',
        video: 'https://www.youtube.com/watch?v=IZW-CN3AxTg',
        scale: 4.55, speed: 0.005, baseY: 1.2,
        overrideRadius: 8.5, rotationOffset: Math.PI,
        theme: {
            bg1: 'rgba(20, 40, 30, 0.85)', bg2: 'rgba(30, 50, 40, 0.7)',
            border: 'rgba(110, 231, 183, 0.6)', glow: 'rgba(110, 231, 183, 0.25)', text: '#a7f3d0'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, thuộc lớp Bò sát, bộ Rùa; tên khoa học Lepidochelys kempii.' },
            { icon: '🦐', label: 'Thức ăn',   text: 'Chủ yếu là cua, giáp xác, sứa, ốc và động vật đáy nhỏ.' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Cá mập, cá lớn (con non); con người là mối đe dọa lớn nhất.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Sống ở vùng biển ven bờ; đẻ trứng đồng loạt trên bãi biển.' },
            { icon: '🐢', label: 'Đặc điểm',  text: 'Là loài rùa biển hiếm nhất thế giới; kích thước nhỏ; mai tròn, màu xanh xám.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 30 – 50 năm.' }
        ]
    },
    'suamattrang': {
        file: 'MainModels/suamattrang.glb',
        name: 'SỨA MẶT TRĂNG', badge: 'MOON JELLYFISH',
        image: 'Photos/suamattrang.png',
        video: 'https://www.youtube.com/watch?v=U0HGKj6baCo',
        scale: 0.355, speed: 0.005, baseY: 4.5,
        count: 5,
        theme: {
            bg1: 'rgba(56, 189, 248, 0.85)', bg2: 'rgba(14, 165, 233, 0.7)',
            border: 'rgba(255, 255, 255, 0.6)', glow: 'rgba(255, 255, 255, 0.25)', text: '#e0f2fe'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật không xương sống, thuộc ngành Ruột khoang, lớp Sứa thật; tên khoa học Aurelia aurita.' },
            { icon: '🦐', label: 'Thức ăn',   text: 'Sinh vật phù du, trứng cá, ấu trùng, giáp xác nhỏ.' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Rùa biển, cá lớn, một số loài sứa săn mồi khác.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Bơi chậm bằng cách co bóp thân hình; trôi theo dòng nước ở vùng biển ven bờ.' },
            { icon: '✨', label: 'Đặc điểm',  text: 'Cơ thể trong suốt, hình tròn mềm mại; có 4 vòng tròn giống cánh hoa ở giữa thân.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 8 tháng – 1 năm, tùy môi trường sống.' }
        ]
    },
    'ruaxanh': {
        file: 'MainModels/ruaxanh.glb',
        name: 'RÙA XANH', badge: 'GREEN TURTLE',
        image: 'Photos/ruaxanh.png',
        video: 'https://www.youtube.com/watch?v=5Rmv3nliwCs',
        scale: 0.55, speed: -0.008, baseY: 0.8,
        count: 2, flockType: 'orbit', overrideRadius: 10.0,
        rotationOffset: Math.PI, modelBrightness: 0.5,
        theme: {
            bg1: 'rgba(10, 35, 20, 0.85)', bg2: 'rgba(15, 50, 30, 0.7)',
            border: 'rgba(52, 211, 153, 0.6)', glow: 'rgba(52, 211, 153, 0.1)', text: '#6ee7b7'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật có xương sống, thuộc lớp Bò sát (Reptilia), bộ Rùa (Testudines).' },
            { icon: '🌿', label: 'Thức ăn',   text: 'Cỏ biển, rong biển, sứa, cua, tôm, động vật thân mềm.' },
            { icon: '⚠️', label: 'Thiên địch', text: 'Cá mập, cá lớn săn mồi; trứng và rùa con bị chim biển, cua, thằn lằn tấn công.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Bơi xa theo dòng hải lưu, di cư đường dài; rùa cái lên bãi cát để đẻ trứng.' },
            { icon: '🐢', label: 'Đặc điểm',  text: 'Có mai cứng bảo vệ cơ thể, chân biến thành mái chèo; có khả năng quay về nơi sinh ra để đẻ trứng.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng 50 – 100 năm, tùy loài và môi trường sống.' }
        ]
    },
    'suathung': {
        file: 'MainModels/suathung.glb',
        name: 'SỨA THÙNG', badge: 'BOX JELLYFISH',
        image: 'Photos/suathung.png',
        video: 'https://www.youtube.com/watch?v=KFMbAeYbiW0',
        scale: 0.2, speed: 0.01, baseY: 5.5,
        count: 4, flockType: 'wander', flockKey: 'suathung',
        emissiveIntensity: 0.5, wanderRange: 5.0,
        theme: {
            bg1: 'rgba(10, 30, 50, 0.85)', bg2: 'rgba(20, 60, 100, 0.7)',
            border: 'rgba(135, 206, 250, 0.6)', glow: 'rgba(255, 255, 255, 0.3)', text: '#e0f7fa'
        },
        info: [
            { icon: '🧬', label: 'Loài',      text: 'Động vật không xương sống, ngành Ruột khoang, lớp Cubozoa.' },
            { icon: '🦐', label: 'Thức ăn',   text: 'Cá nhỏ, tôm, sinh vật phù du và động vật biển nhỏ khác.' },
            { icon: '🛡️', label: 'Thiên địch', text: 'Rùa biển (loài kháng độc), cá mặt trăng.' },
            { icon: '🌊', label: 'Tập tính',  text: 'Bơi tự do; hoạt động mạnh vào ban đêm để săn mồi.' },
            { icon: '✨', label: 'Đặc điểm',  text: 'Cơ thể hình hộp, xúc tu chứa nọc độc cực mạnh; có hệ mắt phát triển.' },
            { icon: '⏳', label: 'Tuổi thọ',  text: 'Khoảng vài tháng đến 1 năm tùy môi trường.' }
        ]
    },
};

// --- 2. CONSTANTS & CACHED DOM ---
const TOTAL_SPECIES = Object.keys(FISH_DATA).length;
const RADIUS_START  = 4;
const RADIUS_STEP   = 1.8;

const ICON_MAP = {
    caduoi: '🐟', camapvoi: '🐋', cangu: '🐠', camapdaubua: '🦈',
    camap: '🦈', cangua: '🐴', catam: '🐟', cavoisatthu: '🐳',
    cavoixanh: '🐋', ruabien: '🐢', suamattrang: '🪼', ruaxanh: '🐢', suathung: '🪼'
};

const domPanel       = document.getElementById('fish-panel');
const domPanelName   = document.getElementById('panel-name');
const domPanelBadge  = document.getElementById('panel-badge');
const domPanelIcon   = document.getElementById('panel-icon');
const domPanelBody   = document.getElementById('panel-content');
const domDiscovery   = document.getElementById('discovery-count');

// --- 3. STATE ---
const discoveredSpecies = new Set();
let discoveryTimer     = null;
let currentViewingFish = null;

let scene, camera, renderer, controls, water;
let composer, distortionPass;
const clock        = new THREE.Clock();
let previousTime   = 0;

let instancedBubbles;
const instancedData  = [];
const dummy          = new THREE.Object3D();
const fishGroup      = [];
const mixers         = [];
const jellyfishModels = [];

const flockCenter = { x: 0, z: 0, wanderAngle: Math.random() * Math.PI * 2, boundRadius: 4.0 };
const raycaster   = new THREE.Raycaster();
const mouse       = new THREE.Vector2();

// --- 4. HELPERS ---
function setupMaterial(child, data) {
    if (!child.isMesh || !child.material) return;
    child.material.metalness = 0.1;
    if (data.modelBrightness !== undefined && child.material.color) {
        child.material.color.multiplyScalar(data.modelBrightness);
    }
    if (child.material.emissive !== undefined) {
        if (child.material.map) {
            child.material.emissiveMap = child.material.map;
            child.material.emissive    = new THREE.Color(0xffffff);
        }
        child.material.emissiveIntensity = data.emissiveIntensity || 0.4;
    }
}

function prepareModel(model, data) {
    model.traverse(child => {
        const n = child.name.toLowerCase();
        if (n.includes('shadow') || n.includes('plane')) { child.visible = false; return; }
        setupMaterial(child, data);
    });

    const size = new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());
    model.add(new THREE.Mesh(
        new THREE.BoxGeometry(size.x * 1.2, size.y * 1.5, size.z * 1.2),
        new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false })
    ));
    model.frustumCulled = false;
    model.traverse(child => { child.frustumCulled = false; });
}

// --- 5. EVENTS ---
window.addEventListener('pointerdown', onMouseClick, false);

document.getElementById('close-btn')?.addEventListener('click', () => {
    domPanel.classList.remove('show');
    clearTimeout(discoveryTimer);
    currentViewingFish = null;
});

function onMouseClick(event) {
    if (event.target.tagName !== 'CANVAS') return;

    mouse.x =  (event.clientX / window.innerWidth)  * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    let targetFishId = null;

    if (jellyfishModels.length > 0) {
        let bestDist = Infinity;
        jellyfishModels.forEach(m => {
            const fKey = m.userData.flockKey || m.userData.id;
            const proj = m.position.clone().project(camera);
            const sx   = (proj.x  + 1) / 2 * window.innerWidth;
            const sy   = (-proj.y + 1) / 2 * window.innerHeight;
            const dist = Math.hypot(event.clientX - sx, event.clientY - sy);
            const threshold = fKey === 'cavoixanh' ? 150 : 80;
            if (dist < threshold && dist < bestDist) { bestDist = dist; targetFishId = fKey; }
        });
    }

    if (!targetFishId && fishGroup.length > 0) {
        const normalFish = fishGroup.filter(f => f.userData.flockType !== 'wander');
        const intersects = raycaster.intersectObjects(normalFish, true);
        if (intersects.length > 0) {
            let obj = intersects[0].object;
            while (obj.parent && !obj.userData.id) obj = obj.parent;
            if (obj.userData?.id) targetFishId = obj.userData.id;
        }
    }

    if (targetFishId) {
        populatePanel(targetFishId);
        domPanel.classList.add('show');

        if (currentViewingFish !== targetFishId) {
            clearTimeout(discoveryTimer);
            currentViewingFish = targetFishId;

            if (!discoveredSpecies.has(targetFishId)) {
                discoveryTimer = setTimeout(() => {
                    discoveredSpecies.add(targetFishId);
                    if (domDiscovery) {
                        domDiscovery.innerText = `${discoveredSpecies.size}/${TOTAL_SPECIES}`;
                        domDiscovery.style.cssText = 'color:#fff;text-shadow:0 0 15px #00f3ff,0 0 30px #00f3ff;transform:scale(1.2)';
                        setTimeout(() => { domDiscovery.style.cssText = ''; }, 1000);
                    }
                }, 10000);
            }
        }
    } else {
        domPanel.classList.remove('show');
        clearTimeout(discoveryTimer);
        currentViewingFish = null;
    }
}

// --- 6. PANEL ---
function getYTThumb(url) {
    const m = url?.match(/(?:v=|youtu\.be\/)([^&\n?#]+)/);
    return m ? `https://img.youtube.com/vi/${m[1]}/hqdefault.jpg` : '';
}

function populatePanel(fishId) {
    const data = FISH_DATA[fishId];
    if (!data) return;

    domPanelName.innerText  = data.name;
    domPanelBadge.innerText = data.badge;
    domPanelIcon.textContent = ICON_MAP[fishId] || '🐟';

    const imgEl = document.getElementById('panel-img');
    imgEl.src = data.image || '';
    imgEl.alt = data.name;

    const ytLinkEl  = document.getElementById('panel-yt-link');
    const ytThumbEl = document.getElementById('panel-yt-thumb');
    const ytTitleEl = document.getElementById('panel-yt-title');
    const ytThumbUrl = getYTThumb(data.video);

    if (ytThumbUrl) {
        ytLinkEl.href      = data.video;
        ytThumbEl.src      = ytThumbUrl;
        ytTitleEl.innerText = 'Khám phá về ' + data.name;
        ytLinkEl.style.display = 'block';
    } else {
        ytLinkEl.style.display = 'none';
    }

    domPanelBody.innerHTML = data.info.map((item, i) =>
        `<div class="info-item" style="--delay:${i * 0.05}s">
            <div class="icon-wrapper">${item.icon}</div>
            <div class="info-content">
                <div class="info-label">${item.label}</div>
                <p>${item.text}</p>
            </div>
        </div>`
    ).join('');
}

// --- 7. INIT & ANIMATE ---
init();
animate();

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x001730);
    scene.fog        = new THREE.FogExp2(0x001730, 0.02);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 10);
    camera.lookAt(0, 2, 0);

    renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping         = THREE.CineonToneMapping;
    renderer.toneMappingExposure = 1.6;
    renderer.outputEncoding      = THREE.sRGBEncoding;
    document.body.appendChild(renderer.domElement);

    const renderScene = new THREE.RenderPass(scene, camera);
    const bloomPass   = new THREE.UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight), 1.2, 1.0, 0.6);
    distortionPass = new THREE.ShaderPass({
        uniforms: { tDiffuse: { value: null }, time: { value: 0.0 } },
        vertexShader:   `varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,
        fragmentShader: `uniform sampler2D tDiffuse;uniform float time;varying vec2 vUv;
            void main(){vec2 p=vUv;
            float w1=sin(p.y*15.0+time*1.5)*0.003;
            float w2=cos(p.x*20.0+time*1.2)*0.002;
            gl_FragColor=texture2D(tDiffuse,vec2(p.x+w1,p.y+w2));}`
    });
    composer = new THREE.EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
    composer.addPass(distortionPass);

    scene.add(new THREE.AmbientLight(0x004488, 3.0));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 5.0);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom     = false;
    controls.enablePan      = false;
    controls.minPolarAngle  = Math.PI / 2;
    controls.maxPolarAngle  = Math.PI / 2;
    controls.target.set(0, 2, 0);
    controls.update();

    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    water = new THREE.Water(waterGeometry, {
        textureWidth: 512, textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load(
            'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg',
            t => { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(10, 10); }),
        sunDirection: directionalLight.position.clone().normalize(),
        sunColor: 0xffffff, waterColor: 0x002e1f, distortionScale: 10.0, fog: true
    });
    water.rotation.x = Math.PI / 2;
    water.position.y = 15;
    scene.add(water);

    instancedBubbles = new THREE.InstancedMesh(
        new THREE.SphereGeometry(1, 10, 10),
        new THREE.MeshPhysicalMaterial({
            color: 0xffffff, metalness: 0.1, roughness: 0,
            transmission: 0.95, ior: 1.15, thickness: 0.5,
            clearcoat: 1.0, emissive: 0xffffff, emissiveIntensity: 0.3
        }),
        1580
    );
    scene.add(instancedBubbles);
    for (let i = 0; i < 1580; i++) {
        instancedData.push({
            baseX: (Math.random() - 0.5) * 60, y: (Math.random() - 0.5) * 30,
            baseZ: (Math.random() - 0.5) * 60, speed: Math.random() * 0.01 + 0.005,
            baseScale: Math.random() * 0.01 + 0.005, offset: Math.random() * 100
        });
    }

    const loader = new THREE.GLTFLoader();

    Object.keys(FISH_DATA).forEach((key, fishIndex) => {
        const data   = FISH_DATA[key];
        const radius = data.overrideRadius !== undefined
            ? data.overrideRadius
            : RADIUS_START + fishIndex * RADIUS_STEP;

        const isWander = data.count > 1 && (!data.flockType || data.flockType === 'wander');
        const isOrbit  = data.count > 1 && data.flockType === 'orbit';
        const count    = (isWander || isOrbit) ? data.count : 1;

        for (let ci = 0; ci < count; ci++) {
            const initAngle = isWander
                ? (ci / data.count) * Math.PI * 2
                : (ci / data.count) * Math.PI * 2 + Math.random() * 0.4;

            loader.load(data.file, gltf => {
                const model = gltf.scene;
                prepareModel(model, data);

                if (isWander) {
                    const initR = 1.0 + Math.random() * 1.5;
                    model.position.set(Math.cos(initAngle) * initR, data.baseY, Math.sin(initAngle) * initR);
                    model.userData = {
                        id: key, isFlock: true, flockType: 'wander', flockKey: key,
                        wanderAngle: initAngle + (Math.random() - 0.5) * 0.5,
                        bobPhase: Math.random() * Math.PI * 2,
                        bobAmp:   0.12 + Math.random() * 0.10,
                        bobSpeed: 0.006 + Math.random() * 0.005,
                        baseY: data.baseY, speed: data.speed
                    };
                    jellyfishModels.push(model);
                } else {
                    model.position.set(Math.cos(initAngle) * radius, data.baseY, Math.sin(initAngle) * radius);
                    model.userData = {
                        id: key, isFlock: isOrbit, flockType: isOrbit ? 'orbit' : undefined,
                        speed: data.speed, baseY: data.baseY, radius, angle: initAngle,
                        rotationOffset: data.rotationOffset || 0,
                        waveOffset: Math.random() * 10
                    };
                    if (key === 'cavoixanh') jellyfishModels.push(model);
                }

                model.scale.setScalar(data.scale);
                scene.add(model);
                fishGroup.push(model);

                if (gltf.animations.length > 0) {
                    const m = new THREE.AnimationMixer(model);
                    m.clipAction(gltf.animations[0]).play();
                    mixers.push(m);
                }
            });
        }
    });
}

function animate() {
    requestAnimationFrame(animate);

    const time  = clock.getElapsedTime();
    const delta = time - previousTime;
    previousTime = time;

    if (distortionPass?.uniforms?.time) distortionPass.uniforms.time.value = time;
    if (water?.material?.uniforms?.time) water.material.uniforms.time.value += 1.2 / 60.0;

    mixers.forEach(m => m.update(delta));

    flockCenter.wanderAngle += (Math.random() - 0.5) * 0.015;
    flockCenter.x += Math.cos(flockCenter.wanderAngle) * 0.012;
    flockCenter.z += Math.sin(flockCenter.wanderAngle) * 0.012;
    const cd = Math.hypot(flockCenter.x, flockCenter.z);
    if (cd > flockCenter.boundRadius) {
        flockCenter.x -= (flockCenter.x / cd) * 0.025;
        flockCenter.z -= (flockCenter.z / cd) * 0.025;
    }

    fishGroup.forEach(f => {
        const ud = f.userData;

        if (ud.isFlock && ud.flockType === 'wander') {
            ud.wanderAngle += (Math.random() - 0.5) * 0.06;
            const vx = Math.cos(ud.wanderAngle) * ud.speed * 1.5;
            const vz = Math.sin(ud.wanderAngle) * ud.speed * 1.5;

            let targetX = flockCenter.x + (ud.flockKey === 'suathung' ? 3.5 : ud.flockKey === 'suamattrang' ? -1.5 : 0);
            let targetZ = flockCenter.z;

            const dx   = f.position.x - targetX;
            const dz   = f.position.z - targetZ;
            const dist = Math.hypot(dx, dz);
            const pull = dist > 3.0 ? 0.005 : 0.0;

            let pushX = 0, pushZ = 0;
            jellyfishModels.forEach(other => {
                if (other === f) return;
                const sx = f.position.x - other.position.x;
                const sz = f.position.z - other.position.z;
                const sd = Math.hypot(sx, sz);
                if (sd > 0 && sd < 1.0) {
                    const force = (1.0 - sd) * 0.04;
                    pushX += (sx / sd) * force;
                    pushZ += (sz / sd) * force;
                }
            });

            f.position.x += vx - dx * pull + pushX;
            f.position.z += vz - dz * pull + pushZ;
            ud.bobPhase  += ud.bobSpeed;
            f.position.y  = ud.baseY + Math.sin(ud.bobPhase) * ud.bobAmp;
            if (Math.abs(vx) > 0.0001 || Math.abs(vz) > 0.0001) f.rotation.y = Math.atan2(vx, vz);
            f.rotation.x = Math.sin(ud.bobPhase * 0.6) * 0.06;
            f.updateMatrixWorld(true);
            return;
        }

        // orbit or single
        ud.angle += ud.speed;
        f.position.x = Math.cos(ud.angle) * ud.radius;
        f.position.z = Math.sin(ud.angle) * ud.radius;
        f.position.y = ud.baseY + Math.sin(time * 1.5 + ud.waveOffset) * 0.3;
        f.rotation.y = Math.atan2(-Math.sin(ud.angle), Math.cos(ud.angle)) + ud.rotationOffset;
        f.updateMatrixWorld(true);
    });

    for (let i = 0; i < instancedData.length; i++) {
        const d = instancedData[i];
        d.y += d.speed;
        if (d.y > 15) d.y = -10;
        dummy.position.set(d.baseX, d.y, d.baseZ);
        dummy.scale.setScalar(d.baseScale);
        dummy.updateMatrix();
        instancedBubbles.setMatrixAt(i, dummy.matrix);
    }
    instancedBubbles.instanceMatrix.needsUpdate = true;

    controls.update();
    composer.render();
}