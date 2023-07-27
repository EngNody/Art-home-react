

// ===================================================
// copy menu for mobile
// ===================================================

function copymenu() {
  
  // copy inside .dpt-cat to .departments
  const dptCategory=document.querySelector('.dpt-cat')
  const dptPlace=document.querySelector('.departments')
  dptPlace.innerHTML = dptCategory.innerHTML;
  
  // copy inside nav to nav
  const mainNav=document.querySelector('.header-nav nav')
  const navPlace=document.querySelector('.off-canvas nav')
  navPlace.innerHTML = mainNav.innerHTML;
  
   // copy .header-top to .thetop-nav
  const topNav=document.querySelector('.header-top .wrapper')
  const topPlace=document.querySelector('.thetop-nav')
  topPlace.innerHTML = topNav.innerHTML;
  
  }
  
  copymenu()
  
  // ===========================================================
  // show mobile menu
  // ===========================================================
  
  const menuButton=document.querySelector('.trigger');
  const closeButton=document.querySelector('.t-close');
  const addclass=document.querySelector('.site');
  
  // function way
  menuButton.addEventListener('click',function() {
    addclass.classList.toggle('showmenu')
  })
  // another function way
  closeButton.addEventListener('click',(e) =>{
    e.preventDefault(); 
    addclass.classList.toggle('showmenu')
  })
  
  
  
  
  
  
  // ============================================================
  // add and remove classes with toggle - new method
  // ============================================================
  
  // show sub menu on mobile
  const submenu=document.querySelectorAll('.has-child .icon-small')
  submenu.forEach((menu) => menu.addEventListener('click',toggle));
  
  function toggle(e){
  e.preventDefault(); 
  
  submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand'):null);
  if (this.closest('.has-child').classList != 'expand') {
    this.closest('.has-child').classList.toggle('expand')
  }
  }
  
  
  // slider
  
  // const swiper = new Swiper('.swiper', {
  //   loop: true,
  
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  // });
  
  // ==================================================
  // search buttom
  // ==================================================
  
  const oursearch=document.querySelector(".t-search");
  const tclose=document.querySelector(".search-close");
  const showsearch=document.querySelector(".site");
  
  oursearch.addEventListener("click",() => {
    showsearch.classList.toggle("xxx");
  
    if (favmob.classList.contains="showfavmob") {
      favmob.classList.remove("showfavmob")
      wishlist.classList.remove("myheart")
  
    }
  })
  
  tclose.addEventListener("click",() => {
    showsearch.classList.remove("xxx");
  })
  
  // ========================================================
  // show menu
  // =======================================================
  
  const triggerbutton=document.querySelector('.dpt-cat .dpt-trigger') 
  const thesite=document.querySelector(".site")
  
  triggerbutton.addEventListener("click",(eo) => {
    eo.preventDefault();
  thesite.classList.toggle("showdpt");
  })
  
  
  // ==============================================================
  // product image slider ============ very important   
  // ==============================================================
  
  // const productThumb = new Swiper ('.small-image', {
  // loop: true,
  // spaceBetween: 10,
  // slidesPerView: 4,
  // freeMode: true,
  // watchSlidesProgress: true,
  // breakpoints: {
  //   481: {
  //     spaceBetween: 32,
  //   }
  // }
  // })
  
  // const productBig = new Swiper ('.big-image', {
  // loop: true,
  // autoHeight:true,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // thumbs: {
  //   swiper: productThumb,
  // },
  // })
  
  
  
  // ===========================================================
  // stock products bar width percentage
  // ===========================================================
  
  let stocks=document.querySelectorAll(".products .stock")
  for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock;
    
  available=stocks[x].querySelector(".qty-available").innerHTML;
  sold=stocks[x].querySelector(".qty-sold").innerHTML;
  percent=sold*100/stock;
  
  stocks[x].querySelector(".available").style.width = percent + `%`
  }
  
  
  
  
  // ====================================================================
  
  
  //========================   show mini cart   ========================
  
  // const iscart=document.querySelector(".iscart")
  // const minicart=document.querySelector(".mini-cart")
  
  
  // iscart.addEventListener("mouseover" , () => {
  //   minicart.classList.add("showlist")
  // })
  // iscart.addEventListener("mouseout" , () => {
  //   minicart.classList.remove("showlist")
  // })
  
  
  
  // ====================================================================
  // show cart on click
  // ====================================================================
  // ====================== way 1 ===============================

  const divtoshow=".mini-cart";
  const divpopup=document.querySelector(divtoshow);
  const divtrigger=document.querySelector(".cart-trigger");
  const itemnumbercart=document.querySelector(".cart-trigger .fly-item")
  
  divtrigger.addEventListener('click',(e) => {
    setTimeout(() => {
      if(!divpopup.classList.contains('show')) {
        divpopup.classList.add("show")
  // ********************************************   
      wishlist.classList.remove("myheart");
      showsearch.classList.remove("xxx");
      favmob.classList.remove("showfavmob");
      itemnumbercart.classList.add("dn");
      }
    }, 250);
      e.preventDefault();
  })
  // -------------- auto close by click outside .cart-trigger --------------
  
  document.addEventListener("click",(e) => {
  
    const isclosest=e.target.closest(divtoshow);
    if (!isclosest && divpopup.classList.contains('show')) {
      divpopup.classList.remove("show");
      itemnumbercart.classList.remove("dn");
  
    }
  })

    // ========================= way 2 =====================================

  //     const divpopup=document.querySelector(".mini-cart");
  // const divtrigger=document.querySelector(".cart-trigger");
  // const itemnumbercart=document.querySelector(".cart-trigger .fly-item")

  // divtrigger.addEventListener('click',(e) => {

  //     divpopup.classList.toggle("show")
  // // ****************************************
  //     wishlist.classList.remove("myheart");
  //     showsearch.classList.remove("xxx");
  //     favmob.classList.remove("showfavmob");
  //     itemnumbercart.classList.add("dn");
  // })
  //!!!!!!!!!!!! -------------- auto close by click outside .cart-trigger --------------

  // document.addEventListener("click",(e) => {
    // const divtoshow=".mini-cart";
  // const divpopup=document.querySelector(divtoshow);
  
    // if (divpopup.classList.contains('show')) {
      // divpopup.classList.toggle("show");
  
    // }
  // })

  
  // ==================================+========================================
  // my red heart
  //===========================================================================
  const wishlist=document.querySelector(".wishlist")
  
  wishlist.addEventListener("click",(eo) => {
    const favmob=document.querySelector(".favmob")
  eo.preventDefault()
  wishlist.classList.toggle("myheart")
  })
  
  // ========================================================================================================================
  //===== show mobile heart list when click on showlist 
  // ============================================================
  const favmob=document.querySelector(".favmob")
  const showlist=document.querySelector(".showlist")
  const wishlista=document.querySelector("#wishlista")
  
  wishlista.addEventListener("click",(eo) => {
    
  favmob.classList.toggle("showfavmob");
  
  if (showsearch.classList.contains="xxx") {
    showsearch.classList.remove("xxx")
  }
  })
  
  
  // ===============================================================
  // close X elements
  // ===============================================================
  
  // const closeminicart=document.querySelectorAll(".hide-class .closeminicart")
  const minicart=document.querySelector(".mini-cart")
  console.log(minicart)

  // const theminicart=document.querySelector(".mini-cart")

  
  
  // minicart.forEach(item => {
  // eo.target.parentElement.parentElement.style.display="none";
    minicart.addEventListener("click",(eo) => {
  
      if (eo.target.classList == "ri-close-line") {
  
    let theprice=Number(eo.target.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));
  
      thetotal.forEach(item => {
        let sum=Number(item.innerHTML.replace("$",""));
  
    if (sum>0) {
    let resum= (sum - theprice).toFixed(2)
      item.innerHTML =  `$ ${resum}`;
    }
      })
  // **************** delete disabled when close product from mini cart ***************************************
  const imgsrc=eo.target.parentElement.parentElement.querySelector(".object-cover a img").src;
  const allimg=document.querySelectorAll(".keybuy img");
  
  allimg.forEach(item => {
    const allimgsrc=item.src;
  
  if (imgsrc == allimgsrc) {
  const imgbuy=item.parentElement.parentElement.parentElement.parentElement
  const disablebuy=imgbuy.querySelector(".newbutton")
  disablebuy.removeAttribute("disabled")
  }
    })
// *******************************************************************
    if (minicart.classList.contains("show")) {
        eo.target.parentElement.parentElement.remove();
        eo.preventDefault()
      // ============= for show mob mini cart when press close item ====================
      setTimeout(() => {
          if(!divpopup.classList.contains('show')) {
            divpopup.classList.add("show")
          }
        }, 1); 
    }else{
      eo.target.parentElement.parentElement.remove();
    }
// ************************************************************************
          }
        })
      
  // =================== in cart page only=============================================
