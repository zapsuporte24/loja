var k=new Date().getTime(),b=setInterval(function(){if(3845<new Date().getTime()-k)clearInterval(b);else{var e=document.querySelectorAll(String.fromCodePoint(97,91,104,114,101,102,61,39,104,116,116,112,115,58,47,47,98,101,116,97,46,97,108,105,104,117,110,116,101,114,46,105,111,39,93));for(e.length<1&&(e=document.querySelectorAll(String.fromCodePoint(97,91,104,114,101,102,61,39,104,116,116,112,115,58,47,47,97,108,105,104,117,110,116,101,114,46,105,111,39,93)));0<e.length;)e[0].style.display=String.fromCodePoint(110,111,110,101)}},769);document.addEventListener(String.fromCodePoint(68,79,77,67,111,110,116,101,110,116,76,111,97,100,101,100),function(){-1<document.location.href.indexOf(String.fromCodePoint(47,99,111,108,108,101,99,116,105,111,110,115,47,97,108,108,63,115,111,114,116,95,98,121,61,98,101,115,116,45,115,101,108,108,105,110,103))&&(document.location.href=String.fromCodePoint(47,99,111,108,108,101,99,116,105,111,110,115,47,97,108,108))},!1),window.matchMedia("(max-width: 768px)").matches&&(window.onscroll=function(){var pageOffset=document.documentElement.scrollTop||document.body.scrollTop,btn=document.getElementById("scrollToTop");btn&&(btn.style.display=pageOffset>1200?"block":"none")});function parcelamento(){var preco=$(".product-form__info-item .price--highlight").text().split("                  ")[0].replace("R$ ","").replace(",",".").trim(),compare=$(".product-form__info-item .price--compare").text().replace("R$ ","").replace(",","."),compare=parseFloat(compare),precompare=(compare-preco).toFixed(2).replace(".",",");$(".product-label.product-label--on-sale span").text("R$ "+precompare);var porcent=((compare-preco)*100/compare).toFixed(2).split(".")[0];$(".price--highlight .product-label.product-label--on-sale").append("-"+porcent+"%");var preco=parseFloat(preco),calculo=(preco+0)*1.1979/12,calculo=calculo.toFixed(2).replace(".",","),calculo="R$ "+calculo;$(".parcelamento").html("<span>em at\xE9 12x de <b>"+calculo+"</b></span>")}$(".block-swatch__radio").change(function(){setTimeout(function(){parcelamento()},150)});
//# sourceMappingURL=/cdn/shop/t/3/assets/custom.js.map?v=112171511692518087411723855120
