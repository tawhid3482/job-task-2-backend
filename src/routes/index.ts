import { Router } from "express";
import { UserRoutes } from "../modules/users/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { PerfectionsRoutes } from "../modules/Perfections/perfections.route";
import { testimonialsRoutes } from "../modules/testimonials/testimonials.route";
import { blogsRoutes } from "../modules/Blogs/blogs.route";
import { mediaRoutes } from "../modules/media/media.route";
import { EnquiryRoutes } from "../modules/Enquiry/Enquiry.route";
import { newsRoutes } from "../modules/News/news.route";
import { concernRoutes } from "../modules/Cocerns/concerns.route";
import { sliderRoutes } from "../modules/slider/slider.route";
import { contactRoutes } from "../modules/contact/contact.route";
import { ScheduleRoutes } from "../modules/schedule/schedule.route";

export const router = Router();

const modules = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/perfections",
    route: PerfectionsRoutes,
  },
  {
    path: "/testimonial",
    route: testimonialsRoutes,
  },
  {
    path: "/blogs",
    route: blogsRoutes,
  },
  {
    path: "/media",
    route: mediaRoutes,
  },
  {
    path: "/enquiry",
    route: EnquiryRoutes,
  },
  {
    path: "/news",
    route: newsRoutes,
  },
  {
    path: "/concerns",
    route: concernRoutes,
  },
  {
    path: "/slider",
    route: sliderRoutes,
  },
  {
    path: "/contact",
    route: contactRoutes,
  },
  {
    path: "/schedule",
    route: ScheduleRoutes,
  },
];

modules.forEach((route) => {
  router.use(route.path, route.route);
});
