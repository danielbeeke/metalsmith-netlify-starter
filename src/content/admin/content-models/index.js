import pages from "./pages.js";
import posts from "./posts.js";
import data from "./data.js";

const { CMS, initCMS: init } = window;

init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
      repo: "danielbeeke/metalsmith-netlify-starter",
      site_domain: "https://steady-elf-b6eff1.netlify.app",
    },
    local_backend: {
      url: "http://localhost:3002/api/v1",
    },
    publish_mode: "editorial_workflow",
    media_folder: "src/assets/images",
    public_folder: "assets/images",
    collections: [pages, posts, data],
  },
});
