function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o),o.register("kyEFX",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.0ffad7d2.js","8OQ7p":"icons.8e27432b.svg","4olzs":"emptyBook.9d82d098.png","5UbS1":"index.dfcaf1b4.css","4l2W5":"index.7d0daddd.js"}')),o("dTazW"),o("nIDCB"),o("dLm4j");var i,s=o("2dy3d");i=new URL(o("kyEFX").resolve("8OQ7p"),import.meta.url).toString();const l=new URL(i);var a;a=new URL(o("kyEFX").resolve("4olzs"),import.meta.url).toString();const p=new URL(a),c=document.querySelector(".shopingList"),g=localStorage.getItem("arrey");let u=JSON.parse(g);c.addEventListener("click",(function(e){let n=e.target.dataset.id;if("shoppinglist_btn-icon"===e.target.parentElement.classList.value&&f.includes(n)){let e=f.indexOf(n);f.splice(e,1);const t=JSON.stringify(f);localStorage.setItem("arrey",t),c.innerHTML="",h(JSON.parse(t)),f.length<1&&(c.innerHTML="",c.innerHTML=`<p class="empty-book-text"> \n    This page is empty, add some books and proceed to order. \n  </p> \n  <img \n    class="empty-book-page" \n    src="${p}" \n    alt="The page is emrty" \n  />`)}}));localStorage.getItem("arrey");let d=localStorage.getItem("arrey"),f=JSON.parse(d);function h(e){e.map((e=>{new(0,s.getBookData)(e=`${e}`).getPromId().then((({list_name:e,author:n,title:t,book_image:r,description:o,buy_links:i,_id:s})=>{function a(e){const n=i;for(let t=0;t<n.length;t+=1){if(n[t].name===`${e}`)return n[t].url;n[t].name}}return`\n<li class="shoppinglist_item data-id="${s}">\n    <div class="shoppinglist_img-container">\n        <img class="shoppinglist_img" src="${r}" alt="" />\n        <p class="shoppinglist_authorM">${n}</p>\n    </div>\n    <div class="shoppinglist_info">\n        <h2 class="shoppinglist_title">${t}</h2>\n        <p class="shoppinglist_category">\n            ${e}\n        </p>\n    </div>\n    <ul class="shoppinglistlink_list">\n        <li>\n            <a href="${a("Amazon")}" target="_blank" rel="noopener noreferrer">\n                <svg fill="none" width="55" height="60">\n                        <use href="${l}#icon-amazon-ar21"></use>\n                    </svg>\n            </a>\n        </li>\n        <li>\n            <a href="${a("Apple Books")}" target="_blank" rel="noopener noreferrer">\n                <svg width="28" height="27" fill="none">\n                        <use href="${l}#icon-apple-ibooks"></use>\n                    </svg>\n            </a>\n        </li>\n        <li>\n            <a href="${a("Bookshop")}" target="_blank" rel="noopener noreferrer">\n                <svg width="32" height="32">\n                        <use href="${l}#icon-14008711"></use>\n                    </svg>\n            </a>\n        </li>\n    </ul>\n    <p class="shoppinglist_desc">\n        ${o}\n    </p>\n    <p class="shoppinglist_author">${n}</p>\n    <button class="shoppinglist_btn type="button">\n        <svg class="shoppinglist_btn-icon">\n            <use href="${l}#icon-dump-1" class="removecard" data-id="${s}"></use>\n        </svg>\n    </button>\n</li>\n   `})).then((e=>{c.insertAdjacentHTML("beforeend",e)}))}))}console.log(f.length),h(u);
//# sourceMappingURL=shopping-list.0ffad7d2.js.map
