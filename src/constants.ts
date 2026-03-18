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
    proTitle: "Presales & Discovery (The Trust Bridge)",
    analogyTitle: "Đấu thầu vs. Khởi nghiệp MVP",
    standardProcess: "Giai đoạn này gồm 2 bước nhỏ: 1. Tư vấn & Giới thiệu năng lực: Công ty giới thiệu các dự án tương tự đã làm để xây dựng niềm tin ban đầu. 2. Paid Discovery: Sau khi khách tin tưởng, BA thực hiện gói nghiên cứu có phí để đào sâu bài toán, gỡ bỏ 'nỗi sợ' mua nhầm sản phẩm không ưng ý của khách và 'nỗi sợ' làm không công của công ty.",
    lifeAnalogy: "Waterfall thường thấy trong các dự án đấu thầu chính phủ: Mọi tính năng phải được mô tả rõ trong hồ sơ thầu trước khi bắt đầu. Agile thường thấy ở các Startup: Bạn làm một bản MVP (Sản phẩm khả thi tối thiểu) để thử nghiệm thị trường trước, sau đó mới quyết định đầu tư thêm dựa trên phản hồi của người dùng.",
    deepDive: {
      what: "Xây dựng niềm tin qua năng lực thực tế và làm rõ bài toán qua Discovery.",
      how: "Consulting -> Portfolio Showcase -> Paid Discovery -> Solution Proposal.",
      output: "Company Portfolio, Discovery Report, High-level Solution, Prototype."
    },
    example: "BA giới thiệu hệ thống E-commerce đã làm cho đối tác lớn để khách yên tâm. Sau đó, khách đồng ý trả phí cho 2 tuần Discovery để BA làm rõ quy trình kho bãi phức tạp của họ trước khi ký hợp đồng triển khai.",
    icon: "MessageCircle"
  },
  {
    id: 2,
    proTitle: "Project Planning (The Strategy)",
    analogyTitle: "Câu chuyện 'Dàn trận' & Luật chơi",
    standardProcess: "Sau khi đã có giải pháp ở bước 1, PM và BA bắt đầu cuộc chơi bằng cách trả lời 4 câu hỏi chiến lược: 1. Chúng ta sẽ hành quân thế nào? (Chọn Methodology: Waterfall, Agile hay Hybrid). 2. Tiền bạc sẽ sòng phẳng ra sao? (Hình thức hợp tác & Thanh toán). 3. Ai sẽ tham gia biệt đội? (Phân bổ nhân sự & Timeline). 4. Chúng ta dùng vũ khí gì để liên lạc? (Setup công cụ như Jira, Slack, Github).",
    lifeAnalogy: "Hãy tưởng tượng bạn đang chuẩn bị cho một chuyến thám hiểm. Bạn có thể chọn đi theo bản đồ cố định (Waterfall) - an toàn nhưng khó đổi hướng, hoặc đi đến đâu thám hiểm đến đó (Agile) - cực kỳ linh hoạt nhưng cần sự tin tưởng cao. Việc ký hợp đồng lúc này giống như việc chốt với đoàn thám hiểm: Bạn trả tiền trọn gói cho cả chuyến đi, hay trả lương theo ngày để họ sẵn sàng rẽ vào bất cứ hang động nào bạn muốn khám phá giữa chừng.",
    deepDive: {
      what: "Xây dựng 'Bộ khung vận hành' để biến ý tưởng trên giấy thành lộ trình thực thi có cam kết.",
      how: "Chiến lược (Methodology) -> Thương mại (Hợp đồng) -> Thực thi (Nhân sự/Timeline) -> Hạ tầng (Công cụ).",
      output: "Một 'Luật chơi' rõ ràng được cụ thể hóa bằng Master Agreement (MSA) và Statement of Work (SOW)."
    },
    contractModels: [
      { 
        name: "T&M with Scope Cap", 
        features: "Thanh toán theo nỗ lực thực tế (giờ/người) nhưng có cam kết mức phí tối đa (Ceiling Price) để bảo vệ ngân sách khách hàng.", 
        suitability: "Dự án cần bắt đầu gấp, yêu cầu thay đổi liên tục nhưng khách hàng cần kiểm soát rủi ro tài chính.",
        example: "Thuê team làm App trong 3 tháng, trả theo Man-month thực tế nhưng tổng quyết toán không được vượt quá 500 triệu."
      },
      { 
        name: "Fixed Price per Sprint", 
        features: "Chia nhỏ dự án thành các gói thầu mini theo từng Sprint. Thanh toán dựa trên kết quả đầu ra của mỗi chặng 2-4 tuần.", 
        suitability: "Khách hàng mới làm việc lần đầu, muốn kiểm chứng năng lực team trước khi cam kết dài hạn.",
        example: "Mỗi Sprint chốt giá 40 triệu. Sau buổi Demo, nếu khách hàng nghiệm thu 'Done' thì mới thanh toán và ký tiếp Sprint sau."
      },
      { 
        name: "Fixed Budget, Varied Scope", 
        features: "Cố định ngân sách và thời gian, nhưng cho phép khách hàng 'đổi ngang' (Swap) các tính năng có độ phức tạp tương đương trong Backlog.", 
        suitability: "Dự án MVP cần ra mắt đúng hạn (Time-to-market) với ngân sách cố định nhưng chưa chốt hết chi tiết tính năng.",
        example: "Gói 1 tỷ làm App trong 6 tháng. Khách có quyền bỏ tính năng 'Review' để thay bằng 'Chat' mà không phát sinh chi phí phụ."
      },
      { 
        name: "Capacity Contract", 
        features: "Khách hàng mua trọn vẹn 'năng lực sản xuất' của một đội ngũ chuyên biệt. Team tập trung 100% nguồn lực cho duy nhất một khách hàng.", 
        suitability: "Doanh nghiệp có sản phẩm cốt lõi cần bảo trì và nâng cấp liên tục, cần team thấu hiểu sâu về nghiệp vụ.",
        example: "Thuê cố định 1 team 5 người (BA, Dev, Tester) để vận hành và phát triển hệ thống ERP nội bộ, trả phí cố định hàng tháng."
      }
    ],
    keyContents: [
      {
        group: "Phạm vi & Yêu cầu",
        items: [
          "Initial Backlog: Bản danh sách 'mong muốn' sơ bộ để team hình dung quy mô.",
          "Product Roadmap: Lộ trình phát triển các tính năng lớn theo thời gian (High-level)."
        ]
      },
      {
        group: "Chất lượng & Nghiệm thu",
        items: [
          "Definition of Done (DoD): 'Thước đo' chung để biết khi nào một tính năng thực sự hoàn thành.",
          "Acceptance Criteria (AC): Tiêu chí chấp nhận cụ thể cho từng User Story (chi tiết ở bước 3)."
        ]
      },
      {
        group: "Quy trình & Vận hành",
        items: [
          "Change Management: Quy tắc để thêm/bớt tính năng mà không cần cãi vã hay làm lại giấy tờ.",
          "Sprint Cadence: Lịch trình họp Planning, Demo và Retro định kỳ (thường là 2 tuần/lần)."
        ]
      },
      {
        group: "Vai trò & Cam kết",
        items: [
          "PO Responsibility: Cam kết của khách hàng trong việc 'cầm lái' dự án cùng team.",
          "Resource Availability: Cam kết về thời gian phản hồi và ra quyết định của các bên (SLA)."
        ]
      }
    ],
    advice: [
      "Đừng cố chốt mọi thứ: Agile là hợp đồng cho sự thay đổi, hãy tập trung vào cơ chế hợp tác.",
      "Thử nghiệm trước: Bắt đầu bằng một giai đoạn Pilot ngắn để đo độ 'hợp rơ' giữa hai bên.",
      "MSA & SOW: Dùng MSA để chốt các điều khoản chung, dùng SOW để linh hoạt cho từng giai đoạn thực tế."
    ],
    example: "Thay vì dành 1 tháng để cãi nhau về chi tiết từng cái nút bấm, hai bên ký MSA tổng thể và bắt tay vào làm Sprint 1 ngay với một SOW đơn giản. Mọi thứ vận hành dựa trên sự tin tưởng và kết quả thực tế sau mỗi 2 tuần.",
    icon: "Calendar"
  },
  {
    id: 3,
    proTitle: "Requirement Definition",
    analogyTitle: "Tài liệu SRS vs. Product Backlog",
    standardProcess: "Chi tiết hóa yêu cầu dựa trên Methodology đã chọn: Waterfall viết SRS dày cộp, chốt cứng. Agile viết Product Backlog với các User Stories linh hoạt, ưu tiên làm cái quan trọng trước.",
    lifeAnalogy: "Waterfall: BA viết tài liệu SRS dài hàng trăm trang, khách hàng ký nháy từng trang để chốt yêu cầu. Agile: BA viết các User Story ngắn gọn (Ví dụ: 'Là người dùng, tôi muốn đăng nhập bằng Google...') vào Backlog. Các yêu cầu này có thể được điều chỉnh hoặc thêm mới liên tục trong suốt dự án.",
    deepDive: {
      what: "Biến ý tưởng thành tài liệu kỹ thuật để Dev có thể code.",
      how: "Waterfall: Viết SRS. Agile: Grooming Backlog, viết User Stories.",
      output: "SRS Document (Waterfall) hoặc Product Backlog (Agile)."
    },
    example: "BA viết User Story: 'Là người dùng, tôi muốn thanh toán qua Momo để nhanh chóng hoàn tất đơn hàng'. Kèm theo đó là các tiêu chí nghiệm thu (Acceptance Criteria) rõ ràng.",
    icon: "Layout"
  },
  {
    id: 4,
    proTitle: "Design & Architecture",
    analogyTitle: "Thiết kế tổng thể vs. Thiết kế cuốn chiếu",
    standardProcess: "Thiết kế UI/UX chi tiết và cấu trúc hệ thống (System Design). Đảm bảo hệ thống có thể mở rộng (Scalable) và bảo mật tốt.",
    lifeAnalogy: "Waterfall: Thiết kế toàn bộ giao diện và database cho tất cả tính năng ngay từ đầu (Big Design Up Front). Agile: Thiết kế khung hệ thống chính trước, sau đó chi tiết hóa giao diện cho từng tính năng ngay trước khi bắt đầu Sprint phát triển tính năng đó.",
    deepDive: {
      what: "Xác định diện mạo và 'bộ khung' kỹ thuật của phần mềm.",
      how: "UI/UX Design (Figma), Database Schema, API Design.",
      output: "Figma Design, System Design Document (SDD)."
    },
    example: "Architect thiết kế hệ thống sao cho khi lượng người dùng tăng đột biến (ví dụ trong các đợt Flash Sale), hệ thống vẫn chạy mượt mà nhờ cấu trúc có khả năng mở rộng linh hoạt (Scalability).",
    icon: "Code"
  },
  {
    id: 5,
    proTitle: "Development",
    analogyTitle: "Code tập trung vs. Code theo Sprint",
    standardProcess: "Lập trình viên viết code dựa trên tài liệu và thiết kế. Áp dụng các tiêu chuẩn Clean Code và thực hiện Unit Test để đảm bảo code chạy đúng.",
    lifeAnalogy: "Waterfall: Dev code liên tục trong 3-6 tháng, khách hàng không thấy gì cho đến khi hoàn thành. Agile: Dev chia nhỏ công việc thành các Sprint (2 tuần). Cứ sau mỗi 2 tuần, khách hàng lại được xem bản demo chạy được của một vài tính năng mới để góp ý ngay.",
    deepDive: {
      what: "Chuyển hóa yêu cầu thành sản phẩm thực tế chạy được.",
      how: "Coding, Unit Test, Code Review, CI/CD.",
      output: "Mã nguồn (Source Code), Build version (APK, Web link)."
    },
    example: "Dev viết code cho tính năng 'Giỏ hàng'. Họ phải đảm bảo khi bấm 'Thanh toán', dữ liệu được gửi đi chính xác và không bị trùng lặp đơn hàng.",
    icon: "Code"
  },
  {
    id: 6,
    proTitle: "Testing & QA",
    analogyTitle: "Kiểm thử cuối kỳ vs. Kiểm thử liên tục",
    standardProcess: "Tester tìm lỗi (Bug) và đảm bảo phần mềm chạy đúng yêu cầu. Kiểm tra từ tính năng, hiệu năng đến bảo mật.",
    lifeAnalogy: "Waterfall: Đợi code xong hết mới bắt đầu Test (thường dẫn đến việc phát hiện lỗi nghiêm trọng quá muộn). Agile: Test song song với Code. Mỗi tính năng vừa xong là được Test ngay, đảm bảo chất lượng được kiểm soát liên tục trong từng Sprint.",
    deepDive: {
      what: "Đảm bảo sản phẩm không có lỗi nghiêm trọng khi đến tay khách.",
      how: "Execute Test Cases, Regression Test, Security Test.",
      output: "Bug Report, Test Summary Report."
    },
    example: "Tester thử nhập 1 triệu vào ô 'Số lượng' để xem app có bị crash không. Họ đảm bảo trải nghiệm người dùng luôn mượt mà.",
    icon: "Rocket"
  },
  {
    id: 7,
    proTitle: "UAT & Deployment",
    analogyTitle: "Big Bang Release vs. Continuous Delivery",
    standardProcess: "Khách hàng dùng thử (UAT) và ký nghiệm thu. Triển khai sản phẩm lên môi trường thật (Production) và hỗ trợ vận hành.",
    lifeAnalogy: "Waterfall: Một ngày đẹp trời, toàn bộ hệ thống được đưa lên môi trường thật (Big Bang). Rủi ro rất cao nếu có lỗi phát sinh. Agile: Triển khai sản phẩm theo từng giai đoạn hoặc từng tính năng (Continuous Delivery). Khách hàng có thể sử dụng sớm các tính năng quan trọng nhất.",
    deepDive: {
      what: "Bàn giao sản phẩm và đưa vào sử dụng thực tế.",
      how: "UAT Support, Production Deployment, Maintenance.",
      output: "UAT Sign-off, Live Product (App Store/Play Store)."
    },
    example: "Khách hàng gật đầu hài lòng. Team đưa app lên App Store. BA chuẩn bị tài liệu hướng dẫn sử dụng (User Guide) cho khách hàng.",
    icon: "ChevronRight"
  }
];

