export interface SDLCStep {
  id: number;
  proTitle: string;
  analogyTitle: string;
  standardProcess: string;
  lifeAnalogy: string;
  deepDive: {
    what: string;
    how: string;
    output: string;
  };
  contractModels?: {
    name: string;
    features: string;
    suitability: string;
    example: string;
  }[];
  keyContents?: {
    group: string;
    items: string[];
  }[];
  advice?: string[];
  example: string;
  icon: string;
}

export const sdlcSteps: SDLCStep[] = [
  {
    id: 1,
    proTitle: "Product Discovery & Ideation",
    analogyTitle: "Khám phá sản phẩm & Hình thành ý tưởng",
    standardProcess: "Xác định 'nỗi đau' (Pain points) của khách hàng và cơ hội thị trường. PM thực hiện: 1. Nghiên cứu thị trường & Đối thủ. 2. Phỏng vấn người dùng sâu (User Interview). 3. Xác định giá trị cốt lõi (Value Proposition). Đây là giai đoạn trả lời câu hỏi: 'Tại sao chúng ta làm sản phẩm này?'",
    lifeAnalogy: "Thay vì xây dựng dựa trên giả định, chúng ta đi tìm bằng chứng thực tế. Việc xác định đúng vấn đề ngay từ đầu giúp doanh nghiệp tránh lãng phí hàng tỷ đồng vào những tính năng mà không ai thực sự cần.",
    deepDive: {
      what: "Xác nhận sự tồn tại của vấn đề và tính khả thi của giải pháp.",
      how: "Market Research -> User Interviews -> Problem Validation -> Lean Canvas.",
      output: "Lean Canvas, User Persona, Problem Statement, Product Vision."
    },
    keyContents: [
      { group: "Nghiên cứu", items: ["Market Trends", "Competitor Analysis", "User Survey"] },
      { group: "Định hướng", items: ["Value Proposition", "Product Vision", "Success Metrics"] }
    ],
    example: "Sau khi phỏng vấn 50 chủ shop, team nhận thấy họ mất 4 tiếng mỗi ngày chỉ để đối soát đơn hàng thủ công. Đây chính là cơ hội để xây dựng tính năng đối soát tự động.",
    icon: "Lightbulb"
  },
  {
    id: 2,
    proTitle: "Product Strategy & Roadmap",
    analogyTitle: "Chiến lược sản phẩm & Lộ trình",
    standardProcess: "Thiết lập mục tiêu dài hạn và kế hoạch thực thi: 1. Xác định OKRs/KPIs đo lường thành công. 2. Xây dựng Roadmap (Lộ trình tính năng theo quý). 3. Ưu tiên tính năng (Prioritization) dựa trên giá trị kinh doanh và nguồn lực. Đây là 'bản đồ' dẫn đường cho toàn bộ team.",
    lifeAnalogy: "Chiến lược giúp team biết rõ mục tiêu cần đạt được trong 6-12 tháng tới. Nó đảm bảo các nguồn lực hạn hẹp được tập trung vào những thứ mang lại tác động lớn nhất thay vì làm dàn trải.",
    deepDive: {
      what: "Lập kế hoạch thực thi để đạt được các mục tiêu kinh doanh chiến lược.",
      how: "Goal Setting (OKRs) -> Backlog Management -> Prioritization (RICE/Kano) -> Roadmap Planning.",
      output: "Product Roadmap, High-level Backlog, GTM Strategy."
    },
    keyContents: [
      { group: "Mục tiêu", items: ["OKRs Definition", "KPIs Tracking", "Business Value"] },
      { group: "Lộ trình", items: ["Feature Prioritization", "Quarterly Roadmap", "Resource Allocation"] }
    ],
    example: "Để đạt mục tiêu chiếm 10% thị phần trong năm đầu, PM thiết lập Roadmap tập trung vào tính năng 'Thanh toán 1 chạm' và 'Tích điểm thành viên' trong 2 quý đầu tiên.",
    icon: "Target"
  },
  {
    id: 3,
    proTitle: "Requirement Analysis & PRD",
    analogyTitle: "Phân tích yêu cầu & Đặc tả chi tiết",
    standardProcess: "PM và BA chuyển hóa ý tưởng thành tài liệu kỹ thuật chi tiết: 1. Phân tích logic nghiệp vụ (Business Logic). 2. Viết User Stories & Acceptance Criteria (Tiêu chí nghiệm thu). 3. Xây dựng tài liệu PRD (Product Requirements Document). Đây là 'ngôn ngữ chung' giữa Business và Kỹ thuật.",
    lifeAnalogy: "Nếu không phân tích kỹ, lập trình viên sẽ code theo ý hiểu cá nhân, dẫn đến việc sản phẩm làm ra sai lệch hoàn toàn so với yêu cầu kinh doanh. PRD là bản cam kết về tính năng giữa các bên.",
    deepDive: {
      what: "Đảm bảo mọi thành viên hiểu rõ từng chi tiết nhỏ nhất của tính năng.",
      how: "Business Logic Mapping -> User Story Writing -> PRD Documentation -> Stakeholder Review.",
      output: "Detailed PRD, User Stories, Business Rules, Data Flow Diagrams."
    },
    keyContents: [
      { group: "Tài liệu", items: ["PRD Writing", "User Stories", "Acceptance Criteria"] },
      { group: "Logic", items: ["Business Rules", "Data Flow", "Edge Cases Analysis"] }
    ],
    example: "Team phân tích kỹ tính năng 'Hoàn tiền': Điều kiện hoàn tiền là gì? Tiền về ví hay về thẻ? Thời gian xử lý tối đa bao lâu? Mọi kịch bản lỗi đều phải được dự báo.",
    icon: "ClipboardList"
  },
  {
    id: 4,
    proTitle: "UX/UI Design & Prototyping",
    analogyTitle: "Thiết kế trải nghiệm & Bản mẫu",
    standardProcess: "Chuyển hóa yêu cầu thành giao diện trực quan: 1. Xây dựng User Flow (Luồng người dùng). 2. Thiết kế Wireframe & UI Design. 3. Tạo Prototype tương tác. 4. Kiểm thử bản mẫu (Usability Testing) để điều chỉnh trải nghiệm trước khi tốn công lập trình.",
    lifeAnalogy: "Thiết kế không chỉ là làm cho đẹp, mà là làm cho sản phẩm 'dễ dùng'. Prototype giúp team phát hiện các lỗi về trải nghiệm sớm, tiết kiệm hàng trăm giờ code nếu phải sửa đổi sau này.",
    deepDive: {
      what: "Tối ưu hóa hành trình người dùng và đảm bảo tính thẩm mỹ, nhất quán.",
      how: "UX Research -> Wireframing -> UI Design -> User Testing on Prototype.",
      output: "Figma Designs, Design System, Interactive Prototype."
    },
    keyContents: [
      { group: "UX", items: ["User Flow", "Information Architecture", "Wireframing"] },
      { group: "UI", items: ["Visual Design", "Design System", "Interactive Prototype"] }
    ],
    example: "Thông qua Prototype, team phát hiện người dùng thường bỏ qua nút 'Xác nhận' vì nó quá nhỏ. Designer đã điều chỉnh lại vị trí và kích cỡ trước khi chuyển giao cho Dev.",
    icon: "Layout"
  },
  {
    id: 5,
    proTitle: "Technical Architecture & System Design",
    analogyTitle: "Thiết kế kiến trúc hệ thống",
    standardProcess: "Đội ngũ kỹ thuật xây dựng 'bản vẽ kỹ thuật' cho hệ thống: 1. Thiết kế Database Schema. 2. Thiết kế API Contract (Giao ước dữ liệu giữa Front-end và Back-end). 3. Lựa chọn Tech Stack & Hạ tầng. 4. Đánh giá bảo mật & Khả năng mở rộng (Scalability).",
    lifeAnalogy: "Trước khi xây tường, kiến trúc sư phải vẽ sơ đồ điện nước và kết cấu móng. Bước này đảm bảo hệ thống không bị 'treo' khi có 1 triệu người dùng truy cập cùng lúc.",
    deepDive: {
      what: "Xây dựng nền tảng kỹ thuật vững chắc, đảm bảo tính ổn định và bảo mật.",
      how: "System Design -> Database Modeling -> API Documentation -> Security Review.",
      output: "Technical Design Document (TDD), API Specs (Swagger), Infrastructure Map."
    },
    keyContents: [
      { group: "Hệ thống", items: ["Architecture Design", "Database Schema", "API Contracts"] },
      { group: "Hạ tầng", items: ["Cloud Infrastructure", "Scalability Plan", "Security Audit"] }
    ],
    example: "Tech Lead quyết định sử dụng kiến trúc Microservices và Redis Caching để đảm bảo tốc độ tải trang dưới 1 giây ngay cả khi lượng truy cập tăng đột biến vào giờ cao điểm.",
    icon: "Settings"
  },
  {
    id: 6,
    proTitle: "Engineering & Development",
    analogyTitle: "Phát triển & Lập trình Agile",
    standardProcess: "Hiện thực hóa thiết kế thành phần mềm chạy được: 1. Lập trình theo các Sprint (thường 2 tuần). 2. Thực hiện Unit Test & Code Review. 3. Tích hợp liên tục (CI/CD). 4. Quản lý mã nguồn tập trung. Đây là giai đoạn 'đổ mồ hôi' nhiều nhất của các kỹ sư.",
    lifeAnalogy: "Quá trình này giống như việc thợ xây bắt đầu xây từng viên gạch. Việc tuân thủ các tiêu chuẩn kỹ thuật và quy trình Agile giúp sản phẩm được hoàn thiện dần dần và có thể thay đổi linh hoạt theo phản hồi.",
    deepDive: {
      what: "Triển khai các tính năng theo yêu cầu với chất lượng mã nguồn cao nhất.",
      how: "Sprint Planning -> Coding -> Code Review -> CI/CD Integration.",
      output: "Source Code, API Documentation, Staging Environment."
    },
    keyContents: [
      { group: "Thực thi", items: ["Sprint Execution", "Pair Programming", "Daily Stand-up"] },
      { group: "Chất lượng", items: ["Code Review", "Unit Testing", "CI/CD Pipeline"] }
    ],
    example: "Team áp dụng quy trình Scrum, mỗi sáng họp 15 phút (Daily Stand-up) để giải quyết các nút thắt kỹ thuật, đảm bảo tiến độ Sprint không bị trì trệ.",
    icon: "Code"
  },
  {
    id: 7,
    proTitle: "QA & Internal Testing",
    analogyTitle: "Kiểm thử nội bộ & Sửa lỗi",
    standardProcess: "Đảm bảo sản phẩm 'sạch lỗi' về mặt kỹ thuật: 1. Kiểm thử chức năng (Manual/Auto Test). 2. Kiểm thử hiệu năng (Load Test). 3. Kiểm thử bảo mật (Pentest). 4. Regression Testing (Kiểm thử hồi quy). Mục tiêu là đảm bảo hệ thống chạy đúng thiết kế.",
    lifeAnalogy: "Đây là bước kiểm tra chất lượng tại nhà máy trước khi đưa hàng ra đại lý. Chúng ta cần chắc chắn rằng không có lỗi ngớ ngẩn nào xảy ra trước khi người dùng thực tế chạm vào sản phẩm.",
    deepDive: {
      what: "Xác nhận sản phẩm ổn định, bảo mật và không có lỗi nghiêm trọng.",
      how: "Functional Testing -> Automation Test -> Security Audit -> Performance Testing.",
      output: "Test Reports, Bug Logs, Staging Release Candidate."
    },
    keyContents: [
      { group: "Kỹ thuật", items: ["Functional Testing", "Automation Test", "Regression Test"] },
      { group: "Hiệu năng", items: ["Load Testing", "Security Pentest", "Stress Test"] }
    ],
    example: "QA phát hiện tính năng 'Thanh toán' bị lỗi trên trình duyệt Safari phiên bản cũ, team Dev đã kịp thời fix trước khi bản build được đẩy lên môi trường thử nghiệm nhóm nhỏ.",
    icon: "ShieldCheck"
  },
  {
    id: 8,
    proTitle: "Beta Testing & Pilot Launch",
    analogyTitle: "Thử nghiệm nhóm nhỏ & Phản hồi",
    standardProcess: "Đưa sản phẩm cho một nhóm người dùng giới hạn (Beta Users): 1. Thu thập phản hồi thực tế (Feedback Loop). 2. Theo dõi hành vi người dùng qua Analytics. 3. Sửa lỗi và cải tiến tính năng dựa trên feedback. 4. Xác nhận tính hữu dụng (Product-Market Fit).",
    lifeAnalogy: "Đây là giai đoạn 'Soft Launch'. Thay vì ra mắt ồ ạt, chúng ta mời một nhóm khách hàng thân thiết dùng thử. Feedback của họ là 'vàng' để chúng ta tinh chỉnh sản phẩm hoàn hảo trước khi 'đánh lớn'.",
    deepDive: {
      what: "Xác nhận sản phẩm thực sự giải quyết được vấn đề của người dùng trong môi trường thực tế.",
      how: "Beta Release -> User Feedback Collection -> Data Analysis -> Iterative Improvement.",
      output: "Beta Feedback Summary, Updated Product Backlog, User Satisfaction Score (CSAT)."
    },
    keyContents: [
      { group: "Thử nghiệm", items: ["Beta User Selection", "Soft Launch", "Feedback Collection"] },
      { group: "Cải tiến", items: ["Bug Fixing (Beta)", "UX Refinement", "Feature Adjustment"] }
    ],
    example: "Team mời 100 chủ shop dùng thử tính năng đối soát mới. Họ phản hồi rằng giao diện hơi khó hiểu, team đã dành 1 tuần để thiết kế lại luồng trước khi ra mắt toàn quốc.",
    icon: "Users"
  },
  {
    id: 9,
    proTitle: "Full Scale Launch & GTM",
    analogyTitle: "Triển khai hàng loạt & Tiếp thị",
    standardProcess: "Đưa sản phẩm chính thức ra toàn bộ thị trường: 1. Triển khai hệ thống Production quy mô lớn. 2. Thực hiện chiến dịch Marketing & PR đa kênh. 3. Đào tạo đội ngũ Sales & Support. 4. Theo dõi Hypercare (giám sát 24/7 sau launch).",
    lifeAnalogy: "Đây là lúc 'đánh trống thổi kèn' ra quân. Mọi bộ phận từ Kỹ thuật, Marketing đến Chăm sóc khách hàng đều phải sẵn sàng 200% công suất để đón nhận lượng người dùng khổng lồ.",
    deepDive: {
      what: "Tiếp cận tối đa người dùng mục tiêu và thiết lập quy trình vận hành quy mô lớn.",
      how: "Production Deployment -> Mass Marketing -> Sales Enablement -> Support Readiness.",
      output: "Live Product (Mass), Marketing Campaigns, Support Knowledge Base."
    },
    keyContents: [
      { group: "Vận hành", items: ["Mass Deployment", "Infrastructure Scaling", "Hypercare Support"] },
      { group: "Thị trường", items: ["GTM Execution", "PR & Media", "Sales Training"] }
    ],
    example: "Sau khi Pilot thành công, app được ra mắt toàn quốc kèm chiến dịch khuyến mãi 'Hoàn tiền 50%'. Hệ thống Server được nâng cấp gấp 10 lần để chịu tải.",
    icon: "Globe"
  },
  {
    id: 10,
    proTitle: "Post-Launch Analytics & Evaluation",
    analogyTitle: "Phân tích, Đánh giá & Đo lường",
    standardProcess: "Đánh giá kết quả sau một thời gian ra mắt: 1. Đo lường các chỉ số KPIs (Retention, Conversion, Revenue). 2. Phân tích thành công/thất bại so với mục tiêu ban đầu. 3. Báo cáo cho các bên liên quan (Stakeholders). 4. Quyết định hướng đi tiếp theo.",
    lifeAnalogy: "Sau trận đánh, chúng ta ngồi lại kiểm kê chiến lợi phẩm và rút kinh nghiệm. Liệu chúng ta có đạt được mục tiêu đề ra? Người dùng có thực sự quay lại dùng app? Đây là lúc nhìn vào những con số khô khan nhưng trung thực.",
    deepDive: {
      what: "Xác định hiệu quả đầu tư (ROI) và định hướng cho các phiên bản tiếp theo.",
      how: "KPI Tracking -> User Retention Analysis -> ROI Calculation -> Stakeholder Reporting.",
      output: "Post-Mortem Report, KPI Dashboard, Strategic Recommendations."
    },
    keyContents: [
      { group: "Đo lường", items: ["KPI Analysis", "Conversion Funnel", "User Retention"] },
      { group: "Đánh giá", items: ["Success/Failure Review", "ROI Assessment", "Next Phase Planning"] }
    ],
    example: "Team nhận thấy tỷ lệ giữ chân người dùng (Retention) đạt 40% - vượt kỳ vọng 30%. Tuy nhiên, doanh thu từ quảng cáo thấp hơn dự kiến, dẫn đến việc phải điều chỉnh mô hình kinh doanh ở bước tiếp theo.",
    icon: "BarChart3"
  },
  {
    id: 11,
    proTitle: "Maintenance & Technical Debt",
    analogyTitle: "Vận hành & Xử lý nợ kỹ thuật",
    standardProcess: "Đảm bảo sự ổn định lâu dài: 1. Giám sát hệ thống & Cảnh báo (Monitoring). 2. Xử lý sự cố (Incident Management). 3. Tối ưu hóa hiệu năng & Xử lý nợ kỹ thuật (Refactoring). 4. Cập nhật bảo mật định kỳ.",
    lifeAnalogy: "Giống như việc bảo trì một tòa nhà sau khi xây xong. Bạn cần kiểm tra điện nước, sơn lại tường định kỳ để tòa nhà không bị xuống cấp. Việc bỏ qua bảo trì sẽ khiến hệ thống ngày càng chậm chạp và dễ sụp đổ.",
    deepDive: {
      what: "Duy trì sức khỏe hệ thống và đảm bảo khả năng phát triển bền vững.",
      how: "System Monitoring -> Incident Response -> Refactoring -> Security Patching.",
      output: "System Health Report, Refactoring Backlog, Security Audit Sign-off."
    },
    keyContents: [
      { group: "Vận hành", items: ["System Monitoring", "Incident Response", "On-call Support"] },
      { group: "Kỹ thuật", items: ["Code Refactoring", "Technical Debt Management", "Security Patching"] }
    ],
    example: "Team thiết lập hệ thống cảnh báo tự động (Sentry) để phát hiện ngay lập tức khi tỷ lệ lỗi API vượt quá 1%, giúp xử lý sự cố trước khi người dùng kịp phàn nàn.",
    icon: "Wrench"
  }
];

