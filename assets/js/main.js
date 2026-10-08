const products = [

  {id:'amd',brand:'AMD',category:'CPU',name:'CPU AMD Ryzen 7 7800X3D',price:8990000,old:10490000,specs:['8 nhân · 16 luồng','Socket AM5','3D V-Cache'],image:"assets/images/product-38.png",tag:'Lựa chọn gaming',description:'Bộ vi xử lý AMD Ryzen 7 với bộ nhớ đệm 3D V-Cache, dành cho cấu hình gaming nền tảng AM5.'},

  {id:'gpu',brand:'ASUS',category:'VGA',name:'ASUS Dual GeForce RTX 4070 SUPER 12GB',price:16990000,old:18990000,specs:['12GB GDDR6X','2 quạt','DLSS 3'],image:"assets/images/product-17.png",tag:'Hiệu năng nổi bật',description:'Card đồ họa GeForce RTX 4070 SUPER, bộ nhớ 12GB GDDR6X và thiết kế tản nhiệt hai quạt.'},

  {id:'intel',brand:'Intel',category:'CPU',name:'CPU Intel Core i5-14600K',price:6290000,old:7490000,specs:['14 nhân · 20 luồng','LGA 1700','5.3GHz'],image:"assets/images/product-34.png",tag:'Giá tốt hôm nay',description:'Bộ vi xử lý Intel Core i5 thế hệ 14, hỗ trợ xử lý đa nhiệm cho chơi game và công việc hằng ngày.'},

  {id:'main',brand:'MSI',category:'Mainboard',name:'Mainboard MSI PRO B760M-A WIFI DDR4',price:3290000,old:3890000,specs:['B760 · LGA 1700','DDR4','Wi-Fi'],image:"assets/images/product-20.png",tag:'Build PC tiết kiệm',description:'Bo mạch chủ kích thước Micro-ATX sử dụng chipset Intel B760, hỗ trợ RAM DDR4. Không dùng cùng RAM DDR5 hoặc CPU AMD trong bản demo.'},

  {id:'ram',brand:'Kingston',category:'RAM',name:'RAM Kingston FURY Beast 16GB DDR5 5200',price:1490000,old:1790000,specs:['16GB (1 × 16GB)','DDR5','5200MT/s'],image:"assets/images/product-29.jpg",tag:'Nâng cấp dễ dàng',description:'Bộ nhớ DDR5 16GB với tản nhiệt FURY Beast. Cần bo mạch chủ hỗ trợ DDR5; không tương thích bo mạch DDR4 trong danh mục demo.'},

  {id:'ssd',brand:'Samsung',category:'SSD',name:'SSD Samsung 990 PRO 1TB NVMe PCIe 4.0',price:2490000,old:2990000,specs:['1TB','M.2 2280','PCIe 4.0'],image:"assets/images/product-07.png",tag:'Tăng tốc hệ thống',description:'SSD M.2 NVMe dung lượng 1TB, giao tiếp PCIe 4.0, dành cho cài hệ điều hành, ứng dụng và thư viện game.'},

  {id:'psu',brand:'Corsair',category:'PSU',name:'Nguồn Corsair RM750e 750W 80 Plus Gold',price:2790000,old:3290000,specs:['750W','80 Plus Gold','Full modular'],image:"assets/images/product-37.png",tag:'Ổn định & bền bỉ',description:'Bộ nguồn công suất 750W với thiết kế cáp rời, giúp lắp ráp và sắp xếp dây thuận tiện.'},

  {id:'case',brand:'NZXT',category:'Case',name:'Case NZXT H6 Flow White',price:2590000,old:2990000,specs:['Mid Tower','ATX','3 quạt 120mm'],image:"assets/images/product-19.png",tag:'Góc máy cá tính',description:'Vỏ máy thiết kế hai khoang, kính toàn cảnh và ba quạt 120mm đi kèm. Hỗ trợ mainboard ATX, Micro-ATX và Mini-ITX.'}

];

const categories = [

  {key:'CPU',name:'Bộ vi xử lý',short:'CPU',icon:'cpu',image:"assets/images/product-38.png"},

  {key:'VGA',name:'Card đồ họa',short:'Card đồ họa',icon:'gpu',image:"assets/images/product-17.png"},

  {key:'Mainboard',name:'Bo mạch chủ',short:'Mainboard',icon:'board',image:"assets/images/product-20.png"},

  {key:'RAM',name:'Bộ nhớ RAM',short:'RAM',icon:'ram',image:"assets/images/product-29.jpg"},

  {key:'SSD',name:'Ổ cứng SSD',short:'Ổ cứng SSD',icon:'drive',image:"assets/images/product-07.png"},

  {key:'PSU',name:'Nguồn máy tính',short:'Nguồn PSU',icon:'power',image:"assets/images/product-37.png"},

  {key:'Case',name:'Vỏ máy tính',short:'Case PC',icon:'case',image:"assets/images/product-19.png"},

  {key:'Cooling',name:'Tản nhiệt CPU',short:'Tản nhiệt',icon:'cooling',image:"assets/images/product-10.png"}

];



