/*
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var az,Q=this,Y,ak,v,am,T,Z,y,q,aA,aF,av,i,I,h,j,aa,U,aq,X,t,A,ar,af,an,G,l,au,ay,x,aw,aI,f,L,aj=true,P=true,aH=false,k=false,ap=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aI=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function at(aR){var aM,aO,aN,aK,aJ,aQ,aP=false,aL=false;az=aR;if(Y===c){aJ=D.scrollTop();aQ=D.scrollLeft();D.css({overflow:"hidden",padding:0});ak=D.innerWidth()+f;v=D.innerHeight();D.width(ak);Y=b('<div class="jspPane" />').css("padding",aI).append(D.children());am=b('<div class="jspContainer" />').css({width:ak+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aP=az.stickToBottom&&K();aL=az.stickToRight&&B();aK=D.innerWidth()+f!=ak||D.outerHeight()!=v;if(aK){ak=D.innerWidth()+f;v=D.innerHeight();am.css({width:ak+"px",height:v+"px"})}if(!aK&&L==T&&Y.outerHeight()==Z){D.width(ak);return}L=T;Y.css("width","");D.width(ak);am.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aR.contentWidth){T=aR.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/ak;q=Z/v;aA=q>1;aF=y>1;if(!(aF||aA)){D.removeClass("jspScrollable");Y.css({top:0,width:am.width()-f});n();E();R();w();ai()}else{D.addClass("jspScrollable");aM=az.maintainPosition&&(I||aa);if(aM){aO=aD();aN=aB()}aG();z();F();if(aM){N(aL?(T-ak):aO,false);M(aP?(Z-v):aN,false)}J();ag();ao();if(az.enableKeyboardNavigation){S()}if(az.clickOnTrack){p()}C();if(az.hijackInternalLinks){m()}}if(az.autoReinitialise&&!aw){aw=setInterval(function(){at(az)},az.autoReinitialiseDelay)}else{if(!az.autoReinitialise&&aw){clearInterval(aw)}}aJ&&D.scrollTop(0)&&M(aJ,false);aQ&&D.scrollLeft(0)&&N(aQ,false);D.trigger("jsp-initialised",[aF||aA])}function aG(){if(aA){am.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=am.find(">.jspVerticalBar");aq=U.find(">.jspTrack");av=aq.find(">.jspDrag");if(az.showArrows){ar=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aE(0,-1)).bind("click.jsp",aC);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aE(0,1)).bind("click.jsp",aC);if(az.arrowScrollOnHover){ar.bind("mouseover.jsp",aE(0,-1,ar));af.bind("mouseover.jsp",aE(0,1,af))}al(aq,az.verticalArrowPositions,ar,af)}t=v;am.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});av.hover(function(){av.addClass("jspHover")},function(){av.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);av.addClass("jspActive");var s=aJ.pageY-av.position().top;b("html").bind("mousemove.jsp",function(aK){V(aK.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});o()}}function o(){aq.height(t+"px");I=0;X=az.verticalGutter+aq.outerWidth();Y.width(ak-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aF){am.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));an=am.find(">.jspHorizontalBar");G=an.find(">.jspTrack");h=G.find(">.jspDrag");if(az.showArrows){ay=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aE(-1,0)).bind("click.jsp",aC);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aE(1,0)).bind("click.jsp",aC);
if(az.arrowScrollOnHover){ay.bind("mouseover.jsp",aE(-1,0,ay));x.bind("mouseover.jsp",aE(1,0,x))}al(G,az.horizontalArrowPositions,ay,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);h.addClass("jspActive");var s=aJ.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aK){W(aK.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});l=am.innerWidth();ah()}}function ah(){am.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aF&&aA){var aJ=G.outerHeight(),s=aq.outerWidth();t-=aJ;b(an).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;ak-=aJ;G.parent().append(b('<div class="jspCorner" />').css("width",aJ+"px"));o();ah()}if(aF){Y.width((am.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aF){au=Math.ceil(1/y*l);if(au>az.horizontalDragMaxWidth){au=az.horizontalDragMaxWidth}else{if(au<az.horizontalDragMinWidth){au=az.horizontalDragMinWidth}}h.width(au+"px");j=l-au;ae(aa)}if(aA){A=Math.ceil(1/q*t);if(A>az.verticalDragMaxHeight){A=az.verticalDragMaxHeight}else{if(A<az.verticalDragMinHeight){A=az.verticalDragMinHeight}}av.height(A+"px");i=t-A;ad(I)}}function al(aK,aM,aJ,s){var aO="before",aL="after",aN;if(aM=="os"){aM=/Mac/.test(navigator.platform)?"after":"split"}if(aM==aO){aL=aM}else{if(aM==aL){aO=aM;aN=aJ;aJ=s;s=aN}}aK[aO](aJ)[aL](s)}function aE(aJ,s,aK){return function(){H(aJ,s,this,aK);this.blur();return false}}function H(aM,aL,aP,aO){aP=b(aP).addClass("jspActive");var aN,aK,aJ=true,s=function(){if(aM!==0){Q.scrollByX(aM*az.arrowButtonSpeed)}if(aL!==0){Q.scrollByY(aL*az.arrowButtonSpeed)}aK=setTimeout(s,aJ?az.initialDelay:az.arrowRepeatFreq);aJ=false};s();aN=aO?"mouseout.jsp":"mouseup.jsp";aO=aO||b("html");aO.bind(aN,function(){aP.removeClass("jspActive");aK&&clearTimeout(aK);aK=null;aO.unbind(aN)})}function p(){w();if(aA){aq.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageY-aP.top-I,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageY-aS.top-A/2,aQ=v*az.scrollPagePercent,aR=i*aQ/(Z-v);if(aN<0){if(I-aR>aT){Q.scrollByY(-aQ)}else{V(aT)}}else{if(aN>0){if(I+aR<aT){Q.scrollByY(aQ)}else{V(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}if(aF){G.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageX-aP.left-aa,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageX-aS.left-au/2,aQ=ak*az.scrollPagePercent,aR=j*aQ/(T-ak);if(aN<0){if(aa-aR>aT){Q.scrollByX(-aQ)}else{W(aT)}}else{if(aN>0){if(aa+aR<aT){Q.scrollByX(aQ)}else{W(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(aq){aq.unbind("mousedown.jsp")}}function ax(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(av){av.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aJ){if(!aA){return}if(s<0){s=0}else{if(s>i){s=i}}if(aJ===c){aJ=az.animateScroll}if(aJ){Q.animate(av,"top",s,ad)}else{av.css("top",s);ad(s)}}function ad(aJ){if(aJ===c){aJ=av.position().top}am.scrollTop(0);I=aJ;var aM=I===0,aK=I==i,aL=aJ/i,s=-aL*(Z-v);if(aj!=aM||aH!=aK){aj=aM;aH=aK;D.trigger("jsp-arrow-change",[aj,aH,P,k])}u(aM,aK);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aM,aK]).trigger("scroll")}function W(aJ,s){if(!aF){return}if(aJ<0){aJ=0}else{if(aJ>j){aJ=j}}if(s===c){s=az.animateScroll}if(s){Q.animate(h,"left",aJ,ae)
}else{h.css("left",aJ);ae(aJ)}}function ae(aJ){if(aJ===c){aJ=h.position().left}am.scrollTop(0);aa=aJ;var aM=aa===0,aL=aa==j,aK=aJ/j,s=-aK*(T-ak);if(P!=aM||k!=aL){P=aM;k=aL;D.trigger("jsp-arrow-change",[aj,aH,P,k])}r(aM,aL);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aM,aL]).trigger("scroll")}function u(aJ,s){if(az.showArrows){ar[aJ?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aJ,s){if(az.showArrows){ay[aJ?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aJ){var aK=s/(Z-v);V(aK*i,aJ)}function N(aJ,s){var aK=aJ/(T-ak);W(aK*j,s)}function ab(aW,aR,aK){var aO,aL,aM,s=0,aV=0,aJ,aQ,aP,aT,aS,aU;try{aO=b(aW)}catch(aN){return}aL=aO.outerHeight();aM=aO.outerWidth();am.scrollTop(0);am.scrollLeft(0);while(!aO.is(".jspPane")){s+=aO.position().top;aV+=aO.position().left;aO=aO.offsetParent();if(/^body|html$/i.test(aO[0].nodeName)){return}}aJ=aB();aP=aJ+v;if(s<aJ||aR){aS=s-az.verticalGutter}else{if(s+aL>aP){aS=s-v+aL+az.verticalGutter}}if(aS){M(aS,aK)}aQ=aD();aT=aQ+ak;if(aV<aQ||aR){aU=aV-az.horizontalGutter}else{if(aV+aM>aT){aU=aV-ak+aM+az.horizontalGutter}}if(aU){N(aU,aK)}}function aD(){return -Y.position().left}function aB(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aB()<10)}function B(){var s=T-ak;return(s>20)&&(s-aD()<10)}function ag(){am.unbind(ac).bind(ac,function(aM,aN,aL,aJ){var aK=aa,s=I;Q.scrollBy(aL*az.mouseWheelSpeed,-aJ*az.mouseWheelSpeed,false);return aK==aa&&s==I})}function n(){am.unbind(ac)}function aC(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aJ,aL=[];aF&&aL.push(an[0]);aA&&aL.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aO){if(aO.target!==this&&!(aL.length&&b(aO.target).closest(aL).length)){return}var aN=aa,aM=I;switch(aO.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aO.keyCode;aK();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aJ=aO.keyCode==s&&aN!=aa||aM!=I;return !aJ}).bind("keypress.jsp",function(aM){if(aM.keyCode==s){aK()}return !aJ});if(az.hideFocus){D.css("outline","none");if("hideFocus" in am[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in am[0]){D.attr("hideFocus",false)}}function aK(){var aN=aa,aM=I;switch(s){case 40:Q.scrollByY(az.keyboardSpeed,false);break;case 38:Q.scrollByY(-az.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*az.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*az.scrollPagePercent,false);break;case 39:Q.scrollByX(az.keyboardSpeed,false);break;case 37:Q.scrollByX(-az.keyboardSpeed,false);break}aJ=aN!=aa||aM!=I;return aJ}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aL,aJ,aK=escape(location.hash);try{aL=b(aK)}catch(s){return}if(aL.length&&Y.find(aK)){if(am.scrollTop()===0){aJ=setInterval(function(){if(am.scrollTop()>0){ab(aK,true);b(document).scrollTop(am.position().top);clearInterval(aJ)}},50)}else{ab(aK,true);b(document).scrollTop(am.position().top)}}}}function ai(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function m(){ai();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var s=this.href.split("#"),aJ;if(s.length>1){aJ=s[1];if(aJ.length>0&&Y.find("#"+aJ).length>0){ab("#"+aJ,true);return false}}})}function ao(){var aK,aJ,aM,aL,aN,s=false;am.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aO){var aP=aO.originalEvent.touches[0];aK=aD();aJ=aB();aM=aP.pageX;aL=aP.pageY;aN=false;s=true}).bind("touchmove.jsp",function(aR){if(!s){return}var aQ=aR.originalEvent.touches[0],aP=aa,aO=I;Q.scrollTo(aK+aM-aQ.pageX,aJ+aL-aQ.pageY);aN=aN||Math.abs(aM-aQ.pageX)>5||Math.abs(aL-aQ.pageY)>5;
return aP==aa&&aO==I}).bind("touchend.jsp",function(aO){s=false}).bind("click.jsp-touchclick",function(aO){if(aN){aN=false;return false}})}function g(){var s=aB(),aJ=aD();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ap.append(Y.children()));ap.scrollTop(s);ap.scrollLeft(aJ)}b.extend(Q,{reinitialise:function(aJ){aJ=b.extend({},az,aJ);at(aJ)},scrollToElement:function(aK,aJ,s){ab(aK,aJ,s)},scrollTo:function(aK,s,aJ){N(aK,aJ);M(s,aJ)},scrollToX:function(aJ,s){N(aJ,s)},scrollToY:function(s,aJ){M(s,aJ)},scrollToPercentX:function(aJ,s){N(aJ*(T-ak),s)},scrollToPercentY:function(aJ,s){M(aJ*(Z-v),s)},scrollBy:function(aJ,s,aK){Q.scrollByX(aJ,aK);Q.scrollByY(s,aK)},scrollByX:function(s,aK){var aJ=aD()+Math[s<0?"floor":"ceil"](s),aL=aJ/(T-ak);W(aL*j,aK)},scrollByY:function(s,aK){var aJ=aB()+Math[s<0?"floor":"ceil"](s),aL=aJ/(Z-v);V(aL*i,aK)},positionDragX:function(s,aJ){W(s,aJ)},positionDragY:function(aJ,s){V(aJ,s)},animate:function(aJ,aM,s,aL){var aK={};aK[aM]=s;aJ.animate(aK,{duration:az.animateDuration,easing:az.animateEase,queue:false,step:aL})},getContentPositionX:function(){return aD()},getContentPositionY:function(){return aB()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aD()/(T-ak)},getPercentScrolledY:function(){return aB()/(Z-v)},getIsScrollableH:function(){return aF},getIsScrollableV:function(){return aA},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:function(){m()},destroy:function(){g()}});at(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);

(function(f){function n(b,c){function d(){var g,b,e,c,d,f=!1;a.thumbInnerContainer.unbind("touchstart.ap touchmove.ap touchend.ap click.ap-touchclick").bind("touchstart.ap",function(k){if(!a._componentInited)return!1;if(!a.touchOn)return!0;k=k.originalEvent.touches[0];g=a.thumbInnerContainer.position().left;b=a.thumbInnerContainer.position().top;e=k.pageX;c=k.pageY;d=!1;f=!0}).bind("touchmove.ap",function(k){if(f){k=k.originalEvent.touches[0];var h;"horizontal"==a._thumbOrientation?(h=g-e+k.pageX, h>a._thumbBackwardSize?h=a._thumbBackwardSize:h<a._getComponentSize("w")-a.thumbInnerContainerSize-a._thumbForwardSize&&(h=a._getComponentSize("w")-a.thumbInnerContainerSize-a._thumbForwardSize),a.thumbInnerContainer.css("left",h+"px")):(h=b-c+k.pageY,h>a._thumbBackwardSize?h=a._thumbBackwardSize:h<a._getComponentSize("h")-a.thumbInnerContainerSize-a._thumbForwardSize&&(h=a._getComponentSize("h")-a.thumbInnerContainerSize-a._thumbForwardSize),a.thumbInnerContainer.css("top",h+"px"));d=d||5<Math.abs(e- k.pageX)||5<Math.abs(c-k.pageY);return!1}}).bind("touchend.ap",function(a){f=!1}).bind("click.ap-touchclick",function(a){if(d)return d=!1})}this._componentInited=!1;var a=this;this.settings=f.extend({},f.fn.thumbGallery.defaults,c);this.isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);a.ic_thumb_forward="data/icons/thumb_forward.png";a.ic_thumb_forward_on="data/icons/thumb_forward_on.png";a.ic_thumb_backward="data/icons/thumb_backward.png";a.ic_thumb_backward_on="data/icons/thumb_backward_on.png"; a.ic_thumb_forward_v="data/icons/thumb_forward_v.png";a.ic_thumb_forward_v_on="data/icons/thumb_forward_v_on.png";a.ic_thumb_backward_v="data/icons/thumb_backward_v.png";a.ic_thumb_backward_v_on="data/icons/thumb_backward_v_on.png";this._upEvent=this._moveEvent=this._downEvent="";this.hasTouch;this.touchOn=!0;"ontouchstart"in window?(this.hasTouch=!0,this._downEvent="touchstart.ap",this._moveEvent="touchmove.ap",this._upEvent="touchend.ap"):(this.hasTouch=!1,this._downEvent="mousedown.ap",this._moveEvent= "mousemove.ap",this._upEvent="mouseup.ap");this._body=f("body");this._window=f(window);this._doc=f(document);this._windowResizeTimeout=150;this._windowResizeTimeoutID;this._thumbHolderArr=[];this._thumbsScrollValue=100;this.thumbTransitionOn=!1;this.boxWidth;this.boxHeight;this.thumbContainerWidth;this.thumbContainerHeight;this.thumbContainerLeft;this.thumbContainerTop;this.thumbInnerContainerSize=0;this.gridArr=[];this.rows;this.columns;this.allColumns;this.allRows;this.lastWheelCounter=this.rowCounter= this.columnCounter=0;this.scrollPaneApi;this.tempScrollOffset;this.innerSlideshowExist=!1;this.slideShowData=[];this.innerSlideshowDelay=this.settings.innerSlideshowDelay;this.autoPlay=this.settings.autoPlay;this._thumbOrientation=this.settings.thumbOrientation;this.buttonSpacing=this.settings.buttonSpacing;this._layoutType=this.settings.layoutType;this._moveType=this.settings.moveType;this.horizontalSpacing=this.settings.horizontalSpacing;this.verticalSpacing=this.settings.verticalSpacing;this.grid_direction= this.settings.direction;this.scrollOffset=this.settings.scrollOffset;this.componentWrapper=f(b);this.thumbContainer=this.componentWrapper.find(".thumbContainer");this.thumbBackward=this.componentWrapper.find(".thumbBackward").css({cursor:"pointer",display:"none"});this.thumbForward=this.componentWrapper.find(".thumbForward").css({cursor:"pointer",display:"none"});this.thumbInnerContainer=this.componentWrapper.find(".thumbInnerContainer");"scroll"!=this._moveType&&(this.isMobile||(this.thumbForward.bind("mouseover", function(){f(this).find("img").attr("src","horizontal"==a._thumbOrientation?a.ic_thumb_forward_on:a.ic_thumb_forward_v_on);return!1}).bind("mouseout",function(){f(this).find("img").attr("src","horizontal"==a._thumbOrientation?a.ic_thumb_forward:a.ic_thumb_forward_v);return!1}),this.thumbBackward.bind("mouseover",function(){f(this).find("img").attr("src","horizontal"==a._thumbOrientation?a.ic_thumb_backward_on:a.ic_thumb_backward_v_on);return!1}).bind("mouseout",function(){f(this).find("img").attr("src", "horizontal"==a._thumbOrientation?a.ic_thumb_backward:a.ic_thumb_backward_v);return!1})),"grid"==this._layoutType?(this.thumbBackward.bind(this._downEvent,function(){if(!a.thumbTransitionOn){a.thumbTransitionOn=!0;var g,b;"horizontal"==a._thumbOrientation?(g=parseInt(a.thumbInnerContainer.css("left"),10),g+=a.thumbContainerWidth+a.verticalSpacing,0<g&&(g=0),b=Math.ceil(a.thumbContainerWidth/(a.boxWidth+a.verticalSpacing)),a.lastWheelCounter+=b,a.thumbInnerContainer.stop().animate({left:g+"px"},{duration:700, easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}})):(g=parseInt(a.thumbInnerContainer.css("top"),10),g+=a.thumbContainerHeight+a.horizontalSpacing,0<g&&(g=0),b=Math.ceil(a.thumbContainerHeight/(a.boxHeight+a.horizontalSpacing)),a.lastWheelCounter+=b,a.thumbInnerContainer.stop().animate({top:g+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}}));return!1}}),this.thumbForward.bind(this._downEvent,function(){if(!a.thumbTransitionOn){a.thumbTransitionOn= !0;var g,b;"horizontal"==a._thumbOrientation?(g=parseInt(a.thumbInnerContainer.css("left"),10),g-=a.thumbContainerWidth+a.verticalSpacing,g<-a.thumbInnerContainerSize+a.thumbContainerWidth&&(g=-a.thumbInnerContainerSize+a.thumbContainerWidth),b=Math.ceil(a.thumbContainerWidth/(a.boxWidth+a.verticalSpacing)),a.lastWheelCounter-=b,a.thumbInnerContainer.stop().animate({left:g+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}})):(g=parseInt(a.thumbInnerContainer.css("top"), 10),g-=a.thumbContainerHeight+a.horizontalSpacing,g<-a.thumbInnerContainerSize+a.thumbContainerHeight&&(g=-a.thumbInnerContainerSize+a.thumbContainerHeight),b=Math.ceil(a.thumbContainerHeight/(a.boxHeight+a.horizontalSpacing)),a.lastWheelCounter-=b,a.thumbInnerContainer.stop().animate({top:g+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}}));return!1}})):(this.thumbBackward.bind(this._downEvent,function(){if(!a.thumbTransitionOn){a.thumbTransitionOn=!0;var b, c,e,d;"horizontal"==a._thumbOrientation?(c=a.thumbInnerContainer.width(),e=a.thumbContainer.width(),b=parseInt(a.thumbInnerContainer.css("left"),10),d=Math.floor(e/(a.boxWidth+a.spacing)),b+=d*(a.boxWidth+a.spacing),a.lastWheelCounter+=d,0<b&&(b=0),0!=b%(a.boxWidth+a.spacing)&&(value2=Math.floor(b/(a.boxWidth+a.spacing)),b=value2*(a.boxWidth+a.spacing),0<b&&(b=0),b<-c+e&&(b=-c+e)),a.thumbInnerContainer.stop().animate({left:b+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn= !1}})):(c=a.thumbInnerContainer.height(),e=a.thumbContainer.height(),b=parseInt(a.thumbInnerContainer.css("top"),10),d=Math.floor(e/(a.boxHeight+a.spacing)),b+=d*(a.boxHeight+a.spacing),a.lastWheelCounter+=d,0<b&&(b=0),0!=b%(a.boxHeight+a.spacing)&&(value2=Math.floor(b/(a.boxHeight+a.spacing)),b=value2*(a.boxHeight+a.spacing),0<b&&(b=0),b<-c+e&&(b=-c+e)),a.thumbInnerContainer.stop().animate({top:b+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}}));return!1}}), this.thumbForward.bind(this._downEvent,function(){if(!a.thumbTransitionOn){a.thumbTransitionOn=!0;var b,c,e,d;"horizontal"==a._thumbOrientation?(c=a.thumbInnerContainer.width(),e=a.thumbContainer.width(),b=parseInt(a.thumbInnerContainer.css("left"),10),d=Math.floor(e/(a.boxWidth+a.spacing)),b-=d*(a.boxWidth+a.spacing),a.lastWheelCounter-=d,b<-c+e&&(b=-c+e),a.thumbInnerContainer.stop().animate({left:b+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}})):(c=a.thumbInnerContainer.height(), e=a.thumbContainer.height(),b=parseInt(a.thumbInnerContainer.css("top"),10),d=Math.floor(e/(a.boxHeight+a.spacing)),b-=d*(a.boxHeight+a.spacing),a.lastWheelCounter-=d,b<-c+e&&(b=-c+e),a.thumbInnerContainer.stop().animate({top:b+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}}));return!1}})),this.isMobile||this.thumbContainer.bind("mousewheel",function(b,c,e,d){if(a._componentInited){a.thumbTransitionOn=!0;e=0<c?1:-1;if("grid"==a._layoutType)if("horizontal"==a._thumbOrientation){if(a.thumbInnerContainerSize== a.thumbContainerWidth)return;a.columnCounter!=a.lastWheelCounter&&(a.columnCounter=a.lastWheelCounter);a.columnCounter+=e;0<a.columnCounter?a.columnCounter=0:a.columnCounter<-a.allColumns+a.columns&&(a.columnCounter=-a.allColumns+a.columns);a.lastWheelCounter=a.columnCounter;e=a.columnCounter*(a.boxWidth+a.verticalSpacing);a.thumbInnerContainer.stop().animate({left:e+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}})}else{if(a.thumbInnerContainerSize==a.thumbContainerHeight)return; a.columnCounter!=a.lastWheelCounter&&(a.rowCounter=a.lastWheelCounter);a.rowCounter+=e;0<a.rowCounter?a.rowCounter=0:a.rowCounter<-a.allRows+a.rows&&(a.rowCounter=-a.allRows+a.rows);a.lastWheelCounter=a.rowCounter;e=a.rowCounter*(a.boxHeight+a.horizontalSpacing);a.thumbInnerContainer.stop().animate({top:e+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}})}else if("horizontal"==a._thumbOrientation){b=a.thumbInnerContainer.width();c=a.thumbContainer.width();if(b== c)return;a.columnCounter!=a.lastWheelCounter&&(a.columnCounter=a.lastWheelCounter);a.columnCounter+=e;0<a.columnCounter?a.columnCounter=0:a.columnCounter<-a.allColumns+a.columns&&(a.columnCounter=-a.allColumns+a.columns);a.lastWheelCounter=a.columnCounter;e=a.columnCounter*(a.boxWidth+a.spacing);0<e?e=0:e<-b+c&&(e=-b+c);0!=e%(a.boxWidth+a.spacing)&&(e=Math.floor(e/(a.boxWidth+a.spacing)),e*=a.boxWidth+a.spacing,0<e&&(e=0),e<-b+c&&(e=-b+c));a.thumbInnerContainer.stop().animate({left:e+"px"},{duration:700, easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}})}else b=a.thumbInnerContainer.height(),c=a.thumbContainer.height(),a.rowCounter!=a.lastWheelCounter&&(a.rowCounter=a.lastWheelCounter),a.rowCounter+=e,0<a.rowCounter?a.rowCounter=0:a.rowCounter<-a.allRows+a.rows&&(a.rowCounter=-a.allRows+a.rows),a.lastWheelCounter=a.rowCounter,e=a.rowCounter*(a.boxHeight+a.spacing),0<e?e=0:e<-b+c&&(e=-b+c),0!=e%(a.boxHeight+a.spacing)&&(e=Math.floor(e/(a.boxHeight+a.spacing)),e*=a.boxHeight+a.spacing, 0<e&&(e=0),e<-b+c&&(e=-b+c)),a.thumbInnerContainer.stop().animate({top:e+"px"},{duration:700,easing:"easeOutQuart",complete:function(){a.thumbTransitionOn=!1}});return!1}}),"horizontal"==this._thumbOrientation?(this._thumbBackwardSize=this.thumbBackward.width(),this._thumbForwardSize=this.thumbForward.width()):(this._thumbBackwardSize=this.thumbBackward.height(),this._thumbForwardSize=this.thumbForward.height()));this._componentFixedSize||this._window.bind("resize",function(){if(!a._componentInited)return!1; a._windowResizeTimeoutID&&clearTimeout(a._windowResizeTimeoutID);a._windowResizeTimeoutID=setTimeout(function(){a._doneResizing()},a._windowResizeTimeout);return!1});var h=0,l,m,p=!1;this.thumbInnerContainer.children("div[class=thumbHolder]").each(function(){l=f(this).attr({"data-id-i":h,"data-id-j":0});a._thumbHolderArr.push(l);p||(a.boxWidth=a._thumbHolderArr[0].width(),a.boxHeight=a._thumbHolderArr[0].height(),p=!0);if(0<l.find("div[class='innerThumbHolder']").length){a.innerSlideshowExist=!0; var b=[],c=0;l.find("div[class='innerThumbHolder']").each(function(){m=f(this).attr({"data-id-i":h,"data-id-j":c});b.push(m);void 0==m.attr("data-title")||a._isEmpty(m.attr("data-title"))||a.createTitle(m);a.isMobile||m.bind("mouseenter",function(b){if(!a._componentInited)return!1;b||(b=window.event);b.cancelBubble?b.cancelBubble=!0:b.stopPropagation&&b.stopPropagation();b=f(b.currentTarget);"undefined"!==typeof overThumb&&overThumb(parseInt(b.attr("data-id-i"),10),parseInt(b.attr("data-id-j"),10)); if(void 0!=b.data("caption")){b=b.data("caption");var c=a.boxHeight-parseInt(b.data("finalHeight"),10)+1;b.stop().animate({top:c+"px"},{duration:500,easing:"easeOutQuint"});return!1}}).bind("mouseleave",function(b){if(!a._componentInited)return!1;b||(b=window.event);b.cancelBubble?b.cancelBubble=!0:b.stopPropagation&&b.stopPropagation();b=f(b.currentTarget);"undefined"!==typeof outThumb&&outThumb(parseInt(b.attr("data-id-i"),10),parseInt(b.attr("data-id-j"),10));if(void 0!=b.data("caption"))return b.data("caption").stop().animate({top:a.boxHeight+ "px"},{duration:500,easing:"easeOutQuint"}),!1});0<m.find("a[class=pp_content]").length&&m.find("a[class=pp_content]").bind("click",function(){"undefined"!==typeof detailActivated&&detailActivated()});0<c&&m.css({display:"none",opacity:0});c++});l.data({slideArr:b,position:h,counter:0});a.slideShowData[h]=a.createSlideshow(l)}else void 0==l.attr("data-title")||a._isEmpty(l.attr("data-title"))||a.createTitle(l),a.isMobile||l.bind("mouseenter",function(b){if(!a._componentInited)return!1;b||(b=window.event); b.cancelBubble?b.cancelBubble=!0:b.stopPropagation&&b.stopPropagation();b=f(b.currentTarget);"undefined"!==typeof overThumb&&overThumb(parseInt(b.attr("data-id-i"),10),parseInt(b.attr("data-id-j"),10));if(void 0!=b.data("caption")){b=b.data("caption");var c=a.boxHeight-parseInt(b.data("finalHeight"),10)+1;b.stop().animate({top:c+"px"},{duration:500,easing:"easeOutQuint"});return!1}}).bind("mouseleave",function(b){if(!a._componentInited)return!1;b||(b=window.event);b.cancelBubble?b.cancelBubble=!0: b.stopPropagation&&b.stopPropagation();b=f(b.currentTarget);"undefined"!==typeof outThumb&&outThumb(parseInt(b.attr("data-id-i"),10),parseInt(b.attr("data-id-j"),10));if(void 0!=b.data("caption"))return b.data("caption").stop().animate({top:a.boxHeight+"px"},{duration:500,easing:"easeOutQuint"}),!1}),0<l.find("a[class=pp_content]").length&&l.find("a[class=pp_content]").bind("click",function(a){"undefined"!==typeof detailActivated&&detailActivated()});h++});this._playlistLength=this._thumbHolderArr.length; if("line"==this._layoutType){"horizontal"==this._thumbOrientation?(this.allColumns=this._playlistLength,this.spacing=parseInt(this._thumbHolderArr[this._playlistLength-1].css("marginRight"),10),this._thumbHolderArr[this._playlistLength-1].css("marginRight","0px")):(this.allRows=this._playlistLength,this.spacing=parseInt(this._thumbHolderArr[this._playlistLength-1].css("marginBottom"),10),this._thumbHolderArr[this._playlistLength-1].css("marginBottom","0px"));h=0;for(h;h<this._playlistLength;h++)this.thumbInnerContainerSize= "horizontal"==this._thumbOrientation?this.thumbInnerContainerSize+this._thumbHolderArr[h].outerWidth(!0):this.thumbInnerContainerSize+this._thumbHolderArr[h].outerHeight(!0);"horizontal"==this._thumbOrientation?this.thumbInnerContainer.width(this.thumbInnerContainerSize):this.thumbInnerContainer.height(this.thumbInnerContainerSize)}"buttons"==this._moveType&&this.hasTouch&&d();this.thumbInnerContainer.css("display","block");this._doneResizing();this._componentInited=!0;"undefined"!==typeof thumbGallerySetupDone&& thumbGallerySetupDone();f(".thumb_hidden").stop().animate({opacity:1},{duration:500,easing:"easeOutSine"});this.innerSlideshowExist&&this.settings.innerSlideshowOn&&this.toggleInnerslideShow(!0)}n.prototype={toggleInnerslideShow:function(b){if(this._componentInited&&this.innerSlideshowExist){var c=0,d=this.slideShowData.length;for(c;c<d;c++)void 0!=this.slideShowData[c]&&(b?this.slideShowData[c].start():this.slideShowData[c].stop())}},toggleInnerslideShowNum:function(b,c){this._componentInited&&this.innerSlideshowExist&& void 0!=this.slideShowData[b]&&(c?this.slideShowData[b].start():this.slideShowData[b].stop())},getThumbHolder:function(b){if(this._componentInited&&void 0!=this._thumbHolderArr[b])return this._thumbHolderArr[b]},createTitle:function(b){var c,d,a;c=b.attr("data-title");c=f("<div/>").html(c).addClass("title").appendTo(this.componentWrapper);d=parseInt(c.css("paddingLeft"),10);a=parseInt(c.css("paddingRight"),10);parseInt(c.css("paddingTop"),10);parseInt(c.css("paddingBottom"),10);this.isMobile?c.css("top", this.boxHeight-c.outerHeight()+"px"):c.css("top",this.boxHeight+"px");c.css("width",this.boxWidth-d-a+"px");c.data("finalHeight",c.outerHeight());c.appendTo(b);b.data("caption",c)},createSlideshow:function(b){function c(a){this.slideDiv=a;this.len=this.slideDiv.data("slideArr").length;this.counter=parseInt(this.slideDiv.data("counter"),10);this.delay;this.timeoutID;this.time=1E3;this.ease="easeOutSine";this.running=!1}var d=this;c.prototype={start:function(){var a=this;this.delay=d._randomMinMax(d.innerSlideshowDelay[0], d.innerSlideshowDelay[1]);this.delay*=1E3;this.timeoutID&&clearTimeout(this.timeoutID);this.timeoutID=setTimeout(function(){a.next()},this.delay);this.running=!0},stop:function(){this.timeoutID&&clearTimeout(this.timeoutID);this.running=!1},next:function(){var a=this;this.timeoutID&&clearTimeout(this.timeoutID);this.slideDiv.data("slideArr")[this.counter].stop().animate({opacity:0},{duration:this.time,easing:this.ease,complete:function(){f(this).css("display","none")}});this.counter++;this.counter> this.len-1&&(this.counter=0);this.slideDiv.data("counter",this.counter);this.slideDiv.data("slideArr")[this.counter].css({opacity:0,display:"block"}).stop().animate({opacity:1},{duration:this.time,easing:this.ease,complete:function(){a.running&&a.start()}})}};return new c(b)},checkScroll:function(){var b=this;this.scrollPaneApi?this.scrollPaneApi.reinitialise():(this.scrollPaneApi=this.thumbContainer.jScrollPane().data().jsp,this.thumbContainer.bind("jsp-initialised",function(b,d){d||"vertical"== this._thumbOrientation||f(".jspPane").css("left","0px")}),"vertical"==this._thumbOrientation?this.thumbContainer.jScrollPane({verticalDragMinHeight:80,verticalDragMaxHeight:100}):(this.thumbContainer.jScrollPane({horizontalDragMinWidth:80,horizontalDragMaxWidth:100}),this.thumbContainer.bind("mousewheel",function(c,d,a,f){if(b._componentInited&&b.scrollPaneApi)return b.scrollPaneApi&&b.scrollPaneApi.scrollByX((0<d?-1:1)*b._thumbsScrollValue),!1})))},toggleThumbBackward:function(b){"on"==b?this.thumbBackward.css("display", "block"):this.thumbBackward.css("display","none")},toggleThumbForward:function(b){"on"==b?this.thumbForward.css("display","block"):this.thumbForward.css("display","none")},calculateGrid:function(b){this.tempScrollOffset=b?parseInt(b,10):this.scrollOffset;var c=this._getComponentSize("w"),d=this._getComponentSize("h");b="left2right"==this.grid_direction?!0:!1;if("horizontal"==this._thumbOrientation){"scroll"==this._moveType&&(d-=this.tempScrollOffset);this.rows=Math.floor(d/(this.boxHeight+this.horizontalSpacing)); this.rows*(this.boxHeight+this.horizontalSpacing)+this.boxHeight<=d&&(this.rows+=1);this.columns=Math.floor(c/(this.boxWidth+this.verticalSpacing));this.allColumns=Math.ceil(this._playlistLength/this.rows);c=this.allColumns<this.columns?this.allColumns:this.columns;this.gridArr=this.createGrid(this.allColumns,this.rows,this.boxWidth,this.boxHeight,this.horizontalSpacing,this.verticalSpacing,0,0,b);if(void 0==this.gridArr[0])return alert("Improper grid dimesions!"),!1;this.thumbInnerContainerSize= this.allColumns*this.boxWidth+(this.allColumns-1)*this.verticalSpacing;this.thumbContainerWidth=c*this.boxWidth+(c-1)*this.verticalSpacing;this.thumbContainerHeight=this.rows*this.boxHeight+(this.rows-1)*this.horizontalSpacing}else{"scroll"==this._moveType&&(c-=this.tempScrollOffset);this.columns=Math.floor(c/(this.boxWidth+this.verticalSpacing));this.columns*(this.boxWidth+this.verticalSpacing)+this.boxWidth<=c&&(this.columns+=1);this.rows=Math.floor(d/(this.boxHeight+this.horizontalSpacing));this.allRows= Math.ceil(this._playlistLength/this.columns);c=this.allRows<this.rows?this.allRows:this.rows;this.gridArr=this.createGrid(this.columns,this.allRows,this.boxWidth,this.boxHeight,this.horizontalSpacing,this.verticalSpacing,0,0,b);if(void 0==this.gridArr[0])return alert("Improper grid dimesions!"),!1;this.thumbInnerContainerSize=this.allRows*this.boxHeight+(this.allRows-1)*this.horizontalSpacing;this.thumbContainerWidth=this.columns*this.boxWidth+(this.columns-1)*this.verticalSpacing;this.thumbContainerHeight= c*this.boxHeight+(c-1)*this.horizontalSpacing}},layoutTypeGrid:function(){var b=0;for(b;b<this._playlistLength;b++)f(this._thumbHolderArr[b]).css({left:this.gridArr[b].x+"px",top:this.gridArr[b].y+"px"});var b=this._getComponentSize("w"),c=this._getComponentSize("h");this.thumbContainerLeft=Math.ceil(b/2-this.thumbContainerWidth/2);this.thumbContainerTop=Math.ceil(c/2-this.thumbContainerHeight/2);if("scroll"!=this._moveType){if("horizontal"==this._thumbOrientation){var d=parseInt(this.thumbInnerContainer.css("left"), 10);d<-this.thumbInnerContainerSize+this.thumbContainerWidth&&(d=-this.thumbInnerContainerSize+this.thumbContainerWidth,this.thumbInnerContainer.css("left",d+"px"));this.thumbInnerContainerSize>this.thumbContainerWidth?(this.thumbBackward.css("display","block"),this.thumbForward.css("display","block"),this.touchOn=!0):(this.thumbBackward.css("display","none"),this.thumbForward.css("display","none"),this.thumbInnerContainer.css("left","0px"),this.touchOn=!1);c=this.thumbContainerLeft-this._thumbBackwardSize- this.buttonSpacing;0>c&&(c=0);d=this.thumbContainerLeft+this.thumbContainerWidth+this.buttonSpacing;d>b-this._thumbForwardSize&&(d=b-this._thumbForwardSize);this.thumbBackward.css("left",c+"px");this.thumbForward.css("left",d+"px")}else d=parseInt(this.thumbInnerContainer.css("top"),10),d<-this.thumbInnerContainerSize+this.thumbContainerHeight&&(d=-this.thumbInnerContainerSize+this.thumbContainerHeight,this.thumbInnerContainer.css("top",d+"px")),this.thumbInnerContainerSize>this.thumbContainerHeight? (this.thumbBackward.css("display","block"),this.thumbForward.css("display","block"),this.touchOn=!0):(this.thumbBackward.css("display","none"),this.thumbForward.css("display","none"),this.thumbInnerContainer.css("top","0px"),this.touchOn=!1),b=this.thumbContainerTop-this._thumbBackwardSize-this.buttonSpacing,0>b&&(b=0),d=this.thumbContainerTop+this.thumbContainerHeight+this.buttonSpacing,d>c-this._thumbForwardSize&&(d=c-this._thumbForwardSize),this.thumbBackward.css("top",b+"px"),this.thumbForward.css("top", d+"px");this.thumbContainer.css({width:this.thumbContainerWidth+"px",height:this.thumbContainerHeight+"px",left:this.thumbContainerLeft+"px",top:this.thumbContainerTop+"px"})}else"horizontal"==this._thumbOrientation?(this.thumbContainerTop-=this.tempScrollOffset/2,this.thumbContainerHeight+=this.tempScrollOffset):(this.thumbContainerLeft-=this.tempScrollOffset/2,this.thumbContainerWidth+=this.tempScrollOffset),this.thumbContainer.css({width:this.thumbContainerWidth+"px",height:this.thumbContainerHeight+ "px"}),"horizontal"==this._thumbOrientation?this.thumbInnerContainer.css({width:this.thumbInnerContainerSize+"px",height:this.thumbContainerHeight+"px"}):this.thumbInnerContainer.css({width:this.thumbContainerWidth+"px",height:this.thumbInnerContainerSize+"px"})},layoutTypeLine:function(){this._getComponentSize("w");this._getComponentSize("h");if("horizontal"==this._thumbOrientation){if("scroll"!=this._moveType){var b=this.thumbInnerContainer.width(),c=this.thumbContainer.width();if(this.thumbInnerContainerSize> c){this.thumbBackward.css("display","block");this.thumbForward.css("display","block");this.touchOn=!0;var d=parseInt(this.thumbInnerContainer.css("left"),10);d<c-b?d=c-b:0<d&&(d=0);this.thumbInnerContainer.css("left",d+"px")}else this.thumbBackward.css("display","none"),this.thumbForward.css("display","none"),this.touchOn=!1,this.thumbInnerContainer.css("left",c/2-b/2+"px")}}else"scroll"!=this._moveType&&(b=this.thumbInnerContainer.height(),c=this.thumbContainer.height(),this.thumbInnerContainerSize> c?(this.thumbBackward.css("display","block"),this.thumbForward.css("display","block"),this.touchOn=!0,d=parseInt(this.thumbInnerContainer.css("top"),10),d<c-b?d=c-b:0<d&&(d=0),this.thumbInnerContainer.css("top",d+"px")):(this.thumbBackward.css("display","none"),this.thumbForward.css("display","none"),this.touchOn=!1,this.thumbInnerContainer.css("top",c/2-b/2+"px")))},_getComponentSize:function(b){return"w"==b?this.componentWrapper.width():this.componentWrapper.height()},_randomMinMax:function(b,c){return Math.random()* (c-b)+b},_stringCounter:function(b){return 9>b?"0"+(b+1):b+1},_preventSelect:function(b){f(b).each(function(){f(this).attr("unselectable","on").css({"-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).each(function(){this.onselectstart=function(){return!1}})})},_doneResizing:function(){"grid"==this._layoutType?(this.calculateGrid(this.scrollOffset),"scroll"==this._moveType&&("horizontal"==this._thumbOrientation?this.thumbInnerContainerSize<=this.thumbContainerWidth&&this.calculateGrid("0"): this.thumbInnerContainerSize<=this.thumbContainerHeight&&this.calculateGrid("0")),this.layoutTypeGrid(this.scrollOffset)):("horizontal"==this._thumbOrientation?this.columns=this.thumbContainer.width()/this._thumbHolderArr[0].outerWidth(!0):this.rows=this.thumbContainer.height()/this._thumbHolderArr[0].outerHeight(!0),this.layoutTypeLine());"scroll"==this._moveType&&this.checkScroll()},_isEmpty:function(b){return 0==b.replace(/^\s+|\s+$/g,"").length},createGrid:function(b,c,d,a,f,l,m,p,g){for(var n= [],e,q,r,s=b*c,k=0;k<s;k++)e={},g?(q=k%b,r=Math.floor(k/b),e.x=q*(d+f)+m,e.y=r*(a+l)+p):(q=k%c,r=Math.floor(k/c),e.x=r*(d+f)+m,e.y=q*(a+l)+p),n.push(e);return n}};f.fn.thumbGallery=function(b){return this.each(function(){var c=new n(f(this),b);f(this).data("thumbGallery",c);f.fn.thumbGallery.toggleInnerslideShow=function(b){c.toggleInnerslideShow(b)};f.fn.thumbGallery.toggleInnerslideShowNum=function(b,a){c.toggleInnerslideShowNum(b,a)};f.fn.thumbGallery.getThumbHolder=function(b){return c.getThumbHolder(b)}})}; f.fn.thumbGallery.defaults={};f.fn.thumbGallery.settings={}})(jQuery);
/*
|--------------------------------------------------------------------------
| UItoTop jQuery Plugin 1.2 by Matt Varone
| http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
|--------------------------------------------------------------------------
*/
(function($){
	$.fn.UItoTop = function(options) {

 		var defaults = {
    			text: 'To Top',
    			min: 200,
    			inDelay:600,
    			outDelay:400,
      			containerID: 'toTop',
    			containerHoverID: 'toTopHover',
    			scrollSpeed: 1200,
    			easingType: 'linear'
 		    },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#'+settings.containerHoverID;
		
		$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');
		$(containerIDhash).hide().on('click.UItoTop',function(){
			$('html, body').animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
			$('#'+settings.containerHoverID, this).stop().animate({'opacity': 0 }, settings.inDelay, settings.easingType);
			return false;
		})
		.prepend('<span id="'+settings.containerHoverID+'"></span>')
		.hover(function() {
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 1
				}, 600, 'linear');
			}, function() { 
				$(containerHoverIDHash, this).stop().animate({
					'opacity': 0
				}, 700, 'linear');
			});
					
		$(window).scroll(function() {
			var sd = $(window).scrollTop();
			if(typeof document.body.style.maxHeight === "undefined") {
				$(containerIDhash).css({
					'position': 'absolute',
					'top': sd + $(window).height() - 50
				});
			}
			if ( sd > settings.min ) 
				$(containerIDhash).fadeIn(settings.inDelay);
			else 
				$(containerIDhash).fadeOut(settings.Outdelay);
		});
};
})(jQuery);
/* PDFObject, copyright (C) 2008 Philip Hutchison (pipwerks.com). Documentation and examples are at www.pdfobject.com. Version 1.2, April 2011. MIT style license */
var PDFObject=function(y){if(!y||!y.url){return false;}var w="1.2",b=y.id||false,i=y.width||"100%",z=y.height||"100%",r=y.pdfOpenParams,a,x;var v=function(){var c=null;if(window.ActiveXObject){c=new ActiveXObject("AcroPDF.PDF");if(!c){c=new ActiveXObject("PDF.PdfCtrl");}if(c!==null){return true;}}return false;};var u=function(){var c,f=navigator.plugins,d=f.length,e=/Adobe Reader|Adobe PDF|Acrobat/gi;for(c=0;c<d;c++){if(e.test(f[c].name)){return true;}}return false;};var t=function(){var c=navigator.mimeTypes["application/pdf"];return(c&&c.enabledPlugin);};var s=function(){var c=null;if(u()||v()){c="Adobe";}else{if(t()){c="generic";}}return c;};var q=function(){var e=document.getElementsByTagName("html");if(!e){return false;}var c=e[0].style,d=document.body.style;c.height="100%";c.overflow="hidden";d.margin="0";d.padding="0";d.height="100%";d.overflow="hidden";};var p=function(d){var c="",e;if(!d){return c;}for(e in d){if(d.hasOwnProperty(e)){c+=e+"=";if(e==="search"){c+=encodeURI(d[e]);}else{c+=d[e];}c+="&";}}return c.slice(0,c.length-1);};var o=function(d){var c=null;switch(d){case"url":c=a;break;case"id":c=b;break;case"width":c=i;break;case"height":c=z;break;case"pdfOpenParams":c=r;break;case"pluginTypeFound":c=x;break;case"pdfobjectversion":c=w;break;}return c;};var n=function(d){if(!x){return false;}var c=null;if(d){c=(d.nodeType&&d.nodeType===1)?d:document.getElementById(d);if(!c){return false;}}else{c=document.body;q();i="100%";z="100%";}c.innerHTML='<object	data="'+a+'" type="application/pdf" width="'+i+'" height="'+z+'"></object>';return c.getElementsByTagName("object")[0];};a=encodeURI(y.url)+"#"+p(r);x=s();this.get=function(c){return o(c);};this.embed=function(c){return n(c);};return this;};
!function(t){"use strict";var s=function(s,o){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,o),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){t.typewrite(t.strings[t.arrayPos],t.strPos)},t.startDelay)},build:function(){this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor" style="color:#dfd3c7;font-weight:400;font-size:1.6em;position:relative;bottom:-3px">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,s){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.typeSpeed,e=this;e.timeout=setTimeout(function(){var o=0,i=t.substr(s);if("^"===i.charAt(0)){var r=1;/^\^\d+/.test(i)&&(i=/\d+/.exec(i)[0],r+=i.length,o=parseInt(i)),t=t.substring(0,s)+t.substring(s+r)}if("html"===e.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s).charAt(0)!==h;)a+=t.substr(s).charAt(0),s++;s++,a+=h}}e.timeout=setTimeout(function(){if(s===t.length){if(e.options.onStringTyped(e.arrayPos),e.arrayPos===e.strings.length-1&&(e.options.callback(),e.curLoop++,e.loop===!1||e.curLoop===e.loopCount))return;e.timeout=setTimeout(function(){e.backspace(t,s)},e.backDelay)}else{0===s&&e.options.preStringTyped(e.arrayPos);var o=t.substr(0,s+1);e.attr?e.el.attr(e.attr,o):e.isInput?e.el.val(o):"html"===e.contentType?e.el.html(o):e.el.text(o),s++,e.typewrite(t,s)}},o)},o)}},backspace:function(t,s){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.backSpeed,e=this;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(var o="";"<"!==t.substr(s).charAt(0);)o-=t.substr(s).charAt(0),s--;s--,o+="<"}var i=t.substr(0,s);e.attr?e.el.attr(e.attr,i):e.isInput?e.el.val(i):"html"===e.contentType?e.el.html(i):e.el.text(i),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.init()):e.typewrite(e.strings[e.arrayPos],s))},o)}},reset:function(){var t=this;clearInterval(t.timeout);var s=this.el.attr("id");this.el.after('<span id="'+s+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(o){return this.each(function(){var e=t(this),i=e.data("typed"),r="object"==typeof o&&o;i||e.data("typed",i=new s(this,r)),"string"==typeof o&&i[o]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);
/*
 * Vanilla Form v. 1.2.0
 * Author: Michal Szepielak
 */
var VanillaForm = (function (window) {
    "use strict";

    /**
     * Constructor of Vanilla Form
     * @param form {HTMLFormElement}
     * @returns {VanillaForm}
     * @constructor
     */
    var VanillaForm = function (form) {
            var self = this;

            if (!form) {
                console.warn("Couldn't bind to form element");
                return null;
            }
            self.dict = {
                "markedAsSpamError": "Your message was marked as spam and was not sent! Fix your message!",
                "markedAsSpamServerError": "Your message was marked as SPAM and was not send.",
                "sendSuccess": "We have received your inquiry. Stay tuned, we’ll get back to you very soon.",
                "sendError": "Mail server has experienced an error. Please try again.",
                "httpRequestError": "[%s] There was a problem with receiving response from mailing server",
                "timeoutError": "Your request was timeout. Please try again.",
                "parseResponseError": "Response from mailing server was unclear. Please contact administrator."
            };
            self.responseTimeout = 5000;
            self.httpRequest = null;
            self.url = form.action || location.href;
            self.form = form;
            self.processing = false;

            // Binding submit button
            self.submitButton = form.querySelector("[type=\"submit\"]");
            if (!self.submitButton) {
                console.warn("Couldn't bind to submit button");
                return null;
            }


            // Binding to notification box
            self.notificationBox = form.querySelector(".notification-box");
            if (!self.notificationBox) {
                console.warn("Couldn't bind to submit button");
                return null;
            }

            self.notificationBox.addEventListener("click", function () {
                this.classList.remove("show-error");
                this.classList.remove("show-success");
            }, false);

            // BOT prevent
            self.formFocused = false;
            self.focusBound = null;

            // Init
            self.init();
            return self;
        },
        removeErrorBound = {length: 0};

    /**
     * Returns pass phrase
     * @returns {string}
     */
    function getPassPhrase() {
        var token = "9320087105434084715";
        token = token.split("");
        token = token.reverse().join("");
        return token;
    }

    /**
     * Triggered when form field is focused. It's used for simple BOT prevention.
     * @param self {VanillaForm}
     */
    function onFieldFocus(self) {
        self.formFocused = true;
    }

    /**
     * Removes error highlighting from target element and cleans submit button
     * @param self {VanillaForm}
     * @param targetElement {HTMLInputElement|HTMLTextAreaElement}
     */
    function removeError(self, targetElement) {
        targetElement.classList.remove("error");
        targetElement.removeEventListener("focus", removeErrorBound[targetElement.name], false);
        delete removeErrorBound[targetElement.name];
        removeErrorBound.length--;
        if (removeErrorBound.length <= 0) {
            removeErrorBound.length = 0;
            self.setSubmitState("initial");
        }
    }

    /**
     * Scrolls window to make visible target element on the screen.
     * @param element {HTMLElement}
     */
    function scrollToShowElement(element) {
        var bounding = element.getBoundingClientRect(),
            fromTop = Math.round(bounding.top) - 5,
            viewportHeight = window.innerHeight;

        if (fromTop <= 0) {
            window.scrollBy(0, fromTop);
            return;
        }

        if (fromTop >= viewportHeight) {
            window.scrollBy(0, fromTop - viewportHeight + 30);
        }
    }

    /**
     * Logs an error
     * @param msg {string} Error message
     */
    VanillaForm.prototype.logError = function (msg) {
        this.notify(msg, "error");
    };

    /**
     * Shows notification box with given message.
     * @param message {string} Message
     * @param type {string} [type=error] - Notification type
     */
    VanillaForm.prototype.notify = function (message, type) {
        var notificationBox = this.notificationBox;

        if (!notificationBox) {
            console.warn("Notification box not found");
            return;
        }
        notificationBox.innerHTML = message;
        notificationBox.classList.add("show-" + (type || "error"));
        scrollToShowElement(notificationBox);
    };

    /**
     * Sets state to button
     * @param state {string} State of button
     */
    VanillaForm.prototype.setSubmitState = function (state) {
        var self = this,
            submit = self.submitButton,
            stateText = submit.getAttribute("data-" + state),
            className = submit.className.replace(/state-[a-z]+/ig, "");

        self.processing = state === "processing";
        submit.className = className + " state-" + state;
        submit.value = stateText;
    };

    /**
     * Validates form. Returns true if validation is ok, false otherwise.
     * Adds an "error" CSS class if some input is invalid.
     * Changes submit value text if error occurred. Error message should be in data-error attribute
     * @returns {Boolean} validation status
     */
    VanillaForm.prototype.validateForm = function () {
        var self = this,
            form = self.form,
            els = form.elements,
            secretField,
            i,
            el,
            error = false,
            formError = false,
            emailPattern = /^([\w\-]+(?:\.[\w\-]+)*)@((?:[\w\-]+\.)*\w[\w\-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

        for (i = els.length - 1; i >= 0; --i) {
            el = els[i];
            error = false;

            if (removeErrorBound[el.name]) {
                removeError(self, el);
            }

            if (el.value === "" && el.required) {
                error = true;
            } else {
                if (el.type === "checkbox" && el.required && !el.checked) {
                    error = true;
                }
                if (el.type === "email" && el.value !== "" && !emailPattern.test(el.value)) {
                    error = true;
                }
            }

            if (error) {
                el.classList.add("error");
                removeErrorBound[el.name] = removeError.bind(null, self, el);
                removeErrorBound.length++;
                el.addEventListener("focus", removeErrorBound[el.name], false);
                formError = true;
            } else {
                el.classList.remove("error");
            }

            if (formError) {
                self.setSubmitState("error");
            }
        }

        // Form content is ok, prepare to send
        if (!formError) {
            if (self.formFocused !== true) {
                self.logError(self.dict.markedAsSpamError);
                return false;
            }
            // Create secret field
            secretField = form.querySelector("[name=\"contact_secret\"]");
            if (!secretField) {
                secretField = document.createElement("input");
                secretField.type = "hidden";
                secretField.name = "contact_secret";
                form.appendChild(secretField);
            }
            secretField.value = getPassPhrase();
        }

        // Fix for fixed top on iPad if keyboard is hidden after submit.
        setTimeout(function () {
            window.scrollBy(0, -1);
        }, 1);
        return !formError;
    };

    VanillaForm.prototype.resetForm = function () {
        var self = this,
            formElements = self.form,
            submitButton = self.submitButton,
            tmpElement,
            i;

        for (i = formElements.length - 1; i >= 0; --i) {
            tmpElement = formElements[i];

            if (tmpElement !== submitButton) {
                tmpElement.classList.remove("success");
                tmpElement.value = "";
            }
        }
        self.setSubmitState("initial");
    };

    VanillaForm.prototype.successForm = function () {
        var self = this;
        self.setSubmitState("success");
        self.notify(self.dict.sendSuccess, "success");
    };

    VanillaForm.prototype.processResponse = function (receivedData) {
        var self = this,
            dict = self.dict,
            response;

        try {
            response = JSON.parse(receivedData);
        } catch (e) {
            console.error(e);
            response = {
                result: "ParseError"
            };
        }

        switch (response.result) {
        case "OK":
            self.successForm(dict.sendSuccess);
            setTimeout(self.resetForm.bind(self), 4000);
            break;
        case "NO_SPAM":
            self.logError(dict.markedAsSpamServerError);
            break;
        case "SEND_ERROR":
            self.logError(dict.sendError);
            self.setSubmitState("initial");
            break;
        case "ParseError":
            self.logError(dict.parseResponseError);
            break;
        }
    };

    VanillaForm.prototype.requestStateChange = function () {
        var self = this,
            httpRequest = self.httpRequest;

        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                self.processResponse(httpRequest.responseText);
            } else {
                self.setSubmitState("initial");
                // Don't log status 0, because it's received when timeout occurs
                if (httpRequest.status !== 0) {
                    self.logError(self.dict.httpRequestError.replace("%s", httpRequest.status));
                }
            }
        }
    };

    VanillaForm.prototype.init = function () {
        var self = this,
            form = self.form,
            submit = self.submitButton,
            requiredElements = form.elements,
            tmpElement,
            i;

        // Bind submit event
        form.addEventListener("submit", self.submitForm.bind(self), true);

        //Prepare httpRequest
        if (window.XMLHttpRequest) {
            self.httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject("Microsoft.XMLHTTP")) {
            self.httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }

        self.focusBound = onFieldFocus.bind(null, self);
        if (!self.httpRequest) {
            console.error("Couldn't init XMLHttpRequest");
            return null;
        }

        // BOT prevent
        self.formFocused = false;
        for (i = requiredElements.length - 1; i >= 0; --i) {
            tmpElement = requiredElements[i];
            if (tmpElement.type !== "submit") {
                tmpElement.addEventListener("focus", self.focusBound, false);
            }
        }

        // Set submit initial value
        if (submit.value !== submit.getAttribute("data-initial")) {
            submit.setAttribute("data-initial", submit.value);
            self.setSubmitState("initial");
        }
    };

    VanillaForm.prototype.send = function (formData) {
        var self = this,
            httpRequest = self.httpRequest;

        httpRequest.open("POST", self.url, true);
        httpRequest.timeout = self.responseTimeout;
        httpRequest.ontimeout = function () {
            self.logError(self.dict.timeoutError);
            self.setSubmitState("initial");
        };
        httpRequest.send(formData);
        httpRequest.onreadystatechange = self.requestStateChange.bind(self);
    };

    /**
     * Submits form
     * @param event {Event}
     * @returns {boolean}
     */
    VanillaForm.prototype.submitForm = function (event) {
        var self = this,
            formData = "";

        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        // Validate form
        if (self.validateForm()) {
            self.setSubmitState("processing");
            formData = new FormData(self.form);
            self.send(formData);
        }

        return false;
    };

    return VanillaForm;

//End of wrapping anonymous function
}(window));
/*! WOW - v0.1.9 - 2014-05-10
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),b=this.WeakMap||(b=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),this.WOW=function(){function d(a){null==a&&(a={}),this.scrollCallback=c(this.scrollCallback,this),this.scrollHandler=c(this.scrollHandler,this),this.start=c(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new b}return d.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},d.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},d.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},d.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},d.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},d.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},d.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),d.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},d.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},d.prototype.vendors=["moz","webkit"],d.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},d.prototype.vendorCSS=function(a,b){var c,d,e,f,g,h;for(d=window.getComputedStyle(a),c=d.getPropertyCSSValue(b),h=this.vendors,f=0,g=h.length;g>f;f++)e=h[f],c=c||d.getPropertyCSSValue("-"+e+"-"+b);return c},d.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=window.getComputedStyle(a).getPropertyValue("animation-name")}return"none"===b?"":b},d.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},d.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},d.prototype.scrollHandler=function(){return this.scrolled=!0},d.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},d.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},d.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},d.prototype.util=function(){return this._util||(this._util=new a)},d.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},d}()}).call(this);