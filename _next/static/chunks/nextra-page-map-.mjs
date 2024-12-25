import meta from "../../../pages/_meta.ts";
import colorparser_meta from "../../../pages/colorparser/_meta.ts";
import crate_meta from "../../../pages/crate/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "404",
  route: "/404",
  frontMatter: {
    "sidebarTitle": "404"
  }
}, {
  name: "about",
  route: "/about",
  frontMatter: {
    "sidebarTitle": "About"
  }
}, {
  name: "colorparser",
  route: "/colorparser",
  children: [{
    data: colorparser_meta
  }, {
    name: "index",
    route: "/colorparser",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "installation",
    route: "/colorparser/installation",
    frontMatter: {
      "sidebarTitle": "Installation"
    }
  }, {
    name: "usage",
    route: "/colorparser/usage",
    frontMatter: {
      "sidebarTitle": "Usage"
    }
  }]
}, {
  name: "crate",
  route: "/crate",
  children: [{
    data: crate_meta
  }, {
    name: "advanced",
    route: "/crate/advanced",
    frontMatter: {
      "sidebarTitle": "Advanced"
    }
  }, {
    name: "basic_usage",
    route: "/crate/basic_usage",
    frontMatter: {
      "sidebarTitle": "Basic Usage"
    }
  }, {
    name: "file_formats",
    route: "/crate/file_formats",
    frontMatter: {
      "sidebarTitle": "File Formats"
    }
  }, {
    name: "index",
    route: "/crate",
    frontMatter: {
      "sidebarTitle": "Index"
    }
  }, {
    name: "installation",
    route: "/crate/installation",
    frontMatter: {
      "sidebarTitle": "Installation"
    }
  }, {
    name: "settings",
    route: "/crate/settings",
    frontMatter: {
      "sidebarTitle": "Settings"
    }
  }]
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}];