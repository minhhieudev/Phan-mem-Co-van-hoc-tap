(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f323e684"],{"20a5":function(t,e,n){"use strict";n("82d4")},"3ca4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{ref:"questionContainer",staticClass:"question my-2 p-3 mx-0",attrs:{id:t.id},on:{click:function(e){return t.openDetailQuestion(e)}}},[e("div",{staticClass:"info"},[e("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[e("el-avatar",{attrs:{size:t.avatarSize,src:t.avatarUrl}}),e("div",{staticStyle:{display:"flex","flex-direction":"column"}},[e("span",{staticClass:"author"},[t._v(t._s(t.user))]),e("span",{staticClass:"date"},[t._v(t._s(t.createdAt))])])],1),t._id===this.$store.getters.user._id?e("el-dropdown",{on:{command:t.handleDropdownCommand,click:function(t){t.stopPropagation()}}},[e("span",{staticClass:"el-dropdown-link"},[e("i",{staticClass:"el-icon-more",on:{click:function(t){t.stopPropagation()}}})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t.status?t._e():e("el-dropdown-item",{attrs:{icon:"el-icon-edit",command:"edit"}},[t._v("\n            Sửa\n          ")]),e("el-dropdown-item",{attrs:{icon:"el-icon-delete",command:"delete"}},[t._v("Xoá bài")])],1)],1):t._e()],1),e("div",{staticClass:"title"},[t._v("\n      [Câu hỏi] "+t._s(t.title)+"\n    ")]),t.showFullContent?e("div",{staticClass:"content"},[e("div",{domProps:{innerHTML:t._s(t.formattedContent)}}),t.content.length>t.maxContentLength?e("div",{staticClass:"toggle-button-full-content",on:{click:function(e){return e.stopPropagation(),t.toggleContent.apply(null,arguments)}}},[t._v("\n        "+t._s(t.showFullContent?"Thu gọn":"xem thêm")+"\n      ")]):t._e()]):e("div",{staticClass:"content"},[e("div",{domProps:{innerHTML:t._s(t.formattedTruncatedContent)}}),t.content.length>t.maxContentLength?e("div",{staticClass:"toggle-button-truncated-content",on:{click:t.toggleContent}},[t._v("\n        "+t._s(t.showFullContent?"Thu gọn":"xem thêm")+"\n      ")]):t._e()]),e("div",{staticClass:"actions"},[e("div",{staticClass:"like-container"},[e("i",{staticClass:"fa fa-heart-o",attrs:{"aria-hidden":"true"},on:{click:function(e){return e.stopPropagation(),t.likeQuestion.apply(null,arguments)}}}),e("span",{staticClass:"likes"},[t._v(t._s(t.likesCount))])]),e("div",{staticClass:"comment-container"},[e("el-icon",{staticClass:"el-icon-chat-dot-square",staticStyle:{color:"rgb(24, 61, 228)"}}),e("span",{staticClass:"comments"},[t._v(t._s(t.comments))])],1)]),e("div",{staticClass:"reply-container"},[e("div",{staticClass:"avatar"},[e("el-avatar",{attrs:{size:t.avatarSize,src:this.$store.getters.currentUser.avatarUrl}})],1),e("div",{staticClass:"input-box"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.replyText,expression:"replyText"}],staticClass:"reply-input",attrs:{placeholder:"Nhập phản hồi của bạn..."},domProps:{value:t.replyText},on:{input:[function(e){e.target.composing||(t.replyText=e.target.value)},t.onReplyInputChange]}})]),e("div",{staticClass:"send-button mr-3"},[e("i",{staticClass:"fa fa-paper-plane",staticStyle:{color:"rgb(22, 77, 228)"},attrs:{"aria-hidden":"true"},on:{click:t.sendReply}})])])]),e("detailQuestionVue",{ref:"childRef",attrs:{id:t.id,title:t.title,content:t.content,_id:t._id,avatarUrl:t.avatarUrl,user:t.user,createdAt:t.createdAt,likes:t.likes,comments:t.comments}})],1)},a=[],s=(n("4f37"),n("96cf"),n("1da1")),o=(n("a481"),n("c5f6"),n("188b")),r=n("b166"),c=n("2ac8"),l={props:{title:String,content:String,_id:String,id:String,user:String,status:Boolean,createdAt:String,avatarUrl:String,likes:Number,comments:Number},data:function(){return{showFullContent:!1,maxContentLength:350,showPopup:!1,replyText:"",isInviteMemberVisible:!1,likesCount:0}},computed:{avatarSize:function(){return"small"},formattedCreatedAt:function(){return this.createdAt?this.formatDate(new Date(this.createdAt)):""},formattedContent:function(){return this.content.replace(/\n/g,"<br>")},formattedTruncatedContent:function(){var t=this.truncatedContent.replace(/\n/g,"<br>");return t},truncatedContent:function(){return this.content.length>this.maxContentLength?this.content.slice(0,this.maxContentLength)+"...":this.content}},components:{detailQuestionVue:o["default"]},created:function(){this.likesCount=this.likes},methods:{editQuestion:function(){this.$emit("edit",{id:this.id,title:this.title,content:this.content,_id:this._id})},formatDate:function(t){return t?Object(r["a"])(t,"dd/MM/yyyy HH:mm"):""},likeQuestion:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.likesCount++,t.prev=1,t.next=4,Object(c["e"])(this.id);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),console.error("Lỗi khi cập nhật lượt thích: ",t.t0);case 9:case"end":return t.stop()}}),t,this,[[1,6]])})));function e(){return t.apply(this,arguments)}return e}(),toggleContent:function(){this.showFullContent=!this.showFullContent},openDetailQuestion:function(t){t.stopPropagation(),this.$refs.childRef.childFunction()},onReplyInputChange:function(){console.log("123")},sendReply:function(){""!==this.replyText.trim()&&(this.replyText="")},handleDropdownCommand:function(t){"edit"===t?this.editQuestion():"delete"===t&&this.confirmDelete()},confirmDelete:function(){var t=this;this.$confirm("Xác nhận xóa","Cảnh báo",{confirmButtonText:"Xóa",type:"warning"}).then((function(){Object(c["b"])(t.id).then((function(e){var n=e.data;n.success&&t.$emit("pinnedStatusUpdated")})).finally((function(){t.$wrLoading(!1)}))})).catch()},toggleEdit:function(){}}},d=l,u=(n("20a5"),n("0c7c")),p=Object(u["a"])(d,i,a,!1,null,"29527cc2",null);e["default"]=p.exports},"82d4":function(t,e,n){}}]);