export const msaTemplate = {
  title: "HỢP ĐỒNG KHUNG CUNG CẤP DỊCH VỤ PHÁT TRIỂN PHẦN MỀM",
  subtitle: "MASTER SERVICE AGREEMENT (MSA)",
  documentNo: "MSA-2024-001-AGILE-PRO",
  administrativeHeader: {
    motto: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM",
    slogan: "Độc lập - Tự do - Hạnh phúc",
    date: "TP. Hồ Chí Minh, ngày 18 tháng 03 năm 2024"
  },
  parties: [
    {
      role: "BÊN A: BÊN THUÊ DỊCH VỤ (CLIENT)",
      details: [
        "Tên đơn vị: CÔNG TY CỔ PHẦN CÔNG NGHỆ ABC",
        "Địa chỉ: Tòa nhà Innovation, Công viên phần mềm Quang Trung, Quận 12, TP.HCM",
        "Mã số thuế: 0102345678",
        "Đại diện: Ông Nguyễn Văn A - Chức vụ: Giám đốc điều hành"
      ]
    },
    {
      role: "BÊN B: BÊN CUNG CẤP DỊCH VỤ (SERVICE PROVIDER)",
      details: [
        "Tên đơn vị: CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM XYZ",
        "Địa chỉ: Khu Công nghệ cao, Quận 9, TP. Thủ Đức, TP.HCM",
        "Mã số thuế: 0309876543",
        "Đại diện: Bà Trần Thị B - Chức vụ: Giám đốc điều hành"
      ]
    }
  ],
  sections: [
    {
      heading: "1. ĐỊNH NGHĨA VÀ GIẢI THÍCH (DEFINITIONS)",
      content: "1.1. 'Dịch vụ' (Services): Nghĩa là các dịch vụ phát triển phần mềm, tư vấn, thiết kế, kiểm thử hoặc hỗ trợ kỹ thuật được quy định cụ thể trong từng SOW.\n1.2. 'Sản phẩm bàn giao' (Deliverables): Nghĩa là mọi mã nguồn (Source Code), tài liệu thiết kế, tài liệu hướng dẫn, và bất kỳ sản phẩm trí tuệ nào được Bên B tạo ra cho Bên A.\n1.3. 'SOW' (Statement of Work): Nghĩa là Phụ lục công việc cụ thể được ký kết dựa trên MSA này, quy định chi tiết về phạm vi, thời gian, nhân sự và chi phí cho từng giai đoạn.\n1.4. 'Thông tin bảo mật' (Confidential Information): Bao gồm nhưng không giới hạn ở dữ liệu khách hàng, bí mật kinh doanh, mã nguồn, kế hoạch marketing và bất kỳ thông tin nào được đánh dấu là bảo mật."
    },
    {
      heading: "2. PHẠM VI DỊCH VỤ VÀ QUY TRÌNH THỰC HIỆN",
      content: "2.1. Bên B đồng ý cung cấp các dịch vụ chuyên môn cho Bên A theo các điều khoản của MSA này. Mỗi dự án cụ thể sẽ được thực hiện thông qua một SOW riêng biệt.\n2.2. Quy trình Agile: Các bên thống nhất ưu tiên áp dụng phương pháp Agile/Scrum. Bên B có trách nhiệm duy trì đội ngũ nhân sự ổn định và có năng lực phù hợp với yêu cầu của từng SOW.\n2.3. Thay đổi phạm vi: Mọi thay đổi về phạm vi công việc phải được ghi nhận bằng văn bản thông qua quy trình Quản lý thay đổi (Change Request) được quy định trong SOW."
    },
    {
      heading: "3. QUYỀN SỞ HỮU TRÍ TUỆ (INTELLECTUAL PROPERTY)",
      content: "3.1. Chuyển giao quyền sở hữu: Ngay sau khi Bên A thanh toán đầy đủ các khoản phí theo SOW tương ứng, Bên B chuyển giao toàn bộ quyền tác giả, quyền sở hữu trí tuệ và các quyền liên quan đối với Sản phẩm bàn giao cho Bên A.\n3.2. Background IP: Bên B giữ quyền sở hữu đối với các công cụ, thư viện mã nguồn, phương pháp luận đã có sẵn trước thời điểm ký kết MSA (Background IP). Bên B cấp cho Bên A quyền sử dụng không độc quyền, vĩnh viễn, không thể hủy ngang và miễn phí bản quyền đối với Background IP nếu chúng là thành phần không thể tách rời của Sản phẩm bàn giao.\n3.3. Cam kết không vi phạm: Bên B cam kết Sản phẩm bàn giao không vi phạm quyền sở hữu trí tuệ của bất kỳ bên thứ ba nào."
    },
    {
      heading: "4. BẢO MẬT THÔNG TIN (CONFIDENTIALITY)",
      content: "4.1. Nghĩa vụ bảo mật: Mỗi bên cam kết bảo mật tuyệt đối Thông tin bảo mật của bên kia, không tiết lộ cho bên thứ ba nếu không có sự đồng ý bằng văn bản.\n4.2. Phạm vi sử dụng: Thông tin bảo mật chỉ được sử dụng cho mục đích thực hiện Hợp đồng này.\n4.3. Thời hạn bảo mật: Nghĩa vụ này kéo dài trong suốt thời hạn của Hợp đồng và mười (10) năm sau khi chấm dứt, trừ khi có thỏa thuận khác bằng văn bản."
    },
    {
      heading: "5. PHÍ DỊCH VỤ VÀ ĐIỀU KHOẢN THANH TOÁN",
      content: "5.1. Phí dịch vụ: Được quy định cụ thể trong từng SOW (theo mô hình Time & Materials hoặc Fixed Price).\n5.2. Hóa đơn và thanh toán: Bên A sẽ thanh toán cho Bên B trong vòng mười lăm (15) ngày kể từ ngày nhận được hóa đơn hợp lệ và các tài liệu nghiệm thu liên quan.\n5.3. Thuế: Trừ khi có thỏa thuận khác, phí dịch vụ chưa bao gồm Thuế giá trị gia tăng (VAT)."
    },
    {
      heading: "6. CAM KẾT VÀ BẢO ĐẢM (REPRESENTATIONS & WARRANTIES)",
      content: "6.1. Năng lực thực hiện: Bên B bảo đảm có đầy đủ nguồn lực, kỹ năng và kinh nghiệm để thực hiện dịch vụ theo tiêu chuẩn ngành cao nhất.\n6.2. Bảo hành phần mềm: Bên B bảo hành các lỗi kỹ thuật (Bugs) phát sinh từ mã nguồn do Bên B viết trong vòng chín mươi (90) ngày kể từ ngày nghiệm thu cuối cùng của SOW."
    },
    {
      heading: "7. GIỚI HẠN TRÁCH NHIỆM (LIMITATION OF LIABILITY)",
      content: "7.1. Loại trừ thiệt hại gián tiếp: Không bên nào phải chịu trách nhiệm cho các thiệt hại gián tiếp, thiệt hại hệ quả, hoặc mất lợi nhuận phát sinh từ Hợp đồng.\n7.2. Mức bồi thường tối đa: Trách nhiệm tổng thể của mỗi bên sẽ không vượt quá 100% tổng giá trị của SOW có liên quan trực tiếp đến khiếu nại."
    },
    {
      heading: "8. THỜI HẠN VÀ CHẤM DỨT (TERM & TERMINATION)",
      content: "8.1. Thời hạn: MSA này có hiệu lực trong ba (03) năm kể từ ngày ký.\n8.2. Chấm dứt do vi phạm: Một bên có quyền chấm dứt Hợp đồng nếu bên kia vi phạm nghiêm trọng điều khoản mà không khắc phục trong vòng ba mươi (30) ngày.\n8.3. Chấm dứt không vì lỗi: Bên A có quyền chấm dứt MSA hoặc bất kỳ SOW nào bằng cách thông báo trước ba mươi (30) ngày và thanh toán cho các phần công việc đã thực hiện."
    },
    {
      heading: "9. LUẬT ÁP DỤNG VÀ GIẢI QUYẾT TRANH CHẤP",
      content: "9.1. Luật áp dụng: Pháp luật nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.\n9.2. Giải quyết tranh chấp: Mọi tranh chấp sẽ được giải quyết thông qua thương lượng. Trường hợp không đạt được thỏa thuận trong vòng sáu mươi (60) ngày, tranh chấp sẽ được đưa ra giải quyết tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) theo Quy tắc tố tụng trọng tài của Trung tâm này."
    }
  ]
};

