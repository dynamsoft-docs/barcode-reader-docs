function GenerateContentByHead(needh3 = true) {
    var h2_list = $('.content h2');
    if (h2_list.length > 0) {
        var appendContent = '<ul>';
        // if(needh3) {
        //     appendContent += '<ul>';
        // }
        // else {
        //     appendContent += '<ul style="display: block;">';
        // }
        for (var i = 0; i < h2_list.length; i++) {
            var curH2Text = $(h2_list[i]).text();
            var curH2Href = curH2Text.replace(/\s+/g, '-');
            curH2Href = curH2Href.replace(/[/#:\\\[\]@$^();,`"'|.&]/g, "");
            curH2Href = curH2Href.toLowerCase();
            var curliContent = '<li style="list-style-image: none; list-style-type: circle;"><a href="#' + curH2Href + '" class="otherLinkColour">' + curH2Text + '</a>';
            if (needh3) {
                var h3_list = $(h2_list[i]).nextUntil(h2_list[i + 1], "h3");
                if (h3_list.length > 0) {
                    curliContent += '<ul name="listLevel2">';
                    for (var j = 0; j < h3_list.length; j++) {
                        var curH3Text = $(h3_list[j]).text();
                        var curH3Href = curH3Text.replace(/\s+/g, '-');
                        curH3Href = curH3Href.replace(/[/#:\\\[\]@$^();,`"'|.&]/g, "");
                        curH3Href = curH3Href.toLowerCase();
                        curliContent += '<li style="list-style-image: none; list-style-type: disc;"><a href="#' + curH3Href + '" class="otherLinkColour">' + curH3Text + '</a></li>';
                    }
                    curliContent += '</ul>'
                }
            }
            curliContent += '</li>'
            appendContent += curliContent;
        }
        appendContent += '</ul>'
        if ($('#AutoGenerateSidebar').length != 0) {
            $('#AutoGenerateSidebar').append(appendContent);
        }
        // if (!needh3 && $('#sidelistDocContent').length != 0) {
        //     $($('#sidelistDocContent')[0]).append(appendContent);
        // }
    }
}

function FullTreeMenuList(generateDocHead, needh3 = true) {
    var navWrap = document.getElementById("fullTreeMenuListContainer");
    if (navWrap != null) {
        HighlightCurrentListForFullTree("fullTreeMenuListContainer", true, document.URL, generateDocHead);
        if (generateDocHead) {
            GenerateContentByHead(needh3);
            //GenerateContentByHead(false);
        }

        navWrap = document.getElementById("fullTreeMenuListContainer");
        var liAry = navWrap.getElementsByTagName("li");

        for (var i = 0, len = liAry.length; i < len; i++) {
            liAry[i].onclick = (function (i) {
                return function (event) {
                    if ($(liAry[i]).children("a").length == 0 || $(liAry[i]).children("a")[0].getAttribute("href") == null) {
                        var subUl = $(liAry[i]).children("ul");
                        if (subUl.length > 0) {
                            for (var j = 0; j < subUl.length; j++) {
                                if (subUl[j].style.display == "block") {
                                    var parentL = $(subUl[j]).parents("li");
                                    if (parentL.length > 0) {
                                        parentL[0].className = "collapseListStyle"
                                        // parentL[0].style.listStyleImage = "url('/assets/img-icon/collapse-list.png')";
                                    }
                                    subUl[j].style.display = "none";
                                }
                                else {
                                    subUl[j].style.display = "block";
                                    var parentL = $(subUl[j]).parents("li");
                                    if (parentL.length > 0) {
                                        parentL[0].className = "expandListStyle"
                                        // parentL[0].style.listStyleImage = "url('/assets/img-icon/expand-list.png')";
                                    }
                                    var parentUl = $(liAry[i]).parents("ul");
                                    for (var m = 0; m < parentUl.length; m++) {
                                        if (parentUl[m].style.display != "block") {
                                            var parentL = $(parentUl[m]).parents("li");
                                            if (parentL.length > 0) {
                                                parentL[0].className = "expandListStyle"
                                                // parentL[0].style.listStyleImage = "url('/assets/img-icon/expand-list.png')";
                                            }
                                            parentUl[m].style.display = "block";
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        HighlightCurrentListForFullTree("fullTreeMenuListContainer", false, ($(liAry[i]).children("a"))[0].href);
                    }
                    event.stopPropagation();
                }
            })(i)
        }
    }
}

function HighlightCurrentListForFullTree(searchListId, firstTime, searchUrl = document.URL, needGenerateDocHead = false) {
    var navWrap = document.getElementById(searchListId);
    if (navWrap != null) {
        var listAry = navWrap.getElementsByTagName("li");    

        
        var oriUrl = searchUrl;
        //history version doc url
        searchUrl = searchUrl.replace(/\/index-v[0-9]+[^\/]*.html/g,"/");
        searchUrl = searchUrl.replace(/-v[0-9]+[^\/]*\//g,"/");
        searchUrl = searchUrl.replace(/-v[0-9]+[^\/]*.html/g,".html");

        var dochead = document.head || document.getElementsByTagName('head')[0];

        if (searchUrl != oriUrl){
            oriUrl = searchUrl;
            if (oriUrl.indexOf("#") != -1) {
                oriUrl = oriUrl.substring(0, oriUrl.indexOf("#"));
            }
            if (oriUrl.indexOf("?") != -1) {
                oriUrl = oriUrl.substring(0, oriUrl.indexOf("?"));
            }
            var linkTag = document.createElement('link');
            linkTag.href = oriUrl;
            linkTag.rel = 'canonical';
            dochead.appendChild(linkTag);
        }

        //index url with content anchor
        if (searchUrl.indexOf("/#") != -1) {
            searchUrl = searchUrl.substring(0, searchUrl.indexOf("/#") + 1 );
        }
        var foundCurList = false;

        for (var iter = 0; iter < 2; iter++) {
            if (iter == 1) {
                if (firstTime && !foundCurList && searchUrl.indexOf("#") != -1) {
                    searchUrl = searchUrl.substring(0, searchUrl.indexOf("#"));
                }
                else {
                    continue;
                }  
            }
            for (var i = 0, len = listAry.length; i < len; i++) {
                var curLi = listAry[i];
                var curListATag =  $(curLi).children("a");
                if (curListATag.length > 0) {
                    if (UrlSearch(searchUrl, curListATag[0].href)) {
                        foundCurList = true;
                        curListATag[0].style.color = '#fe8e14';
                        curListATag[0].className = "otherLinkColour activeLink"

                        // if (needGenerateDocHead) {
                        //     curLi.id = "sidelistDocContent";
                        // }

                        if (firstTime) {
                            var parentsUL = $(curLi).parents("ul");
                            for (var j = 0, lenUL = parentsUL.length; j < lenUL; j++) {
                                var curUL =  parentsUL[j];
                                if (curUL.style.display != "block") {
                                    curUL.style.display = "block";
                                }
                                var curULChildrenListAry = $(curUL).children("li");
                                for (var k = 0, lenChildLi = curULChildrenListAry.length; k < lenChildLi; k++) {
                                    var curULTag = $(curULChildrenListAry[k]).children("ul");
                                    if (curULTag.length > 0) {
                                        if (curULTag[0].style.display != "block") {
                                            curULChildrenListAry[k].className = "collapseListStyle"
                                            // curULChildrenListAry[k].style.listStyleImage = "url('/assets/img-icon/collapse-list.png')";  
                                        }
                                        else {
                                            curULChildrenListAry[k].className = "expandListStyle"
                                            // curULChildrenListAry[k].style.listStyleImage = "url('/assets/img-icon/expand-list.png')";
                                        }
                                    }
                                }
                            }
    
                            var childUL = $(curLi).children("ul");
                            if (childUL.length > 0) {
                                curLi.className = "expandListStyle"
                                // curLi.style.listStyleImage = "url('/assets/img-icon/expand-list.png')";
                                if (childUL[0].style.display != "block") {
                                    childUL[0].style.display = "block";
                                }
                                curListATag[0].removeAttribute("href");

                                var childrenLi = $(childUL[0]).children("li");
                                for (var j = 0; j < childrenLi.length; j++) {
                                    var curULTag = $(childrenLi[j]).children("ul");
                                    if (curULTag.length > 0) {
                                        if (curULTag[0].style.display != "block") {
                                            childrenLi[j].className = "collapseListStyle"
                                            // childrenLi[j].style.listStyleImage = "url('/assets/img-icon/collapse-list.png')";  
                                        }
                                        else {
                                            childrenLi[j].className = "expandListStyle"
                                            // childrenLi[j].style.listStyleImage = "url('/assets/img-icon/expand-list.png')";
                                        }
                                    }
                                }
                            }
                            var parentsLi = $(curLi).parents("li");
                            for (var j = 0, lenLi = parentsLi.length; j < lenLi; j++) {
                                parentsLi[j].className = "expandListStyle"
                                // parentsLi[j].style.listStyleImage = "url('/assets/img-icon/expand-list.png')";
                            }

                            var breadcrumbLastNode = document.getElementById("breadcrumbLastNode");
                            if (breadcrumbLastNode != null)
                            {
                                breadcrumbLastNode.textContent = curListATag[0].textContent;
                            }

                            break;
                        }               
                    }
                    else if (!firstTime) {
                        curListATag[0].style.fontWeight = 'normal';
                    }
                }
            }
        }
    }
}

function UrlSearch(docUrl, listUrl) {
    var docUrlWithParam = getUrlVars(docUrl)["src"];
    var listUrlWithParam = getUrlVars(listUrl)["src"];

    var tmpExp = new RegExp('programming/c-cplusplus/$')
    if (tmpExp.exec(docUrl) != null){
        docUrl = docUrl.substring(0, docUrl.indexOf("c-cplusplus/"));
    }
    
    if (docUrl.indexOf("?") != -1) {
          docUrl = docUrl.substring(0, docUrl.indexOf("?"));
    }
    if (listUrl.indexOf("?") != -1) {
          listUrl = listUrl.substring(0, listUrl.indexOf("?"));
    }  
     
    if (docUrlWithParam != undefined && listUrlWithParam != undefined) {
        if (docUrlWithParam != listUrlWithParam) {
            return false;
        }
        else {
            var regExp = new RegExp(listUrl + '$');
            if (regExp.exec(docUrl) != null) {
                return true;
            }
            else if (docUrl.indexOf("#") == -1 && listUrl.indexOf("#") != -1){
                listUrl = listUrl.substring(0, listUrl.indexOf("#"));
                regExp = new RegExp(listUrl + '$');
                if (regExp.exec(docUrl) != null) {
                        return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }
    else {
        var regExp = new RegExp(listUrl + '$');
        if (regExp.exec(docUrl) != null) {
            return true;
        }
        else if (docUrl.indexOf("#") == -1 && listUrl.indexOf("#") != -1){
            listUrl = listUrl.substring(0, listUrl.indexOf("#"));
            regExp = new RegExp(listUrl + '$');
            if (regExp.exec(docUrl) != null) {
                    return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}

function getUrlVars(inputUrl) {
    var vars = {};
    var parts = inputUrl.replace(/[?&]+([^=&]+)=([^&^#]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function UsefulRecord(isUseful) {
    var encodeUrl = encodeURIComponent(document.URL);
    if (isUseful) {
        $.get("https://www.dynamsoft.com/Secure/Rate.ashx?paper="+encodeUrl+"&product=DBR-Doc&rate=5")
    }
    else {
        $.get("https://www.dynamsoft.com/Secure/Rate.ashx?paper="+encodeUrl+"&product=DBR-Doc&rate=1")
    }
    
    var feedbackTag = document.getElementById("feedbackFooter");

    if(feedbackTag!=null) {
        feedbackTag.innerHTML = "Thanks!";
    }
}
