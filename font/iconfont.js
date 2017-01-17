;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-search" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M400.085333 753.265778c-192.128 0-348.444444-156.302222-348.444444-348.430222 0-192.142222 156.316444-348.444444 348.444444-348.444444 192.142222 0 348.444444 156.302222 348.444444 348.444444C748.544 596.963556 592.241778 753.265778 400.085333 753.265778zM400.085333 113.28c-160.768 0-291.555556 130.787556-291.555556 291.555556s130.787556 291.541333 291.555556 291.541333c160.753778 0 291.555556-130.773333 291.555556-291.541333S560.853333 113.28 400.085333 113.28z"  ></path>' +
    '' +
    '<path d="M194.104889 296.974222c-2.474667 0-4.977778-0.64-7.253333-2.005333-6.755556-3.996444-8.974222-12.743111-4.963556-19.484444 45.525333-76.657778 129.137778-124.273778 218.197333-124.273778 7.864889 0 14.222222 6.357333 14.222222 14.222222s-6.357333 14.222222-14.222222 14.222222c-79.075556 0-153.301333 42.296889-193.735111 110.364444C203.690667 294.499556 198.968889 296.974222 194.104889 296.974222z"  ></path>' +
    '' +
    '<path d="M160.682667 410.723556c-7.850667 0-14.222222-6.357333-14.222222-14.222222 0-20.195556 2.403556-31.445333 6.656-49.592889 1.792-7.651556 9.443556-12.373333 17.080889-10.609778 7.651556 1.792 12.401778 9.429333 10.609778 17.080889-3.982222 17.038222-5.902222 25.984-5.902222 43.121778C174.904889 404.366222 168.547556 410.723556 160.682667 410.723556z"  ></path>' +
    '' +
    '<path d="M887.04 967.608889c-22.812444 0-44.216889-8.860444-60.359111-24.974222L597.12 713.045333c-17.806222-17.806222-23.665778-39.808-16.526222-61.966222 5.831111-18.033778 19.498667-33.251556 30.748444-44.472889 16.668444-16.668444 37.162667-33.720889 62.890667-33.720889 10.965333 0 27.448889 3.384889 43.562667 19.498667l229.589333 229.560889c16.113778 16.142222 24.974222 37.560889 24.974222 60.359111 0 22.784-8.860444 44.216889-24.974222 60.330667C931.242667 958.748444 909.824 967.608889 887.04 967.608889zM634.510222 669.525333c0.085333 0 0.839111 1.336889 2.830222 3.299556l229.560889 229.589333c10.752 10.723556 29.496889 10.723556 40.248889 0 5.361778-5.390222 8.305778-12.529778 8.305778-20.110222 0-7.608889-2.944-14.748444-8.334222-20.138667L677.575111 632.604444c-2.033778-2.033778-3.356444-2.773333-3.726222-2.887111-0.199111 0.113778-6.058667 0.867556-22.272 17.109333C635.320889 663.054222 634.538667 668.913778 634.510222 669.525333L634.510222 669.525333z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-top" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M494.528582 0l31.951713 0c-1.370207 15.335267 0.77055 17.21815 7.965415 22.958898 82.328054 65.364707 142.040017 155.663292 170.827667 267.716344-128.504746-0.682545-259.750929 1.370207-386.538567-1.029446 27.583219-99.629091 76.931137-183.757141 145.80476-245.699911 8.394181-7.535627 27.843138-19.529799 29.990035-26.981515C495.980653 11.82328 493.238193 1.459235 494.528582 0L494.528582 0 494.528582 0zM311.703673 320.66323l401.533073 0c9.253758 46.086641 18.076704 96.457866 16.022928 146.834206-2.058892 49.858548-11.82328 98.346889-20.993127 140.839679-19.35993 89.868797-42.917462 175.535899-66.905806 256.751618L385.637546 865.088734c-27.240411-78.04654-49.174979-165.258835-68.963675-254.694773-18.675338-84.385922-32.04074-196.098213-5.994528-286.649556C310.593386 322.204329 310.593386 320.833099 311.703673 320.66323L311.703673 320.66323 311.703673 320.66323zM434.557722 442.48067c-17.646915 55.945173 21.157879 108.286262 77.869508 107.856473 23.304775-0.169869 47.976688-12.505825 60.911278-26.982538 47.464011-52.686966 7.198959-144.951323-68.964698-136.816039C466.169697 390.651234 443.467649 414.380682 434.557722 442.48067L434.557722 442.48067 434.557722 442.48067zM126.917086 636.266212l0-30.928407c8.653077-83.870176 62.623269-127.905088 131.845841-147.864676 11.134595 127.392412 37.181831 239.786225 72.906473 342.592682-27.15957 38.211277-57.400315 78.30032-54.917774 142.81159C192.281793 875.283933 136.429741 778.989797 126.917086 636.266212L126.917086 636.266212 126.917086 636.266212zM767.206938 457.473129c50.376341 15.423271 88.581478 40.434921 110.858854 80.869842 23.474644 42.664705 22.788006 104.263645 11.994172 163.803693-9.594519 52.771901-28.611641 98.258884-52.941769 138.870838-24.245194 40.435944-53.287647 77.358879-88.927355 100.917434 1.799996-47.547923-15.417131-84.557838-36.922934-116.852358-5.741771-8.570189-17.388019-19.193131-17.9887-24.928762-0.859577-8.311293 9.335622-27.245528 13.018501-38.981826 28.446889-92.0116 50.376341-192.069457 59.969836-301.640991C765.837754 457.561134 766.866177 455.843002 767.206938 457.473129L767.206938 457.473129 767.206938 457.473129zM420.592662 896.018164l182.816722 0c-11.136641 22.188348-25.01165 41.547255-35.982516 63.906495-10.876722-7.111978-17.900695-18.077727-27.92398-25.958208-9.169847 29.387307-18.764366 58.510602-28.0171 87.897909-12.07706-28.528754-22.528086-58.682517-33.923624-87.897909-8.31027 14.309914-15.163351 30.069853-22.959921 44.975331C442.091302 952.389032 431.557388 924.030148 420.592662 896.018164L420.592662 896.018164 420.592662 896.018164zM420.592662 896.018164"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M319.104 20.417l507.52 491.584-507.52 491.648-121.792-118.016 385.664-373.632-385.664-373.568 121.792-118.016z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M432.44 469.692c-139.4 6.5-252.3 81.3-252.3 174.3 0 93 112.9 163 252.3 156.5s252.7-93.7 252.7-187C685.14 520.892 572.14 463.192 432.44 469.692L432.44 469.692 432.44 469.692zM527.54 704.292c-42.8 55.2-127.1 82.1-209.5 37.8-38.9-21.4-37.4-63.2-37.4-63.2s-16.3-131.4 124.2-147.8S570.34 649.092 527.54 704.292L527.54 704.292 527.54 704.292zM433.44 616.092c-9.1 6.5-10.9 18.9-5.8 26.9 4.7 8 15.6 8.7 24.3 2.2 8.7-6.9 12-18.9 7.3-26.9C454.54 610.592 444.04 608.392 433.44 616.092L433.44 616.092 433.44 616.092zM367.04 634.192c-26.1 2.5-45 25.4-45 47.6 0 21.8 21.1 37 47.2 33.8 26.1-2.9 47.2-23.2 47.2-45C416.74 648.792 397.14 631.292 367.04 634.192L367.04 634.192 367.04 634.192zM867.04 5.292l-706.9 0c-85.3 0-154.7 69.4-154.7 154.7l0 706.6c0 85.3 69.4 154.7 154.7 154.7L866.64 1021.292c85.3 0 154.7-69.4 154.7-154.7L1021.34 159.992C1021.74 74.692 952.34 5.292 867.04 5.292L867.04 5.292 867.04 5.292zM809.64 675.592c-57.4 122-247.3 181.5-387.8 170.7-133.6-10.5-305.4-54.8-323.2-216.4 0 0-9.4-73.3 61.7-167.7 0 0 102-142.7 220.8-183.4 119.1-40.3 132.9 28 132.9 68.6-6.2 34.5-18.2 54.5 26.5 40.7 0 0 116.9-54.1 165.2-6.2 38.9 38.9 6.5 92.2 6.5 92.2s-16 17.8 17.1 24.3C762.84 504.992 867.34 553.292 809.64 675.592L809.64 675.592 809.64 675.592zM694.54 337.892c-12.7 0-22.9-10.2-22.9-22.9 0-12.7 10.2-23.2 22.9-23.2 0 0 143.4-26.5 126.4 127.4 0 0.7 0 1.5-0.4 2.5-1.5 10.9-11.3 19.2-22.5 19.2-12.7 0-23.2-10.2-23.2-22.9C774.84 418.192 797.34 315.392 694.54 337.892L694.54 337.892 694.54 337.892zM936.74 461.392 936.74 461.392c-4 26.1-17.1 28.3-32.3 28.3-18.5 0-33.4-11.6-33.4-30.1 0-16 6.5-32.3 6.5-32.3 1.8-6.9 17.4-48.7-10.2-111.1-50.8-85.7-153.6-86.8-165.9-82.1s-30.1 7.3-30.1 7.3c-18.5 0-33.4-15.2-33.4-33.4 0-15.2 10.2-28.3 24.3-32.3 0 0 0.4-0.4 0.7-0.7 1.1-0.4 2.2-1.1 3.3-1.5 14.2-2.9 65.4-12.7 114.7-1.1C869.94 193.092 991.54 278.792 936.74 461.392L936.74 461.392 936.74 461.392z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wechat" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M833.927013 5.26798 188.723246 5.26798c-101.808734 0-184.344518 82.535785-184.344518 184.344518L4.378727 834.816267c0 101.808734 82.535785 184.344518 184.344518 184.344518L833.927013 1019.160785c101.808734 0 184.343495-82.535785 184.343495-184.344518L1018.270509 189.612499C1018.270509 87.803765 935.735747 5.26798 833.927013 5.26798zM390.155954 700.628078c-36.651758 0-66.11479-7.646144-102.845343-15.08865l-102.637612 52.658314 29.365818-90.355891c-73.502038-52.537564-117.486808-120.284527-117.486808-202.774263 0-142.907781 132.207068-255.455089 293.609061-255.455089 144.359852 0 270.833335 89.917916 296.241005 210.93513-9.336646-1.064238-18.757203-1.774413-28.27395-1.774413-139.470495 0-249.620198 106.491383-249.620198 237.716077 0 21.826098 3.322675 42.860157 9.060353 62.939471C408.506904 700.157357 399.367757 700.628078 390.155954 700.628078zM823.258023 805.833165l22.079878 75.069743L764.80268 835.788407c-29.365818 7.525394-58.856479 15.065114-88.093361 15.065114-139.700739 0-249.726621-97.674577-249.726621-217.97343 0-120.086006 110.025882-217.97343 249.726621-217.97343 131.925658 0 249.389954 97.886401 249.389954 217.97343C926.099273 713.420429 882.18818 760.604054 823.258023 805.833165z"  ></path>' +
    '' +
    '<path d="M756.937548 581.847811m-32.156374 0a31.424 31.424 0 1 0 64.312748 0 31.424 31.424 0 1 0-64.312748 0Z"  ></path>' +
    '' +
    '<path d="M596.143399 580.542072m-32.156374 0a31.424 31.424 0 1 0 64.312748 0 31.424 31.424 0 1 0-64.312748 0Z"  ></path>' +
    '' +
    '<path d="M288.095487 350.890672m-39.269375 0a38.375 38.375 0 1 0 78.538751 0 38.375 38.375 0 1 0-78.538751 0Z"  ></path>' +
    '' +
    '<path d="M481.21281 350.890672m-39.269375 0a38.375 38.375 0 1 0 78.538751 0 38.375 38.375 0 1 0-78.538751 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-twitter" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M835.486249 1019.462867 187.243148 1019.462867C84.897367 1019.462867 1.634294 936.190534 1.634294 833.855042L1.634294 185.61297C1.634294 83.264102 84.897367 0 187.243148 0l648.243101 0c102.343723 0 185.608854 83.265131 185.608854 185.61297l0 648.243101C1021.096132 936.190534 937.829972 1019.462867 835.486249 1019.462867z"  ></path>' +
    '' +
    '<path d="M890.894825 278.600528c-27.88742 12.379891-57.857188 20.762784-89.304353 24.499488 32.141625-19.242176 56.812927-49.691378 68.366669-86.003872-30.057219 17.810047-63.286315 30.752706-98.773689 37.70347-28.276317-30.232119-68.71647-49.08334-113.455069-49.08334-85.828971 0-155.414802 69.626983-155.414802 155.458012 0 12.206019 1.304554 24.020054 3.995969 35.400953-129.17968-6.51557-243.721192-68.324487-320.471782-162.450958-13.378883 23.021062-21.024106 49.734588-21.024106 78.229017 0 53.905458 27.452225 101.511401 69.150636 129.396763-25.453212-0.780881-49.430055-7.818066-70.453133-19.416048l0 1.911563c0 75.361672 53.600925 138.170611 124.748517 152.416796-13.031139 3.648225-26.756737 5.473367-40.960741 5.473367-10.033133 0-19.761734-0.912571-29.232098-2.736683 19.763791 61.723525 77.142574 106.722416 145.207796 107.93952-53.210999 41.699439-120.2762 66.543585-193.074032 66.543585-12.553763 0-24.933654-0.694459-37.095433-2.170828 68.802892 44.08735 150.549473 69.846124 238.292065 69.846124 286.026611 0 442.353983-236.858907 442.353983-442.355012 0-6.732652-0.13169-13.465305-0.435194-20.068325C843.720991 337.152175 870.131013 309.788429 890.894825 278.600528"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-458-linkedin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M928 0h-832C43.2 0 0 43.2 0 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 832H256V384h128v448zM320 320a64 64 0 1 1 0-128 64 64 0 1 1 0 128z m512 512h-128V576a64 64 0 1 0-128 0v256H448V384h128v79.424C602.368 427.2 642.816 384 688 384 767.616 384 832 455.616 832 544V832z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-facebook" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M905.448954 6.226818H118.611421c-61.823044 0-112.405069 50.582025-112.405069 112.40507v786.837532c0 61.879326 50.582025 112.405069 112.405069 112.405069h393.418255V624.456235H399.624607V485.355153h112.405069V370.139062c0-121.623012 68.1174-207.05066 211.659631-207.05066l101.333919 0.112564v146.408511h-67.274196c-55.865355 0-77.110215 41.926902-77.110215 80.8197v94.982258h144.328129l-31.92306 139.045823H680.637792V1017.875512h224.811162c61.823044 0 112.405069-50.525744 112.405069-112.405069V118.632911c0-61.823044-50.582025-112.406093-112.405069-112.406093z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)