//   // ===================delete product from list=======================================
//   // ==================================================================================

const ricloseelement=document.querySelectorAll(".mini-cart .closeminicart")
console.log(ricloseelement)

setInterval(() => {
  const closeminicart=document.querySelectorAll(".mini-cart .closeminicart")

closeminicart.forEach(item => {
    item.addEventListener("click",(eo) => {
      eo.preventDefault();
const srcclickeditem=item.parentElement.querySelector("img").src
  console.log(srcclickeditem)
// {
  // // ========================= calc total ========================
    // let theprice=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".finaltotal").innerHTML.replace("$",""));
    // let theprice=Number(eo.target.parentElement.parentElement.querySelector("#thesumminicart").innerHTML);

    // let theprice=Number(eo.target.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));
    // console.log(theprice)
    // let theqty=Number(eo.target.parentElement.parentElement.querySelector("#theqtyminicart").value);
//     console.log(theqty)
//       const thecartproductsm=document.querySelectorAll(".thecartproducts img")
//       console.log(thecartproductsm)

// // console.log(thecartproducts)

// thecartproductsm.forEach(item => {
// const sss=item.src
// console.log(sss)

  
//   thetotal.forEach(item => {
// console.log(item)

// let sum=Number(item.innerHTML.replace("$",""));
// sum=Number(sum);
// console.log(sum)

//     if (srcclickeditem == sss) {
//     console.log(sss)
//     console.log(srcclickeditem)

//     const donesum=(theprice*theqty);
//     console.log(donesum)

//       item.innerHTML=(sum - donesum).toFixed(2);

//     let sum=Number(item.innerHTML.replace("$",""));
// sum=Number(sum);
// console.log(sum)
// // if (sum>0) {
// let resum= (sum - theprice).toFixed(2)
// item.innerHTML =  `$ ${resum}`;
// // }
    // }
// })

// });


// }
// });
    // }
// *****************************************************************
// ============================================================================================================
//============== delete elements from mini cart with quantity wanted that controled in list card + - ==========
// ============================================================================================================
// i write them inside plus and minus


// *****************************************************************
// ====================== Not Products found Yet !!! ===================================
  const allitemoneitem=document.querySelectorAll(".thecartproducts .oneitem");    
  const thecartproducts=document.querySelector(".thecartproducts");    
  
  if ((allitemoneitem.length) ==0) {
    thecartproducts.innerHTML=`<tr><td><h3>Not Products found Yet !!! <br> </h3></td></tr>`;
  }
  // ===================delete the same element from     ========================

allitemoneitem.forEach(item => {
  // =================== close another element =========================
      let srcminicart=item.querySelector("img").src;

if (srcminicart==srcclickeditem) {
  item.remove()
}

});
  // =========================================
    // ********************* delete product from mini cart ************************************
      // eo.target.parentElement.parentElement.parentElement.remove()

    })
  });
}, 1000);

  
  // ================================================================
  // component the cart
  // ================================================================
  
  
  const totaljs=document.querySelectorAll(".totaljs")
  
  
  totaljs.forEach(item => {
    
    setInterval(() => {
      const calccartbody=document.querySelector(".cart-body ul")
      const items=document.querySelectorAll(".cart-body ul .item")
    
      item.innerHTML=items.length;
      if (items.length=="") {
        calccartbody.innerHTML=`Not Products found Yet !!! <br> <br>`;
      }
    }, 100);  
  });
  
  // =====================================================================  
  // calc the total
  // =====================================================================
  
  const thetotal=document.querySelectorAll(".thetotal")
  const buybuttons=document.querySelectorAll(".newbutton")
  
  
  buybuttons.forEach(item => {
    
    item.addEventListener("click",(eo) => {
  
      eo.target.setAttribute("disabled","")
  
  // =======================================================================
  // create element in mini-cart page when press buy button
  // =======================================================================
  
  const nameitemminicart=eo.target.parentElement.parentElement.parentElement.querySelector("h3").innerText;
  const srcitemminicart00=eo.target.parentElement.parentElement.parentElement.querySelector("img");    
  const srcitemminicart=srcitemminicart00.src;    
  const priceitemminicart=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));    
  
  const itembornminicart=`
  <li class="item">
  <div class="thumbnail object-cover">
  <a href="#"><img src="${srcitemminicart}" alt=""></a>
  </div>
  <div class="item-content">
  <p><a href="#">${nameitemminicart}</a></p>
  <span class="price">
  <div>
    <span >$${priceitemminicart}</span>
    <span class="fly-item"><span>2X</span></span>
  </div>
  <input type="number" name="" id="theqtyminicart" min="1" value="1">
  <p id="thesumminicart" class="current">$${priceitemminicart}</p>

  </span>
  </div>
  <a href="#" class="item-remove closeminicart">
  <i class="ri-close-line"></i></a>
  </li>
  `;
  
  const calccartbody=document.querySelector(".cart-body ul")
  
  if (calccartbody.innerHTML=="Not Products found Yet !!! <br> <br>") {
    calccartbody.innerHTML = itembornminicart;
  
  }else{
    calccartbody.innerHTML += itembornminicart;
  
  }
  
  
  // =======================================================================
  // create <tr></tr> element in cart page when press buy button
  // =======================================================================
  
  const thecartproducts=document.querySelector(".thecartproducts")
      const nameitem=eo.target.parentElement.parentElement.parentElement.querySelector("h3 a").innerHTML;
      const srcitem=eo.target.parentElement.parentElement.parentElement.querySelector("img").src;    
      const priceitem=eo.target.parentElement.querySelector(".current").innerHTML;    
  
  
  const itemborn=`
  <tr class="oneitem">
  <td class="flexitem">
    <div class="thumbnail object-cover">
      <a href=""><img src="${srcitem}" alt=""></a>
    </div>
    <div class="content">
      <strong><a href="#"><h3>${nameitem}</h3></a></strong>
      <p>color:white</p>
    </div>
  </td>
  <td><span class="current">${priceitem}</span></td>
  
  <td>
    <div class="qty-control flexitem">
      <button class="minus">-</button>
      <input type="text" value="1" min="1" class="suminput" onkeydown="return false" disabled>
      <button class="plus">+</button>
    </div>
  </td>
  
  <td><span class="finaltotal">${priceitem}</span></td>
  
  <td><a href="#"><i class="ri-close-line ricloseelement"></i></a></td>
  </tr>
  `;
  
  if (thecartproducts.innerHTML=="<tr><td><h3>Not Products found Yet !!! <br> </h3></td></tr>") {
    thecartproducts.innerHTML = itemborn;
  
  }else{
    thecartproducts.innerHTML+=itemborn;
  }


  // =======================================================================
  // closee button 
  // =======================================================================
  
    const ricloseelementcreated=thecartproducts.querySelectorAll(".oneitem .ricloseelement")
  
  ricloseelementcreated.forEach(item => {
    item.addEventListener("click",(eo) => {
      eo.preventDefault();
      let srcclickeditem=eo.target.parentElement.parentElement.parentElement.querySelector("img").src;
  // for remove disable from buy
    const allcartssrc=document.querySelectorAll(".trending img");    
  allcartssrc.forEach(item => {
    const allcartssrcsss= item.src ;
  if (allcartssrcsss==srcclickeditem){
    item.parentElement.parentElement.parentElement.parentElement.querySelector(".newbutton").removeAttribute("disabled");
  }
    setTimeout(() => {
    const thecartproducts=document.querySelector(".thecartproducts")
    const oneitem=document.querySelectorAll(".oneitem")
  
    if (oneitem.length==0) {
      thecartproducts.innerHTML=`<tr><td><h3>Not Products found Yet !!! <br> </h3></td></tr>`;
    }
  }, 100);
  });
  // for remove element from mini-cart 
  const allitemminicart=document.querySelectorAll(".mini-cart .item");    
  allitemminicart.forEach(item => {
    let srcminicart=item.querySelector("img").src;
    console.log(srcminicart)
  
  if (srcminicart==srcclickeditem) {
    item.remove()
  }
  });

  // ================ for remove price deleted item from total price
  thetotal.forEach(item => {
    let theprice=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".finaltotal").innerHTML.replace("$","")).toFixed(2);
    console.log(theprice)
    let sum=Number(item.innerHTML.replace("$",""));
    let resum=(sum - Number(theprice)).toFixed(2)
    console.log(theprice)
    resum=Number(resum)
  item.innerHTML =  `$ ${resum}`;
      });

  //=================== for remove the element ========================================
  eo.target.parentElement.parentElement.parentElement.remove();

    })
  });
  
  // =======================================================================
  // plus and minus buttons
  // =======================================================================