products.push(...[

  {

    "id": "cpu-amd-0",

    "brand": "AMD",

    "category": "CPU",

    "name": "CPU AMD Ryzen 5 7500F (Tray)",

    "price": 4790000,

    "old": 5190000,

    "specs": [

      "6 nhân · 12 luồng",

      "AM5",

      "Boost 5.0GHz"

    ],

    "image": "assets/images/product-04.png",

    "tag": "Thêm sức mạnh",

    "description": "Lựa chọn bộ vi xử lý cho bản build PC. Kiểm tra socket và danh sách CPU hỗ trợ của mainboard trước khi lắp ráp."

  },

  {

    "id": "cpu-amd-2",

    "brand": "AMD",

    "category": "CPU",

    "name": "CPU AMD Ryzen 7 9800X3D",

    "price": 15690000,

    "old": 15990000,

    "specs": [

      "8 nhân · 16 luồng",

      "AM5",

      "DDR5"

    ],

    "image": "assets/images/product-25.png",

    "tag": "Thêm sức mạnh",

    "description": "Lựa chọn bộ vi xử lý cho bản build PC. Kiểm tra socket và danh sách CPU hỗ trợ của mainboard trước khi lắp ráp."

  },

  {

    "id": "cpu-intel-10",

    "brand": "Intel",

    "category": "CPU",

    "name": "CPU Intel Core i5-14400F",

    "price": 5190000,

    "old": 5990000,

    "specs": [

      "10 nhân · 16 luồng",

      "LGA 1700",

      "Boost 4.7GHz"

    ],

    "image": "assets/images/product-35.png",

    "tag": "Thêm sức mạnh",

    "description": "Lựa chọn bộ vi xử lý cho bản build PC. Kiểm tra socket và danh sách CPU hỗ trợ của mainboard trước khi lắp ráp."

  },

  {

    "id": "cpu-intel-15",

    "brand": "Intel",

    "category": "CPU",

    "name": "CPU Intel Core i5-13400F",

    "price": 3690000,

    "old": 5390000,

    "specs": [

      "10 nhân · 16 luồng",

      "LGA 1700",

      "Boost 4.6GHz"

    ],

    "image": "assets/images/product-23.png",

    "tag": "Thêm sức mạnh",

    "description": "Lựa chọn bộ vi xử lý cho bản build PC. Kiểm tra socket và danh sách CPU hỗ trợ của mainboard trước khi lắp ráp."

  },

  {

    "id": "gpu-14",

    "brand": "Zotac",

    "category": "VGA",

    "name": "Zotac GeForce RTX 3050 Twin Edge OC 6GB",

    "price": 5990000,

    "old": 6890000,

    "specs": [

      "6GB GDDR6",

      "RTX 3050",

      "OC"

    ],

    "image": "assets/images/product-06.png",

    "tag": "Nâng cấp đồ họa",

    "description": "Lựa chọn card đồ họa cho chơi game và tác vụ hình ảnh. Kiểm tra công suất nguồn, đầu cấp điện và khoảng trống trong case."

  },

  {

    "id": "gpu-12",

    "brand": "Gigabyte",

    "category": "VGA",

    "name": "Gigabyte GeForce RTX 5060 Windforce Max OC 8GB",

    "price": 14990000,

    "old": 15990000,

    "specs": [

      "8GB",

      "RTX 5060",

      "128-bit"

    ],

    "image": "assets/images/product-05.png",

    "tag": "Nâng cấp đồ họa",

    "description": "Lựa chọn card đồ họa cho chơi game và tác vụ hình ảnh. Kiểm tra công suất nguồn, đầu cấp điện và khoảng trống trong case."

  },

  {

    "id": "gpu-17",

    "brand": "ASUS",

    "category": "VGA",

    "name": "ASUS Dual GeForce RTX 5070 OC 12GB",

    "price": 25990000,

    "old": 26490000,

    "specs": [

      "12GB GDDR7",

      "RTX 5070",

      "OC"

    ],

    "image": "assets/images/product-28.png",

    "tag": "Nâng cấp đồ họa",

    "description": "Lựa chọn card đồ họa cho chơi game và tác vụ hình ảnh. Kiểm tra công suất nguồn, đầu cấp điện và khoảng trống trong case."

  },

  {

    "id": "gpu-9",

    "brand": "Zotac",

    "category": "VGA",

    "name": "Zotac GeForce RTX 5080 Solid Core OC 16GB",

    "price": 51990000,

    "old": 54990000,

    "specs": [

      "16GB",

      "RTX 5080",

      "256-bit"

    ],

    "image": "assets/images/product-01.jpg",

    "tag": "Nâng cấp đồ họa",

    "description": "Lựa chọn card đồ họa cho chơi game và tác vụ hình ảnh. Kiểm tra công suất nguồn, đầu cấp điện và khoảng trống trong case."

  },

  {

    "id": "main-1",

    "brand": "ASUS",

    "category": "Mainboard",

    "name": "Mainboard ASUS PRIME B760M-K DDR5",

    "price": 2490000,

    "old": 2690000,

    "specs": [

      "Intel B760",

      "DDR5",

      "PRIME"

    ],

    "image": "assets/images/product-02.png",

    "tag": "Nền tảng cấu hình",

    "description": "Bo mạch chủ cho cấu hình PC. Chọn CPU, RAM và kích thước case phù hợp trước khi lắp ráp."

  },

  {

    "id": "main-2",

    "brand": "MSI",

    "category": "Mainboard",

    "name": "Mainboard MSI PRO A620AM-B EVO DDR5",

    "price": 2290000,

    "old": 2490000,

    "specs": [

      "AMD A620",

      "DDR5",

      "PRO series"

    ],

    "image": "assets/images/product-03.png",

    "tag": "Nền tảng cấu hình",

    "description": "Bo mạch chủ cho cấu hình PC. Chọn CPU, RAM và kích thước case phù hợp trước khi lắp ráp."

  },

  {

    "id": "main-8",

    "brand": "Gigabyte",

    "category": "Mainboard",

    "name": "Mainboard Gigabyte B760M Gaming WiFi Plus DDR5",

    "price": 3690000,

    "old": 3690000,

    "specs": [

      "LGA 1700",

      "DDR5",

      "Wi-Fi"

    ],

    "image": "assets/images/product-24.png",

    "tag": "Nền tảng cấu hình",

    "description": "Bo mạch chủ cho cấu hình PC. Chọn CPU, RAM và kích thước case phù hợp trước khi lắp ráp."

  },

  {

    "id": "main-17",

    "brand": "MSI",

    "category": "Mainboard",

    "name": "Mainboard MSI B450M-A PRO MAX II",

    "price": 1790000,

    "old": 1990000,

    "specs": [

      "AM4",

      "DDR4",

      "Micro-ATX"

    ],

    "image": "assets/images/product-22.png",

    "tag": "Nền tảng cấu hình",

    "description": "Bo mạch chủ cho cấu hình PC. Chọn CPU, RAM và kích thước case phù hợp trước khi lắp ráp."

  },

  {

    "id": "ram-19",

    "brand": "TeamGroup",

    "category": "RAM",

    "name": "RAM TeamGroup T-Force Delta RGB 8GB DDR4 3200 Black",

    "price": 990000,

    "old": 990000,

    "specs": [

      "8GB (1 × 8GB)",

      "DDR4",

      "3200MT/s"

    ],

    "image": "assets/images/product-31.jpg",

    "tag": "Mở rộng bộ nhớ",

    "description": "Bộ nhớ máy tính để bàn. Kiểm tra chuẩn DDR, dung lượng và tốc độ RAM được mainboard hỗ trợ."

  },

  {

    "id": "ram-3",

    "brand": "Kingmax",

    "category": "RAM",

    "name": "RAM Kingmax Blade X 16GB DDR4 3200",

    "price": 3290000,

    "old": 3990000,

    "specs": [

      "16GB (1 × 16GB)",

      "DDR4",

      "3200MT/s"

    ],

    "image": "assets/images/product-08.png",

    "tag": "Mở rộng bộ nhớ",

    "description": "Bộ nhớ máy tính để bàn. Kiểm tra chuẩn DDR, dung lượng và tốc độ RAM được mainboard hỗ trợ."

  },

  {

    "id": "ram-8",

    "brand": "Corsair",

    "category": "RAM",

    "name": "RAM Corsair Vengeance RGB White 32GB DDR5 6000",

    "price": 13990000,

    "old": 14990000,

    "specs": [

      "32GB (2 × 16GB)",

      "DDR5",

      "6000MT/s"

    ],

    "image": "assets/images/product-26.png",

    "tag": "Mở rộng bộ nhớ",

    "description": "Bộ nhớ máy tính để bàn. Kiểm tra chuẩn DDR, dung lượng và tốc độ RAM được mainboard hỗ trợ."

  },

  {

    "id": "ram-7",

    "brand": "Corsair",

    "category": "RAM",

    "name": "RAM Corsair Dominator Titanium White 64GB DDR5 6000",

    "price": 21490000,

    "old": 31990000,

    "specs": [

      "64GB (2 × 32GB)",

      "DDR5",

      "RGB"

    ],

    "image": "assets/images/product-36.png",

    "tag": "Mở rộng bộ nhớ",

    "description": "Bộ nhớ máy tính để bàn. Kiểm tra chuẩn DDR, dung lượng và tốc độ RAM được mainboard hỗ trợ."

  },

  {

    "id": "ssd-6",

    "brand": "KLEVV",

    "category": "SSD",

    "name": "SSD KLEVV CRAS C710 256GB NVMe",

    "price": 490000,

    "old": 490000,

    "specs": [

      "256GB",

      "M.2 NVMe",

      "PCIe 3.0"

    ],

    "image": "assets/images/product-30.png",

    "tag": "Thêm không gian",

    "description": "Ổ lưu trữ SSD dành cho hệ điều hành, ứng dụng và dữ liệu. Kiểm tra khe M.2 và giao tiếp được mainboard hỗ trợ."

  },

  {

    "id": "ssd-3",

    "brand": "Kingston",

    "category": "SSD",

    "name": "SSD Kingston NV3 500GB NVMe PCIe 4.0",

    "price": 3890000,

    "old": 5490000,

    "specs": [

      "500GB",

      "M.2 NVMe",

      "PCIe 4.0"

    ],

    "image": "assets/images/product-41.png",

    "tag": "Thêm không gian",

    "description": "Ổ lưu trữ SSD dành cho hệ điều hành, ứng dụng và dữ liệu. Kiểm tra khe M.2 và giao tiếp được mainboard hỗ trợ."

  },

  {

    "id": "ssd-1",

    "brand": "Kingston",

    "category": "SSD",

    "name": "SSD Kingston NV3 2TB NVMe PCIe 4.0",

    "price": 10990000,

    "old": 11490000,

    "specs": [

      "2TB",

      "M.2 NVMe",

      "PCIe 4.0"

    ],

    "image": "assets/images/product-40.png",

    "tag": "Thêm không gian",

    "description": "Ổ lưu trữ SSD dành cho hệ điều hành, ứng dụng và dữ liệu. Kiểm tra khe M.2 và giao tiếp được mainboard hỗ trợ."

  },

  {

    "id": "ssd-7",

    "brand": "Samsung",

    "category": "SSD",

    "name": "SSD Samsung 9100 PRO 2TB NVMe PCIe 5.0",

    "price": 8490000,

    "old": 9490000,

    "specs": [

      "2TB",

      "M.2 NVMe",

      "PCIe 5.0"

    ],

    "image": "assets/images/product-27.jpg",

    "tag": "Thêm không gian",

    "description": "Ổ lưu trữ SSD dành cho hệ điều hành, ứng dụng và dữ liệu. Kiểm tra khe M.2 và giao tiếp được mainboard hỗ trợ."

  },

  {

    "id": "psu-0",

    "brand": "FSP",

    "category": "PSU",

    "name": "Nguồn FSP VIC WD 650W 80 Plus White",

    "price": 990000,

    "old": 1090000,

    "specs": [

      "650W",

      "80 Plus White",

      "ATX"

    ],

    "image": "assets/images/product-14.jpg",

    "tag": "Nguồn cho bản build",

    "description": "Nguồn máy tính cho bộ PC. Chọn công suất và đầu cấp điện phù hợp với tổng cấu hình."

  },

  {

    "id": "psu-9",

    "brand": "Cooler Master",

    "category": "PSU",

    "name": "Nguồn Cooler Master MWE 650 Bronze V3 230V",

    "price": 1390000,

    "old": 1390000,

    "specs": [

      "650W",

      "80 Plus Bronze",

      "ATX"

    ],

    "image": "assets/images/product-39.png",

    "tag": "Nguồn cho bản build",

    "description": "Nguồn máy tính cho bộ PC. Chọn công suất và đầu cấp điện phù hợp với tổng cấu hình."

  },

  {

    "id": "psu-11",

    "brand": "MSI",

    "category": "PSU",

    "name": "Nguồn MSI MAG A1000GL PCIE5 1000W Gold",

    "price": 3990000,

    "old": 4990000,

    "specs": [

      "1000W",

      "80 Plus Gold",

      "Full modular"

    ],

    "image": "assets/images/product-15.jpg",

    "tag": "Nguồn cho bản build",

    "description": "Nguồn máy tính cho bộ PC. Chọn công suất và đầu cấp điện phù hợp với tổng cấu hình."

  },

  {

    "id": "psu-17",

    "brand": "Corsair",

    "category": "PSU",

    "name": "Nguồn Corsair HX1200i 1200W Platinum",

    "price": 7590000,

    "old": 8990000,

    "specs": [

      "1200W",

      "80 Plus Platinum",

      "Full modular"

    ],

    "image": "assets/images/product-33.png",

    "tag": "Nguồn cho bản build",

    "description": "Nguồn máy tính cho bộ PC. Chọn công suất và đầu cấp điện phù hợp với tổng cấu hình."

  },

  {

    "id": "case-0",

    "brand": "Xigmatek",

    "category": "Case",

    "name": "Case Xigmatek Pano M Nano 3IF",

    "price": 790000,

    "old": 850000,

    "specs": [

      "3 quạt đi kèm",

      "Pano M Nano"

    ],

    "image": "assets/images/product-13.png",

    "tag": "Định hình góc máy",

    "description": "Vỏ máy tính cho góc làm việc hoặc chơi game. Kiểm tra kích thước mainboard, card đồ họa, nguồn và tản nhiệt."

  },

  {

    "id": "case-5",

    "brand": "Lian Li",

    "category": "Case",

    "name": "Case Lian Li O11D Mini V2 White",

    "price": 2790000,

    "old": 2790000,

    "specs": [

      "Màu trắng",

      "Kính cường lực",

      "Nguồn ATX"

    ],

    "image": "assets/images/product-12.jpg",

    "tag": "Định hình góc máy",

    "description": "Vỏ máy tính cho góc làm việc hoặc chơi game. Kiểm tra kích thước mainboard, card đồ họa, nguồn và tản nhiệt."

  },

  {

    "id": "case-8",

    "brand": "Jonsbo",

    "category": "Case",

    "name": "Case Jonsbo D300 Black",

    "price": 1790000,

    "old": 1890000,

    "specs": [

      "Micro-ATX / ITX",

      "Màu đen",

      "Nguồn ATX"

    ],

    "image": "assets/images/product-11.jpg",

    "tag": "Định hình góc máy",

    "description": "Vỏ máy tính cho góc làm việc hoặc chơi game. Kiểm tra kích thước mainboard, card đồ họa, nguồn và tản nhiệt."

  },

  {

    "id": "case-2",

    "brand": "ASUS",

    "category": "Case",

    "name": "Case ASUS ROG Hyperion GR701 Black",

    "price": 10990000,

    "old": 11990000,

    "specs": [

      "Màu đen",

      "Nguồn ATX",

      "ROG Hyperion"

    ],

    "image": "assets/images/product-32.jpg",

    "tag": "Định hình góc máy",

    "description": "Vỏ máy tính cho góc làm việc hoặc chơi game. Kiểm tra kích thước mainboard, card đồ họa, nguồn và tản nhiệt."

  },

  {

    "id": "cooler-5",

    "brand": "Cooler Master",

    "category": "Cooling",

    "name": "Tản nhiệt khí Cooler Master Hyper 612 Apex",

    "price": 1590000,

    "old": 1690000,

    "specs": [

      "Tản nhiệt khí",

      "2 quạt 120mm",

      "Không RGB"

    ],

    "image": "assets/images/product-10.png",

    "tag": "Giữ máy mát mẻ",

    "description": "Giải pháp tản nhiệt cho CPU. Kiểm tra bộ ngàm socket và khoảng trống lắp đặt trong case."

  },

  {

    "id": "cooler-3",

    "brand": "MSI",

    "category": "Cooling",

    "name": "Tản nhiệt nước MSI MAG CORELIQUID I240 White",

    "price": 2890000,

    "old": 3190000,

    "specs": [

      "AIO 240mm",

      "2 quạt 120mm",

      "Màu trắng"

    ],

    "image": "assets/images/product-21.png",

    "tag": "Giữ máy mát mẻ",

    "description": "Giải pháp tản nhiệt cho CPU. Kiểm tra bộ ngàm socket và khoảng trống lắp đặt trong case."

  },

  {

    "id": "cooler-4",

    "brand": "Cooler Master",

    "category": "Cooling",

    "name": "Tản nhiệt nước Cooler Master MasterLiquid 360 Atmos Stealth",

    "price": 2790000,

    "old": 3190000,

    "specs": [

      "AIO 360mm",

      "3 quạt 120mm",

      "Không RGB"

    ],

    "image": "assets/images/product-09.png",

    "tag": "Giữ máy mát mẻ",

    "description": "Giải pháp tản nhiệt cho CPU. Kiểm tra bộ ngàm socket và khoảng trống lắp đặt trong case."

  },

  {

    "id": "cooler-6",

    "brand": "Lian Li",

    "category": "Cooling",

    "name": "Tản nhiệt nước Lian Li HydroShift LCD 360TL Wireless Black",

    "price": 7990000,

    "old": 8290000,

    "specs": [

      "AIO 360mm",

      "LCD",

      "ARGB"

    ],

    "image": "assets/images/product-16.jpg",

    "tag": "Giữ máy mát mẻ",

    "description": "Giải pháp tản nhiệt cho CPU. Kiểm tra bộ ngàm socket và khoảng trống lắp đặt trong case."

  }

]);



