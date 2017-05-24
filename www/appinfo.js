cordova.define("cordova-incall-plugins-AppInfo", function(require, exports, module) { 
var exec = require('cordova/exec');

module.exports = {

    getAppInfo: function(success, fail){
        exec(success, fail, 'AppInfo', 'getAppInfo', []);
    },

    /**
     * Returns the version name (or "unknown" if it fails)
     *
     * @param {Function} callback       The message to accept the version name.
     */
    getVersion: function(callback) {
        exec(callback, function(err) {
        	callback('Unknown');
    	}, 'AppInfo', 'getVersion', []);
    },
    
    getIdentifier: function(callback){
        exec(callback, function(err){
            callback('Unknown');
        }, 'AppInfo', 'getIdentifier', []);
    },

   openSurService: function(callback) {
    exec(callback, function(err){
        callback('Unknown');
        }, 'AppInfo', 'openSurService', []);
   },
    
    share:function(shareObject, success, error){
        exec(success, error, 'AppInfo', 'share', [shareObject.destId, shareObject.myId]);
    },
               
    baiduPilot: function(callback){
        exec(callback, function(err){
            callback('Unknown');
        }, 'AppInfo', 'baiduPilot', []);
    },
               
    getDeviceInfo:function(success, error){
        exec(success, error, 'AppInfo', 'getDeviceInfo',[]);
    },
               
    shareMyWall:function(shareObject, success, error)
    {
//               var url = "https://incall.changan.com.cn/static/Test.html?rank="+shareObject.destId+"&describe="+shareObject.myId;
//
//               var data = {};
//               data.myRank = shareObject.myRank;
               this.shareCommon(shareObject, success, error);
    },
    shareCommon:function(shareData, success, error)
    {
               //typedef enum
               //{
               //SSPublishContentMediaTypeText = 0, /**< 文本 */
               //SSPublishContentMediaTypeImage = 1, /**< 图片 */
               //SSPublishContentMediaTypeNews = 2, /**< 新闻 */
               //SSPublishContentMediaTypeMusic = 3, /**< 音乐 */
               //SSPublishContentMediaTypeVideo = 4, /**< 视频 */
               //SSPublishContentMediaTypeApp = 5, /**< 应用,仅供微信使用 */
               //SSPublishContentMediaTypeNonGif = 6, /**< 非Gif消息,仅供微信使用 */
               //SSPublishContentMediaTypeGif = 7 /**< Gif消息,仅供微信使用 */
               //}
        exec(success, error, 'AppInfo', 'shareCommon', [JSON.stringify(shareData)]);
    },
               
   openCarLocationView:function(data, success, error)
   {
   exec(success || function(){}, error || function(){}, 'AppInfo', 'openCarLocationView', [data]);

   },
               //-----------行车轨迹原生层---------------//
              openDrivingTrajectory: function(data, success, error){
                exec(success, error, 'AppInfo', 'openDrivingTrajectory', [data.currentDayDatas, data.index]);
              },
              oneTrajectoryData: function(data, success, error){
                exec(success, error, 'AppInfo', 'oneTrajectoryData', [data.routeData, data.index, data.carDevice]);
              },
               
               getCarError: function(data, success, error){
               exec(success, error, 'AppInfo', 'getCarError', [data.data]);
               },
               
               refreshCarLocationView:function(data, success, error)
               {
               exec(success || function(){}, error || function(){}, 'AppInfo', 'refreshCarLocationView', [data]);
               },
               
               getFenceDatas:function(data, success, error)
               {
               exec(success || function(){}, error || function(){}, 'AppInfo', 'getFenceDatas', [data]);
               },
               
               fenceList:function(data, success, error)
               {
               exec(success || function(){}, error || function(){}, 'AppInfo', 'fenceList', [data]);
               },
               
               showConfirmDilaog:function()
               {
               exec(function(){}, function(){}, 'AppInfo', 'showConfirmDilaog', []);
               },
               
               sendAuthcode:function()
               {
               exec(function(){}, function(){}, 'AppInfo', 'sendAuthcode', []);
               },
               
               updateStateCarLocationView:function(data, success, error)
               {
               exec(success || function(){}, error || function(){}, 'AppInfo', 'updateStateCarLocationView', [data]);
               
               },
               showCarLocationViewLoading:function()
               {
                    exec(function(){}, function(){}, 'AppInfo', 'showCarLocationViewLoading', []);
               },
               stopCarLocationViewLoading:function()
               {
               exec(function(){}, function(){}, 'AppInfo', 'stopCarLocationViewLoading', []);
               },
               showPinDialog:function()
               {
               exec(function(){}, function(){}, 'AppInfo', 'showPinDialog', []);
               },
               showStatus:function(type, message)
               {
               var args = [type];
               if(typeof message == "string")
               {
                    args.push(message);
               }
               exec(function(){}, function(){}, 'AppInfo', 'showStatus', args);
               },
               
               LoginIM: function(data, success, error){
               exec(success, error, 'AppInfo', 'LoginIM', [data]);
               },
               
               joinTeam: function(data, success, error){
               exec(success, error, 'AppInfo', 'joinTeam', [data]);
               },
               
               createTeamSuccess: function(data, success, error){
               exec(success, error, 'AppInfo', 'createTeamSuccess', [data.data]);
               },
               
               quitTeam: function(data, success, error){
               exec(success, error, 'AppInfo', 'quitTeam', []);
               },
               
               removeTeam: function(data, success, error){
               exec(success, error, 'AppInfo', 'removeTeam', []);
               },
               
               updateTeam: function(data, success, error){
               exec(success, error, 'AppInfo', 'updateTeam', []);
               },
               
               openTeamTravel:function()
               {
               exec(function(){}, function(){}, 'AppInfo', 'openTeamTravel', []);
               },
               
               popToRootView:function()
               {
               exec(function(){}, function(){}, 'AppInfo', 'popToRootView', []);
               },
               
               getAllTeamMember: function(data, success, error){
               exec(success, error, 'AppInfo', 'getAllTeamMember', [data.data]);
               },
               
               createShare: function(data, success, error){
               exec(success, error, 'AppInfo', 'createShare', [data]);
               },
               
               updateImageCode: function(data, success, error){
               exec(success, error, 'AppInfo', 'updateImageCode', [data]);
               },
               fileList: function(success, error){
               exec(success, error, 'AppInfo', 'fileList', []);
               },
               openPdf: function(data, success, error){
               exec(success, error, 'AppInfo', 'openPdf', [data]);
               },
               changePDFName: function(data, success, error){
               exec(success, error, 'AppInfo', 'changePDFName', [data]);
               },
               isWifi: function(success, error){
               exec(success, error, 'AppInfo', 'isWifi', []);
               },
               getUniqueId: function(success, error){
               exec(success, error, 'AppInfo', 'getUniqueId', []);
               }
               ,
               fenceIdSuccess: function(data, success, error){
               exec(success, error, 'AppInfo', 'fenceIdSuccess', [data]);
               }

};

});