export const prdTemplate = {
  title: "TÀI LIỆU YÊU CẦU SẢN PHẨM (PRD)",
  subtitle: "PRODUCT REQUIREMENTS DOCUMENT",
  documentNo: "PRD-2024-001-CORE-PLATFORM",
  administrativeHeader: {
    motto: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM",
    slogan: "Độc lập - Tự do - Hạnh phúc",
    date: "TP. Hồ Chí Minh, ngày 18 tháng 03 năm 2024"
  },
  parties: [
    {
      role: "PRODUCT OWNER (PO)",
      details: [
        "Họ và tên: Nguyễn Văn A",
        "Chức vụ: Giám đốc sản phẩm (CPO)",
        "Trách nhiệm: Định hình tầm nhìn, ưu tiên backlog và phê duyệt nghiệm thu."
      ]
    },
    {
      role: "ENGINEERING LEAD",
      details: [
        "Họ và tên: Trần Thị B",
        "Chức vụ: Giám đốc kỹ thuật (CTO)",
        "Trách nhiệm: Thiết kế kiến trúc, đảm bảo hiệu suất và tính bảo mật của hệ thống."
      ]
    }
  ],
  sections: [
    {
      heading: "1. TỔNG QUAN DỰ ÁN (EXECUTIVE SUMMARY)",
      content: "1.1. Mục tiêu: Xây dựng nền tảng quản lý bán hàng đa kênh tập trung.\n1.2. Vấn đề cần giải quyết: Người kinh doanh gặp khó khăn khi quản lý tồn kho và đơn hàng từ nhiều sàn TMĐT (Shopee, Lazada, TikTok).\n1.3. Đối tượng người dùng: Các chủ shop kinh doanh online quy mô vừa và nhỏ."
    },
    {
      heading: "2. CHÂN DUNG NGƯỜI DÙNG (USER PERSONAS)",
      content: "- Persona 1: Chị Lan (Chủ shop thời trang) - Cần sự nhanh chóng, giao diện đơn giản, báo cáo doanh thu theo thời gian thực.\n- Persona 2: Anh Nam (Nhân viên kho) - Cần tính năng quét mã vạch chính xác, cập nhật tồn kho tức thì."
    },
    {
      heading: "3. YÊU CẦU TÍNH NĂNG (FUNCTIONAL REQUIREMENTS)",
      content: "3.1. Đồng bộ đơn hàng: Tự động kéo đơn hàng từ các sàn về một màn hình duy nhất.\n3.2. Quản lý tồn kho tập trung: Khi có đơn hàng từ Shopee, tồn kho trên Lazada tự động giảm.\n3.3. Báo cáo thông minh: Phân tích sản phẩm nào đang bán chạy nhất theo từng kênh."
    },
    {
      heading: "4. YÊU CẦU PHI CHỨC NĂNG (NON-FUNCTIONAL REQUIREMENTS)",
      content: "4.1. Hiệu năng: Thời gian phản hồi API không quá 200ms.\n4.2. Khả năng mở rộng: Hệ thống chịu tải được ít nhất 10.000 đơn hàng/phút trong giờ cao điểm.\n4.3. Bảo mật: Mã hóa dữ liệu khách hàng theo tiêu chuẩn AES-256."
    },
    {
      heading: "5. LUỒNG NGƯỜI DÙNG & TIÊU CHÍ NGHIỆM THU",
      content: "5.1. User Flow: Đăng nhập -> Kết nối sàn -> Đồng bộ sản phẩm -> Xử lý đơn hàng.\n5.2. Acceptance Criteria: Đơn hàng từ sàn phải xuất hiện trên hệ thống trong vòng tối đa 30 giây kể từ khi khách đặt hàng."
    }
  ]
};

