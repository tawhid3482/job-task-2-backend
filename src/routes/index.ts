import { Router } from "express";
import { UserRoutes } from "../modules/users/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { PerfectionsRoutes } from "../modules/Perfections/perfections.route";
import { testimonialsRoutes } from "../modules/testimonials/testimonials.route";
import { blogsRoutes } from "../modules/Blogs/blogs.route";
import { EnquiryRoutes } from "../modules/Enquiry/Enquiry.route";
import { newsRoutes } from "../modules/News/news.route";
import { sliderRoutes } from "../modules/slider/slider.route";
import { ScheduleRoutes } from "../modules/schedule/schedule.route";
import { mediaRoutes } from "../modules/media/media.route";

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
    path: "/enquiry",
    route: EnquiryRoutes,
  },
  {
    path: "/news",
    route: newsRoutes,
  },
  {
    path: "/slider",
    route: sliderRoutes,
  },
  {
    path: "/schedule",
    route: ScheduleRoutes,
  },
  {
    path: "/gallery",
    route: mediaRoutes,
  },
];

modules.forEach((route) => {
  router.use(route.path, route.route);
});
