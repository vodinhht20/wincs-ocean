/**
 * ==============================================================================
 * WINGS OCEAN - KNOWLEDGE & ARTICLES DATA REPOSITORY
 * ==============================================================================
 * 
 * HƯỚNG DẪN THÊM BÀI VIẾT MỚI / HOW TO ADD A NEW ARTICLE:
 * ------------------------------------------------------------------------------
 * 1. Chỉ cần copy một khối đối tượng (Object) bên dưới và dán lên đầu mảng `WINGS_ARTICLES`.
 * 2. Điền các trường thông tin:
 *    - `id`: Định danh duy nhất bài viết không dấu, cách nhau bởi dấu gạch ngang (ví dụ: 'huong-dan-xuat-khau-2025')
 *    - `featured`: true (nếu muốn hiện ở slider nổi bật trang chủ) hoặc false
 *    - `categoryKey`: mã phân loại ('ocean' | 'air' | 'customs' | 'project' | 'guide' | 'csr')
 *    - `category`: Tên danh mục hiển thị { en: "Ocean Freight", vi: "Vận tải Biển" }
 *    - `date`: Ngày đăng (định dạng YYYY-MM-DD, ví dụ "2025-05-20")
 *    - `readTime`: Thời gian đọc { en: "5 min read", vi: "5 phút đọc" }
 *    - `author`: Tên tác giả và chức danh
 *    - `image`: Đường dẫn hình ảnh bài viết (ví dụ: "./assets/banner3.png" hoặc ảnh tùy chọn)
 *    - `title`: Tiêu đề bài viết (EN & VI)
 *    - `summary`: Tóm tắt ngắn hiển thị trên card (EN & VI)
 *    - `content`: Nội dung chi tiết bài viết dạng HTML (hỗ trợ thẻ h2, h3, p, ul, li, blockquote, callout-box...)
 *    - `tags`: Danh sách thẻ từ khóa (EN & VI)
 * 
 * ==============================================================================
 */