const $ = (s,root=document)=>root.querySelector(s);

const $$ = (s,root=document)=>[...root.querySelectorAll(s)];

const paths={search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',cart:'<path d="M2 3h3l3 13h11l3-10H6M9 20h.01M18 20h.01"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>',headphones:'<path d="M4 14v-3a8 8 0 0 1 16 0v3M20 17v2a2 2 0 0 1-2 2h-5"/><rect x="2" y="11" width="5" height="7" rx="2"/><rect x="17" y="11" width="5" height="7" rx="2"/>',grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',shield:'<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6zM8 12l3 3 5-6"/>',tool:'<path d="m14 7 3 3 5-5a7 7 0 0 1-9 9L6 21a2 2 0 0 1-3-3l7-7a7 7 0 0 1 9-9z"/>',truck:'<path d="M3 5h12v12H3zM15 9h4l3 4v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',cpu:'<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="8" y="8" width="8" height="8"/><path d="M8 2v3m4-3v3m4-3v3M8 19v3m4-3v3m4-3v3M2 8h3m-3 4h3m-3 4h3m14-8h3m-3 4h3m-3 4h3"/>',gpu:'<rect x="3" y="6" width="19" height="12" rx="1"/><circle cx="9" cy="12" r="3"/><circle cx="17" cy="12" r="3"/><path d="M3 3v18M7 18v3h8v-3"/>',board:'<rect x="4" y="2" width="16" height="20" rx="1"/><rect x="7" y="6" width="6" height="6"/><path d="M16 5v8M7 16h10M7 19h10"/>',ram:'<path d="M2 6h20v11H2zM5 17v3m4-3v3m4-3v3m4-3v3m4-3v3M5 10h3v3H5zM11 10h3v3h-3zM17 10h2v3h-2z"/>',drive:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 15h18M7 18h.01M11 18h.01"/>',power:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="11" cy="12" r="5"/><path d="M11 7v10M6 12h10M19 7h.01M19 17h.01"/>',case:'<rect x="6" y="2" width="12" height="20" rx="1"/><path d="M9 5h6M9 8h6"/><circle cx="12" cy="16" r="3"/>',filter:'<path d="M3 6h18M6 12h12M9 18h6"/>',plus:'<path d="M12 5v14M5 12h14"/>'};

paths.user='<circle cx="12" cy="8" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>';

paths.cooling='<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="3"/><path d="M12 9V6m3 6h3m-6 3v3m-3-6H6"/>';

function icon(name){return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.cpu}</svg>`}

$$('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));

const money=n=>new Intl.NumberFormat('vi-VN',{style:'currency',currency:'VND'}).format(n);

const normalize=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');

let category='',cart={},visibleLimit=12;

$('#brand').innerHTML='<option value="">Thương hiệu</option>'+[...new Set(products.map(p=>p.brand))].sort((a,b)=>a.localeCompare(b,'vi')).map(brand=>`<option value="${brand}">${brand}</option>`).join('');

$('#hero-image').src="assets/images/product-18.png";

$('#side-categories').innerHTML=categories.map(c=>`<button data-category="${c.key}">${icon(c.icon)}<span>${c.name}</span><span class="chev">›</span></button>`).join('');

$('#category-tiles').innerHTML=categories.map(c=>`<button class="category-tile" data-category="${c.key}"><img src="${c.image}" alt="" loading="lazy"><strong>${c.short}</strong><small>${products.filter(p=>p.category===c.key).length} sản phẩm</small></button>`).join('');

$('#category-tabs').innerHTML=[{key:'',short:'Tất cả linh kiện'},...categories].map(c=>`<button data-category="${c.key}" aria-pressed="${!c.key}">${c.short}</button>`).join('');

function notify(message,trigger){

 const dialog=$('dialog[open]');

 const host=dialog?($('.detail-layout>div',dialog)||dialog):(trigger?.closest('.product-card')||$('#catalog'));

 let notice=$('.inline-notice',host);

 if(!notice){notice=document.createElement('div');notice.className='inline-notice';notice.setAttribute('role','status');notice.setAttribute('aria-live','polite');host.append(notice)}

 clearTimeout(notice.dismissTimer);notice.textContent='✓ '+message;notice.hidden=false;

 notice.dismissTimer=setTimeout(()=>{notice.hidden=true},3500);

}

function renderProducts(resetLimit=true){

 if(resetLimit!==false)visibleLimit=12;

 const query=normalize($('#search').value.trim());

 $('#catalog-heading').firstChild.textContent=category?(categories.find(c=>c.key===category)?.short||category)+' ': 'Linh kiện nổi bật ';

 let filtered=products.filter(p=>(!category||p.category===category)&&(!$('#brand').value||p.brand===$('#brand').value)&&(!query||normalize(p.name+' '+p.brand+' '+p.specs.join(' ')).includes(query)));

 const spec=$('#spec-filter').value;if(spec)filtered=filtered.filter(p=>(p.name+' '+p.specs.join(' ')).toUpperCase().includes(spec));

 const range=$('#price').value;

 filtered=filtered.filter(p=>!range||(range==='low'?p.price<3000000:range==='mid'?p.price>=3000000&&p.price<=7000000:p.price>7000000));

 if($('#sort').value==='asc')filtered.sort((a,b)=>a.price-b.price);if($('#sort').value==='desc')filtered.sort((a,b)=>b.price-a.price);

 $('#result-count').textContent=`${filtered.length} sản phẩm`;

 $('#products').innerHTML=filtered.slice(0,visibleLimit).map(p=>`<article class="product-card"><span class="product-tag">${p.tag}</span><button class="product-image" data-detail="${p.id}" aria-label="Xem ${p.name}"><img src="${p.image}" alt="${p.name}" loading="lazy"></button><span class="product-brand">${p.brand}</span><button class="product-name" data-detail="${p.id}">${p.name}</button><div class="product-specs">${p.specs.map(s=>`<span>${s}</span>`).join('')}</div><div><strong class="product-price">${money(p.price)}</strong>${p.old>p.price?`<span class="old-price">${money(p.old)}</span>`:""}</div><div class="product-bottom"><span class="product-status"><span></span>Sẵn hàng · Demo</span><button class="add-to-cart" data-add="${p.id}" aria-label="Thêm ${p.name} vào giỏ">${icon('cart')}</button></div></article>`).join('');

 $('#empty').hidden=filtered.length>0;

 $('#load-more').hidden=visibleLimit>=filtered.length;

 $('#load-more').textContent=`Xem thêm ${Math.min(12,Math.max(0,filtered.length-visibleLimit))} sản phẩm`;

 $('#showing-count').textContent=filtered.length?`Đang hiển thị ${Math.min(visibleLimit,filtered.length)} / ${filtered.length} sản phẩm`:'';

 $$('#category-tabs button').forEach(b=>{b.classList.toggle('active',b.dataset.category===category);b.setAttribute('aria-pressed',String(b.dataset.category===category))});

}

function selectCategory(value){category=value;updateSpecFilter();renderProducts();$('#catalog').scrollIntoView({behavior:'smooth',block:'start'})}

function reset(){category='';updateSpecFilter();$('#search').value='';$('#brand').value='';$('#price').value='';$('#sort').value='featured';renderProducts()}

function showDialog(id){const d=$(id);if(!d.open)d.showModal()}

function add(id,quiet=false,trigger){cart[id]=(cart[id]||0)+1;updateCart();if(!quiet)notify('Đã thêm sản phẩm vào giỏ hàng',trigger)}

function updateCart(){

 $('#cart-count').textContent=Object.values(cart).reduce((a,b)=>a+b,0);

 const selected=products.filter(p=>cart[p.id]);

 $('#cart-items').innerHTML=selected.length?selected.map(p=>`<div class="cart-row"><img src="${p.image}" alt=""><div><h3>${p.name}</h3><div class="qty"><button data-qty="${p.id}" data-delta="-1" aria-label="Giảm số lượng ${p.name}">−</button><span>${cart[p.id]}</span><button data-qty="${p.id}" data-delta="1" aria-label="Tăng số lượng ${p.name}">+</button><button class="remove" data-remove="${p.id}" aria-label="Xóa ${p.name}">Xóa</button></div></div><strong>${money(p.price*cart[p.id])}</strong></div>`).join(''):'<div class="cart-empty"><p>Giỏ hàng đang chờ bản build đầu tiên của bạn.</p><button class="primary" data-shopping>Khám phá linh kiện</button></div>';

 $('#cart-summary').innerHTML=selected.length?`<div class="cart-total"><span>Tổng dự tính</span><strong>${money(selected.reduce((s,p)=>s+p.price*cart[p.id],0))}</strong></div><p>Giỏ hàng mô phỏng, được giữ trong phiên trang hiện tại. Bản demo không đặt hàng hoặc thu tiền.</p>`:'';

}

function detail(id){const p=products.find(p=>p.id===id);$('#detail-content').innerHTML=`<div class="detail-layout"><img src="${p.image}" alt="${p.name}"><div><span class="kicker">${p.brand} / ${p.category}</span><h2>${p.name}</h2><p>${p.description}</p><div class="product-specs">${p.specs.map(s=>`<span>${s}</span>`).join('')}</div><div><strong class="product-price">${money(p.price)}</strong>${p.old>p.price?`<span class="old-price">${money(p.old)}</span>`:""}</div><button class="primary" data-add="${p.id}">${icon('cart')} Thêm vào giỏ hàng</button><small>Giá và thông tin sử dụng cho bản demo giao diện.</small></div></div>`;showDialog('#detail-dialog')}

$('#build-fields').innerHTML=categories.map(c=>`<div class="build-field"><label for="build-${c.key}">${c.short}</label><select id="build-${c.key}" data-build><option value="">Chưa chọn</option>${products.filter(p=>p.category===c.key).map(p=>`<option value="${p.id}">${p.name} — ${money(p.price)}</option>`).join('')}</select></div>`).join('');

function selectedBuild(){return $$('[data-build]').map(s=>products.find(p=>p.id===s.value)).filter(Boolean)}

function updateBuild(){const chosen=selectedBuild();$('#build-total').textContent=money(chosen.reduce((sum,p)=>sum+p.price,0));$('#add-build').disabled=!chosen.length}

$$('[data-build]').forEach(s=>s.addEventListener('change',updateBuild));

$('#add-build').addEventListener('click',()=>{selectedBuild().forEach(p=>add(p.id,true));$('#build-dialog').close();showDialog('#cart-dialog');notify('Đã thêm các linh kiện đã chọn vào giỏ')});

document.addEventListener('click',e=>{

 const categoryButton=e.target.closest('[data-category]');if(categoryButton)selectCategory(categoryButton.dataset.category);

 const link=e.target.closest('[data-category-link]');if(link){e.preventDefault();selectCategory(link.dataset.categoryLink)}

 const item=e.target.closest('[data-detail]');if(item)detail(item.dataset.detail);

 const addButton=e.target.closest('[data-add]');if(addButton)add(addButton.dataset.add,false,addButton);

 const qty=e.target.closest('[data-qty]');if(qty){cart[qty.dataset.qty]+=Number(qty.dataset.delta);if(cart[qty.dataset.qty]<=0)delete cart[qty.dataset.qty];updateCart()}

 const remove=e.target.closest('[data-remove]');if(remove){delete cart[remove.dataset.remove];updateCart()}

 if(e.target.closest('[data-close]'))e.target.closest('dialog').close();

 if(e.target.closest('[data-shopping]')){$('#cart-dialog').close();$('#catalog').scrollIntoView({behavior:'smooth'})}

});

$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()}}));

$$('.cart-trigger').forEach(b=>b.addEventListener('click',()=>{updateCart();showDialog('#cart-dialog')}));

$$('.support-trigger').forEach(b=>b.addEventListener('click',()=>showDialog('#support-dialog')));

['#build-nav','#build-side','#build-banner-button','#build-footer'].forEach(id=>$(id).addEventListener('click',()=>showDialog('#build-dialog')));

['#brand','#price','#sort','#spec-filter'].forEach(id=>$(id).addEventListener('change',renderProducts));

$('#search').addEventListener('input',renderProducts);

$('#search-form').addEventListener('submit',e=>{e.preventDefault();renderProducts();$('#catalog').scrollIntoView({behavior:'smooth'})});

$('#reset').addEventListener('click',reset);$('#reset-empty').addEventListener('click',reset);

$('#load-more').addEventListener('click',()=>{visibleLimit+=12;renderProducts(false)});



function updateSpecFilter(){

 const list=products.filter(p=>p.category===category),text=list.map(p=>p.name+' '+p.specs.join(' ')).join(' ').toUpperCase();

 const candidates=['AM4','AM5','LGA 1700','LGA 1851','DDR4','DDR5','PCIe 3.0','PCIe 4.0','PCIe 5.0','80 Plus Bronze','80 Plus Gold','RTX','RADEON'];

 const options=category?candidates.filter(v=>text.includes(v.toUpperCase())):[];

 $('#spec-filter').innerHTML='<option value="">Thông số linh kiện</option>'+options.map(v=>`<option value="${v.toUpperCase()}">${v}</option>`).join('');

 $('.spec-filter').hidden=options.length<2;

}

const demoAccounts=new Map();let currentAccount=null;

function authMessage(text,success=false){$('#auth-message').textContent=text;$('#auth-message').classList.toggle('success',success)}

function authTab(mode){const register=mode==='register';$('#login-form').hidden=register;$('#register-form').hidden=!register;$('#login-tab').setAttribute('aria-selected',String(!register));$('#register-tab').setAttribute('aria-selected',String(register));authMessage('')}

function updateAccount(){const signed=!!currentAccount;$('#account-guest').hidden=signed;$('#account-profile').hidden=!signed;$('#account-caption').textContent=signed?'Xin chào':'Đăng nhập / Đăng ký';$('#account-label').textContent=signed?currentAccount.name.split(' ').at(-1):'Tài khoản';$('.account-trigger').setAttribute('aria-label',signed?'Xem tài khoản':'Đăng nhập hoặc đăng ký tài khoản');if(signed){$('#profile-name').textContent=currentAccount.name;$('#profile-email').textContent=currentAccount.email;$('#profile-avatar').textContent=currentAccount.name.charAt(0).toUpperCase()}}

async function passwordDigest(password,salt){const bytes=new TextEncoder().encode(salt+password);const hash=await crypto.subtle.digest('SHA-256',bytes);return Array.from(new Uint8Array(hash),v=>v.toString(16).padStart(2,'0')).join('')}

$('.account-trigger').addEventListener('click',()=>{updateAccount();showDialog('#account-dialog')});

$('#login-tab').addEventListener('click',()=>authTab('login'));$('#register-tab').addEventListener('click',()=>authTab('register'));

$$('[data-password]').forEach(b=>b.addEventListener('click',()=>{const input=$('input',b.parentElement),show=input.type==='password';input.type=show?'text':'password';b.textContent=show?'Ẩn':'Hiện';b.setAttribute('aria-label',show?'Ẩn mật khẩu':'Hiện mật khẩu')}));

$('#register-form').addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,data=new FormData(form),name=data.get('name').trim(),email=data.get('email').trim().toLowerCase(),password=data.get('password');if(name.length<2)return authMessage('Vui lòng nhập họ tên có ít nhất 2 ký tự.');if(password!==data.get('confirm'))return authMessage('Mật khẩu xác nhận chưa khớp.');if(demoAccounts.has(email))return authMessage('Email này đã được đăng ký trong phiên demo. Hãy đăng nhập.');const button=$('[type="submit"]',form);button.disabled=true;try{const salt=crypto.randomUUID();demoAccounts.set(email,{name,email,salt,digest:await passwordDigest(password,salt)});form.reset();authTab('login');$('#login-form').elements.email.value=email;authMessage('Đã tạo tài khoản demo. Bạn có thể đăng nhập ngay.',true);$('#login-form').elements.password.focus()}catch{authMessage('Trình duyệt chưa hỗ trợ tài khoản demo. Hãy dùng tài khoản mẫu bên dưới.')}finally{button.disabled=false}});

$('#login-form').addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,data=new FormData(form),email=data.get('email').trim().toLowerCase(),account=demoAccounts.get(email);const button=$('[type="submit"]',form);button.disabled=true;try{if(!account||await passwordDigest(data.get('password'),account.salt)!==account.digest)return authMessage('Email hoặc mật khẩu không đúng. Nếu chưa có tài khoản, hãy chọn Đăng ký.');currentAccount=account;form.reset();authMessage('');updateAccount()}catch{authMessage('Không thể đăng nhập demo trên trình duyệt này.')}finally{button.disabled=false}});

$('#demo-login').addEventListener('click',()=>{currentAccount={name:'Bạn yêu công nghệ',email:'demo@nexgear.test'};updateAccount()});

$('#logout').addEventListener('click',()=>{currentAccount=null;updateAccount();authTab('login');authMessage('Bạn đã đăng xuất.',true)});

$('#profile-shop').addEventListener('click',()=>{$('#account-dialog').close();$('#catalog').scrollIntoView({behavior:'smooth'})});

$('#profile-cart').addEventListener('click',()=>{$('#account-dialog').close();updateCart();showDialog('#cart-dialog')});

updateSpecFilter();updateAccount();



renderProducts();updateCart();updateBuild();
