import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import "./style.css";

const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const surveySchema = z.object({
  fullName: z.string().min(3, { message: "Tên phải dài hơn 3 ký tự" }),
  phoneNumber: z.string().regex(phoneRegex, "Số điện thoại không hợp lệ"),
  role: z
    .enum(["Học sinh", "Sinh viên", "Người đi làm", "Phụ huynh"])
    .default("Học sinh"),
  goal: z
    .enum([
      "Giao tiếp tự tin, thành thạo",
      "5.0 IELTS",
      "6.0 IELTS",
      "+7.0 IELTS",
      "Khác",
    ])
    .default("Giao tiếp tự tin, thành thạo"),
  email: z
    .string()
    .min(1, { message: "Email không được để trống" })
    .email({ message: "Vui lòng nhập đúng định dạng email" }),
});

function App() {
  const [isStuck, setIsStuck] = React.useState(false);

  React.useEffect(() => {
    const topBar = document.querySelector(".top-bar");
    if (!topBar) return;

    const updateStickyHeading = () => {
      setIsStuck(window.scrollY >= topBar.offsetHeight);
    };

    updateStickyHeading();
    window.addEventListener("scroll", updateStickyHeading, { passive: true });
    return () => window.removeEventListener("scroll", updateStickyHeading);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(surveySchema),
  });

  const onSubmit = (data) => {
    alert("Dữ liệu đã gửi:\n" + JSON.stringify(data, null, 2));
  };

  return (
    <>
      <header>
        <div className="top-bar">
          <div className="top-bar-container">
            <div className="top-bar-left">
              <div className="svg">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <a href="#" className="top-bar-item mail-item">
                contact@ieltsarena.edu.vn
              </a>
              <i className="fa-solid fa-location-dot"></i>
              <a href="#" className="top-bar-item">
                54 Trương Công Giai, Cầu Giấy, Hà Nội
              </a>
            </div>
            <div className="top-bar-right">
              <div className="svg">
                <i className="fa-solid fa-phone"></i>
              </div>
              <a href="#" className="top-bar-item phone-item">
                092 9999 535
              </a>
              <div className="top-bar-icons">
                <div className="svg">
                  <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="svg">
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="svg">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="svg">
                  <i className="fa-brands fa-tiktok"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`sticky-heading${isStuck ? " is-stuck" : ""}`}>
        <div className="main-nav">
          <div className="main-nav-container">
            <div className="logo-text">
              <img src="./images/logo.png" alt="IELTS ARENA" />
            </div>
            <div className="menu">
              <ul className="nav-menu">
                <li className="nav-item">
                  <a href="#">Giới thiệu</a>
                </li>
                <li className="nav-item">
                  <a href="#">Thành tích học viên</a>
                </li>
                <li className="nav-item">
                  <a href="#">Khoá học</a>
                </li>
                <li className="nav-item">
                  <a href="#">Lịch khai giảng</a>
                </li>
                <li className="nav-item">
                  <a href="#">Tin tức</a>
                </li>
                <li className="nav-item">
                  <a href="#">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="#">Hệ thống cơ sở</a>
                </li>
                <li className="nav-item">
                  <a href="#">Tuyển dụng</a>
                </li>
              </ul>
            </div>
            <div className="test-online">
              <button className="btn-test-online">Test Online</button>
            </div>
          </div>
        </div>

        <div className="announcement-banner">
          <img src="./images/gift.svg" />
          <p>
            <strong>Back to School</strong>: Ưu đãi lên
            <strong>đến 30%</strong> học phí và nhiều phần quà hấp dẫn đang chờ
            các bạn
          </p>
        </div>
      </div>

      <div className="page-hero">
        <div className="page-hero-item1">
          <img src="images/Banner.png" />
        </div>
        <div className="page-hero-item2">
          <div className="breadcrumb">
            Trang chủ <span>&rsaquo;</span> Blog <span>&rsaquo;</span> Tiếng Anh
            cơ bản
          </div>
          <div className="page-title">Tiếng Anh cơ bản</div>
        </div>
      </div>

      <div className="main-container">
        <main className="content-column">
          <div className="post-grid">
            <div className="post-card">
              <div className="image-wrapper">
                <img src="./images/img1.webp" />
                <div className="post-date">
                  <span>22</span>
                  <span>Tháng 1</span>
                </div>
              </div>
              <div className="post-card-content">
                <a href="#" className="card-title">
                  10 cách học từ vựng tiếng anh hiệu quả
                </a>
                <p className="card-content">
                  Bạn đã từng học rất nhiều từ vựng tiếng Anh, làm flashcard,
                  ghi chép cẩn thận nhưng khi bước vào IELTS Speaking hoặc
                  Writing, từ vựng lại biến mất!? Đây là tình trạng phổ biến của
                  người học IELTS – và nguyên nhân không nằm ở khả năng ghi nhớ,
                  mà nằm ở phương pháp học từ vựng chưa đúng cách. Bài viết dưới
                  đây sẽ chia sẻ 10 cách học từ vựng tiếng Anh hiệu quả, giúp
                  bạn ghi nhớ sâu – dùng đúng – áp dụng được ngay trong IELTS.
                </p>
                <div className="read-more-link">
                  <a href="#">Xem chi tiết</a>
                  <p>&rarr;</p>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="image-wrapper">
                <img src="./images/img5.webp" />
                <div className="post-date">
                  <span>22</span>
                  <span>Tháng 1</span>
                </div>
              </div>
              <div className="post-card-content">
                <a href="#" className="card-title">
                  5 điều cần biết trước khi học IELTS
                </a>
                <p className="card-content">
                  Học IELTS không chỉ là đăng ký một khóa học và “cày đề”. Nếu
                  không hiểu đúng ngay từ đầu, rất nhiều người rơi vào cảnh học
                  lâu – tốn tiền – nhưng band điểm không cải thiện. Và sau đây
                  là 5 điều cần biết trước khi bắt đầu học IELTS, hãy xác định
                  rõ mục tiêu và trình độ hiện tại. Việc lựa chọn phương pháp
                  học phù hợp ngay từ đầu sẽ giúp bạn tiết kiệm thời gian, tránh
                  học lan man và tiến bộ hiệu quả hơn.
                </p>
                <div className="read-more-link">
                  <a href="#">Xem chi tiết</a>
                  <p>&rarr;</p>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="image-wrapper">
                <img src="./images/img2.webp" />
                <div className="post-date">
                  <span>20</span>
                  <span>Tháng 1</span>
                </div>
              </div>
              <div className="post-card-content">
                <a href="#" className="card-title">
                  5 Website “đỉnh chóp” luyện IELTS Listening
                </a>
                <p className="card-content">
                  Trên hành trình chinh phục tấm bằng IELTS, Listening thường là
                  kỹ năng gây “ám ảnh” bởi tốc độ nói nhanh và sự đa dạng về
                  chất giọng (accents). Trong khi nhiều người đổ xô vào các bộ
                  đề Cambridge quen thuộc, những website luyện Listening chất
                  lượng sẽ giúp bạn làm quen với nhiều giọng đọc, tốc độ nói và
                  chủ đề khác nhau. Đây là cách hiệu quả để cải thiện khả năng
                  nghe và tự tin hơn khi bước vào phòng thi.
                </p>
                <div className="read-more-link">
                  <a href="#">Xem chi tiết</a>
                  <p>&rarr;</p>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="image-wrapper">
                <img src="./images/img8.jpg" />
                <div className="post-date">
                  <span>20</span>
                  <span>Tháng 1</span>
                </div>
              </div>
              <div className="post-card-content">
                <a href="#" className="card-title">
                  Vượt band IELTS đầu năm 2026: Khi chiến lược học tập quyết
                  định band điểm
                </a>
                <p className="card-content">
                  Cuối tháng 1/2026, khi năm mới vừa bắt đầu cũng là lúc nhu cầu
                  học IELTS bước vào giai đoạn cao điểm. Với học sinh, sinh
                  viên, IELTS không chỉ là một chứng chỉ ngoại ngữ, mà còn là
                  “tấm vé” mở ra cơ hội tốt nghiệp, tuyển thẳng vào các trường
                  đại học hàng đầu và săn học bổng du học mơ ước. Đối với người
                  đi làm, đây lại là công cụ đắc lực để khẳng định năng lực, gia
                  tăng cơ hội thăng tiến hoặc mở rộng con đường sự nghiệp quốc
                  tế. Hiểu được tầm quan trọng đó, IELTS Arena mang đến lộ trình
                  học tối ưu giúp bạn nhanh chóng bứt phá mục tiêu ngay trong
                  năm mới!
                </p>
                <div className="read-more-link">
                  <a href="#">Xem chi tiết</a>
                  <p>&rarr;</p>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="image-wrapper">
                <img src="./images/img3.webp" />
                <div className="post-date">
                  <span>30</span>
                  <span>Tháng 8</span>
                </div>
              </div>
              <div className="post-card-content">
                <a href="#" className="card-title">
                  Các thì tiếng Anh cơ bản: Tóm gọn 12 thì, nhớ trong 30 phút
                </a>
                <p className="card-content">
                  Các thì tiếng Anh cơ bản là phần kiến thức cực kỳ quan trọng
                  và cũng dễ gây nhầm lẫn cho người học. Trong bài viết này,
                  chúng ta sẽ cùng học chi tiết 12 thì cơ bản trong tiếng Anh.
                  Đồng thời IELTS Arena sẽ chia sẻ những mẹo phân biệt các thì
                  dễ nhầm lẫn, cùng bộ bài tập áp dụng thực tế có đáp án chi
                  tiết. Hy vọng bài viết sẽ là cẩm nang hữu ích giúp bạn làm chủ
                  ngữ pháp và tự tin nâng cao điểm số IELTS của mình!
                </p>
                <div className="read-more-link">
                  <a href="#">Xem chi tiết</a>
                  <p>&rarr;</p>
                </div>
              </div>
            </div>

            <div className="post-card">
              <div className="image-wrapper">
                <img src="./images/img4.webp" />
                <div className="post-date">
                  <span>30</span>
                  <span>Tháng 8</span>
                </div>
              </div>
              <div className="post-card-content">
                <a href="#" className="card-title">
                  Tổng hợp ngữ pháp tiếng Anh cơ bản từ A-Z cho người mới học
                </a>
                <p className="card-content">
                  Ngữ pháp tiếng Anh cơ bản là nền tảng quan trọng khi học tiếng
                  Anh, đặc biệt với người mới bắt đầu. Bài viết này sẽ tổng hợp
                  các chủ điểm ngữ pháp cơ bản, giúp bạn học nhanh, hiểu sâu và
                  áp dụng dễ dàng trong giao tiếp cũng như các kỳ thi như IELTS,
                  TOEIC hay THPT Quốc gia. Bên cạnh việc hệ thống lý thuyết ngắn
                  gọn, bài viết còn cung cấp ví dụ thực tế và bộ bài tập áp dụng
                  kèm đáp án chi tiết, giúp bạn tự tin củng cố nền tảng ngữ pháp
                  một cách vững chắc nhất!
                </p>
                <div className="read-more-link">
                  <a href="#">Xem chi tiết</a>
                  <p>&rarr;</p>
                </div>
              </div>
            </div>

            <div className="load-more-wrapper">
              <button className="btn-read-more">Xem thêm</button>
            </div>
          </div>

          <div className="sidebar-column">
            <div className="sidebar-widget">
              <h3 className="widget-heading">
                Bài viết có lượt xem nhiều nhất
              </h3>
              <div className="popular-posts-list">
                <div className="popular-post-content">
                  <div className="popular-img">
                    <img src="./images/popular-post.webp" />
                  </div>
                  <div className="popular-content">
                    <div className="popular-date">
                      <span>&#128340;</span>26/11/2024
                    </div>
                    <p>
                      Tích lũy thêm 1500 từ vựng tiếng anh cơ bản vào vốn kiến
                      thức không chỉ giúp bạn am hiểu sâu hơn về cách sử dụng
                      ngôn ngữ này mà còn dễ dàng ứng dụng vào trong giao tiếp
                      thực tế. Tuy nhiên không ít bạn học rất nhiều từ vựng
                      nhưng chỉ nghe mà không ứng dụng, giao tiếp được. Bài viết
                      của IELTS Arena không chỉ tổng hợp danh sách 1500 từ vựng
                      cơ bản mà còn chỉ ra nguyên nhân và cung cấp cho bạn nhiều
                      phương pháp học nhanh chóng, sử dụng dễ dàng trong giao
                      tiếp. Cùng tìm hiểu nhé!
                    </p>
                  </div>
                </div>

                <div className="popular-post-content">
                  <div className="popular-img">
                    <img src="./images/popular2.webp" />
                  </div>
                  <div className="popular-content">
                    <div className="popular-date">
                      <span>&#128340;</span>26/11/2024
                    </div>
                    <p>
                      Tích lũy thêm 1500 từ vựng tiếng anh cơ bản vào vốn kiến
                      thức không chỉ giúp bạn am hiểu sâu hơn về cách sử dụng
                      ngôn ngữ này mà còn dễ dàng ứng dụng vào trong giao tiếp
                      thực tế. Tuy nhiên không ít bạn học rất nhiều từ vựng
                      nhưng chỉ nghe mà không ứng dụng, giao tiếp được. Bài viết
                      của IELTS Arena không chỉ tổng hợp danh sách 1500 từ vựng
                      cơ bản mà còn chỉ ra nguyên nhân và cung cấp cho bạn nhiều
                      phương pháp học nhanh chóng, sử dụng dễ dàng trong giao
                      tiếp. Cùng tìm hiểu nhé!
                    </p>
                  </div>
                </div>

                <div className="popular-post-content">
                  <div className="popular-img">
                    <img src="./images/popular3.webp" />
                  </div>
                  <div className="popular-content">
                    <div className="popular-date">
                      <span>&#128340;</span>26/11/2024
                    </div>
                    <p>
                      Tích lũy thêm 1500 từ vựng tiếng anh cơ bản vào vốn kiến
                      thức không chỉ giúp bạn am hiểu sâu hơn về cách sử dụng
                      ngôn ngữ này mà còn dễ dàng ứng dụng vào trong giao tiếp
                      thực tế. Tuy nhiên không ít bạn học rất nhiều từ vựng
                      nhưng chỉ nghe mà không ứng dụng, giao tiếp được. Bài viết
                      của IELTS Arena không chỉ tổng hợp danh sách 1500 từ vựng
                      cơ bản mà còn chỉ ra nguyên nhân và cung cấp cho bạn nhiều
                      phương pháp học nhanh chóng, sử dụng dễ dàng trong giao
                      tiếp. Cùng tìm hiểu nhé!
                    </p>
                  </div>
                </div>

                <div className="popular-post-content">
                  <div className="popular-img">
                    <img src="./images/popular4.webp" />
                  </div>
                  <div className="popular-content">
                    <div className="popular-date">
                      <span>&#128340;</span>26/11/2024
                    </div>
                    <p>
                      Tích lũy thêm 1500 từ vựng tiếng anh cơ bản vào vốn kiến
                      thức không chỉ giúp bạn am hiểu sâu hơn về cách sử dụng
                      ngôn ngữ này mà còn dễ dàng ứng dụng vào trong giao tiếp
                      thực tế. Tuy nhiên không ít bạn học rất nhiều từ vựng
                      nhưng chỉ nghe mà không ứng dụng, giao tiếp được. Bài viết
                      của IELTS Arena không chỉ tổng hợp danh sách 1500 từ vựng
                      cơ bản mà còn chỉ ra nguyên nhân và cung cấp cho bạn nhiều
                      phương pháp học nhanh chóng, sử dụng dễ dàng trong giao
                      tiếp. Cùng tìm hiểu nhé!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer>
        <div className="footer-section">
          <div className="promo-consultation">
            <div className="promo-card">
              <img src="./images/endow.webp" />
            </div>

            <div className="consult-card">
              <h3 className="consult-title">
                Đặt lịch tư vấn miễn phí lộ trình
              </h3>
              <form id="consultForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                  <label htmlFor="fullName">Họ và tên</label>
                  <input
                    {...register("fullName")}
                    id="fullName"
                    // type="text"
                    placeholder="Nguyễn Văn A"
                  />
                  {errors.fullName && (
                    <p style={{ color: "red" }}>{errors.fullName.message}</p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    {...register("phoneNumber")}
                    id="phone"
                    // type="tel"
                    placeholder="0967 699 999"
                  />
                  {errors.phoneNumber && (
                    <p style={{ color: "red", margin: 0 }}>
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email")}
                    id="email"
                    // type="email"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p style={{ color: "red", margin: 0 }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-row-item">
                    <label htmlFor="role">Bạn là</label>
                    <select id="role" {...register("role")}>
                      <option selected>Học sinh</option>
                      <option>Sinh viên</option>
                      <option>Người đi làm</option>
                      <option>Phụ huynh</option>
                    </select>
                    {errors.role && (
                      <p style={{ color: "red", margin: 0 }}>
                        {errors.role.message}
                      </p>
                    )}
                  </div>
                  <div className="form-row-item">
                    <label htmlFor="goal">Mục tiêu học tiếng Anh của bạn</label>
                    <select id="goal" {...register("goal")}>
                      <option selected>Giao tiếp tự tin, thành thạo</option>
                      <option>5.0 IELTS</option>
                      <option>6.0 IELTS</option>
                      <option>+7.0 IELTS</option>
                      <option>Khác</option>
                    </select>
                    {errors.goal && (
                      <p style={{ color: "red", margin: 0 }}>
                        {errors.goal.message}
                      </p>
                    )}
                  </div>
                </div>
                <button type="submit" className="btn-schedule">
                  Đặt lịch hẹn
                </button>

                <div id="result" className="result-box">
                  <p className="title">
                    <strong>Thông tin</strong>
                  </p>
                  <p>
                    <strong>Họ tên:</strong> <span id="displayFullName"></span>
                  </p>
                  <p>
                    <strong>Số điện thoại:</strong>
                    <span id="displayPhone"></span>
                  </p>
                  <p>
                    <strong>Email:</strong> <span id="displayEmail"></span>
                  </p>
                  <p>
                    <strong>Đối tượng:</strong> <span id="displayRole"></span>
                  </p>
                  <p>
                    <strong>Mục tiêu:</strong> <span id="displayGoal"></span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="background-overlay">
          <div className="footer-contact">
            <div className="footer-contact-item">
              <img src="images/logo-footer.png" />
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <a href="#" className="f-bar-item">
                092 999 525
              </a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="#" className="f-bar-item">
                contact@ieltsarena.edu.vn
              </a>
            </div>

            <div className="footer-contact-item">
              <div className="f-bar-icons">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-tiktok"></i>
              </div>
            </div>
          </div>

          <div className="f-info">
            <div className="f-info-widget">
              <div className="f-info-col">
                <div className="f-info-group">
                  <div className="f-info-title">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>
                      Hệ thống IELTS Arena Hà Nội - Điểm thi IELTS IDP Cầu Giấy
                    </p>
                  </div>
                  <ul className="f-info-list">
                    <li>Head Office: Số 54 Trương Công Giai, Cầu Giấy</li>
                    <li>Cơ sở 1: Số 82 Trần Đại Nghĩa, Hai Bà Trưng</li>
                    <li>Cơ sở 2: BT 24A, ngõ 229 Phố Vọng, Hai Bà Trưng</li>
                    <li>Cơ sở 3: Số 211 Trần Quốc Hoàn, Cầu Giấy</li>
                    <li>Cơ sở 4: Số 48 Trần Bình, Cầu Giấy</li>
                    <li>Cơ sở 5: Số 103 Trần Quốc Vượng, Cầu Giấy</li>
                  </ul>
                </div>
                <div className="f-info-group">
                  <div className="f-info-title">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>IELTS Arena Hà Nam (Ninh Bình mới)</p>
                  </div>
                  <ul className="f-info-list">
                    <li>Cơ sở 12: Số 8 Châu Cầu, Phủ Lý, Hà Nam</li>
                    <li>Cơ sở 13: Số 406 Lê Lợi, Phủ Lý, Hà Nam</li>
                  </ul>
                </div>
                <div className="f-info-group">
                  <div className="f-info-title">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>IELTS Arena Ninh Bình - Điểm thi IELTS IDP Ninh Bình</p>
                  </div>
                  <ul className="f-info-list">
                    <li>Cơ sở 14: Số 123 Lương Văn Thăng, Hoa Lư, Ninh Bình</li>
                  </ul>
                </div>
                <div className="f-info-group">
                  <div className="f-info-title">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>IELTS Arena E-Learning (Học trực tuyến)</p>
                  </div>
                  <ul className="f-info-list">
                    <li>Cơ sở 15: Số 54 Trương Công Giai, Cầu Giấy, Hà Nội</li>
                  </ul>
                </div>
              </div>

              <div className="f-info-col">
                <div className="f-info-group">
                  <div className="f-info-title">
                    <p>Chính sách</p>
                  </div>
                  <ul className="f-info-list">
                    <li>Chính sách bảo mật</li>
                    <li>Chính sách liên kết</li>
                    <li>Chính sách thanh toán</li>
                    <li>Chính sách xử lý dữ liệu cá nhân</li>
                  </ul>
                </div>

                <div className="f-info-group">
                  <div className="f-info-title">
                    <p>Thông tin liên hệ</p>
                  </div>
                  <ul className="f-info-list-contact">
                    <li>
                      <i className="fa-solid fa-phone"></i>
                      <p>092 999 525</p>
                    </li>
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href="#">contact@ieltsarena.edu.vn</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="f-info-col">
                <div className="f-info-group">
                  <div className="f-info-title">
                    <p>Truy cập nhanh</p>
                  </div>
                  <ul className="f-info-list">
                    <li>Giới thiệu</li>
                    <li>Tin tức</li>
                    <li>Sự kiện</li>
                    <li>Lịch khai giảng</li>
                    <li>Thành tích học viên</li>
                    <li>Giáo viên</li>
                    <li>Khoá học</li>
                  </ul>
                </div>
              </div>

              <div className="f-info-col">
                <div className="f-info-group">
                  <div className="f-info-title">
                    <p>Lộ trình học</p>
                  </div>
                  <ul className="f-info-list">
                    <li>Lộ trình IELTS</li>
                    <li>Lộ trình nền tảng</li>
                    <li>Học 1 kèm 1 - Arena Elite</li>
                    <li>Luyện thi IELTS cấp tốc</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright">
          <div className="copyright-left">
            <p>© Copyright 2024 by IELTS Arena. JSC</p>
            <span>|</span>
            <p>Giấy phép số 4480/GCN-SGDDT TP. Hà Nội</p>
          </div>
          <div className="copyright-right">
            <p>Giới thiệu</p>
            <span>|</span>
            <p>Điều khoản sử dụng</p>
          </div>
        </div>
      </footer>

      <div className="floating-widgets">
        <div className="float-btn">
          <i className="fa-solid fa-comment-dots"></i>
        </div>
        <div className="float-btn">
          <p>
            Nhận
            <br />
            tư vấn
          </p>
        </div>
      </div>

      <div className="modal-content hidden-modal">
        <div className="modal-header">
          <h3 id="modalTitle"></h3>
          <button className="close-modal" aria-label="Đóng">
            &times;
          </button>
        </div>
        <div className="modal-body">
          <img className="modal-image" />
          <p></p>
        </div>
      </div>
      <div className="blur-bg hidden-blur"></div>
      <script src="script.js"></script>
    </>
  );
}

export default App;
