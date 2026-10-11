import * as z from "zod";

export const phoneRegex = /^(?:0|\+?84)(?:3[2-9]|5[25689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/;

export const surveySchema = z.object({
  fullName: z.string().min(3, { message: "Tên phải dài hơn 3 ký tự" }),
  phoneNumber: z.string().regex(phoneRegex, { message: "Số điện thoại không hợp lệ" }),
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
