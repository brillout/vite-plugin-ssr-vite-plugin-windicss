import reactRefresh from "@vitejs/plugin-react-refresh";
import ssr from "vite-plugin-ssr/plugin";
import WindiCSS from "vite-plugin-windicss";

export default {
  plugins: [reactRefresh(), ssr(), WindiCSS()],
};
