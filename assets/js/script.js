var userAgent=window.navigator.userAgent.toLowerCase(),isIE=!1;function scrollAnime(){var t=$(window).innerHeight(),i=$(document).scrollTop(),n=150;$(".fadein, .slideBox").each(function(){var e=$(this).offset().top;n=null!=$(this).data("fadeheight")?$(this).data("fadeheight"):n,(e-t+n<i||$(this).hasClass("firstView"))&&$(this).addClass($(this).data("fadein"))})}-1!=userAgent.indexOf("msie")||-1!=userAgent.indexOf("trident")?isIE=!0:-1!=userAgent.indexOf("edge")||-1!=userAgent.indexOf("chrome")||-1!=userAgent.indexOf("safari")||-1!=userAgent.indexOf("firefox")||userAgent.indexOf("opera"),$(function(){$(".ac-child").css("display","none"),$(".ac-parent").on("click",function(){$(this).next().slideToggle()})}),$(window).on("load",function(){$(".loading").fadeOut(600,function(){$(".container").css("opacity","1"),scrollAnime()})}),$(window).on("resize",function(){scrollAnime()}),$(window).on("scroll",function(){scrollAnime()}),$('a.scroller[href^="#"]').click(function(){var e=$(this).attr("href"),e=$(e).offset().top;return $("body,html").stop().animate({scrollTop:e},500),!1}),$(".openShare").on("click",function(){var e=$(this).data("type"),t="",i=TITLE;switch($(this).data("page")&&(t=URL+$(this).data("page"),i=$("title").first().text()),e){case"tw":t="https://twitter.com/intent/tweet?text="+i+"&url="+URL;break;case"fb":t="https://www.facebook.com/sharer/sharer.php?u="+URL;break;case"line":t="https://social-plugins.line.me/lineit/share?url="+URL}console.log("???"+t),window.open(t,e,"width=550, height=450, personalbar=0, toolbar=0, scrollbars=1, resizable=1")});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NyaXB0LmpzIiwic291cmNlcyI6WyJqcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IGZhbHNlO1xuaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgIT0gLTEgfHxcbiAgdXNlckFnZW50LmluZGV4T2YoJ3RyaWRlbnQnKSAhPSAtMSkge1xuICBpc0lFID0gdHJ1ZTtcbn0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ2VkZ2UnKSAhPSAtMSkge30gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ2Nocm9tZScpICE9IC0xKSB7fSBlbHNlIGlmICh1c2VyQWdlbnQuaW5kZXhPZignc2FmYXJpJykgIT0gLTEpIHt9IGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdmaXJlZm94JykgIT0gLTEpIHt9IGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdvcGVyYScpICE9IC0xKSB7fSBlbHNlIHt9XG5cbi8vIEhUTUwtTE9BRFxuJChmdW5jdGlvbigpe1xuICAkKCcuYWMtY2hpbGQnKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgJCgnLmFjLXBhcmVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVRvZ2dsZSgpO1xuICB9KVxufSk7XG5cbi8vIEFTU0VUUy1MT0FEXG4kKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbigpIHtcblxuICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dCg2MDAsIGZ1bmN0aW9uKCkge1xuICAgICQoXCIuY29udGFpbmVyXCIpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpO1xuICAgIHNjcm9sbEFuaW1lKCk7XG4gIH0pO1xuXG59KTtcblxuJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICBzY3JvbGxBbmltZSgpO1xufSk7XG5cbiQod2luZG93KS5vbihcInNjcm9sbFwiLCBmdW5jdGlvbigpIHtcbiAgc2Nyb2xsQW5pbWUoKTtcbn0pO1xuXG4kKCdhLnNjcm9sbGVyW2hyZWZePVwiI1wiXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XG4gIHZhciB0YXJnZXQgPSAkKGhyZWYpO1xuICB2YXIgcG9zaXRpb24gPSB0YXJnZXQub2Zmc2V0KCkudG9wO1xuICAkKCdib2R5LGh0bWwnKS5zdG9wKCkuYW5pbWF0ZSh7XG4gICAgc2Nyb2xsVG9wOiBwb3NpdGlvblxuICB9LCA1MDApO1xuICByZXR1cm4gZmFsc2U7XG59KTtcblxuJChcIi5vcGVuU2hhcmVcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcblxuICBsZXQgVFlQRSA9ICQodGhpcykuZGF0YShcInR5cGVcIik7XG4gIHZhciBTSEFSRV9VUkwgPSBcIlwiO1xuICB2YXIgU0hBUkVfVElUTEUgPSBUSVRMRTtcblxuICBpZiAoJCh0aGlzKS5kYXRhKFwicGFnZVwiKSkge1xuICAgIFNIQVJFX1VSTCA9IFVSTCArICQodGhpcykuZGF0YShcInBhZ2VcIik7XG4gICAgU0hBUkVfVElUTEUgPSAkKFwidGl0bGVcIikuZmlyc3QoKS50ZXh0KCk7XG4gIH1cblxuICAvLyBTTlMgdHlwZVxuICBzd2l0Y2ggKFRZUEUpIHtcbiAgICBjYXNlIFwidHdcIjpcbiAgICAgIFNIQVJFX1VSTCA9IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD1cIiArIFNIQVJFX1RJVExFICsgXCImdXJsPVwiICsgVVJMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImZiXCI6XG4gICAgICBTSEFSRV9VUkwgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zaGFyZXIvc2hhcmVyLnBocD91PVwiICsgVVJMO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImxpbmVcIjpcbiAgICAgIFNIQVJFX1VSTCA9IFwiaHR0cHM6Ly9zb2NpYWwtcGx1Z2lucy5saW5lLm1lL2xpbmVpdC9zaGFyZT91cmw9XCIgKyBVUkw7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcIj8/P1wiICsgU0hBUkVfVVJMKVxuXG4gIHdpbmRvdy5vcGVuKFNIQVJFX1VSTCwgVFlQRSwgJ3dpZHRoPTU1MCwgaGVpZ2h0PTQ1MCwgcGVyc29uYWxiYXI9MCwgdG9vbGJhcj0wLCBzY3JvbGxiYXJzPTEsIHJlc2l6YWJsZT0xJyk7XG59KTtcblxuZnVuY3Rpb24gc2Nyb2xsQW5pbWUoKSB7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaW5uZXJIZWlnaHQoKSxcbiAgICB0b3BXaW5kb3cgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSxcbiAgICBmYWRlSCA9IDE1MDtcblxuICAkKCcuZmFkZWluLCAuc2xpZGVCb3gnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgIHZhciB0YXJnZXRQb3NpdGlvbiA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgIGZhZGVIID0gJCh0aGlzKS5kYXRhKFwiZmFkZWhlaWdodFwiKSAhPSB1bmRlZmluZWQgPyAkKHRoaXMpLmRhdGEoXCJmYWRlaGVpZ2h0XCIpIDogZmFkZUg7XG4gICAgaWYgKHRvcFdpbmRvdyA+IHRhcmdldFBvc2l0aW9uIC0gd2luZG93SGVpZ2h0ICsgKGZhZGVIKSB8fCAkKHRoaXMpLmhhc0NsYXNzKFwiZmlyc3RWaWV3XCIpKSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCQodGhpcykuZGF0YShcImZhZGVpblwiKSk7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VyQWdlbnQiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJ0b0xvd2VyQ2FzZSIsImlzSUUiLCJzY3JvbGxBbmltZSIsIndpbmRvd0hlaWdodCIsIiQiLCJpbm5lckhlaWdodCIsInRvcFdpbmRvdyIsImRvY3VtZW50Iiwic2Nyb2xsVG9wIiwiZmFkZUgiLCJlYWNoIiwidGFyZ2V0UG9zaXRpb24iLCJ0aGlzIiwib2Zmc2V0IiwidG9wIiwidW5kZWZpbmVkIiwiZGF0YSIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJpbmRleE9mIiwiY3NzIiwib24iLCJuZXh0Iiwic2xpZGVUb2dnbGUiLCJmYWRlT3V0IiwiY2xpY2siLCJocmVmIiwiYXR0ciIsInBvc2l0aW9uIiwic3RvcCIsImFuaW1hdGUiLCJsZXQiLCJUWVBFIiwiU0hBUkVfVVJMIiwiU0hBUkVfVElUTEUiLCJUSVRMRSIsIlVSTCIsImZpcnN0IiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJvcGVuIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxVQUFZQyxPQUFPQyxVQUFVRixVQUFVRyxjQUN2Q0MsTUFBTyxFQXlFWCxTQUFTQyxjQUNQLElBQUlDLEVBQWVDLEVBQUVOLFFBQVFPLGNBQzNCQyxFQUFZRixFQUFFRyxVQUFVQyxZQUN4QkMsRUFBUSxJQUVWTCxFQUFFLHNCQUFzQk0sS0FBSyxXQUMzQixJQUFJQyxFQUFpQlAsRUFBRVEsTUFBTUMsU0FBU0MsSUFDdENMLEVBQXNDTSxNQUE5QlgsRUFBRVEsTUFBTUksS0FBSyxjQUE2QlosRUFBRVEsTUFBTUksS0FBSyxjQUFnQlAsR0FDL0RFLEVBQWlCUixFQUFlLEVBQTVDRyxHQUF1REYsRUFBRVEsTUFBTUssU0FBUyxlQUMxRWIsRUFBRVEsTUFBTU0sU0FBU2QsRUFBRVEsTUFBTUksS0FBSyxjQWpGRixHQUE5Qm5CLFVBQVVzQixRQUFRLFVBQ2EsR0FBakN0QixVQUFVc0IsUUFBUSxXQUNsQmxCLE1BQU8sR0FDZ0MsR0FBOUJKLFVBQVVzQixRQUFRLFVBQTJELEdBQWhDdEIsVUFBVXNCLFFBQVEsWUFBNkQsR0FBaEN0QixVQUFVc0IsUUFBUSxZQUE4RCxHQUFqQ3RCLFVBQVVzQixRQUFRLFlBQThCdEIsVUFBVXNCLFFBQVEsU0FHeE5mLEVBQUUsV0FDQUEsRUFBRSxhQUFhZ0IsSUFBSSxVQUFXLFFBQzlCaEIsRUFBRSxjQUFjaUIsR0FBRyxRQUFTLFdBQzFCakIsRUFBRVEsTUFBTVUsT0FBT0Msa0JBS25CbkIsRUFBRU4sUUFBUXVCLEdBQUcsT0FBUSxXQUVuQmpCLEVBQUUsWUFBWW9CLFFBQVEsSUFBSyxXQUN6QnBCLEVBQUUsY0FBY2dCLElBQUksVUFBVyxLQUMvQmxCLGtCQUtKRSxFQUFFTixRQUFRdUIsR0FBRyxTQUFVLFdBQ3JCbkIsZ0JBR0ZFLEVBQUVOLFFBQVF1QixHQUFHLFNBQVUsV0FDckJuQixnQkFHRkUsRUFBRSx5QkFBeUJxQixNQUFNLFdBQy9CLElBQUlDLEVBQU90QixFQUFFUSxNQUFNZSxLQUFLLFFBRXBCQyxFQURTeEIsRUFBRXNCLEdBQ09iLFNBQVNDLElBSS9CLE9BSEFWLEVBQUUsYUFBYXlCLE9BQU9DLFFBQVEsQ0FDNUJ0QixVQUFXb0IsR0FDVixNQUNJLElBR1R4QixFQUFFLGNBQWNpQixHQUFHLFFBQVMsV0FFMUJVLElBQUlDLEVBQU81QixFQUFFUSxNQUFNSSxLQUFLLFFBQ3BCaUIsRUFBWSxHQUNaQyxFQUFjQyxNQVFsQixPQU5JL0IsRUFBRVEsTUFBTUksS0FBSyxVQUNmaUIsRUFBWUcsSUFBTWhDLEVBQUVRLE1BQU1JLEtBQUssUUFDL0JrQixFQUFjOUIsRUFBRSxTQUFTaUMsUUFBUUMsUUFJM0JOLEdBQ04sSUFBSyxLQUNIQyxFQUFZLHlDQUEyQ0MsRUFBYyxRQUFVRSxJQUMvRSxNQUNGLElBQUssS0FDSEgsRUFBWSxnREFBa0RHLElBQzlELE1BQ0YsSUFBSyxPQUNISCxFQUFZLG1EQUFxREcsSUFNckVHLFFBQVFDLElBQUksTUFBUVAsR0FFcEJuQyxPQUFPMkMsS0FBS1IsRUFBV0QsRUFBTSJ9