export const gtmTemplate = {
  title: "KẾ HOẠCH TUNG SẢN PHẨM (GTM PLAN)",
  subtitle: "GO-TO-MARKET STRATEGY",
  documentNo: "GTM-2024-001-LAUNCH-PHASE",
  administrativeHeader: {
    motto: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM",
    slogan: "Độc lập - Tự do - Hạnh phúc",
    date: "TP. Hồ Chí Minh, ngày 18 tháng 03 năm 2024"
  },
  parties: [
    {
      role: "MARKETING LEAD",
      details: [
        "Họ và tên: Lê Văn C",
        "Chức vụ: Giám đốc Marketing (CMO)",
        "Trách nhiệm: Xây dựng thông điệp, chạy chiến dịch quảng cáo và thu hút người dùng."
      ]
    },
    {
      role: "SALES LEAD",
      details: [
        "Họ và tên: Phạm Thị D",
        "Chức vụ: Giám đốc kinh doanh (CSO)",
        "Trách nhiệm: Đào tạo đội ngũ sales, chốt hợp đồng và đảm bảo doanh thu."
      ]
    }
  ],
  sections: [
    {
      heading: "1. ĐỊNH VỊ SẢN PHẨM (PRODUCT POSITIONING)",
      content: "1.1. Thông điệp chính: 'Quản lý bán hàng đa kênh - Nhàn tênh, tăng trưởng mạnh'.\n1.2. Lợi thế cạnh tranh: Tích hợp sâu nhất với TikTok Shop, giá thành rẻ hơn đối thủ 20%."
    },
    {
      heading: "2. CHIẾN LƯỢC TRUYỀN THÔNG (COMMUNICATION STRATEGY)",
      content: "2.1. Kênh chính: Facebook Ads, TikTok Ads, Email Marketing.\n2.2. KOLs/Influencers: Hợp tác với 10 TikTokers chuyên về mảng kinh doanh online để review sản phẩm."
    },
    {
      heading: "3. CHƯƠNG TRÌNH KHUYẾN MÃI (PROMOTIONS)",
      content: "3.1. Early Bird: Miễn phí 3 tháng sử dụng cho 100 khách hàng đăng ký đầu tiên.\n3.2. Referral: Tặng thêm 1 tháng sử dụng cho mỗi lượt giới thiệu thành công."
    },
    {
      heading: "4. ĐÀO TẠO & HỖ TRỢ (ENABLEMENT)",
      content: "4.1. Sales: Bộ tài liệu hướng dẫn chốt sale (Sales Playbook).\n4.2. Support: Xây dựng hệ thống Help Center và Chatbot hỗ trợ 24/7."
    },
    {
      heading: "5. CHỈ SỐ THÀNH CÔNG (SUCCESS METRICS)",
      content: "5.1. Mục tiêu tháng 1: 1.000 người dùng đăng ký mới.\n5.2. Tỷ lệ chuyển đổi (Conversion Rate): Đạt tối thiểu 5% từ dùng thử sang trả phí."
    }
  ]
};
