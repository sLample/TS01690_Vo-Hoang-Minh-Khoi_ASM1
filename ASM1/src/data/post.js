export const posts = [
{
  id: 1,
  category: 'AI',
  title: 'OpenAI ra mắt GPT-4o với khả năng xử lý thời gian thực',
  description: 'GPT-4o có thể xử lý văn bản, hình ảnh và giọng nói với độ trễ thấp.',
  content: `OpenAI đã công bố mô hình GPT-4o – thế hệ AI đa phương thức mới...`,
  image: '/src/assets/images/chatgpt.png',
  video: 'https://www.youtube.com/embed/DQacCB9tDaw',
  source: 'VnExpress – Số hóa',
  publishedAt: '2024-05-14'
},
{
  id: 2,
  category: 'AI',
  title: 'Google tích hợp AI Gemini vào Android',
  description: 'Gemini trở thành trợ lý AI mặc định trên Android.',
  content: `Google cho biết Gemini sẽ thay thế Google Assistant...`,
  image: '/src/assets/images/gemini.jpg',
  video: 'https://www.youtube.com/embed/Ui5Zp6wzZ5k',
  source: 'The Verge',
  publishedAt: '2024-02-09'
},
{
  id: 3,
  category: 'AI',
  title: 'Microsoft đưa Copilot vào Windows 11',
  description: 'Copilot trở thành trung tâm AI trên Windows.',
  content: `Microsoft đang tích hợp Copilot sâu hơn vào Windows 11...`,
  image: '/src/assets/images/copilot.jpg',
  video: '',
  source: 'GenK',
  publishedAt: '2024-01-22'
},
{
  id: 4,
  category: 'AI',
  title: 'AI được dùng để phát hiện ung thư sớm',
  description: 'AI hỗ trợ bác sĩ chẩn đoán chính xác hơn.',
  content: `Các mô hình AI mới cho thấy khả năng phát hiện ung thư sớm...`,
  image: '/src/assets/images/ai-healthcare.jpg',
  video: '',
  source: 'VnExpress – Khoa học',
  publishedAt: '2024-03-18'
},

{
  id: 5,
  category: 'Mobile',
  title: 'Apple ra mắt iPhone 15 với cổng USB-C',
  description: 'Apple chính thức chuyển sang USB-C.',
  content: `iPhone 15 đánh dấu sự thay đổi lớn khi Apple bỏ cổng Lightning...`,
  image: '/src/assets/images/iphone15.jpg',
  video: 'https://www.youtube.com/embed/FT3ODSg1GFE',
  source: 'VnExpress',
  publishedAt: '2023-09-13'
},
{
  id: 6,
  category: 'Mobile',
  title: 'Samsung Galaxy S24 tích hợp AI',
  description: 'Galaxy AI hỗ trợ dịch trực tiếp và chỉnh ảnh.',
  content: `Galaxy S24 là dòng smartphone đầu tiên của Samsung tích hợp AI...`,
  image: '/src/assets/images/samsung.jpg',
  video: '',
  source: 'GenK',
  publishedAt: '2024-01-18'
},
{
  id: 7,
  category: 'Mobile',
  title: 'Xiaomi đẩy mạnh hệ sinh thái HyperOS',
  description: 'HyperOS thay thế MIUI.',
  content: `Xiaomi giới thiệu HyperOS với mục tiêu kết nối đa thiết bị...`,
  image: '/src/assets/images/xiaomi.jpg',
  video: '',
  source: 'VnExpress',
  publishedAt: '2024-02-28'
},
{
  id: 8,
  category: 'Mobile',
  title: 'Android 15 tập trung bảo mật',
  description: 'Google tăng cường quyền riêng tư.',
  content: `Android 15 bổ sung nhiều tính năng bảo mật...`,
  image: '/src/assets/images/android.jpg',
  video: '',
  source: 'The Verge',
  publishedAt: '2024-04-10'
},

{
  id: 9,
  category: 'Web',
  title: 'Vue 3 trở thành framework phổ biến',
  description: 'Vue 3 được nhiều công ty lựa chọn.',
  content: `Vue 3 với Composition API giúp code linh hoạt...`,
  image: '/src/assets/images/vue.jpg',
  video: '',
  source: 'VnExpress',
  publishedAt: '2024-01-05'
},
{
  id: 10,
  category: 'Web',
  title: 'JavaScript tiếp tục thống trị web',
  description: 'JS là ngôn ngữ phổ biến nhất.',
  content: `JavaScript giữ vị trí số 1 nhờ hệ sinh thái mạnh mẽ...`,
  image: '/src/assets/images/javascript.png',
  video: '',
  source: 'GenK',
  publishedAt: '2024-03-02'
},
{
  id: 11,
  category: 'Web',
  title: 'WebAssembly mở rộng khả năng web',
  description: 'Wasm giúp web chạy nhanh hơn.',
  content: `WebAssembly cho phép chạy code gần tốc độ native...`,
  image: '/src/assets/images/web-wasm.jpg',
  video: '',
  source: 'The Verge',
  publishedAt: '2024-02-20'
},
{
  id: 12,
  category: 'Web',
  title: 'AI hỗ trợ lập trình web',
  description: 'Lập trình viên dùng AI ngày càng nhiều.',
  content: `AI giúp sinh code, debug và tối ưu hiệu suất web...`,
  image: '/src/assets/images/web-ai-code.jpg',
  video: '',
  source: 'VnExpress',
  publishedAt: '2024-04-01'
},

{
  id: 13,
  category: 'Game',
  title: 'GTA VI công bố trailer',
  description: 'Rockstar xác nhận GTA VI.',
  content: `Trailer GTA VI đạt hàng trăm triệu lượt xem...`,
  image: '/src/assets/images/gta.jpg',
  video: 'https://www.youtube.com/embed/QdBZY2fkU-0',
  source: 'The Verge',
  publishedAt: '2023-12-05'
},
{
  id: 14,
  category: 'Game',
  title: 'Esports tiếp tục phát triển mạnh',
  description: 'Giải đấu esports tăng trưởng.',
  content: `Esports trở thành ngành công nghiệp tỷ đô...`,
  image: '/src/assets/images/esport.jpg',
  video: '',
  source: 'VnExpress',
  publishedAt: '2024-03-12'
},
{
  id: 15,
  category: 'Game',
  title: 'Game mobile chiếm thị phần lớn',
  description: 'Game mobile tăng trưởng mạnh.',
  content: `Game mobile tiếp tục là mảng tăng trưởng nhanh nhất...`,
  image: '/src/assets/images/game-mobile.jpg',
  video: '',
  source: 'GenK',
  publishedAt: '2024-02-08'
},
{
  id: 16,
  category: 'Game',
  title: 'AI được dùng trong phát triển game',
  description: 'AI hỗ trợ thiết kế nhân vật.',
  content: `AI giúp tạo NPC thông minh và kịch bản linh hoạt hơn.`,
  image: '/src/assets/images/ai-game.jpg',
  video: '',
  source: 'The Verge',
  publishedAt: '2024-04-15'
},

{
  id: 17,
  category: 'MXH',
  title: 'TikTok bị nhiều quốc gia kiểm soát',
  description: 'Lo ngại về dữ liệu người dùng.',
  content: `Nhiều quốc gia yêu cầu TikTok minh bạch dữ liệu...`,
  image: '/src/assets/images/tiktok.jpg',
  video: '',
  source: 'VnExpress',
  publishedAt: '2024-03-20'
},
{
  id: 18,
  category: 'MXH',
  title: 'Meta đẩy mạnh Threads',
  description: 'Threads cạnh tranh với X.',
  content: `Threads tiếp tục được Meta phát triển mạnh...`,
  image: '/src/assets/images/thread.jpg',
  video: '',
  source: 'The Verge',
  publishedAt: '2024-01-30'
},
{
  id: 19,
  category: 'MXH',
  title: 'Facebook ưu tiên nội dung video',
  description: 'Video ngắn được ưu tiên hiển thị.',
  content: `Meta cho biết video ngắn giúp tăng tương tác...`,
  image: '/src/assets/images/facebook.jpg',
  video: '',
  source: 'GenK',
  publishedAt: '2024-02-14'
},
{
  id: 20,
  category: 'MXH',
  title: 'Mạng xã hội ảnh hưởng giới trẻ',
  description: 'Tác động tâm lý ngày càng lớn.',
  content: `Các nghiên cứu cho thấy mạng xã hội ảnh hưởng mạnh...`,
  image: '/src/assets/images/social.jpg',
  video: '',
  source: 'VnExpress',
  publishedAt: '2024-04-05'
}
]
