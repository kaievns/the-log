import{_ as t}from"./preload-helper-41c905a7.js";const p=async()=>{const r=Object.assign({"/posts/lead/burndown-cliff.md":()=>t(()=>import("./burndown-cliff-a4e5bc57.js"),["./burndown-cliff-a4e5bc57.js","./index-920be987.js"],import.meta.url),"/posts/lead/engineering-career.md":()=>t(()=>import("./engineering-career-38f2064d.js"),["./engineering-career-38f2064d.js","./index-920be987.js"],import.meta.url),"/posts/lead/how-to-manage-career.md":()=>t(()=>import("./how-to-manage-career-babbc1b8.js"),["./how-to-manage-career-babbc1b8.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/how-to-become-cto.md":()=>t(()=>import("./how-to-become-cto-3912e054.js"),["./how-to-become-cto-3912e054.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/leaders-managers-executives.md":()=>t(()=>import("./leaders-managers-executives-fbf893cf.js"),["./leaders-managers-executives-fbf893cf.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/the-five-ships-problem.md":()=>t(()=>import("./the-five-ships-problem-31fce1e6.js"),["./the-five-ships-problem-31fce1e6.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/what-makes-a-good-manager.md":()=>t(()=>import("./what-makes-a-good-manager-57fbae8f.js"),["./what-makes-a-good-manager-57fbae8f.js","./index-920be987.js"],import.meta.url),"/posts/lead/ideas/when-to-stop-coding.md":()=>t(()=>import("./when-to-stop-coding-0bf4656d.js"),["./when-to-stop-coding-0bf4656d.js","./index-920be987.js"],import.meta.url),"/posts/lead/life-without-estimations.md":()=>t(()=>import("./life-without-estimations-a3d39a56.js"),["./life-without-estimations-a3d39a56.js","./index-920be987.js"],import.meta.url),"/posts/lead/the-estimations-trap.md":()=>t(()=>import("./the-estimations-trap-0803d1cf.js"),["./the-estimations-trap-0803d1cf.js","./index-920be987.js"],import.meta.url),"/posts/tech/svelte-blog-images.md":()=>t(()=>import("./svelte-blog-images-86048d8d.js"),["./svelte-blog-images-86048d8d.js","./index-920be987.js"],import.meta.url),"/posts/tech/this-site.md":()=>t(()=>import("./this-site-d0ab4c46.js"),["./this-site-d0ab4c46.js","./index-920be987.js"],import.meta.url)}),a=Object.assign({}),o=Object.entries(r).concat(Object.entries(a));return(await Promise.all(o.map(async([e,s])=>d(await s(),e)))).filter(e=>!e.draft).filter(e=>!e.path.includes("/ideas/")).sort((e,s)=>s.date.getTime()-e.date.getTime())},d=(r,a)=>{const{metadata:o}=r,i=(o.tags||[]).map(_=>_.toLowerCase()),e=new Date(Date.parse(o.date)||new Date),s=o.slug||a.replace(/(^\/posts\/)|(\.md(x)?$)/g,""),m=`http://kaievans.co/posts/${s}`;return{...o,tags:i,url:m,slug:s,date:e,path:a,get content(){return r.default}}};export{p as f};