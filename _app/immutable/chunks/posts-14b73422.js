import{_ as t}from"./preload-helper-41c905a7.js";const l=async()=>{const s=Object.assign({"/posts/lead/burndown-cliff.md":()=>t(()=>import("./burndown-cliff-779a65e5.js"),["./burndown-cliff-779a65e5.js","./index-920be987.js"],import.meta.url),"/posts/lead/engineering-career.md":()=>t(()=>import("./engineering-career-a53dd04a.js"),["./engineering-career-a53dd04a.js","./index-920be987.js"],import.meta.url),"/posts/lead/how-to-manage-career.md":()=>t(()=>import("./how-to-manage-career-48d806f8.js"),["./how-to-manage-career-48d806f8.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/how-to-become-cto.md":()=>t(()=>import("./how-to-become-cto-3912e054.js"),["./how-to-become-cto-3912e054.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/leaders-managers-executives.md":()=>t(()=>import("./leaders-managers-executives-fbf893cf.js"),["./leaders-managers-executives-fbf893cf.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/let-them-fail.md":()=>t(()=>import("./let-them-fail-4ac38191.js"),["./let-them-fail-4ac38191.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/people-management-101.md":()=>t(()=>import("./people-management-101-b189f197.js"),["./people-management-101-b189f197.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/performance-vs-behaviour.md":()=>t(()=>import("./performance-vs-behaviour-20ee7846.js"),["./performance-vs-behaviour-20ee7846.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/the-five-ships-problem.md":()=>t(()=>import("./the-five-ships-problem-31fce1e6.js"),["./the-five-ships-problem-31fce1e6.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/types-of-meetings.md":()=>t(()=>import("./types-of-meetings-0e2e179f.js"),["./types-of-meetings-0e2e179f.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/what-makes-a-good-manager.md":()=>t(()=>import("./what-makes-a-good-manager-57fbae8f.js"),["./what-makes-a-good-manager-57fbae8f.js","./index-920be987.js"],import.meta.url),"/posts/lead/life-without-estimations.md":()=>t(()=>import("./life-without-estimations-a0ccc762.js"),["./life-without-estimations-a0ccc762.js","./index-920be987.js"],import.meta.url),"/posts/lead/the-estimations-trap.md":()=>t(()=>import("./the-estimations-trap-dbf56fcd.js"),["./the-estimations-trap-dbf56fcd.js","./index-920be987.js"],import.meta.url),"/posts/lead/when-to-stop-coding.md":()=>t(()=>import("./when-to-stop-coding-c35a6f4a.js"),["./when-to-stop-coding-c35a6f4a.js","./index-920be987.js"],import.meta.url),"/posts/tech/svelte-blog-images.md":()=>t(()=>import("./svelte-blog-images-86048d8d.js"),["./svelte-blog-images-86048d8d.js","./index-920be987.js"],import.meta.url),"/posts/tech/svelte-preprocessor.md":()=>t(()=>import("./svelte-preprocessor-1d57b5ac.js"),["./svelte-preprocessor-1d57b5ac.js","./index-920be987.js"],import.meta.url),"/posts/tech/this-site.md":()=>t(()=>import("./this-site-d0ab4c46.js"),["./this-site-d0ab4c46.js","./index-920be987.js"],import.meta.url)}),i=Object.assign({}),o=Object.entries(s).concat(Object.entries(i));return(await Promise.all(o.map(async([e,r])=>d(await r(),e)))).filter(e=>!e.draft).filter(e=>!e.path.includes("/ideas/")).sort((e,r)=>r.date.getTime()-e.date.getTime())},d=(s,i)=>{const{metadata:o={}}=s,a=(o.tags||[]).map(_=>_.toLowerCase()),e=new Date(Date.parse(o.date)||new Date),r=o.slug||i.replace(/(^\/posts\/)|(\.md(x)?$)/g,""),m=`http://kaievans.co/posts/${r}`;return{...o,tags:a,url:m,slug:r,date:e,path:i,get content(){return s.default}}};export{l as f};
