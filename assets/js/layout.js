// dbr download
var ei = getUrlParam('ei')
if (ei == '0') {
    $('.editionName').html('Java');
    window.location.href= 'https://download2.dynamsoft.com/dbr/dbr-java-7.6.zip';
    $('.downloadlink').attr('href', 'https://download2.dynamsoft.com/dbr/dbr-java-7.6.zip');
    $('.dbrThanksDownloading').show();
}
if (ei == '1') {
    $('.editionName').html('raspberry pi');
    window.location.href= 'https://download2.dynamsoft.com/dbr/dbr-rpi-7.6.tar.gz';
    $('.downloadlink').attr('href', 'https://download2.dynamsoft.com/dbr/dbr-rpi-7.6.tar.gz');
    $('.dbrThanksDownloading').show();
}
if (ei && ei != '' && ei != '0' && ei != '1') {
    $.ajax({
        type: 'GET',
        url: '/barcode-reader/assets/files/ProductList.js',
        data: {},
        dataType: 'JSON',
        success: function(res) {
            for (var i = 0; i < res.length; i++) {
                if (res[i].ProductId == 1000003) {
                    var editionInfos = res[i].EditionInfos
                    for (var j = 0; j<editionInfos.length; j++) {
                        if (editionInfos[j].ProductEditionId == ei) {
                            if (ei == '1000010') {
                                $('.editionName').html('JavaScript');
                            } else if (ei == '1000005') {
                                $('.editionName').html('Windows');
                            } else if (ei == '1000009') {
                                $('.editionName').html('Android');
                            } else if (ei == '1000008') {
                                $('.editionName').html('iOS');
                            } else if (ei == '1000007') {
                                $('.editionName').html('Linux');
                            }
                            var VersionInfos = editionInfos[j].VersionInfos
                            VersionInfos.sort(function (a, b) {
                              if (a.VersionMajor > b.VersionMajor) {
                                  return -1
                              } else if (a.VersionMajor == b.VersionMajor) {
                                  if (a.VersionMinor > b.VersionMinor) {
                                      return -1
                                  } else if (a.VersionMinor == b.VersionMinor) {
                                      if (a.VersionBuild > b.VersionBuild) {
                                          return -1
                                      } else {
                                          return 1
                                      }
                                  } else {
                                      return 1
                                  }
                              } else {
                                  return 1
                              }
                            })
                            var vlength = VersionInfos.length
                            if (vlength > 0) {
                                var vlink = VersionInfos[0].TrialResourceUrl
                                window.location.href= vlink;
                                $('.downloadlink').attr('href', vlink);
                                $('.dbrThanksDownloading').show();
                            }
                        }
                    }
                }
            }
        }
    })
}