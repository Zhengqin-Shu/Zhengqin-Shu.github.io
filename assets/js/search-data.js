// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-aps-dfd-2025",
        
          title: "APS DFD 2025",
        
        description: "My first presentation at an academic conference.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/APS-DFD-2025/";
          
        },
      },{id: "post-internship-at-caltech",
        
          title: "Internship at Caltech",
        
        description: "Hi, Pasadena!",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Internship-at-Caltech/";
          
        },
      },{id: "post-icces-2025",
        
          title: "ICCES 2025",
        
        description: "The first academic conference I attended.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ICCES-2025/";
          
        },
      },{id: "post-the-6th-tsinghua-university-student-magic-gala-lt-em-gt-marvels-and-oddities-lt-em-gt",
        
          title: "The 6th Tsinghua University Student Magic Gala: &lt;em&gt; Marvels and Oddities &lt;/em&gt;",
        
        description: "My first stage-manager experience.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/6-Magic-Gala/";
          
        },
      },{id: "post-tsinghua-39-s-2024-new-year-gala",
        
          title: "Tsinghua&#39;s 2024 New Year Gala",
        
        description: "My craziest magic show,  Departure , an original 15-minute show for an audience of over 2,000.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/New-Year-Gala/";
          
        },
      },{id: "post-the-5th-tsinghua-university-student-magic-gala-lt-em-gt-into-the-wondrous-way-lt-em-gt",
        
          title: "The 5th Tsinghua University Student Magic Gala: &lt;em&gt; Into the Wondrous Way &lt;/em&gt;...",
        
        description: "My first director experience.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/5-Magic-Gala/";
          
        },
      },{id: "post-tsinghua-39-s-2023-freshman-welcome-gala",
        
          title: "Tsinghua&#39;s 2023 Freshman Welcome Gala",
        
        description: "My first large-scale stage show,  Spring of Ten Thousand Woods , presented to all the Class of 2023 freshmen at Tsinghua.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/Freshman-Welcome-Gala/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV%20Zhengqin%20Shu.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%73%68%75@%63%61%6C%74%65%63%68.%65%64%75", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=t9yYw6cAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
