import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const t=document.querySelector(".feedback-form"),r=t.querySelector("textarea"),s=t.querySelector("input"),a="feedback-form-state";t.addEventListener("input",e=>{const l=e.currentTarget.elements.message.value.trim(),o=e.currentTarget.elements.email.value.trim(),n=JSON.stringify({text:l,email:o});localStorage.setItem(a,n)});t.addEventListener("submit",e=>{if(e.preventDefault(),r.value.length!==0&s.value.length!==0){const l=localStorage.getItem(a),o=JSON.parse(l);console.log(o),localStorage.removeItem(a),t.reset()}else alert("Please, fill all fields!")});const c=localStorage.getItem(a)??"";try{const e=JSON.parse(c);r.value=e.text,s.value=e.email}catch{console.log("No saved data")}
//# sourceMappingURL=commonHelpers2.js.map
