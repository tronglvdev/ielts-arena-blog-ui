import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { surveySchema } from "../../schemas/surveySchema";

const STORAGE_KEY = "userConsultData";

function ConsultForm() {
  const [submittedData, setSubmittedData] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      role: "Học sinh",
      goal: "Giao tiếp tự tin, thành thạo",
    },
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        reset(parsed);
      }
    } catch {}
  }, [reset]);

  const onSubmit = (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {}
    setSubmittedData(data);
    alert("Đặt lịch tư vấn thành công!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="promo-consultation">
      <div className="promo-card">
        <img src="/images/endow.webp" alt="Ưu đãi khoá học" />
      </div>

      <div className="consult-card">
        <h3 className="consult-title">Đặt lịch tư vấn miễn phí lộ trình</h3>
        <form id="consultForm" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <label htmlFor="fullName">Họ và tên</label>
            <input
              {...register("fullName")}
              id="fullName"
              type="text"
              placeholder="Nguyễn Văn A"
            />
            {errors.fullName && (
              <p className="field-error">{errors.fullName.message}</p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              {...register("phoneNumber")}
              id="phoneNumber"
              type="tel"
              placeholder="0967 699 999"
            />
            {errors.phoneNumber && (
              <p className="field-error">{errors.phoneNumber.message}</p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && (
              <p className="field-error">{errors.email.message}</p>
            )}
          </div>

          <div className="form-row">
            <div className="form-row-item">
              <label htmlFor="role">Bạn là</label>
              <select id="role" {...register("role")}>
                <option value="Học sinh">Học sinh</option>
                <option value="Sinh viên">Sinh viên</option>
                <option value="Người đi làm">Người đi làm</option>
                <option value="Phụ huynh">Phụ huynh</option>
              </select>
              {errors.role && (
                <p className="field-error">{errors.role.message}</p>
              )}
            </div>
            <div className="form-row-item">
              <label htmlFor="goal">Mục tiêu học tiếng Anh của bạn</label>
              <select id="goal" {...register("goal")}>
                <option value="Giao tiếp tự tin, thành thạo">
                  Giao tiếp tự tin, thành thạo
                </option>
                <option value="5.0 IELTS">5.0 IELTS</option>
                <option value="6.0 IELTS">6.0 IELTS</option>
                <option value="+7.0 IELTS">+7.0 IELTS</option>
                <option value="Khác">Khác</option>
              </select>
              {errors.goal && (
                <p className="field-error">{errors.goal.message}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="btn-schedule"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Đang gửi..." : "Đặt lịch hẹn"}
          </button>

          {submittedData && (
            <div className="result-box result-box-active">
              <p className="title">
                <strong>Thông tin đã gửi thành công</strong>
              </p>
              <p>
                <strong>Họ tên:</strong> {submittedData.fullName}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {submittedData.phoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>
              <p>
                <strong>Đối tượng:</strong> {submittedData.role}
              </p>
              <p>
                <strong>Mục tiêu:</strong> {submittedData.goal}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ConsultForm;