const WINGS_ARTICLES = [
  {
    id: "xu-huong-van-tai-bien-2025",
    featured: true,
    categoryKey: "ocean",
    category: {
      en: "Ocean Transport",
      vi: "Vận tải Đường biển"
    },
    date: "2025-05-18",
    readTime: {
      en: "6 min read",
      vi: "6 phút đọc"
    },
    author: {
      name: "Wings Ocean Research Team",
      role: {
        en: "Global Logistics Analysts",
        vi: "Chuyên gia Phân tích Vận tải Toàn cầu"
      },
      avatar: "./assets/logo.png"
    },
    image: "./assets/banner3.png",
    title: {
      en: "Global Ocean Freight Trends & Forecast 2025: Key Changes & Strategic Planning",
      vi: "Xu hướng & Dự báo Vận tải Đường biển Toàn cầu 2025: Biến động Cước & Kế hoạch Chiến lược"
    },
    summary: {
      en: "Explore key trends in global ocean shipping, fluctuating container freight rates, green maritime initiatives (EU ETS/IMO), and how forward-thinking businesses optimize supply chain resilience.",
      vi: "Khám phá các chuyển dịch lớn trong ngành vận tải biển quốc tế, biến động giá cước container, các quy chuẩn hàng hải xanh (EU ETS/IMO) và chiến lược giúp doanh nghiệp tối ưu chi phí."
    },
    content: {
      en: `
        <p class="article-lead">The maritime logistics landscape in 2025 is undergoing profound structural shifts driven by geopolitical realignments, new carrier alliance structures (Gemini Cooperation, Premier Alliance), and stringent environmental regulations.</p>
        
        <h2>1. Reshuffling of Global Carrier Alliances</h2>
        <p>The dissolution and recombination of major ocean carrier alliances in early 2025 has brought new route offerings, updated transit times, and modified hub-and-spoke networks. For shippers, this means greater importance in evaluating contract flexibility versus spot-market agility.</p>
        
        <div class="article-quote-box">
          <p>“Supply chain agility is no longer just a competitive edge—it is the baseline requirement for navigating maritime market volatility.”</p>
          <span class="quote-author">— Wings Ocean Logistics Strategic Advisory</span>
        </div>

        <h2>2. Green Shipping Regulations and Carbon Compliance</h2>
        <p>With the ongoing expansion of the <strong>EU Emissions Trading System (EU ETS)</strong> and the <strong>IMO Net-Zero 2050 framework</strong>, shipping lines are integrating green surcharges and deploying dual-fuel LNG and methanol vessels. Shippers must anticipate carbon accounting requirements as part of their end-to-end freight auditing.</p>

        <h2>3. Fluctuations in Surcharges & Port Congestion Strategies</h2>
        <p>Congestion around critical global choke points has underscored the necessity of proactive inventory buffers and multimodal alternatives. Diversifying port pairs and leveraging bonded warehouse networks in Vietnam can substantially mitigate detention and demurrage risks.</p>

        <div class="article-callout-card">
          <h4><i class="bi bi-lightbulb-fill text-warning me-2"></i>Key Takeaways for Businesses in 2025:</h4>
          <ul>
            <li><strong>Lock in Volume Allocations:</strong> Secure contracted space on high-demand routes early to avoid peak-season spot spikes.</li>
            <li><strong>Real-Time Milestone Visibility:</strong> Implement end-to-end cargo tracking to anticipate customs delays.</li>
            <li><strong>Partner with Trusted Forwarders:</strong> Leverage Wings Ocean's 360° global carrier contracts for prioritized space and optimal pricing.</li>
          </ul>
        </div>

        <h2>Conclusion</h2>
        <p>Navigating the complex ocean freight market requires experienced logistics partners with deep carrier relationships and transparent, flexible execution. Contact Wings Ocean today to optimize your 2025 shipping routes.</p>
      `,
      vi: `
        <p class="article-lead">Bức tranh vận tải đường biển quốc tế năm 2025 đang chứng kiến những biến chuyển mang tính cấu trúc mạnh mẽ từ việc tái cấu trúc các liên minh hãng tàu (Gemini Cooperation, Premier Alliance) cho đến các quy định nghiêm ngặt về giảm phát thải carbon.</p>
        
        <h2>1. Sự Tái Cấu Trúc Các Liên Minh Hãng Tàu Toàn Cầu</h2>
        <p>Việc định hình lại các liên minh lớn vào đầu năm 2025 đã mang đến mạng lưới tuyến hải trình mới, thời gian vận chuyển (transit time) và các cảng trung chuyển trọng điểm thay đổi. Đối với các doanh nghiệp xuất nhập khẩu, việc linh hoạt kết hợp giữa giá cước hợp đồng dài hạn (Contract rate) và giá cước giao ngay (Spot rate) trở nên quan trọng hơn bao giờ hết.</p>
        
        <div class="article-quote-box">
          <p>“Sự linh hoạt trong chuỗi cung ứng không còn là lợi thế cạnh tranh đơn thuần, mà là điều kiện tiên quyết để tồn tại trước những biến động khó lường của thị trường hàng hải.”</p>
          <span class="quote-author">— Ban Cố Vấn Chiến Lược Wings Ocean</span>
        </div>

        <h2>2. Quy Chuẩn Hàng Hải Xanh & Chi Phí Tín Chỉ Carbon (EU ETS / IMO)</h2>
        <p>Với lộ trình siết chặt của hệ thống mua bán phát thải <strong>EU ETS</strong> và định hướng <strong>IMO Net-Zero 2050</strong>, các hãng tàu đang áp dụng các khoản phụ phí xanh, đồng thời đưa vào vận hành đội tàu nhiên liệu kép (LNG/Methanol). Doanh nghiệp cần chuẩn bị báo cáo kiểm kê phát thải carbon logistics cho chuỗi cung ứng của mình.</p>

        <h2>3. Quản Trị Rủi Ro Nghẽn Cảng & Phụ Phí Lưu Container (Demurrage & Detention)</h2>
        <p>Các rủi ro địa chính trị tại các eo biển hàng hải trọng yếu tiếp tục gây áp lực lên lịch trình tàu. Việc phân bổ linh hoạt giữa các cụm cảng (Cát Lái, Cái Mép, Hải Phòng) và tận dụng hệ thống kho ngoại quan tối ưu sẽ giúp doanh nghiệp giảm thiểu tối đa chi phí DEM/DET phát sinh.</p>

        <div class="article-callout-card">
          <h4><i class="bi bi-lightbulb-fill text-warning me-2"></i>Lời khuyên chiến lược cho doanh nghiệp:</h4>
          <ul>
            <li><strong>Chủ động giữ chỗ (Space booking) sớm:</strong> Đảm bảo kế hoạch đóng hàng trước mùa cao điểm từ 2 - 3 tuần.</li>
            <li><strong>Theo dõi hành trình thời gian thực:</strong> Kích hoạt hệ thống tracking đơn hàng để chủ động thủ tục hải quan trước khi tàu cập bến.</li>
            <li><strong>Hợp tác cùng đối tác vận tải uy tín:</strong> Tận dụng mạng lưới hợp đồng dịch vụ 360° của Wings Ocean với các hãng tàu lớn để luôn có giá và chỗ ưu tiên.</li>
          </ul>
        </div>

        <h2>Kết Luận</h2>
        <p>Để tối ưu hóa chi phí và đảm bảo dòng chảy hàng hóa thông suốt trong năm 2025, doanh nghiệp cần một người bạn đồng hành logistics tận tâm, thấu hiểu sâu sắc thị trường. Hãy liên hệ ngay với Wings Ocean để được tư vấn giải pháp tối ưu nhất.</p>
      `
    },
    tags: {
      en: ["Ocean Freight", "Supply Chain 2025", "Container Shipping", "Logistics Trends"],
      vi: ["Vận tải biển", "Chuỗi cung ứng 2025", "Giá cước container", "Xu hướng logistics"]
    },
    views: 1845
  },
  {
    id: "cam-nang-incoterms-2020-xuat-nhap-khau",
    featured: true,
    categoryKey: "guide",
    category: {
      en: "Guides & Tips",
      vi: "Cẩm nang & Kinh nghiệm"
    },
    date: "2025-05-10",
    readTime: {
      en: "8 min read",
      vi: "8 phút đọc"
    },
    author: {
      name: "Selena Nguyen & Trade Specialists",
      role: {
        en: "Senior Customs & Trade Consultant",
        vi: "Chuyên gia Tư vấn Thương mại Quốc tế"
      },
      avatar: "./assets/logo.png"
    },
    image: "./assets/service_item1.png",
    title: {
      en: "Comprehensive Incoterms 2020 Guide: Choosing the Right Terms for Cost & Risk Control",
      vi: "Cẩm nang Incoterms 2020 Toàn diện: Lựa chọn Điều kiện Giao hàng Tối ưu Chi phí & Rủi ro"
    },
    summary: {
      en: "Master the 11 Incoterms 2020 rules (FOB, CIF, CFR, DDP, EXW, FCA). Understand critical risk transfer points, freight cost allocation, and insurance requirements to protect your bottom line.",
      vi: "Nắm vững 11 điều kiện Incoterms 2020 (FOB, CIF, CFR, DDP, EXW, FCA). Hiểu rõ điểm chuyển giao rủi ro, phân chia chi phí vận tải và bảo hiểm hàng hóa giúp doanh nghiệp chủ động đàm phán."
    },
    content: {
      en: `
        <p class="article-lead">In international trade, selecting the right Incoterms condition is critical to defining the exact responsibilities, expenses, and risk transfer points between buyer and seller.</p>

        <h2>1. The Fundamental Structure of Incoterms 2020</h2>
        <p>Incoterms 2020 comprises 11 rules divided into two main categories:</p>
        <ul>
          <li><strong>Rules for Any Mode of Transport:</strong> EXW, FCA, CPT, CIP, DAP, DPU, DDP</li>
          <li><strong>Rules for Sea and Inland Waterway:</strong> FAS, FOB, CFR, CIF</li>
        </ul>

        <h2>2. Key Differences Between Common Terms (FOB vs. CIF vs. DDP)</h2>
        <div class="article-table-responsive">
          <table class="table article-custom-table">
            <thead>
              <tr>
                <th>Term</th>
                <th>Risk Transfer Point</th>
                <th>Main Freight Paid By</th>
                <th>Import Clearance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>EXW (Ex Works)</strong></td>
                <td>Seller's premises</td>
                <td>Buyer</td>
                <td>Buyer</td>
              </tr>
              <tr>
                <td><strong>FOB (Free On Board)</strong></td>
                <td>On board the vessel at departure port</td>
                <td>Buyer</td>
                <td>Buyer</td>
              </tr>
              <tr>
                <td><strong>CIF (Cost, Insurance & Freight)</strong></td>
                <td>On board vessel (Cost up to destination port)</td>
                <td>Seller</td>
                <td>Buyer</td>
              </tr>
              <tr>
                <td><strong>DDP (Delivered Duty Paid)</strong></td>
                <td>Buyer's specified warehouse</td>
                <td>Seller</td>
                <td>Seller</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="article-quote-box">
          <p>“Choosing the right Incoterm allows Vietnamese enterprises to retain negotiation control, optimize logistics costs, and avoid unexpected terminal handling charges (THC).”</p>
        </div>

        <h2>3. Pro Tips from Wings Ocean Experts</h2>
        <p>Many Vietnamese exporters prefer selling FOB to avoid freight booking burdens. However, shifting to CIF or DAP allows exporters to control shipping schedules, partner directly with dedicated forwarders like Wings Ocean, and capture greater commercial margins.</p>
      `,
      vi: `
        <p class="article-lead">Trong hoạt động mua bán quốc tế, việc hiểu và áp dụng chính xác các điều kiện Incoterms 2020 là nền tảng giúp doanh nghiệp phân định rõ ràng quyền hạn, trách nhiệm chi phí và thời điểm chuyển giao rủi ro đối với lô hàng.</p>

        <h2>1. Cấu Trúc Cơ Bản Của 11 Điều Kiện Incoterms 2020</h2>
        <p>Incoterms 2020 được chia thành 2 nhóm quy tắc chính:</p>
        <ul>
          <li><strong>Quy tắc áp dụng cho mọi phương thức vận tải (Đa phương thức):</strong> EXW, FCA, CPT, CIP, DAP, DPU, DDP.</li>
          <li><strong>Quy tắc chỉ áp dụng cho vận tải đường biển và đường thủy nội địa:</strong> FAS, FOB, CFR, CIF.</li>
        </ul>

        <h2>2. So Sánh Các Điều Kiện Phổ Biến Nhất (FOB vs CIF vs DDP)</h2>
        <div class="article-table-responsive">
          <table class="table article-custom-table">
            <thead>
              <tr>
                <th>Điều kiện</th>
                <th>Điểm chuyển rủi ro</th>
                <th>Ai trả cước chính?</th>
                <th>Thông quan nhập khẩu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>EXW (Giao tại xưởng)</strong></td>
                <td>Tại xưởng/kho người bán</td>
                <td>Người mua</td>
                <td>Người mua</td>
              </tr>
              <tr>
                <td><strong>FOB (Giao lên tàu)</strong></td>
                <td>Khi hàng qua lan can/đặt trên tàu cảng xếp</td>
                <td>Người mua</td>
                <td>Người mua</td>
              </tr>
              <tr>
                <td><strong>CIF (Tiền hàng, bảo hiểm & cước)</strong></td>
                <td>Trên tàu cảng đi (Chi phí trả đến cảng đến)</td>
                <td>Người bán</td>
                <td>Người mua</td>
              </tr>
              <tr>
                <td><strong>DDP (Giao đã nộp thuế)</strong></td>
                <td>Tại kho người mua ở nước đến</td>
                <td>Người bán</td>
                <td>Người bán</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="article-quote-box">
          <p>“Lựa chọn đúng điều kiện Incoterms giúp doanh nghiệp Việt Nam giành quyền chủ động trong việc thuê tàu, đàm phán cước tốt hơn và tránh bị động trước các phụ phí cảng (Local charges).”</p>
        </div>

        <h2>3. Lời Khuyên Từ Chuyên Gia Wings Ocean</h2>
        <p>Nhiều doanh nghiệp xuất khẩu Việt Nam có thói quen bán FOB và nhập CIF để tránh lo liệu vận tải. Tuy nhiên, việc chuyển dịch sang <strong>bán CIF / DAP và mua FOB / EXW</strong> giúp doanh nghiệp kiểm soát toàn diện lịch trình, tận dụng sự hỗ trợ chuyên môn từ Wings Ocean để đàm phán cước ưu đãi và tối đa hóa biên lợi nhuận thương mại.</p>
      `
    },
    tags: {
      en: ["Incoterms 2020", "Export Guide", "Import Tips", "Trade Compliance"],
      vi: ["Incoterms 2020", "Cẩm nang xuất khẩu", "Thủ tục nhập khẩu", "Kiến thức ngoại thương"]
    },
    views: 2410
  },
  {
    id: "toi-uu-thu-tuc-thong-quan-hai-quan-viet-nam",
    featured: true,
    categoryKey: "customs",
    category: {
      en: "Customs Clearance",
      vi: "Thủ tục Hải quan"
    },
    date: "2025-05-02",
    readTime: {
      en: "7 min read",
      vi: "7 phút đọc"
    },
    author: {
      name: "Customs Brokerage Department",
      role: {
        en: "20+ Years Experienced Customs Team",
        vi: "Đội ngũ Khai báo Hải quan 20 năm kinh nghiệm"
      },
      avatar: "./assets/logo.png"
    },
    image: "./assets/service_item4.png",
    title: {
      en: "Mastering Customs Clearance in Vietnam: 5 Common Pitfalls & How to Avoid Them",
      vi: "Tối ưu Thủ tục Thông quan Hải quan tại Việt Nam: 5 Lỗi thường gặp & Cách phòng tránh"
    },
    summary: {
      en: "Avoid costly customs delays, fines, and channel inspections. In-depth advice on accurate HS code classification, C/O compliance, valuation declarations, and specialized inspection procedures.",
      vi: "Tránh các rủi ro chậm trễ thông quan, phạt hành chính và chuyển luồng đỏ. Hướng dẫn chi tiết về áp mã HS, chứng nhận xuất xứ C/O, kê khai trị giá hải quan và kiểm tra chuyên ngành."
    },
    content: {
      en: `
        <p class="article-lead">Customs clearance in Vietnam demands strict adherence to regulatory circulars, accurate tariff code classifications, and rigorous documentation preparation.</p>

        <h2>1. Pitfall 1: Inaccurate HS Code Classification</h2>
        <p>Applying the incorrect 8-digit HS Code can result in retroactive duty payments, substantial penalties, or prolonged administrative audits. Always request technical specifications, chemical analysis, or prior consultation rulings for complex commodity items.</p>

        <h2>2. Pitfall 2: Certificate of Origin (C/O) Discrepancies</h2>
        <p>Minor discrepancies in invoice numbers, port descriptions, or vessel names on Form E, Form D, Form EUR.1, or Form CPTPP can lead to rejection of preferential tariff treatments.</p>

        <div class="article-callout-card">
          <h4><i class="bi bi-shield-check text-primary me-2"></i>How Wings Ocean Delivers Seamless Clearance:</h4>
          <ul>
            <li><strong>Pre-Audit Service:</strong> Thorough pre-check of commercial invoice, packing list, bill of lading, and C/O before vessel arrival.</li>
            <li><strong>Specialized Agency Coordination:</strong> Fast processing of quality inspection, phytosanitary, veterinary, and food safety certifications.</li>
            <li><strong>20+ Years On-Site Team:</strong> Direct representation across major customs branches in Ho Chi Minh City, Hai Phong, Da Nang, and Noi Bai.</li>
          </ul>
        </div>

        <h2>3. Digital Customs & Fast Clearance Advice</h2>
        <p>Connecting your enterprise ERP with Vietnam Customs VNACCS/VCIS system and utilizing licensed customs brokers significantly reduces turnaround time from days to mere hours.</p>
      `,
      vi: `
        <p class="article-lead">Thủ tục hải quan tại Việt Nam luôn đòi hỏi tính chính xác tuyệt đối, sự am hiểu sâu sắc các thông tư, nghị định và sự tỉ mỉ trong khâu chuẩn bị chứng từ xuất nhập khẩu.</p>

        <h2>1. Lỗi số 1: Áp sai mã HS Code hàng hóa</h2>
        <p>Việc áp sai mã HS 8 số không chỉ dẫn đến nguy cơ bị truy thu thuế, xử phạt vi phạm hành chính mà còn làm kéo dài thời gian lưu kho bãi. Với các mặt hàng máy móc tổ hợp hoặc hóa chất phức tạp, doanh nghiệp nên thực hiện thủ tục xác định trước mã số hoặc xin ý kiến tham vấn chuyên môn từ các đơn vị đại lý hải quan uy tín.</p>

        <h2>2. Lỗi số 2: Sai sót thông tin trên Chứng nhận Xuất xứ (C/O)</h2>
        <p>Chỉ một lỗi chính tả nhỏ về tên tàu, số hóa đơn thương mại, tiêu chí xuất xứ (RVC, CTC, WO) hay việc thiếu dấu giáp lai trên các mẫu C/O (Form E, Form D, Form EUR.1, Form CPTPP...) cũng có thể khiến lô hàng bị từ chối áp dụng thuế suất ưu đãi đặc biệt.</p>

        <div class="article-callout-card">
          <h4><i class="bi bi-shield-check text-primary me-2"></i>Giải pháp thông quan an toàn cùng Wings Ocean:</h4>
          <ul>
            <li><strong>Kiểm tra chứng từ tiền thông quan (Pre-Check):</strong> Rà soát chéo toàn bộ Invoice, Packing List, B/L, C/O trước khi hàng cập bến.</li>
            <li><strong>Xử lý nhanh kiểm tra chuyên ngành:</strong> Đăng ký kiểm dịch thực vật, kiểm dịch động vật, kiểm tra chất lượng nhà nước và công bố an toàn thực phẩm.</li>
            <li><strong>Đội ngũ hiện trường 20 năm kinh nghiệm:</strong> Có mặt trực tiếp tại các chi cục Hải quan Cát Lái, VICT, Tân Cảng Hiệp Phước, Hải Phòng, Nội Bài, Tân Sơn Nhất.</li>
          </ul>
        </div>

        <h2>3. Lời Khuyên Cho Doanh Nghiệp</h2>
        <p>Ủy quyền cho đại lý hải quan chuyên nghiệp như Wings Ocean giúp doanh nghiệp giải phóng nguồn lực nội bộ, an tâm tuyệt đối về mặt pháp lý và đẩy nhanh tiến độ đưa hàng hóa vào chuỗi sản xuất, kinh doanh.</p>
      `
    },
    tags: {
      en: ["Customs Clearance", "HS Code", "Vietnam Customs", "C/O Form E"],
      vi: ["Thủ tục hải quan", "Mã HS Code", "Thông quan nhanh", "Chứng nhận xuất xứ C/O"]
    },
    views: 1960
  },
  {
    id: "giai-phap-van-tai-hang-khong-nhanh-chong",
    featured: true,
    categoryKey: "air",
    category: {
      en: "Air Transport",
      vi: "Vận tải Hàng không"
    },
    date: "2025-04-25",
    readTime: {
      en: "5 min read",
      vi: "5 phút đọc"
    },
    author: {
      name: "Airfreight Operation Unit",
      role: {
        en: "IATA Certified Cargo Agents",
        vi: "Đội ngũ Vận tải Hàng không Chứng nhận IATA"
      },
      avatar: "./assets/logo.png"
    },
    image: "./assets/service_item2.png",
    title: {
      en: "Air Freight Solutions: When Time-Critical Shipments Demand Absolute Precision",
      vi: "Giải pháp Vận tải Hàng không: Khi Yếu tố Thời gian Quyết định Thành bại"
    },
    summary: {
      en: "Discover key advantages of air cargo for urgent shipments, high-value electronics, pharmaceuticals, and temperature-controlled products. Strategies to optimize volume weight ratios (CBM vs. KG).",
      vi: "Khám phá lợi thế vượt trội của vận tải hàng không đối với hàng hóa cấp bách, linh kiện điện tử giá trị cao, dược phẩm và hàng nhạy cảm nhiệt độ. Chiến lược tối ưu trọng lượng quy đổi (Volumetric Weight)."
    },
    content: {
      en: `
        <p class="article-lead">In high-tech manufacturing, medical supplies, and urgent spare parts replacement, airfreight is the lifeblood connecting global hubs within 24 to 48 hours.</p>

        <h2>1. The Formula of Volumetric Weight in Air Freight</h2>
        <p>In air transportation, airlines charge based on <strong>Chargeable Weight</strong>, which is the higher value between Gross Weight and Volumetric Weight calculated via the standard formula:</p>
        <div class="article-quote-box">
          <p><strong>Volumetric Weight (KG) = (Length x Width x Height in cm) / 6000</strong></p>
        </div>
        <p>Proper packaging, compression, and palletization can save your company thousands of dollars per air shipment.</p>

        <h2>2. Temperature-Controlled & High-Value Cargo Handling</h2>
        <p>Wings Ocean coordinates active and passive cold-chain solutions with dry ice, gel packs, and data loggers for pharmaceutical and fresh produce consignments, guaranteeing zero temperature breach across transshipment hubs.</p>
      `,
      vi: `
        <p class="article-lead">Trong các ngành công nghiệp công nghệ cao, dược phẩm y tế và linh kiện cơ khí thay thế khẩn cấp, vận tải hàng không là chiếc cầu nối huyết mạch kết nối toàn cầu chỉ trong 24 đến 48 giờ.</p>

        <h2>1. Hiểu Rõ Công Thức Tính Trọng Lượng Quy Đổi (Chargeable Weight)</h2>
        <p>Các hãng hàng không sẽ tính cước dựa trên <strong>Trọng lượng tính cước (Chargeable Weight)</strong>, là giá trị lớn hơn giữa Trọng lượng thực tế (Gross Weight) và Trọng lượng thể tích (Volumetric Weight) tính theo chuẩn IATA:</p>
        <div class="article-quote-box">
          <p><strong>Trọng lượng thể tích (KG) = (Dài x Rộng x Cao tính bằng cm) / 6000</strong></p>
        </div>
        <p>Việc tối ưu hóa quy cách đóng gói, đóng thùng carton và sắp xếp pallet khoa học có thể giúp doanh nghiệp tiết kiệm từ 15% - 30% tổng chi phí cước bay.</p>

        <h2>2. Dịch Vụ Vận Chuyển Hàng Giá Trị Cao & Kiểm Soát Nhiệt Độ</h2>
        <p>Wings Ocean cung cấp giải pháp chuỗi cung ứng lạnh chuyên biệt (Cold Chain) với đá khô, gel giữ nhiệt và thiết bị ghi nhận nhiệt độ thời gian thực (Data Logger), đảm bảo tính toàn vẹn 100% cho các lô hàng dược phẩm, vắc-xin và thiết bị vi mạch điện tử.</p>
      `
    },
    tags: {
      en: ["Air Freight", "Express Shipping", "IATA Cargo", "Time Critical"],
      vi: ["Vận tải hàng không", "Chuyển phát nhanh", "Cước máy bay", "Hàng cấp bách"]
    },
    views: 1520
  },
  {
    id: "giai-phap-hang-du-an-sieu-truong-sieu-trong",
    featured: true,
    categoryKey: "project",
    category: {
      en: "Project Cargo",
      vi: "Hàng Dự án Đặc biệt"
    },
    date: "2025-04-18",
    readTime: {
      en: "7 min read",
      vi: "7 phút đọc"
    },
    author: {
      name: "Project Heavy-Lift Engineering Team",
      role: {
        en: "Heavy-Lift & Route Survey Engineers",
        vi: "Kỹ sư Khảo sát & Vận chuyển Siêu trường Siêu trọng"
      },
      avatar: "./assets/logo.png"
    },
    image: "./assets/service_item6.png",
    title: {
      en: "Executing Heavy-Lift & Oversized Project Cargo: From Feasibility Survey to Safe Delivery",
      vi: "Xử lý Hàng Dự án Siêu trường Siêu trọng: Từ Khảo sát Tuyến đường đến Bàn giao An toàn"
    },
    summary: {
      en: "Project cargo logistics demands technical precision: bridge capacity calculations, power line clearance, specialized hydraulic multi-axle trailers, and seamless multimodal execution across Vietnam.",
      vi: "Vận tải hàng dự án đòi hỏi sự chính xác tuyệt đối: khảo sát tĩnh không cầu đường, tải trọng cầu cống, xe đầu kéo rơ-moóc thủy lực chuyên dụng và giấy phép lưu hành đặc biệt trên toàn quốc."
    },
    content: {
      en: `
        <p class="article-lead">Heavy-lift and out-of-gauge (OOG) project transport is the pinnacle of logistics engineering, where every centimeter and ton must be calculated with mathematical precision.</p>

        <h2>1. Step 1: In-Depth Route & Infrastructure Surveys</h2>
        <p>Before moving wind turbines, industrial boilers, or electrical transformers, our engineering team performs thorough physical route surveys measuring overhead bridge clearances, overhead power lines, turning radiuses, and structural load ratings.</p>

        <h2>2. Specialized Equipment & Permitting</h2>
        <p>Deploying specialized SPMT (Self-Propelled Modular Transporters) and multi-axle trailers with hydraulic leveling, alongside official permits from the Ministry of Transport and escort police convoys.</p>

        <div class="article-callout-card">
          <h4><i class="bi bi-gear-wide-connected text-primary me-2"></i>Wings Ocean Project Cargo Commitments:</h4>
          <ul>
            <li>Zero safety incident benchmark across all inland and coastal barge operations.</li>
            <li>Direct coordination with port heavy-lift cranes and specialized rigging teams.</li>
            <li>Comprehensive cargo & third-party liability insurance coverage.</li>
          </ul>
        </div>
      `,
      vi: `
        <p class="article-lead">Vận chuyển hàng siêu trường, siêu trọng và hàng dự án công nghiệp (Project Cargo) là đỉnh cao của kỹ thuật logistics, nơi mỗi centimet và mỗi tấn tải trọng đều phải được tính toán với độ chính xác tuyệt đối.</p>

        <h2>1. Bước 1: Khảo sát Tuyến đường & Hạ tầng Kỹ thuật Chuyên sâu</h2>
        <p>Trước khi vận chuyển các thiết bị tuabin gió, nồi hơi công nghiệp, máy biến áp siêu áp hay dầm cầu thép, đội ngũ kỹ sư Wings Ocean tiến hành khảo sát thực địa từng khúc cua, tĩnh không gầm cầu vượt, đường dây điện cao thế và khả năng chịu tải của cầu đường dọc lộ trình.</p>

        <h2>2. Phương Tiện Rơ-moóc Thủy Lực Chuyên Dụng & Xin Giấy Phép Lưu Hành</h2>
        <p>Huy động hệ thống rơ-moóc module thủy lực nhiều trục (Multi-axle / SPMT), xe đầu kéo công suất lớn, kết hợp thủ tục xin cấp Giấy phép lưu hành đặc biệt từ Cục Đường bộ Việt Nam và bố trí xe cảnh sát/xe kỹ thuật dẫn đường 24/7.</p>

        <div class="article-callout-card">
          <h4><i class="bi bi-gear-wide-connected text-primary me-2"></i>Cam kết vàng từ Wings Ocean Project Cargo:</h4>
          <ul>
            <li>Đảm bảo tuyệt đối 100% an toàn cho con người, thiết bị và công trình giao thông.</li>
            <li>Phương án nâng hạ, chằng buộc (Lashing/Securing) theo tiêu chuẩn hàng hải quốc tế.</li>
            <li>Bảo hiểm trách nhiệm và bảo hiểm hàng hóa toàn diện cho toàn bộ dự án.</li>
          </ul>
        </div>
      `
    },
    tags: {
      en: ["Project Cargo", "Heavy Lift", "OOG Logistics", "Engineering Transport"],
      vi: ["Hàng dự án", "Siêu trường siêu trọng", "Vận tải quá khổ", "Khảo sát tuyến đường"]
    },
    views: 1390
  },
  {
    id: "wings-heartbeat-chia-se-yeu-thuong-tre-em-ngheo",
    featured: true,
    categoryKey: "csr",
    category: {
      en: "CSR & Community",
      vi: "Cộng đồng & Thiện nguyện"
    },
    date: "2025-04-10",
    readTime: {
      en: "6 min read",
      vi: "6 phút đọc"
    },
    author: {
      name: "Wings Ocean Heartbeat Foundation",
      role: {
        en: "Community & CSR Initiatives",
        vi: "Ban Điều hành Dự án Trái Tim Wings Ocean"
      },
      avatar: "./assets/logo.png"
    },
    image: "./assets/banner2.png",
    title: {
      en: "Wings Ocean Heartbeat: Sponsoring Free Heart Surgeries for Underprivileged Children in Vietnam",
      vi: "Wings Ocean Heartbeat: Hành trình Trao gửi Nhịp đập Sự sống cho Trẻ em Nghèo Mắc bệnh Tim"
    },
    summary: {
      en: "Learn how a percentage of every shipment profit with Wings Ocean is dedicated to funding life-saving heart surgeries for children with congenital heart conditions across Vietnam.",
      vi: "Tìm hiểu cách mỗi chuyến hàng đồng hành cùng Wings Ocean đều góp phần trích từ lợi nhuận để tài trợ các ca phẫu thuật tim miễn phí, mang lại tương lai tươi sáng cho các em nhỏ."
    },
    content: {
      en: `
        <p class="article-lead">Beyond providing premier international logistics solutions, Wings Ocean operates with a profound humanitarian calling: to heal little hearts and empower future generations.</p>

        <h2>The Origin of the Heartbeat Mission</h2>
        <p>In 2012, after experiencing firsthand the grueling journey of congenital heart disease within her own family, our CEO Ms. Selena founded the <strong>Wings Ocean Heartbeat Project</strong>. Every shipment handled by Wings Ocean directly contributes a dedicated portion of company profits to sponsor free heart surgeries for children from impoverished families.</p>

        <div class="article-quote-box">
          <p>“When you choose Wings Ocean as your logistics partner, you are not just moving freight—you are actively joining hands to perform miracles in young lives.”</p>
          <span class="quote-author">— Selena Nguyen, CEO of Wings Ocean</span>
        </div>

        <h2>Transparency & Direct Companionship</h2>
        <p>Wings Ocean maintains a strict policy of not accepting direct cash donations from third parties. Instead, we assist and connect partners directly with pediatric cardiology hospitals, creating genuine, heartfelt companionship in this life-saving mission.</p>
      `,
      vi: `
        <p class="article-lead">Bên cạnh sứ mệnh cung cấp các giải pháp logistics quốc tế vượt trội, Wings Ocean luôn đặt trách nhiệm xã hội và giá trị nhân văn lên hàng đầu: chung tay chữa lành những trái tim thơ ngây và thắp sáng tương lai cho thế hệ trẻ.</p>

        <h2>Nguồn Gốc Của Dự Án Wings Ocean Heartbeat</h2>
        <p>Khởi nguồn từ câu chuyện có thật năm 2012 khi cháu gái của CEO Selena Nguyen mắc bệnh tim bẩm sinh lúc mới 7 ngày tuổi, chứng kiến bao hoàn cảnh thương tâm tại bệnh viện nhi, dự án <strong>Wings Ocean Heartbeat</strong> đã ra đời. Một phần lợi nhuận từ mỗi lô hàng vận chuyển của Wings Ocean đều được trích lập để tài trợ chi phí phẫu thuật tim miễn phí cho các em nhỏ có hoàn cảnh khó khăn.</p>

        <div class="article-quote-box">
          <p>“Khi Quý khách hàng và đối tác lựa chọn đồng hành cùng Wings Ocean, Quý vị không chỉ đang thực hiện một giao dịch thương mại, mà còn đang cùng chúng tôi tạo nên những phép màu cho nhịp đập của các em thơ.”</p>
          <span class="quote-author">— Selena Nguyen, CEO Wings Ocean</span>
        </div>

        <h2>Cam Kết Minh Bạch & Kết Nối Yêu Thương</h2>
        <p>Wings Ocean không nhận quyên góp tài chính trực tiếp từ cộng đồng. Thay vào đó, chúng tôi hỗ trợ kết nối trực tiếp các cá nhân, doanh nghiệp và tổ chức hảo tâm với bệnh viện nhi để cùng sẻ chia yêu thương, giám sát trực tiếp từng ca phẫu thuật tim cho các em nhỏ.</p>
      `
    },
    tags: {
      en: ["Wings Heartbeat", "CSR", "Community Impact", "Giving Back"],
      vi: ["Trái tim Wings Ocean", "Thiện nguyện", "Trách nhiệm xã hội", "Phẫu thuật tim miễn phí"]
    },
    views: 3120
  }
];