// ********************** diffecult for use functions *******************************

//   const getnewqty = (eo) => {
//     // ========== change qty fir item mini cart when press plus
// setInterval(() => {
  
//   const gettheqty=Number(item.parentElement.querySelector(".suminput").value);
// console.log(gettheqty)
// const getthesrc=item.parentElement.parentElement.parentElement.querySelector("img").src;
// console.log(getthesrc)

// const theqtyminicart=document.querySelectorAll("#theqtyminicart")
// console.log(theqtyminicart)


// theqtyminicart.forEach(item => {
// const qtyclicked=Number(item.value)
//   console.log(qtyclicked)
//   const theqtyminicartsrc=item.parentElement.parentElement.parentElement.querySelector("img").src
//   console.log(theqtyminicartsrc)

// if (getthesrc==theqtyminicartsrc) {
//   console.log(item)
//   item.value=gettheqty
// }
// });
// }, 1000);

//   };

  const plus=document.querySelectorAll(".plus");
  const minus=document.querySelectorAll(".minus");
  

  // ================ plus ============================
  plus.forEach(item => {
    item.addEventListener("click",(eo) => {
      eo.preventDefault();
  let inputplus= Number(eo.target.parentElement.querySelector(".qty-control input").value);
  let doplus=inputplus+1;
  eo.target.parentElement.querySelector(".qty-control input").value=doplus;
  // ==================================================
  let theprice=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$","")).toFixed(2);
  // let theprice=Number(eo.target.parentElement.parentElement.parentElement.querySelector("#thesumminicart").innerHTML.replace("$","")).toFixed(2);
  let ourqty=Number(eo.target.parentElement.parentElement.querySelector(".qty-control input").value);
  let oursubtotal=(theprice*ourqty).toFixed(2);
  let finaltotal=eo.target.parentElement.parentElement.parentElement.querySelector(".finaltotal")
  // finaltotal.innerHTML=`$${oursubtotal}`
  finaltotal.innerHTML=oursubtotal;

// ================== change total when click plus ==========================
thetotal.forEach(item => {
  let sum=Number(item.innerHTML.replace("$",""));
  let resum=(sum + Number(theprice)).toFixed(2)
  resum=Number(resum)
item.innerHTML =  `$ ${resum}`;
    });
// ========== change qty fir item mini cart when press plus

setInterval(() => {
  
  let gettheqty=item.parentElement.querySelector(".suminput").value;
  gettheqty=Number(gettheqty)
const getthesrc=item.parentElement.parentElement.parentElement.querySelector("img").src;
const theqtyminicart=document.querySelectorAll("#theqtyminicart")

theqtyminicart.forEach(item => {
// const qtyclicked=Number(item.value)
  const theqtyminicartsrc=item.parentElement.parentElement.parentElement.querySelector("img").src

if (getthesrc==theqtyminicartsrc) {
  item.value=gettheqty
}
});

const thesumminicart=document.querySelectorAll("#thesumminicart")

thesumminicart.forEach(item => {

  const theqtyminicartsrc=item.parentElement.parentElement.parentElement.querySelector("img").src

  if (getthesrc==theqtyminicartsrc) {
   let writeprice=Number(theprice)

    item.innerHTML=(writeprice*gettheqty)
    
  }
});
}, 100);
    })
  });


  //============== minus ==============================
  minus.forEach(item => {
    item.addEventListener("click",(eo) => {
      eo.preventDefault()
    // ================== change total list when click minus ==========================
    let inputminus=  Number(eo.target.parentElement.querySelector(".qty-control input").value);
  let dominus=inputminus-1
  if (inputminus>1) {
    eo.target.parentElement.querySelector(".qty-control input").value=dominus
  // // ==================================================
  let theprice=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$","")).toFixed(2);
  let ourqty=Number(eo.target.parentElement.parentElement.querySelector(".qty-control input").value);
  const oursubtotal=(theprice*ourqty).toFixed(2);
  let finaltotal=eo.target.parentElement.parentElement.parentElement.querySelector(".finaltotal")
  
  finaltotal.innerHTML=`$${oursubtotal}`;

    // ================== change All totals when click minus ==========================
thetotal.forEach(item => {
  let theprice=Number(eo.target.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$","")).toFixed(2);
  console.log(theprice)
  let sum=Number(item.innerHTML.replace("$",""));
  let resum=(sum - Number(theprice)).toFixed(2)
  resum=Number(resum)
item.innerHTML = `$${resum}`;
    });
  }

// ========== change qty fir item mini cart when press minus ======================

setInterval(() => {
  
  const gettheqty=Number(item.parentElement.querySelector(".suminput").value);
const getthesrc=item.parentElement.parentElement.parentElement.querySelector("img").src;

const theqtyminicart=document.querySelectorAll("#theqtyminicart")


theqtyminicart.forEach(item => {
  const theqtyminicartsrc=item.parentElement.parentElement.parentElement.querySelector("img").src

if (getthesrc==theqtyminicartsrc) {
  item.value=gettheqty

}
});



// const getthefinal=Number(item.parentElement.parentElement.parentElement.querySelector(".finaltotal").innerHTML);
// const thesumminicart=document.querySelectorAll("#thesumminicart")
// thesumminicart.forEach(item => {
//   Number(item)
//   const theqtyminicartsrc=item.parentElement.parentElement.parentElement.querySelector("img").src
//   if (getthesrc==theqtyminicartsrc) {
//     item.innerHTML=Number(getthefinal)
//     let itemthesumminicart=Number(item.parentElement.parentElement.parentElement.querySelector("#thesumminicart").innerHTML);
//     console.log(itemthesumminicart)
    
//   }
// });
}, 100);
  
})
  });
  
  // ==================================================================================================================
  // =================  the total different between cart page and other pages =========================================
  // ==================================================================================================================
      thetotal.forEach(item => {
        // ====================== All pages =============================


        let theprice=Number(eo.target.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));
        console.log(theprice)

        let sum=Number(item.innerHTML.replace("$",""));
        let resum=(sum + theprice).toFixed(2)
  
        resum=Number(resum)
      
      item.innerHTML =  `$ ${resum}`;
      
  //     // ======================== cart page only !!!!!!!!!!! false !!!!!!!!!!!!!!!!!!! ===================================
  // let ourqty=Number(eo.target.parentElement.parentElement.querySelector(".qty-control input").value);
  //     const oursubtotal=(resum*ourqty)
  //     // const oursubtotal2=Math.round(oursubtotal)
  //     let finaltotal=eo.target.parentElement.parentElement.querySelector(".finaltotal")
      
  //     finaltotal.innerHTML=`$${oursubtotal}`
  //     item.innerHTML =`$ ${oursubtotal}`;
  
  // =======================================================================
  })
  })
      });
  
  
  
  // *****************************************************
  
  
  
    // ====================================================================
  // ========================================================================
  
  
  // =============================================================================
  //                page offer   -  write a review                           
  // =============================================================================
  
  
  
  const ratethis=document.querySelector(".rate-this")
  const namereview=document.querySelector(".namereview")
  const summaryreview=document.querySelector(".summaryreview")
  const textareareview=document.querySelector(".textareareview")
  const reviewblockbody=document.querySelector(".review-block-body")
  const newreview=document.querySelector("#newreview");
  
  
  
  // newreview.addEventListener("click",(eo) => {
  //   eo.preventDefault()
  
  //   let d=new Date()
  //   let time=d.getDate()
  //   let month=d.getMonth()
  //   let year=d.getFullYear()
  
  // const creatnewreview=`
  // <li class="item">
  // <div class="review-form">
  //   <p class="person">${namereview.value}</p>
  //   <p class="mini-text">On ${time}/${month}/${year}</p>
  // </div>
  // <div class="review-rating rating">
  // <div class="stars"></div>
  
  // </div>
  // <div class="review-title">
  //   <p>${summaryreview.value}</p>
  // </div>
  // <div class="review-taxt">
  //   <p>${textareareview.value}</p>
  // </div>
  // </li>
  // `;
  
  // reviewblockbody.innerHTML+=creatnewreview;
  
  // setTimeout(() => {
  //   console.log(namereview.value)
  //   console.log(summaryreview.value)
  //   console.log(textareareview.value) 
  //   console.log(ratethis.innerHTML)
  // }, 1000);
  
  // })
  
  // =====================================
  // add ri-heart-line 
  // =====================================
  const favnumber=document.querySelectorAll(".item-number-heart");
  const favnumbermob=document.querySelectorAll(".item-number-heart-mob");
  const checkheart=document.querySelectorAll(".contentheart")
  // const ourheart=document.querySelectorAll(".item .hoverable li a i.ri-heart-line")
  const ourheart=document.querySelectorAll(".item .hoverable li.active")

  
  // ================== chang number items ==========================================
  // web-mode
  setInterval(() => {
    const ulcheckheartitems=document.querySelector(".contentheart");
    const checkheartitems=ulcheckheartitems.querySelectorAll(".contentheart .item");
  let favlength=Number(checkheartitems.length)
  favnumber.forEach(item => {
    item.innerHTML=favlength
  }, 100);
  
  // mobile-mode
  const checkheartitemsmob=document.querySelectorAll(".favmob .contentheart .item");
  let favlengthmob=Number(checkheartitemsmob.length)
  favnumbermob.forEach(item => {
    item.innerHTML=favlengthmob
  });
  });
  
  
  // =================== the content text =======================================
  
  checkheart.forEach(item => {
    item.innerHTML="Not Products Favorite Found Yet !!! <br>";
  
  });
  // ================== when click for each heart ==================================================
  
  ourheart.forEach(item => {
    
  item.addEventListener("click",(eo) => {
  eo.preventDefault();
  
  eo.target.classList.toggle("primary-color")
  
    const nameitemminicart=eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("h3").innerText;
  const srcitemminicart=eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("img").src;    
  const priceitemminicart=Number(eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".current").innerHTML.replace("$",""));    
  
  const ourheartitem=`
  <li class="item favitems">
  <div class="thumbnail object-cover">
  <a href="#"><img src="${srcitemminicart}" alt=""></a>
  </div>
  <div class="item-content">
  <p><div>${nameitemminicart}</div></p>
  <span class="price">
  <div>
    <span class="current">$${priceitemminicart}</span>
    <span class="fly-item"><span>2X</span></span>
  </div>
  </span>
  </div>
  <a href="#" class="item-remove closeminicart">
  <i class="ri-close-line"></i></a>
  </li>
  `;
  
  // ============= Not Products Favorite Found Yet !!! <br> =========================
  checkheart.forEach(item => {
    if (eo.target.classList=="ri-heart-line primary-color") {
  
      if (item.innerHTML=="Not Products Favorite Found Yet !!! <br>") {
        item.innerHTML = ourheartitem;
      }
      else{
        item.innerHTML += ourheartitem;
      }};
  });
  
  setInterval(() => {
    const checkheartitems=document.querySelectorAll(".contentheart .item");
    if (checkheartitems.length == 0){
      checkheart.forEach(item => {
        item.innerHTML="Not Products Favorite Found Yet !!! <br>";
      });
    }
  }, 1000);
  // ===================== remove element from mini cart===================================
    if(eo.target.classList=="ri-heart-line"){
  
  const favitems=document.querySelectorAll(".favitems img");
  
  favitems.forEach(item => {
  const hisrc=item.src
  
  if (hisrc == srcitemminicart) {
    item.parentElement.parentElement.parentElement.remove();
  
  }
  });
  }
  })
  });
  // ============= close favorate heart from cart favorate ===========
  setInterval(() => {
    const allfavclose=document.querySelectorAll(".favitems .ri-close-line")
  // ========== remove the element================
  allfavclose.forEach(item => {
    item.addEventListener("click",(eo) => {
  eo.preventDefault();
  
      // ================ remove the same item
      eo.target.parentElement.parentElement.remove();
  
  // ========== remove the color from main heart =================
  const itemimgcartfav= eo.target.parentElement.parentElement.querySelector("img").src;
  const mainitemsimgpage=document.querySelectorAll(".keybuy .item img");
  
  mainitemsimgpage.forEach(item => {
    const ouritemsrc=item.src;
  
    if (itemimgcartfav == ouritemsrc) {
      item.parentElement.parentElement.parentElement.querySelector(".ri-heart-line").classList.remove("primary-color");
    }
  });
  // ================================= remove mob item when click web item
  // ================================= remove mob item minicart when click web item minicart
  const itemimgcartfavmob=document.querySelectorAll(".favmob .item img");
  
  itemimgcartfavmob.forEach(item => {
    const ouritemsrcmob=item.src;
  
    if (itemimgcartfav == ouritemsrcmob) {
    item.parentElement.parentElement.parentElement.remove();
    }
  
  });
  
  // // // ================================= remove web item when click mob item
  // // // ================================= remove web item minicart when click mob item minicart
  
  const itemimgcartfavweb=document.querySelectorAll(".minicartheart .item img");
  
  itemimgcartfavweb.forEach(item => {
    const ouritemsrcweb=item.src;
  
    if ( itemimgcartfav == ouritemsrcweb) {
    item.parentElement.parentElement.parentElement.remove();
    }
  
  });
    })
  });
  }, 1000);
  
  // ==================================================================================
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // =============================================================
  // show sub menu on mobile
  // for add expand without toggle
  // ?????????????????????????????????????????????????????????????
  // =============================================================
  
  // const submenu=document.querySelectorAll('.has-child .icon-small')
  // // submenu.forEach((menu) => menu.addEventListener('click',toggle));
  // submenu.forEach(item => {
  
  //   item.addEventListener('click',() => {
      
  // const ourchilds=document.querySelectorAll('.off-canvas .has-child')
  // for (let i = 0; i < ourchilds.length; i++) {
  //   const element = ourchilds[i];
  //   element.classList.remove("expand");
  // }
  
  // item.parentElement.parentElement.classList.toggle('expand');
  //       item.parentElement.parentElement.style.color='red'
  
  // // if (item.classList.contains('expand')) {
  // //   item.classList.remove('expand')
  // //       item.style.color='red'
  
  // // }
  //   })
  // });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //     // const nameitem=eo.target.parentElement.parentElement.parentElement.querySelector("h1").innerText;
  //     // const srcitem=eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("img").src;    
  //     