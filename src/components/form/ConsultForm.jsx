import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { surveySchema } from "../../schemas/surveySchema";

function ConsultForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
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

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
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

          <button type="submit" className="btn-schedule">
            Đặt lịch hẹn
          </button>
        </form>
      </div>
    </div>
  );
}

export default ConsultForm;