/**
 * Helper Functions to retrieve articles
 */

// Get all articles or filtered by category and search
function getWingsArticles(categoryKey = 'all', searchQuery = '') {
  return WINGS_ARTICLES.filter(article => {
    const matchCategory = (categoryKey === 'all' || article.categoryKey === categoryKey);
    if (!matchCategory) return false;

    if (!searchQuery || !searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase().trim();
    const titleEn = (article.title.en || '').toLowerCase();
    const titleVi = (article.title.vi || '').toLowerCase();
    const summaryEn = (article.summary.en || '').toLowerCase();
    const summaryVi = (article.summary.vi || '').toLowerCase();
    const tagsEn = (article.tags.en || []).join(' ').toLowerCase();
    const tagsVi = (article.tags.vi || []).join(' ').toLowerCase();

    return titleEn.includes(q) || titleVi.includes(q) ||
           summaryEn.includes(q) || summaryVi.includes(q) ||
           tagsEn.includes(q) || tagsVi.includes(q);
  });
}

// Get only featured articles for homepage slider
function getWingsFeaturedArticles() {
  return WINGS_ARTICLES.filter(article => article.featured === true);
}

// Get specific article by ID
function getWingsArticleById(id) {
  if (!id) return null;
  return WINGS_ARTICLES.find(article => article.id === id) || null;
}

// Get related articles for detail page
function getWingsRelatedArticles(currentId, limit = 3) {
  const current = getWingsArticleById(currentId);
  const currentCat = current ? current.categoryKey : 'all';

  // Prefer same category first, exclude current
  const sameCat = WINGS_ARTICLES.filter(a => a.id !== currentId && a.categoryKey === currentCat);
  const otherCat = WINGS_ARTICLES.filter(a => a.id !== currentId && a.categoryKey !== currentCat);

  return [...sameCat, ...otherCat].slice(0, limit);
}

/**
 * Shared Formatting & String Utilities
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(dateStr, lang = 'en') {
  if (!dateStr) return '';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const y = parts[0];
      const m = parseInt(parts[1], 10);
      const d = parseInt(parts[2], 10);
      if (lang === 'vi') {
        return `${d} Th${m}, ${y}`;
      } else {
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthNames[m - 1]} ${d}, ${y}`;
      }
    }
  } catch (e) {
    // fallback
  }
  return dateStr;
}

// Global Browser Window Export
if (typeof window !== 'undefined') {
  window.WINGS_ARTICLES = WINGS_ARTICLES;
  window.getWingsArticles = getWingsArticles;
  window.getWingsFeaturedArticles = getWingsFeaturedArticles;
  window.getWingsArticleById = getWingsArticleById;
  window.getWingsRelatedArticles = getWingsRelatedArticles;
  window.escapeHtml = escapeHtml;
  window.formatDate = formatDate;
}


