import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const e=document.querySelector(".feedback-form"),a=e.querySelector("textarea"),r=e.querySelector("input"),n="feedback-form-state";e.addEventListener("input",s=>{const l=a.value.trim(),o=r.value.trim(),c=JSON.stringify({text:l,email:o});localStorage.setItem(n,c)});const i=localStorage.getItem(n),t=JSON.parse(i);t!==null&&(a.value=t.text,r.value=t.email);e.addEventListener("submit",s=>{s.preventDefault();const l=a.value.trim(),o=r.value.trim();l.length>0&o.length>0?(console.log(t),localStorage.removeItem(n),e.reset()):console.log("please fill all field")});
//# sourceMappingURL=commonHelpers2.js.map
