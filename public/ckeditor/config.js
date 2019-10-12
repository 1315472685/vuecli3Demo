/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
  // editor.plugins.detectConflict( 'image', [ 'image2', 'easyimage' ] );
  config.font_names = '微软雅黑;宋体;新宋体;黑体;隶书;幼圆;楷体_GB2312;仿宋_GB2312;方正舒体;方正姚体;华文隶书;华文新魏;华文行楷;sans-serif;Arial;Comic Sans MS;Courier New;Tahoma;Times New  Roman;Verdana;'

  // Define changes to default configuration here.
  // For complete reference see:
  // https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html
  // The toolbar groups arrangement, optimized for two toolbar rows.
  config.disallowedContent = 'img{width,height};img[width,height]'
  config.language = 'zh-cn'// 界面语言，默认为 'en de zh-cn'
  config.image_previewText = ' '/* 去掉图片预览框的文字 */
  config.width = '100%'// 设置宽高
  config.height = 500// 设置宽高
  config.filebrowserImageUploadUrl = 'http://api-dev.zmjubao.com/api/upload-file'// 上传图片窗口用到的接口
  // config.filebrowserUploadUrl = 'https://36446.cke-cs.com/easyimage/upload/'// 上传图片窗口用到的接口
  config.removeDialogTabs = 'image:advanced;link:advanced' // 使上传图片弹窗出现对应的“上传”tab标签
  // 添加颜色
  config.colorButton_colors = '000,800000,8B4513,2F4F4F,008080,000080,4B0082,696969,' + 'B22222,A52A2A,DAA520,006400,40E0D0,0000CD,800080,808080,' + 'F00,FF8C00,FFD700,008000,0FF,00F,EE82EE,A9A9A9,' + 'FFA07A,FFA500,FFFF00,00FF00,AFEEEE,ADD8E6,DDA0DD,D3D3D3,' + 'FFF0F5,FAEBD7,FFFFE0,F0FFF0,F0FFFF,F0F8FF,E6E6FA,FFF'
  config.extraPlugins = 'uploadimage,image2,colorbutton,panelbutton,floatpanel'// uploadimage粘贴图片时用得到,colorbutton,panelbutton,floatpanel修改字体颜色以及背景
  config.removePlugins = 'image'
  // config.uploadUrl = 'https://36446.cke-cs.com/easyimage/upload/'
  // config.cloudServices_uploadUrl = 'https://36446.cke-cs.com/easyimage/upload/'
  // config.cloudServices_tokenUrl = 'https://36446.cke-cs.com/token/dev/mDF4jFbuhIwcHpYeoO6xYn1JRxvtwPspeA86Fbo459OG9ceVOj6WWBw3leK6'
  // 编辑器样式，有三种：'kama'（默认）、'office2003'、'v2'
  // config.skin = 'office2003'
  // 背景颜色
  // config.uiColor = '#fff'

  /* 开启工具栏“图像”中文件上传功能，后面的url为图片上传要指向的的action或servlet */
  // config.filebrowserImageUploadUrl = '/blog/uploadEditorImage'
  // config.filebrowserImageUploadUrl = '/back/shopinfo/uploadFile'

  config.toolbarGroups = [
    // { name: 'clipboard', groups: ['clipboard', 'undo'] }, // world复制粘贴
    { name: 'editing', groups: ['find', 'selection', 'spellchecker'] }, // 拼音
    { name: 'links' },
    { name: 'insert', groups: ['Image', 'Table'] }, // 图片 items: ['Image', 'Table']
    { name: 'forms' },
    { name: 'tools', groups: ['Maximize'] }, // 全屏
    { name: 'document', groups: ['mode', 'document', 'doctools'] }, // 源码
    // { name: 'others' },
    // '/', // 通过加入'/'，正如在上面看到的，可以在工具栏中强制断行（row-break）。
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] }, // 下划线加粗中划线斜体
    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] }, // 列表缩进
    { name: 'styles' }, // 样式格式
    { name: 'colors' },
    { name: 'about' }// 问号
  ]
  // 是否开启 图片和表格 的改变大小的功能 config.disableObjectResizing = true;
  // config.disableObjectResizing = true // 默认为开启

  // config.toolbarCanCollapse = true// 工具栏是否可以被收缩
  // config.removeButtons = 'Underline,Subscript,Superscript'// 移除的按钮.

  // Set the most common block elements.
  config.format_tags = 'p;h1;h2;h3;pre'

  // 取消 “拖拽以改变尺寸”功能 plugins/resize/plugin.js
  // config.resize_enabled = true
}