export const sowTemplate = {
  title: "PHỤ LỤC CÔNG VIỆC (STATEMENT OF WORK)",
  subtitle: "SOW-2024-001-MVP-DETAILED",
  documentNo: "SOW-2024-001-MVP-DETAILED",
  administrativeHeader: {
    motto: "CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM",
    slogan: "Độc lập - Tự do - Hạnh phúc",
    date: "TP. Hồ Chí Minh, ngày 18 tháng 03 năm 2024"
  },
  parties: [
    {
      role: "BÊN A: BÊN THUÊ DỊCH VỤ (CLIENT)",
      details: [
        "Tên đơn vị: CÔNG TY CỔ PHẦN CÔNG NGHỆ ABC",
        "Đại diện: Ông Nguyễn Văn A - Chức vụ: Giám đốc điều hành"
      ]
    },
    {
      role: "BÊN B: BÊN CUNG CẤP DỊCH VỤ (SERVICE PROVIDER)",
      details: [
        "Tên đơn vị: CÔNG TY TNHH GIẢI PHÁP PHẦN MỀM XYZ",
        "Đại diện: Bà Trần Thị B - Chức vụ: Giám đốc điều hành"
      ]
    }
  ],
  sections: [
    {
      heading: "1. MÔ TẢ DỰ ÁN VÀ MỤC TIÊU",
      content: "1.1. Tên dự án: Xây dựng nền tảng thương mại điện tử đa kênh (Giai đoạn 1).\n1.2. Mục tiêu: Phát triển phiên bản MVP bao gồm Web Admin, Web Storefront và Mobile App (iOS/Android) cho phép quản lý sản phẩm, đặt hàng và tích hợp thanh toán VNPay/Momo.\n1.3. Phương pháp luận: Agile/Scrum với chu kỳ Sprint 02 tuần."
    },
    {
      heading: "2. PHẠM VI CÔNG VIỆC (SCOPE OF WORK)",
      content: "2.1. Phân tích yêu cầu và thiết kế UI/UX (Figma).\n2.2. Phát triển Backend (Node.js/PostgreSQL) và API Integration.\n2.3. Phát triển Frontend Web (React.js) và Mobile App (Flutter).\n2.4. Kiểm thử tự động (Automation Test) và kiểm thử thủ công (Manual Test).\n2.5. Triển khai hệ thống lên hạ tầng AWS (Staging & Production)."
    },
    {
      heading: "3. ĐỘI NGŨ NHÂN SỰ VÀ QUẢN TRỊ DỰ ÁN",
      content: "Bên B cung cấp đội ngũ Dedicated Team bao gồm:\n- 01 Project Manager / Scrum Master (25% nỗ lực)\n- 02 Senior Backend Developers (100% nỗ lực)\n- 02 Middle Frontend Developers (100% nỗ lực)\n- 01 UI/UX Designer (50% nỗ lực trong 4 Sprint đầu)\n- 01 QA/QC Engineer (100% nỗ lực)\nBên A chỉ định 01 Product Owner tham gia các buổi họp Sprint Review và ra quyết định về Product Backlog."
    },
    {
      heading: "4. LỊCH TRÌNH VÀ CÁC MỐC QUAN TRỌNG (MILESTONES)",
      content: "- Sprint 0: Thiết lập hạ tầng, thiết kế kiến trúc và UI/UX (02 tuần).\n- Sprint 1-4: Phát triển các tính năng cốt lõi (Core Features).\n- Sprint 5: Tích hợp thanh toán và vận chuyển.\n- Sprint 6: Hardening, Bug fixing và UAT.\n- Go-live: Dự kiến sau 12 tuần kể từ ngày khởi động."
    },
    {
      heading: "5. CHI PHÍ VÀ ĐIỀU KHOẢN THƯƠNG MẠI",
      content: "5.1. Mô hình: Fixed Price per Sprint.\n5.2. Đơn giá: 180.000.000 VNĐ / Sprint (Chưa bao gồm VAT).\n5.3. Tổng giá trị dự kiến (07 Sprint): 1.260.000.000 VNĐ.\n5.4. Tạm ứng: 20% tổng giá trị dự kiến ngay sau khi ký SOW.\n5.5. Thanh toán định kỳ: Sau mỗi Sprint Review và nghiệm thu Demo, Bên A thanh toán phí của Sprint đó trong vòng 07 ngày."
    },
    {
      heading: "6. ĐỊNH NGHĨA HOÀN THÀNH (DEFINITION OF DONE)",
      content: "Mỗi User Story được coi là hoàn thành khi:\n- Code đã được Review và Merge vào nhánh chính.\n- Unit Test coverage đạt tối thiểu 80%.\n- Vượt qua các kịch bản kiểm thử (Test Cases) đã phê duyệt.\n- Không còn lỗi nghiêm trọng (Critical/High) chưa được giải quyết.\n- Đã được deploy lên môi trường Staging và PO xác nhận nghiệm thu."
    },
    {
      heading: "7. GIẢ ĐỊNH VÀ PHỤ THUỘC (ASSUMPTIONS & DEPENDENCIES)",
      content: "7.1. Bên A cung cấp đầy đủ tài liệu nghiệp vụ và API của bên thứ ba (nếu có) đúng hạn.\n7.2. Môi trường hạ tầng (AWS/Azure) do Bên A chi trả chi phí trực tiếp.\n7.3. Các thay đổi lớn về kiến trúc sau khi đã chốt ở Sprint 0 sẽ được tính là Change Request."
    },
    {
      heading: "8. QUẢN LÝ THAY ĐỔI (CHANGE REQUEST)",
      content: "Mọi yêu cầu thay đổi làm tăng nỗ lực dự án quá 10% tổng ngân sách sẽ được xử lý qua quy trình CR:\n1. Bên A gửi yêu cầu.\n2. Bên B đánh giá tác động (thời gian/chi phí).\n3. Hai bên ký xác nhận CR trước khi thực hiện."
    }
  ]
};
